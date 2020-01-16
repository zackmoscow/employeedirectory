import React from "react";
import EmployeeRow from "./components/EmployeeRow";
import Container from "./components/Container";
import employees from "./employees.json";
import "./App.css";

class App extends React.Component {

  state = { filteredEmployees: employees };

  filterByDepartment = (dep) => {
    const filteredEmployees = employees.filter(o => o.department === dep);
    this.setState({ filteredEmployees });
  }

  sortEmployees = () => {
    const filteredEmployees = employees.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
    this.setState({ filteredEmployees });
  }

  sortSalary = () => {
    const filteredEmployees = employees.sort(function(a, b) {
      if (a.salary < b.salary) {
        return 1;
      }
      return -1;
    });
    this.setState({ filteredEmployees });
  }

  deleteEmployee = id => {
    const filteredEmployees = employees.filter(o => o.id !== id);
    this.setState({ filteredEmployees });
  }

  render() {
    const employeeRows = this.state.filteredEmployees.map(o => (
      <EmployeeRow deleteEmployee={this.deleteEmployee} key={o.id} {...o} />
    ));
    return (
      <Container>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Employee Directory</span>
        </nav>
        <br/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employeeRows}
          </tbody>
        </table>
        <button type="button" className="sort btn btn-primary mr-2" onClick={() => this.sortEmployees()}>Sort by Name</button>
        <button type="button" className="sort btn btn-secondary mr-2" onClick={() => this.sortSalary()}>Sort by Salary</button>
        <button type="button" className="filter btn btn-success mr-2" onClick={() => this.filterByDepartment('Engineering')}>Filter Only Engineering</button>
        <button type="button" className="filter btn btn-warning mr-2" onClick={() => this.filterByDepartment('Sales')}>Filter Only Sales</button>
        <button type="button" className="filter btn btn-info mr-2" onClick={() => this.filterByDepartment('Finance')}>Filter Only Finance</button>
        <button type="button" className="filter btn btn-light mr-2" onClick={() => this.filterByDepartment('Legal')}>Filter Only Legal</button>
        <button type="button" className="reset btn btn-dark mr-2" onClick={() => window.location.reload()}>Reset!</button>
      </Container>
    );
  }

}

export default App;
