package com.ibm.fscc.loginservice.jwt;

import java.util.Date;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;


@Component
public class JwtAuthentication {
	
	private String secret = System.getenv().getOrDefault("jwt.secret", "very5ecretKey");
	private String token;
	
	
	Date expiration = new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24); //current time in milliseconds + milliseconds in a day
	
	public String createJWTToken(long userId) {
		
		
	try {
		Algorithm algo = Algorithm.HMAC512(secret);
		token = JWT.create()
				.withClaim("userId", userId)
				.withIssuer("auth0")
				.withExpiresAt(expiration)
				.sign(algo);
		
		return token;
	} catch (Exception err) {
		err.printStackTrace();
		return "Error creating JWT token";
	}
				
				
	}
	
	public boolean isValidJWTToken(String token) {
		
	try {	
		Algorithm algo = Algorithm.HMAC512(secret);
		
		JWTVerifier verifier = JWT.require(algo)
				.withIssuer("auth0")
				.build();
		verifier.verify(token);
		
		
		return true;
	} catch (Exception err) {
		err.printStackTrace();
		return false;
	}
				
	}
	
	public String decodeJWTToken(long userId, String token) {
		DecodedJWT jwt = JWT.decode(token);
		
	try {	
		if (jwt.getClaim(String.valueOf(userId)) == null) {
			return "No id found";
		} else {
			return jwt.getClaim(String.valueOf(userId)).toString();
		}
	} catch (JWTDecodeException err) {
		err.printStackTrace();
		return "Unable to decode JWT token";
	}
	
	}
	
	public ResponseEntity<Object> loginValidation(String token, long userId) {
		if (isValidJWTToken(token)) {
			HashMap<String, String> decodedTokens = new HashMap<String,String>();
			String decodedToken = decodeJWTToken(userId, token);
			
			decodedTokens.put("userId", decodedToken);
			return new ResponseEntity<>(decodedTokens,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	
	
	public String getToken() {
		return token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}

}
