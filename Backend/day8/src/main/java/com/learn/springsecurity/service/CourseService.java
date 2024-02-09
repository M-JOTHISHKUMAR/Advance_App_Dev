package com.learn.springsecurity.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.springsecurity.model.Courses;
import com.learn.springsecurity.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public Courses addCourse(Courses course) {
        return courseRepository.save(course);
    }

    public List<Courses> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Courses> getCourseById(int id) {
        return courseRepository.findById(id);
    }

    public void deleteCourse(int id) {
        courseRepository.deleteById(id);
    }
}

