import axios from "axios";

class EmployeeDataService {
  getEmployees() {
    return axios.get("http://localhost:8082/employee/employees");
  }

  addEmployee(employee) {
    return axios.post("http://localhost:8082/employee/", employee);
  }

  editEmployee(employee) {
    return axios.put("http://localhost:8082/employee/", employee);
  }
}
export default new EmployeeDataService();
