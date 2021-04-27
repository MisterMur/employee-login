package com.ibm.fscc.employeeservice.services;

import java.util.List;
import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Employee implements EmployeeService {
    @Autowired
    EmployeeRepository repo;
    
    @Override
    public List<EmployeeEntity> findAll(){
        return repo.findAll();
    }


	
}
