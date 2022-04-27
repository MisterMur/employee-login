package com.ibm.fscc.loginservice.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;
import com.ibm.fscc.loginservice.data.LoginEntity;

@RestResource(path="logins",rel="logins")
public interface LoginRepository extends CrudRepository<LoginEntity, Long> {
    List<LoginEntity> findAll();
	
	LoginEntity findByEmail(String email);

}
