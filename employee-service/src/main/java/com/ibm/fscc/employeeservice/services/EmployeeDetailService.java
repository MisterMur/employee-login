package com.ibm.fscc.employeeservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;

@Service
public class EmployeeDetailService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public ResponseEntity<EmployeeEntity> saveEmployee(EmployeeEntity employeeEntity) {
		System.out.println("in save employee: \n"+employeeEntity);
		if (employeeRepository.findByEmail(employeeEntity.getEmail()) == null){
			System.out.println("no user exists with same email. attempting save: \n");

			return new ResponseEntity<EmployeeEntity>(employeeRepository.save(employeeEntity), HttpStatus.OK);
		}
		System.out.println("user exists with same email. returning conflict\n");

		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	public ResponseEntity<EmployeeEntity> updateEmployee(EmployeeEntity employeeEntity) {
		
		try {
			employeeEntity.setFirstName(employeeEntity.getFirstName());
			employeeEntity.setLastName(employeeEntity.getLastName());
			employeeEntity.setAddress(employeeEntity.getAddress());
			employeeEntity.setCity(employeeEntity.getCity());
			employeeEntity.setState(employeeEntity.getState());
			employeeEntity.setZip(employeeEntity.getZip());
			employeeEntity.setHomePhone(employeeEntity.getHomePhone());
			employeeEntity.setCellPhone(employeeEntity.getCellPhone());
			employeeEntity.setEmail(employeeEntity.getEmail());
			
			employeeRepository.save(employeeEntity);
			return new ResponseEntity<>(employeeEntity, HttpStatus.ACCEPTED);
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
  }

}