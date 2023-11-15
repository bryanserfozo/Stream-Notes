package com.bofa.controllers;

import com.bofa.models.User;
import com.bofa.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userServ;

    @Autowired
    public UserController(UserService userServ) {
        this.userServ = userServ;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User u){
        User returnedUser = null;
        if (u.getPassword() != null && u.getUsername() != null){
            returnedUser = userServ.login(u.getUsername(), u.getPassword());
        }

        if (returnedUser != null){
            ResponseCookie usernameCookie = ResponseCookie.from("username", returnedUser.getUsername())
                    .httpOnly(true)
                    .path("/")
                    .maxAge(600)
                    .build();

            return ResponseEntity.ok()
                    .header(HttpHeaders.SET_COOKIE, usernameCookie.toString())
                    .body(returnedUser);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
