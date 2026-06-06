package com.example.corndrop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class CorndropApplication {
    public static void main(String[] args) {
        SpringApplication.run(CorndropApplication.class, args);
    }
}
