package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import io.github.cdimascio.dotenv.Dotenv;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Value;
@SpringBootApplication
@RestController
public class DemoApplication {
    String envPath = "C:/Users/alamt/Documents/Programming_Projects/Spring+React";

    Dotenv dotenv = Dotenv.configure()
        .directory(envPath)
        .ignoreIfMalformed() // 
        .ignoreIfMissing()
        .load();
    
    String API_Gateway_URL = dotenv.get("API_GATEWAY");
    

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    
    @PostMapping("/upload")
    public Mono<String> handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException {


       

        String originalFilename = file.getOriginalFilename();
        String fileExtension = originalFilename != null ? originalFilename.substring(originalFilename.lastIndexOf(".")) : "";
        
        String  url = API_Gateway_URL+"/"+originalFilename+"."+fileExtension;
        Path tempFile = Files.createTempFile("upload", file.getOriginalFilename());
        Files.write(tempFile, file.getBytes());

        // Send the request
        return WebClient.create()
                .put()
                .uri(url)
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(BodyInserters.fromMultipartData("file", file.getResource()))
                .retrieve()
                .bodyToMono(String.class)
                .map(response -> {
                    // Delete the temporary file (optional)
                    try {
                        Files.delete(tempFile);
                    } catch (IOException ignored) {}

                    if (response.contains("Error")) {
                        return "Failed to upload file.";
                    } else {
                        return "File uploaded successfully.";
                    }
                });
    }
    


    // @GetMapping("/upload")
    // public String uploadPage() {
    //     return "Upload endpoint!";
    // }
    
    @GetMapping("/")
    public String home() {
        System.out.println(API_Gateway_URL);
        return "Spring Boot application is running!";
    }


	

}
