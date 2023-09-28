package com.loiane.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loiane.crudspring.domain.model.Course;
import com.loiane.crudspring.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
	
	private final CourseService courseService;
	
	public CourseController(CourseService courseService) {
		this.courseService = courseService;
	}


	@GetMapping
	public List<Course> list() {
		return courseService.listAll();
	}
}
