package com.java_exercises;

/* # Exercise 6:
- Create a Java class called "FlightBookingSystem" that represents a flight booking system. 
The class should have methods to search for available flights, book flights for passengers, 
and display booking details. Enhance the class to include features such as seat selection, 
managing passenger information, handling flight cancellations or delays, and integrating
 with payment gateways for ticket purchases.*/

 import java.util.List;
 import java.util.ArrayList;
import java.util.Arrays;
 
public class FlightBookingSystem {
    private List<Flight> flights;

    public FlightBookingSystem() {
        this.flights = new ArrayList<>();
    }

    public void addFlight(Flight flight) {
        flights.add(flight);
    }

    public List<Flight> getFlights() {
        return flights;
    }

    
    

    public static class Flight {
 

    private String departure_city;
    private String destination_city;
    private String date_of_travel;
    private String arrival_time;
    private int flight_Number;
    private int seats;

    public Flight(String departure_city, String destination_city, String date_of_travel, String arrival_time, int flight_Number, int seats) {
        this.departure_city = departure_city;
        this.destination_city = destination_city;
        this.date_of_travel = date_of_travel;
        this.arrival_time = arrival_time;
        this.flight_Number = flight_Number;
        this.seats = seats;

    }
    
    public boolean remove_seats(Flight info, int flightNumber, int seats_remove){
        if(info.flight_Number == flightNumber) {
            info.seats-=seats_remove;
            return true;

        }
        return false;

        
    }



    @Override
    public String toString() {
        return "Flight: " + departure_city + " to " + destination_city +
                ", Date: " + date_of_travel + ", Arrival Time: " + arrival_time +
                ", Flight Number: " + flight_Number + ", Seats Available: " + seats;
    }
    

    public static class Passenger{
        private String first_name;
        private String last_name;
        private Integer flight_number;
        private Integer seats_needed;
        

        public Passenger(String first_name, String last_name,Integer flight_number, Integer seats_needed){
            this.first_name = first_name;
            this.last_name = last_name;
            this.flight_number = flight_number;
            this.seats_needed = seats_needed;
        }


        public void seats_left(List<FlightBookingSystem.Flight> flights, int flightNumber){
            
            // System.out.println("start here\n");
            // System.out.println(flightNumber);
            // System.out.println(flights);
            boolean found = false;
            for (FlightBookingSystem.Flight flight : flights) {
                found = flight.remove_seats(flight, flightNumber, this.seats_needed);
                if (found == true) {
                    System.out.println("The number of seats remaining for flight number: " + String.valueOf(flightNumber) + " is " + flight + "seats");
                    break;
                }
            }
            
        }

    
    
    public static void main(String[] args){

        FlightBookingSystem system = new FlightBookingSystem();
        FlightBookingSystem.Flight flight1 = new FlightBookingSystem.Flight("philly", "jersey", "may-4-2023", "may-5-2023", 777, 50);
        FlightBookingSystem.Flight flight2 = new FlightBookingSystem.Flight("jersey", "philly", "may-4-2023", "may-5-2023", 888, 60);
        FlightBookingSystem.Flight flight3 = new FlightBookingSystem.Flight("london", "paris", "june-10-2023", "june-11-2023", 123, 100);
        FlightBookingSystem.Flight flight4 = new FlightBookingSystem.Flight("new york", "los angeles", "july-1-2023", "july-2-2023", 456, 200);
        FlightBookingSystem.Flight flight5 = new FlightBookingSystem.Flight("tokyo", "sydney", "aug-15-2023", "aug-16-2023", 789, 150);
        FlightBookingSystem.Flight flight6 = new FlightBookingSystem.Flight("mumbai", "delhi", "sept-20-2023", "sept-21-2023", 555, 75);
        FlightBookingSystem.Flight flight7 = new FlightBookingSystem.Flight("beijing", "shanghai", "oct-5-2023", "oct-6-2023", 999, 120);
        FlightBookingSystem.Flight flight8 = new FlightBookingSystem.Flight("dubai", "cairo", "nov-12-2023", "nov-13-2023", 111, 80);
        FlightBookingSystem.Flight flight9 = new FlightBookingSystem.Flight("rome", "athens", "dec-25-2023", "dec-26-2023", 222, 90);
        FlightBookingSystem.Flight flight10 = new FlightBookingSystem.Flight("toronto", "vancouver", "jan-8-2024", "jan-9-2024", 333, 180);
        FlightBookingSystem.Flight flight11 = new FlightBookingSystem.Flight("sao paulo", "rio de janeiro", "feb-14-2024", "feb-15-2024", 444, 110);

        system.addFlight(flight1);
        system.addFlight(flight2);
        system.addFlight(flight3);
        system.addFlight(flight4);
        system.addFlight(flight5);
        system.addFlight(flight6);
        system.addFlight(flight7);
        system.addFlight(flight8);
        system.addFlight(flight9);
        system.addFlight(flight10);
        system.addFlight(flight11);
        

        List<FlightBookingSystem.Flight> flights = system.getFlights();

        Passenger inserting_passenenser = new Passenger("John","Doe",999,10);    
           
        inserting_passenenser.seats_left(flights, 777);


            }
        }
    }

}
