package com.ibm.fscc.employeeservice.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

public interface EmployeeRepository extends CrudRepository<EmployeeEntity, Long> {
    EmployeeEntity findById(long id);
    
    List<EmployeeEntity> findAll();

		
	EmployeeEntity findByEmail(String email);
}