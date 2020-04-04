package com.taylordoesmyhair.app.data.model.about;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class About {
	
	@JsonProperty("message")
	private String message;
	
	@JsonProperty("hours")
	private List<Day> hours;

	public About(String message, List<Day> hours) {
		super();
		this.message = message;
		this.hours = hours;
	}
}
