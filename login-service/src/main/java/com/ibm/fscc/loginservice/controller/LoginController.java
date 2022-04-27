package com.ibm.fscc.loginservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@RestController
@RequestMapping //(path="/login")
public class LoginController {

	@Autowired LoginRepository loginRepository;
	

	@RequestMapping("/loginlist/{email}")
	public LoginEntity getLogin(@PathVariable String email) {
		return loginRepository.findByEmail(email);
	}

	@Autowired private Environment env;
	
	@GetMapping(path="/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port");
	}

}
