package com.taylordoesmyhair.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taylordoesmyhair.app.data.model.about.About;
import com.taylordoesmyhair.app.data.model.about.Day;

@RestController
public class AboutController {

	/* Dummy Data Expected to be in DB. */
	private static final String[] days = { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
	private static final String[] starts = { "0800", "0800", "0800", "0800", "0800", "0800", "0000" };
	private static final String[] ends = { "1700", "1700", "1700", "1700", "1700", "1700", "0000" };
	private static final String message = "This is a test message.";
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/about")
	public ResponseEntity<About> getHomePageInfo() {
		// TODO: Call DB and use proper http status code
		
		List<Day> dayList = new ArrayList<Day>();

		for (int i = 0; i < 7; i++) {
			dayList.add(new Day(days[i], starts[i], ends[i]));
		}

		return ResponseEntity.ok(new About(message, dayList));
	}
}
