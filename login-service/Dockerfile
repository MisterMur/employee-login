FROM openjdk:8-jdk-alpine 
VOLUME /tmp 
COPY target/login-service-0.0.1-SNAPSHOT.jar login-service.jar 
ENTRYPOINT ["java","-jar","login-service.jar"]