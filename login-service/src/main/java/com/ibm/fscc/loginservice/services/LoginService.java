package com.ibm.fscc.loginservice.services;

import org.springframework.stereotype.Service;

import com.ibm.fscc.loginservice.shared.LoginDto;

@Service
public interface LoginService {

	public LoginDto getLogin(String email);
	
}
