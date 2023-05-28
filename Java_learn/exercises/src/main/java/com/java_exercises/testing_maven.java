package com.java_exercises;
import org.apache.commons.lang3.StringUtils;

public class testing_maven {
    public static void main(String[] args) {
        String text = "Hello, world!";
        System.out.println("Original text: " + text);
        
        String reversedText = StringUtils.reverse(text);
        System.out.println("Reversed text: " + reversedText);
        
        int wordCount = StringUtils.countMatches(text, " ");
        System.out.println("Word count: " + wordCount);
    }
}