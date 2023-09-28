package com.loiane.crudspring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loiane.crudspring.domain.model.Course;
import com.loiane.crudspring.domain.repository.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
	public List<Course> listAll() {
		return courseRepository.findAll();
	}
}
