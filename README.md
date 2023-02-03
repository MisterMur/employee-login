# Full Stack Coding Challenge
Welcome to the IBM BR CIC Full Stack Coding Challenge.  The coding challenge is designed to enhance the skills of IBM resources seeking to build a foundation as a full stack developer.  In this coding challenge, you will implement applications using leading technology stacks to build Single Page Applications (SPA).


# Before You Get Started
1. Install [JDK 1.8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or later.  &nbsp;JDK 1.8 is recommended for the challenge.
2. Install [Node JS](https://nodejs.org/en/download/)
3. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
4. Preferred IDEs.  However, feel free to use the IDE of your liking.
    * Install [Spring Tool Suite (STS)](https://spring.io/tools) for Java.
    * Install [Visual Studio Code](https://code.visualstudio.com/download)
5. Create a [Docker Hub Account](https://hub.docker.com/) 

# Getting Started
1. Clone this repo and 'cd' into it
2. in terminal run - 'docker compose up'
3. React portal should be accescible on localhost:3000
4. angular portal shoudl be acccessibile on localhost:4200

# Project Information

|Projects                 |Description                                          |
|-------------------------|-----------------------------------------------------|
|angular-ui               |`Angular UI Project`                                 |
|api-gateway              |`Spring Boot Zuul API Gateway Service`               |
|discovery-service        |`Spring Boot Eureka Discovery Service`               |
|employee-db-docker-image |`Contains Dockerfile for building MySQL Employee DB` |
|employee-service         |`Spring Boot Employee Service`                       |
|login-db-docker-image    |`Contains Dockerfile for building MySQL Login DB`    |
|login-service            |`Spring Boot Login Service`                          |
|react-ui                 |`React UI`                                           |


# Deliverable
> - Create MySQL Docker Images (Login and Employee Databases).
> - Complete Login Service and Containerize.
> - Complete Employee Service and Containerize.
> - Create and Run in Docker Images.
> - Test Docker Images (Postman and MySQL WorkBench).
> - Implement Eureka Discovery Service and Containerize.
> - Implement Zuul API Gateway Service and Containerize.
> - Validate Eureka Discover Service identified:  Login, Employee, and API Gateway Services.
> - Test Services via Zuul API Gateway.
> - Implement and Containerize Angular UI. 
> - Ensure screen requirements are implemented.
> - Test Angular UI against service components.
> - Repeat above steps for the React UI.
