package com.ibm.fscc.loginservice.data;

import javax.persistence.Entity;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name="login")
public class LoginEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String email;
	private String password;
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}


	public void setPassword(String password) {
		this.password = password;
	}


}
