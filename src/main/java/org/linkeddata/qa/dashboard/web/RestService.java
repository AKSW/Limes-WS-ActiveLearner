package org.linkeddata.qa.dashboard.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import de.uni_leipzig.simba.io.ConfigReader;


/**
 * Jersey resource for the Active Learnen Backend
 * 
 * @author Claus Stadler <cstadler@informatik.uni-leipzig.de>
 *
 */
@Path("/service")
//@Produces("application/rdf+xml")
//@Produces("text/plain")
public class RestService {

	
	/**
	 *  
	 * @param context The servlet context. In case you need it. It took me a while to figure out how to get access to this object ;)
	 */
	public RestService(@Context ServletContext context) {
	}
	

	@POST
	@Path("/learn-links")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDetailData(@FormParam("linkset") String linkset)
			throws Exception
	{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("id", linkset);
		
		Gson gson = new Gson();
		String result = gson.toJson(map);
		
		return result;
	}

	
	@GET
	@Path("/projects")
	@Produces(MediaType.APPLICATION_JSON)
	public String listProjects()
			throws Exception
	{
		ConfigReader reader = new ConfigReader();
		// Of course... config reader cannot read from an InputStream - I'll check
		// if I can add this to the LIMES source
		//reader.validateAndRead(input, filePath);
		
		
		
		//Map<String, String> map = new HashMap<String, String>();
		//map.put("projectA", "foo");
		List<String> projects = new ArrayList<String>();
		projects.add("dbpedia-linkedgeodata");
		
		Gson gson = new Gson();
		String result = gson.toJson(projects);
		
		return result;
	}
}

