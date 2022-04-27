FROM openjdk:8-jdk-alpine 
VOLUME /tmp 
COPY target/discovery-service-0.0.1-SNAPSHOT.jar discovery-service.jar 
ENTRYPOINT ["java","-jar","discovery-service.jar"]