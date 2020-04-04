package com.taylordoesmyhair.app.data.model.about;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.micrometer.core.instrument.util.StringUtils;

public class Day {

	@JsonProperty("dayOfWeek")
	private String dayOfWeek;

	@JsonProperty("startTime")
	private String startTime;

	@JsonProperty("endTime")
	private String end;

	@JsonProperty("isOpen")
	private boolean isOpen;

	public Day(String dayOfWeek, String startTime, String endTime) {
		super();
		this.dayOfWeek = dayOfWeek;
		this.startTime = formatMilitaryTime(startTime);
		this.end = formatMilitaryTime(endTime);
		this.isOpen = deduceOpenStatus(startTime, endTime);
	}

	/**
	 * Determines if the salon startTime and endTime are valid (not null) and
	 * that the hours of operation in a day are greater than 0 hours.
	 * 
	 * @param startTime String
	 * @param endTime       String
	 * @return <code>true</code> if the salon has valid hours during a given day,
	 *         <code>false</code> otherwise
	 */
	private boolean deduceOpenStatus(String startTime, String endTime) {

		if (StringUtils.isNotBlank(startTime) && StringUtils.isNotBlank(endTime) && startTime != endTime) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Convert military time to proper format.
	 * 
	 * @param startTime String
	 * @return String time ("hh:mm a"), <code>null</code> if invalid param
	 */
	private String formatMilitaryTime(String startTime) {
		String time;
		SimpleDateFormat sdf = new SimpleDateFormat("hh:mm a");

		try {
			time = sdf.format(new SimpleDateFormat("hhmm").parse(startTime));
		} catch (ParseException e) {

			return null;
		}
		return time;
	}
}
