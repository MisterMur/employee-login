package com.ibm.fscc.employeeservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;

import java.util.List;

public interface EmployeeRepository extends CrudRepository<EmployeeEntity, Long> {
    List<EmployeeEntity> findAll();

}
