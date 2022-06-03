package com.ibm.fscc.loginservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.jwt.JwtAuthentication;
import com.ibm.fscc.loginservice.repository.LoginRepository;
import com.ibm.fscc.loginservice.services.LoginDetailService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path="/login")
public class LoginController {
	

	@Autowired
	private Environment env;
	
	@Autowired
	LoginDetailService loginDetailService;
	
	@Autowired
	LoginRepository loginRepo;
	
	
	@RequestMapping(path="/submit-login", method = RequestMethod.POST, consumes= {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<String> login(@RequestBody LoginEntity login) {
		 return loginDetailService.login(login);
	}
	
	@RequestMapping(path="/validate", method = RequestMethod.POST, consumes= {MediaType.APPLICATION_JSON_VALUE})
	public @ResponseBody ResponseEntity<Object> validateJWT(@RequestBody JwtAuthentication jwtAuth, LoginEntity login) {
		return jwtAuth.loginValidation(jwtAuth.getToken(), login.getId());
	}
	
	@RequestMapping(path="/create", method = RequestMethod.PUT, consumes= {MediaType.APPLICATION_JSON_VALUE})
	public LoginEntity newUser(@RequestBody LoginEntity user) {
		System.out.print("PUT create newUser: ");
		System.out.print(user);

		return loginDetailService.newUser(user);
	}

	@RequestMapping(path="/register", method = RequestMethod.POST,consumes = {MediaType.APPLICATION_JSON_VALUE})
	public LoginEntity registerUser(@RequestBody LoginEntity user) {
		System.out.print("POST register newUser: ");
		System.out.print(user);
		return loginDetailService.registerUser(user);
	}
	

	@GetMapping(path="/status/check")
	public String status() {
		return "Working on port " + env.getProperty("server.port");
	}
}
