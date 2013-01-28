package de.uni_leipzig.simba.limes.web.active_learner.learner;

import java.util.*;

import de.uni_leipzig.simba.data.Mapping;
import de.uni_leipzig.simba.io.ConfigReader;
import de.uni_leipzig.simba.genetics.core.Metric;
import de.uni_leipzig.simba.genetics.util.PropertyMapping;


/**
 * helper class for the active- and batchlearner
 * contains the helper methods for construction und communication
 */
public class Learner {

	/**
	 * helper method to create a HashMap
	 * @param populationSize
	 * @param generations
	 * @param mutationRate
	 * @param preserveFittest
	 * @param propMap
	 * @param trainingDataSize
	 * @param granularity
	 * @param configReader
	 * @return HashMap, who contains the informations
	 */
	public HashMap<String, Object> getParamter( int populationSize, int generations, float mutationRate,
												boolean preserveFittest, PropertyMapping propMap, int trainingDataSize,
												int granularity, ConfigReader configReader) {

		HashMap<String, Object> parameter = new HashMap<String, Object>();
		parameter.put("populationSize", populationSize);
		parameter.put("generations", generations);
		parameter.put("mutationRate", mutationRate);
		parameter.put("preserveFittest", preserveFittest);
		parameter.put("propertyMapping", propMap);
		parameter.put("trainingDataSize", trainingDataSize);
		parameter.put("granularity", granularity);
		parameter.put("config", configReader);
		return parameter;
	}
	
	/**
	 * create a PropertyMapping from the properties of the LinkSpec
	 * @param fileName Name of the LinkSpec file
	 * @return PropertyMapping of the LinkSpec
	 */
	public PropertyMapping getPropMap(String fileName) {
	
		ConfigReader cR = new ConfigReader();
		cR.validateAndRead(fileName);
		PropertyMapping propMapping = new PropertyMapping();
		
		int size = Math.max(cR.sourceInfo.properties.size(), cR.targetInfo.properties.size());	
		for(int i = 0; i < size; i++) {
			propMapping.addStringPropertyMatch(cR.sourceInfo.properties.get(i), cR.targetInfo.properties.get(i));
		}
		
		return propMapping;
	}
	
	/**
	 * helper method for similarity <-> boolean
	 * @param similarity true = is a match, false = no match
	 * @return 
	 */
	public double getSimilarityFromBoolean(boolean similarity) {
		if(similarity == true) {
			return 1d;
		} else {
			return 0d;
		}
	}
	
	/**
	 * calculate the size of a mapping
	 * @param mapping
	 * @return total number of mappings -> size
	 */
    public int getMappingSize(Mapping mapping) {
        int size = 0;
        for(String s: mapping.map.keySet())
        {
            HashMap m = mapping.map.get(s);
            size = size + m.size();
        }
        return size;
    }
	
	/**
	 * >helper method for controller<->model communication
	 * build a mapping from two input strings
	 * @param uris stringarray with matchings
	 * @param isMapping booleanarray with the information if a matching is good or not
	 * @return improved mapping - userdata
	 */
	public Mapping createMapping(String[] uris, boolean[] isMapping) {
		if(uris.length != isMapping.length) {
			return null;
		}
		Mapping mapping = new Mapping();
		for(int i = 0; i < uris.length; i++) {
			String[] match = uris[i].split("\\s");
			mapping.add( match[0], match[1], getSimilarityFromBoolean(isMapping[i]) );
		}
		return mapping;
	}
	
	/**
	 * >helper method for controller<->model communication
	 * modified toString method for mappings
	 * @param mapping normal mapping
	 * @return stringarray:  { "uri1_1 uri1_2", "uri2_1 uri2_2", ... }
	 */
	public String[] mappingString(Mapping mapping) {
		if(mapping == null || getMappingSize(mapping) == 0) {
			return null;
		}
		String[] strmap = new String[getMappingSize(mapping)];
		int counter = 0;
		for (String key : mapping.map.keySet()) {
            for (String value : mapping.map.get(key).keySet()) {
				strmap[counter] = key + " " + value;
				counter++;
            }
        }
        return strmap;
	}
	
	/**
	 * >helper method for controller<->model communication
	 * modified toString method for metrics
	 * @metric the metric
	 * @return metric string -> expression " " threshold
	 */
	public String metricString(Metric metric) {
		String met = metric.getExpression() + " " + metric.getThreshold();
		return met;
	}
}
	
	
	
	
	
	
	
	
	
	