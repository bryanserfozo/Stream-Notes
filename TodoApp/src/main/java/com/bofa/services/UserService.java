package com.bofa.services;

import com.bofa.repos.CourseRepository;
import com.bofa.repos.UserRepository;
import com.bofa.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepo;

    private final CourseRepository courseRepo;


    @Autowired
    public UserService(UserRepository userRepo, CourseRepository courseRepo) {
        this.userRepo = userRepo;
        this.courseRepo = courseRepo;
    }

    public User login(String username, String password) {

        Optional<User> user = userRepo.findUserByUsername(username);
        if (user.isPresent()) {
            if (user.get().getPassword().equals(password)) {
                return user.get();
            }
        }
        return null;

    }

    public User register(User user){
        User savedUser = userRepo.save(user);
        return savedUser;
    }

    public void addCourseToUser(String username, int courseId){
        User u = userRepo.findUserByUsername(username).get();

        System.out.println(u.getCourses());
        u.getCourses().add(courseRepo.findById(courseId).get());
        userRepo.save(u);
    }

    public void removeCourseFromUser(String username, int courseId){
        User u = userRepo.findUserByUsername(username).get();

        System.out.println(u.getCourses());
        u.getCourses().remove(courseRepo.findById(courseId).get());
        userRepo.save(u);
    }



}
