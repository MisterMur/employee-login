package com.ibm.fscc.employeeservice;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;

@EnableJpaRepositories("com.ibm.fscc.employeeservice.repository")
@EntityScan("com.ibm.fscc.employeeservice.data")
@EnableDiscoveryClient
@SpringBootApplication
public class EmployeeServiceApplication {
	
	@Autowired EmployeeRepository employeeRepository;
	
	@PostConstruct
	public void init() {
	    EmployeeEntity le = new EmployeeEntity("bmurillo","brian","murillo","brian@me.com");

	    employeeRepository.save(le);

	}
	  public List<EmployeeEntity> getAllEmployees() {
			List<EmployeeEntity> employees = employeeRepository.findAll();
			return employees;
		}

	public static void main(String[] args) {
		SpringApplication.run(EmployeeServiceApplication.class, args);
	}

}
