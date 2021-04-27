package com.ibm.fscc.employeeservice.controller;



import java.util.List;
import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.services.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;


@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {
	@Autowired 
	Employee employee;

	@Autowired
	private Environment env;

	@GetMapping(path = "/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port") + "!";
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<EmployeeEntity> findAll(){
		return employee.findAll();
	}

}
