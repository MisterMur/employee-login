package com.ibm.fscc.loginservice;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import com.ibm.fscc.loginservice.data.LoginEntity;
import com.ibm.fscc.loginservice.repository.LoginRepository;

//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class, XADataSourceAutoConfiguration.class})
@EnableJpaRepositories("com.ibm.fscc.loginservice.repository")
@EntityScan("com.ibm.fscc.loginservice.data")
@EnableDiscoveryClient
@SpringBootApplication
public class LoginServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(LoginServiceApplication.class, args);
	}

}
