package com.ibm.fscc.loginservice.repository;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.ibm.fscc.loginservice.data.LoginEntity;

public interface LoginRepository extends CrudRepository<LoginEntity, Long> {
    List<LoginEntity> findAll();
	
	LoginEntity findByEmail(String email);

}
