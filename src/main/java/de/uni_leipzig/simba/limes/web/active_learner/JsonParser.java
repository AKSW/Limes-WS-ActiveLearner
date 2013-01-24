package de.uni_leipzig.simba.limes.web.active_learner;

import java.util.HashMap;
import java.util.Map;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import de.uni_leipzig.simba.data.Mapping;

public class JsonParser {

	
	public static HashMap<String,Object> parseJSONToJava(String jsonString) throws ParseException{
		JSONParser parser = new JSONParser();
		HashMap<String,Object> map = new HashMap<String,Object>();
		JSONObject object= (JSONObject) parser.parse(jsonString);
		
		for (Object o :object.keySet()){
			if (!(object.get(o) instanceof JSONObject))
				map.put(o.toString(), object.get(o));
			else{
				if (object.get(o)!=null){
					
					map.put(o.toString(), innerMap((JSONObject)object.get(o)));
				}else{
					map.put(o.toString(),new HashMap<String,String>());
				}
			}
		}
		return map;
	}
	
	public static String parseJavaToJSON(Map<String,Object> map){
		JSONObject jsonO = new JSONObject ();
		if (map ==null){
			return jsonO.toJSONString();
		}else{
			jsonO.putAll(map);
			return jsonO.toJSONString();
		}
	}
	
	private static  HashMap<String,String> innerMap (JSONObject obj){
		HashMap<String,String> map = new HashMap<String,String>();
		
		for (Object o :obj.keySet()){
				
				map.put(o.toString(), (obj.get(o)==null)?"":obj.get(o).toString());	
		}
		return map;
	}
	
	/**
	 * Parses a JSON string to a de.uni_leipzig.simba.data.Mapping map
	 * @param jsonString
	 * @return Map<String,HashMap<String, Double>>
	 * @throws ParseException
	 * @author christian
	 */
	public static HashMap<String,HashMap<String, Double>> parseJSONToMapping(String jsonString) throws ParseException{
		JSONParser parser = new JSONParser();
		HashMap<String, HashMap<String, Double>> map = new HashMap<String, HashMap<String, Double>>();
		JSONObject object= (JSONObject) parser.parse(jsonString);
		
		for (Object o :object.keySet()){
			if (!(object.get(o) instanceof JSONObject))
				map.put(o.toString(), (HashMap<String, Double>) object.get(o));
			else{
				if (object.get(o)!=null){
					
					map.put(o.toString(), innerMappingMap((JSONObject)object.get(o)));
				}else{
					map.put(o.toString(),new HashMap<String,Double>());
				}
			}
		}
		return map;
	}
	
	/**
	 * Returns the inner map of a JSON object which represents a de.uni_leipzig.simba.data.Mapping map
	 * @param obj JSON obj of the de.uni_leipzig.simba.data.Mapping map
	 * @return inner map from Map<String,HashMap<String, Double>>
	 * @author christian
	 */
	private static HashMap<String,Double> innerMappingMap (JSONObject obj){
		HashMap<String,Double> map = new HashMap<String,Double>();
		
		for (Object o :obj.keySet()){
				
				map.put(o.toString(), (obj.get(o)==null)?0.0:(Double)obj.get(o));	
		}
		return map;
	}	
	
	/**
	 * Returns a JSON string of a de.uni_leipzig.simba.data.Mapping map
	 * @param map of type Map<String,HashMap<String, Double>>
	 * @return JSON string of the parsed map
	 * @author christian
	 */
	public static String parseMappingToJSON(Map<String,HashMap<String, Double>> map){
		JSONObject jsonO = new JSONObject ();
		if (map ==null){
			return jsonO.toJSONString();
		}else{
			jsonO.putAll(map);
			return jsonO.toJSONString();
		}
		
	}

}
