package com.ibm.fscc.employeeservice.controller;



import java.util.List;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;




import java.util.List;


@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {
	@Autowired EmployeeRepository employeeRepository;
	
//	@Autowired 
//	EmployeeEntity employee;
	
	@RequestMapping(value = "/employees", method = RequestMethod.GET)
	public List<EmployeeEntity> getEmployees() {

		return employeeRepository.findAll();

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
//	public static class UserInfo {
//		private String user_id;
//
//		public String getUserId() {
//			return user_id;
//		}
//
//		public void setUserId(String user_id) {
//			this.user_id = user_id;
//		}
//	}

	// @RequestMapping(method = RequestMethod.GET)
	// public List<EmployeeEntity> findAll(){
	// 	return employee.findAll();
	// }
	

}
