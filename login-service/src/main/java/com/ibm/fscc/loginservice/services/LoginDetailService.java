package com.ibm.fscc.loginservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.jwt.JwtAuthentication;
import com.ibm.fscc.loginservice.repository.LoginRepository;

@Service
public class LoginDetailService {
	
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	JwtAuthentication authenticate;
	
	private String token = "";
	
 public ResponseEntity<String> logins( LoginEntity login) {
		 
		 LoginEntity dbUser = loginRepository.findByEmail(login.getEmail());
		 
		 if (dbUser != null && dbUser.getEmail() != null && BCrypt.checkpw(login.getPassword(), dbUser.getPassword())) {
			 
			 	token = authenticate.createJWTToken(dbUser.getId());
				return new ResponseEntity<>(token, HttpStatus.ACCEPTED);
		 }
		 return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
	}
public LoginEntity registerUser( LoginEntity user) {
	System.out.println("in register user logindetail service");
	System.out.println("user.getEmail: "+ user.getEmail());

	System.out.println("user.getPassword: "+ user.getPassword());


	if (user.getEmail() != null && user.getPassword() != null ) {
		System.out.println("user in body exists, salting password");
		String hashpwd = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());

		user.setPassword(hashpwd);
		return loginRepository.save(user);
	}
	System.out.println("coulndt create new user, returning null");

	return null;
} 
	   
 
 public LoginEntity newUser( LoginEntity user) {

	 System.out.println("user.getEmail: "+ user.getEmail());
	System.out.println("user.getPassword: "+ user.getPassword());

	System.out.println("findbyemail: "+loginRepository.findByEmail(user.getEmail() ));
	 	
	 	if (user.getEmail() != null && user.getPassword() != null && loginRepository.findByEmail(user.getEmail() )  != null) {
			 System.out.println("user exists, salting password");
	 		String hashpwd = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
	 		user.setPassword(hashpwd);
	 		return loginRepository.save(user);
	 	}
		 System.out.println("coulndt update new user, returning null");
	 	return null;
 } 
	
}
