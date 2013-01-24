package de.uni_leipzig.simba.limes.web.active_learner;
 
import java.util.*; 

import org.jgap.InvalidConfigurationException;
 
import de.uni_leipzig.simba.data.Mapping;
import de.uni_leipzig.simba.io.ConfigReader;
import de.uni_leipzig.simba.genetics.core.Metric;
import de.uni_leipzig.simba.genetics.util.PropertyMapping;
import de.uni_leipzig.simba.genetics.learner.LinkSpecificationLearner;
import de.uni_leipzig.simba.genetics.learner.LinkSpecificationLearnerFactory;

import java.util.Map.Entry;
import de.uni_leipzig.simba.learning.oracle.oracle.Oracle;
import de.uni_leipzig.simba.learning.oracle.oracle.OracleFactory;
import de.uni_leipzig.simba.learning.oracle.oracle.SimpleOracle;

/**
 * ActiveLearner - the learing will be divided into 3 parts: init - cycle - metric_output
 * e.g. 10 cyles = 1: init; 2-9: cycle; 10: metric_output
 * each part has its own methode (TODO improve?)
 * -> initialisation part is optional (if the user has his or her own set of matches)
 */

public class ActiveLearner extends Learner { 

	/**
	 * initialisation method for learing
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @return mapping from the learner
	 */
	public Mapping startActiveLearning(	int populationSize, int generations, float mutationRate,
										boolean preserveFittest, int trainingDataSize, int granularity,
										String fileName) {
		
		//preparation
		ConfigReader cR = new ConfigReader();
		cR.validateAndRead(fileName);
		PropertyMapping propMap = getPropMap(fileName);	//imp
		LinkSpecificationLearner learner = LinkSpecificationLearnerFactory.getLinkSpecificationLearner(LinkSpecificationLearnerFactory.ACTIVE_LEARNER);
		HashMap<String, Object> param = getParamter(populationSize, generations, mutationRate, preserveFittest,
													propMap, trainingDataSize, granularity, cR);
													
		//execute
		try {
			learner.init(cR.getSourceInfo(), cR.getTargetInfo(), param);
			Mapping answer = learner.learn(new Mapping());
			return answer;
		} catch (InvalidConfigurationException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * primary method for cycling
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @param matches checked matches from the user
	 * @return mapping from the learn-cylce
	 */
	public Mapping cycleFromActiveLearning(	int populationSize, int generations, float mutationRate,
											boolean preserveFittest, int trainingDataSize, int granularity,
											String fileName, Mapping matches) {

		//preparation
		ConfigReader cR = new ConfigReader();
		cR.validateAndRead(fileName);
		PropertyMapping propMap = getPropMap(fileName);	//imp
		LinkSpecificationLearner learner = LinkSpecificationLearnerFactory.getLinkSpecificationLearner(LinkSpecificationLearnerFactory.ACTIVE_LEARNER);
		HashMap<String, Object> param = getParamter(populationSize, generations, mutationRate, preserveFittest,
													propMap, trainingDataSize, granularity, cR);
													
		//execute
		try {
			learner.init(cR.getSourceInfo(), cR.getTargetInfo(), param);
			Mapping answer = learner.learn(matches);
			return answer;
		} catch (InvalidConfigurationException e) {
			e.printStackTrace();
			return null;
		}
	}

	/**
	 * primary method for learing
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @param matches checked matches from the user
	 * @return metric from the learner
	 */
	public Metric getMetricFromActiveLearning(	int populationSize, int generations, float mutationRate,
												boolean preserveFittest, int trainingDataSize, int granularity,
												String fileName, Mapping matches) {

		//preparation
		ConfigReader cR = new ConfigReader();
		cR.validateAndRead(fileName);
		PropertyMapping propMap = getPropMap(fileName);	//imp
		LinkSpecificationLearner learner = LinkSpecificationLearnerFactory.getLinkSpecificationLearner(LinkSpecificationLearnerFactory.ACTIVE_LEARNER);
		HashMap<String, Object> param = getParamter(populationSize, generations, mutationRate, preserveFittest,
													propMap, trainingDataSize, granularity, cR);
													
		//execute
		try {
			learner.init(cR.getSourceInfo(), cR.getTargetInfo(), param);
			Mapping answer = learner.learn(matches);
			Metric answerMetric = learner.terminate();
			return answerMetric;
		} catch (InvalidConfigurationException e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
	/* for controller-model communication*/
	
	/**
	 * initialisation method for learing
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @return mapping as stringarray for controller
	 */
	public String[] initActiveLearner(	int populationSize, int generations, float mutationRate,
										boolean preserveFittest, int trainingDataSize, int granularity,
										String fileName) {
		
		//getting matches
		Mapping matches = startActiveLearning(populationSize, generations, mutationRate, preserveFittest,
											  trainingDataSize, granularity, fileName);
		
		//Mapping to String[]
		if(matches != null) {
			String[] strarr_matches = mappingString(matches);
			return strarr_matches;
		} else {
			String[] strarr_matches = { "Error beim Lernen-Active" };
			return strarr_matches;
		}
	}
	
	/**
	 * Cycling method for learning
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @return cycle-mapping as stringarray for controller
	 */
	public String[] getCycleMappingActiveLearner(	int populationSize, int generations, float mutationRate,
													boolean preserveFittest, int trainingDataSize, int granularity,
													String fileName, Mapping matches) {
		
		//getting cycle-mapping
		Mapping map = cycleFromActiveLearning(	populationSize, generations, mutationRate, preserveFittest, 
												trainingDataSize, granularity, fileName, matches);
		
		//Mapping to String[]
		if(map != null) {
			String[] strarr_matches = mappingString(map);
			return strarr_matches;
		} else {			
			String[] strarr_matches = { "Fehler bei Mapping-Cycle-Active" };
			return strarr_matches;
		}
	}
	
	/**
	 * This method will return blabla
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param trainingDataSize
	 * @param granularity
	 * @param fileName
	 * @return metric as string for controller
	 */
	public String getMetricActiveLearner(int populationSize, int generations, float mutationRate,
										boolean preserveFittest, int trainingDataSize, int granularity,
										String fileName, Mapping matches) {
		
		//getting metric
		Metric metric = getMetricFromActiveLearning(populationSize, generations, mutationRate, preserveFittest, 
													trainingDataSize, granularity, fileName, matches);
		
		//Metric to String
		if(metric != null) {
			String metric_str = metricString(metric);
			return metric_str;
		} else {
			return "Fehler bei Metric-Active";
		}
	}
}