package com.taylordoesmyhair.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SalonServiceController {

	private String data = "{\r\n" + 
			"    \"hairServices\": [\r\n" + 
			"        {\r\n" + 
			"            \"serviceName\": \"Mens Cut\",\r\n" + 
			"            \"description\": \"A basic hair cut\",\r\n" + 
			"            \"cost\": \"25\"\r\n" + 
			"        },\r\n" + 
			"        {\r\n" + 
			"            \"serviceName\": \"Womens Cut\",\r\n" + 
			"            \"description\": \"A basic hair cut\",\r\n" + 
			"            \"cost\": \"35\"\r\n" + 
			"        }\r\n" + 
			"    ],\r\n" + 
			"    \"nailServices\": [\r\n" + 
			"        {\r\n" + 
			"            \"serviceName\": \"Nail Cut\",\r\n" + 
			"            \"description\": \"Cut and Paint\",\r\n" + 
			"            \"cost\": \"15\"\r\n" + 
			"        }\r\n" + 
			"    ],\r\n" + 
			"    \"colorServices\": [\r\n" + 
			"        {\r\n" + 
			"            \"serviceName\": \"Women Hair dye\",\r\n" + 
			"            \"description\": \"Go from lame to colorful\",\r\n" + 
			"            \"cost\": \"100\"\r\n" + 
			"        },\r\n" + 
			"        {\r\n" + 
			"            \"serviceName\": \"Mens Cut\",\r\n" + 
			"            \"description\": \"A basic hair cut\",\r\n" + 
			"            \"cost\": null\r\n" + 
			"        }\r\n" + 
			"    ]\r\n" + 
			"}";
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/services")
	public Object getServiceInfo() {
		return data;
	}
}
