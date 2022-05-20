package com.ibm.fscc.employeeservice.controller;



import java.util.List;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;
import com.ibm.fscc.employeeservice.services.EmployeeDetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.ResponseEntity;

import org.springframework.http.MediaType;


import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@Validated
@RequestMapping(path = "/employee")
public class EmployeeController {
	@Autowired EmployeeRepository employeeRepository;

		
	@Autowired
	EmployeeDetailService employeeDetailService;

	
	@RequestMapping(value = "/employees", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<EmployeeEntity> getEmployees() {
		System.out.println("in get employees ");
		System.out.println(employeeRepository.findAll());

		return employeeRepository.findAll();

	}

		
	@RequestMapping(path = "/update", method = RequestMethod.PUT, consumes= {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<EmployeeEntity> updateEmployee(@RequestBody EmployeeEntity employeeEntity) {
		return employeeDetailService.updateEmployee(employeeEntity);
	}
	
	@RequestMapping(path = "/add", method= RequestMethod.POST, consumes= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<EmployeeEntity> addEmployee(@RequestBody EmployeeEntity employeeEntity) {
		// System.out.print("in controller add employee route - employeeENtity: "+employeeEntity);
		return employeeDetailService.saveEmployee(employeeEntity);
	}

	
	@PostMapping
	public String test()
	{
		try {
			EmployeeEntity employee = employeeRepository.findById(1);
			return " " + employee;
		} catch (Exception e) {
			return "" + e;
		}
		
	}
	@Autowired
	private Environment env;

	@GetMapping(path = "/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port") + "!";
	}

	

}