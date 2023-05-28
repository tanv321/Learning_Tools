package com.java_exercises;

import io.github.cdimascio.dotenv.Dotenv;


import java.io.IOException;

import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.core5.http.ParseException;
import org.apache.hc.core5.http.io.entity.EntityUtils;
 
import org.json.JSONObject;


import java.util.Scanner;

public class WeatherApp {

    /* Create a Java class called "WeatherApp" that represents a weather application. 
    The class should have methods to retrieve weather information based on a location, 
    display current weather conditions, and provide forecasts for upcoming days. 
    Enhance the class to include features such as real-time weather updates, weather alerts, 
    integration with external weather APIs, and supporting multiple locations. */
    
    public static void main(String[] args){
        String envPath = "C:/Users/alamt/Documents/Programming_Projects";
        Dotenv dotenv = Dotenv.configure()
        .directory(envPath)
        .ignoreIfMalformed() // 
        .ignoreIfMissing()
        .load();

        String WeatherAPIKey = dotenv.get("API_KEY");
        String infoRetrieve = "http://api.weatherapi.com/v1/current.json?key="+WeatherAPIKey+"&q=";
        Scanner location = new Scanner(System.in);
        System.out.println("what location weather would you like to view?");
        String locationName = location.nextLine();
        infoRetrieve+=locationName;
        location.close();

        String result = get(infoRetrieve);
        
        System.out.println(result);
        System.out.println("Results below");



        String country = extractCountry(result);
        System.out.println("Country: " + country);

        
        
        
    }


    private static String extractCountry(String json) {
        JSONObject jsonObject = new JSONObject(json);
        JSONObject locationObject = jsonObject.getJSONObject("location");
        return locationObject.getString("country");
    }
    public static String get(String url) {
        String resultContent = null;
        HttpGet httpGet = new HttpGet(url);
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            try (CloseableHttpResponse response = httpclient.execute(httpGet)) {
                // Get status code
                System.out.println(response.getVersion()); // HTTP/1.1
                System.out.println(response.getCode()); // 200
                System.out.println(response.getReasonPhrase()); // OK
                HttpEntity entity = response.getEntity();
                // Get response information
                resultContent = EntityUtils.toString(entity);

            }
        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
        return resultContent;
    }
}
