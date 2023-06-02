package com.java_exercises;

/* # Exercise 6:
- Create a Java class called "FlightBookingSystem" that represents a flight booking system. 
The class should have methods to search for available flights, book flights for passengers, 
and display booking details. Enhance the class to include features such as seat selection, 
managing passenger information, handling flight cancellations or delays, and integrating
 with payment gateways for ticket purchases.*/
public class FlightBookingSystem {
 

    private String departure_city;
    private String destination_city;
    private String date_of_travel;
    private String arrival_time;
    private int flight_Number;
    private int seats;

    public FlightBookingSystem(String departure_city, String destination_city, String date_of_travel, String arrival_time, int flight_Number, int seats) {
        this.departure_city = departure_city;
        this.destination_city = destination_city;
        this.date_of_travel = date_of_travel;
        this.arrival_time = arrival_time;
        this.flight_Number = flight_Number;
        this.seats = seats;

    }




    
    public static void main(String[] args){
        FlightBookingSystem x = new FlightBookingSystem("philly", "jersey", "may-4-2023", "may-5-2023", 777, 50);

        System.out.println(x.arrival_time);
    }
}
