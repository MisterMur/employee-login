package com.ibm.fscc.employeeservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

import java.util.List;


public interface EmployeeRepository extends CrudRepository<EmployeeEntity, Long> {
    EmployeeEntity findById(long id);
    
    List<EmployeeEntity> findAll();

	
	List<EmployeeEntity> findAllByUserId(String _user_id);
	
	EmployeeEntity findByEmail(String email);

}
