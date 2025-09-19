package com.saasrh.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author
 **/
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "Backend up ✅";
    }
}
