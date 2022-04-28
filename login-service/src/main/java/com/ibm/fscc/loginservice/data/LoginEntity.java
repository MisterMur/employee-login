package com.ibm.fscc.loginservice.data;

import javax.persistence.Entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;


@Entity
public class LoginEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String email; // primary key
	private String password; // encrypted
	
	public LoginEntity() {
		super();
	}
	public LoginEntity(String email,String password) {
		this();
		this.email = email;
		this.password = password;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	

	public void setPassword(String password) {
		this.password = password;
	}

}
