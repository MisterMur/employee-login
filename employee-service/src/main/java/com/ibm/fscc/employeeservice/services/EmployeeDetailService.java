package com.ibm.fscc.employeeservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ibm.fscc.employeeservice.data.EmployeeEntity;
import com.ibm.fscc.employeeservice.repository.EmployeeRepository;

@Service
public class EmployeeDetailService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public ResponseEntity<EmployeeEntity> saveEmployee(EmployeeEntity employeeEntity) {
		System.out.println("in save employee id: \n"+String.valueOf(employeeEntity.getId()));
		if (employeeRepository.findByEmail(employeeEntity.getEmail()) == null){
			System.out.println("nouserexists with same email.attemptingsave: \n");

			return new ResponseEntity<EmployeeEntity>(employeeRepository.save(employeeEntity), HttpStatus.OK);
		}
		System.out.println("user exists with same email. returning conflict\n");

		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	public ResponseEntity<EmployeeEntity> updateEmployee( EmployeeEntity employeeEntity) {
		System.out.println("in update Employee");

		try {
			if ( employeeRepository.findByEmail(employeeEntity.getEmail()) == null 
					// || employeeRepository.findById(employeeEntity.getId()) == null
					)
			{
				System.out.println("employee doesnt exist");

				return new ResponseEntity<EmployeeEntity>(employeeEntity, HttpStatus.UNPROCESSABLE_ENTITY);
			}
			EmployeeEntity existingEmployee = employeeRepository.findByEmail(employeeEntity.getEmail());
			System.out.println("Existing Employee found by email - id: "+existingEmployee.getId());
			existingEmployee.setFirst_name(employeeEntity.getFirst_name());
			existingEmployee.setLast_name(employeeEntity.getLast_name());
			existingEmployee.setAddress(employeeEntity.getAddress());
			existingEmployee.setCity(employeeEntity.getCity());
			existingEmployee.setState(employeeEntity.getState());
			existingEmployee.setZip(employeeEntity.getZip());
			existingEmployee.setHome_phone(employeeEntity.getHome_phone());
			existingEmployee.setCell_phone(employeeEntity.getCell_phone());
			existingEmployee.setEmail(employeeEntity.getEmail());
			employeeRepository.save(existingEmployee);
	
			return new ResponseEntity<EmployeeEntity>(existingEmployee, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<EmployeeEntity>(employeeEntity, HttpStatus.INTERNAL_SERVER_ERROR);
		}		
  }

}
