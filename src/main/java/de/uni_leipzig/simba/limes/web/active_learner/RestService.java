package de.uni_leipzig.simba.limes.web.active_learner;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.HashMap;
import javax.servlet.ServletContext;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;


import com.google.gson.Gson;

import de.uni_leipzig.simba.cache.HybridCache;
import de.uni_leipzig.simba.data.Mapping;
import de.uni_leipzig.simba.filter.LinearFilter;
import de.uni_leipzig.simba.io.ConfigReader;
import de.uni_leipzig.simba.io.KBInfo;
import de.uni_leipzig.simba.limes.web.active_learner.learner.ActiveLearner;
import de.uni_leipzig.simba.mapper.SetConstraintsMapper;
import de.uni_leipzig.simba.mapper.SetConstraintsMapperFactory;


/**
 * Jersey resource for the Active Learnen Backend
 * 
 * @author Claus Stadler <cstadler@informatik.uni-leipzig.de>
 *
 */
@Path("/service")
public class RestService {
	
	private Mapping result = null;
	private ActiveLearner al = null;
	private ConfigReader cr = null;
	
	// Defaults for genetic learner
	private int populationSize = 20;
	private int generations = 100;
	private float mutationRate = 0.5f;
	private boolean preserveFittest = true;
	private int trainingDataSize = 50;
	private int granularity = 2;
	private String filename = "";
	
	/**
	 *  Constructor
	 * @param context The servlet context. In case you need it. It took me a while to figure out how to get access to this object ;)
	 */
	public RestService(@Context ServletContext context) {
		al = new ActiveLearner();
	}	

	/**
	 * Relevant part of the LimesWebService project to initiate the calculation of a Link Mapping. It will store the result in the local variable "result".
	 * @param sourceInfo
	 * @param targetInfo
	 * @param metric
	 * @param accThreshold
	 * @param revThreshold
	 * @author christian
	 */
	private void calculateMapping (KBInfo sourceInfo, KBInfo targetInfo, String metric,Double accThreshold,Double revThreshold){
		System.out.println("begin calculation");
		if(sourceInfo.prefixes == null)
			sourceInfo.prefixes = new HashMap<String, String>();
		if(targetInfo.prefixes == null)
			targetInfo.prefixes = new HashMap<String, String>();
		
		HybridCache sC = HybridCache.getData(new File(System.getProperty("user.home")), sourceInfo);
		System.out.println("continue calculation");
		HybridCache tC = HybridCache.getData(new File(System.getProperty("user.home")), targetInfo);
		System.out.println("continue calculation2");
		SetConstraintsMapper sCM= SetConstraintsMapperFactory.getMapper("simple", sourceInfo, sourceInfo, sC, tC, new LinearFilter(), 2);
		System.out.println("finish calc");
		result = sCM.getLinks(metric, accThreshold);
		System.out.println("finished calculation");
	}
	
	/**
	 * Gets a Mapping for a link specification provided as content of a Limes XML spec file
	 * @param limesSpec provided as content of an Limes XML spec file
	 * @return the hashmap of the resulting Mapping
	 * @author christian
	 */
	@POST
	@Path("/getMapping")
	@Produces(MediaType.APPLICATION_JSON)
	public String getMapping(@FormParam("limesSpec") String limesSpec) {
		String limesXML = limesSpec;
		
		// Reading Limes file
		cr = new ConfigReader();
		try {
			filename = System.getProperty("user.home") + "/linkspec.xml";
			
			File file = new File(filename);
			if(file.exists()) {
				file.delete();
			}
			try {
				BufferedWriter schreiber = new BufferedWriter(new FileWriter(filename));
				schreiber.write(limesXML);
				schreiber.close();
			} catch(Exception e) {
				System.err.println("Error: " + e);
			}
			
			//bad...
			filename = "/home/hewuri/geolinkingspec.xml";
			
			if (!cr.validateAndRead(filename)) {
				throw new Exception("Could not successfully validate the Limes Spec XML file!");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		calculateMapping(cr.getSourceInfo(), cr.getTargetInfo(), cr.metricExpression, cr.acceptanceThreshold, cr.verificationThreshold);
		Gson gson = new Gson();
		String jss = gson.toJson(result.map);
		return jss;
	}

	
	/**
	 * Starts the learner by providing a hashmap of the updated Mapping (i.e. the evaluated Mapping) which doesn't contain false links 
	 * @param updatedMapping HashMap of the evaluated Mapping
	 * @return new Mapping after learning
	 * @author christian
	 */
	public String updateMapping(HashMap<String, HashMap<String, Double>> updatedMapping) {		
		Mapping newMapping = new Mapping();
		newMapping.map = updatedMapping;
		String[] funcres = al.getCycleMappingActiveLearner(populationSize, generations, mutationRate, preserveFittest, trainingDataSize, granularity, filename, newMapping);
		return new Gson().toJson(funcres);
	}
	
//	// Why do we need that?
//	public String getMetric(HashMap<String, HashMap<String, Double>> updatedMapping) {
//		Mapping newMapping = new Mapping();
//		newMapping.map = updatedMapping;
//		String funcres = al.getMetricActiveLearner(populationSize, generations, mutationRate, preserveFittest, trainingDataSize, granularity, filename, newMapping);
//		return new Gson().toJson(funcres);
//	}
}

