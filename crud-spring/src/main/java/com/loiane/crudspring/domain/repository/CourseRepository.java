package com.loiane.crudspring.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loiane.crudspring.domain.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
