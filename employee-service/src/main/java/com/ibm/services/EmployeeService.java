package com.ibm.fscc.employeeservice.services;
import java.util.List;
import com.ibm.fscc.employeeservice.data.EmployeeEntity;

public interface EmployeeService {
  public List<EmployeeEntity> findAll();
}