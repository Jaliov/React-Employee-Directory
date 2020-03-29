import React, { Component } from "react";
import Container from "./Container";
//import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
//import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class UserContainer extends Component {
  state = {
    result: {},
    search: ""
  };
 
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => this.setState({ result: res.data }, () => console.log(this.state.result)))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
      <Container>
           <Col size="md-8">
        <div>
        <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
            </Card>
          
            <Card
              heading={this.state.result.name || "Search Employees"}
            >
              {this.state.result.length >  0 ? this.state.result.map(user=>
                <Card
                  name={user.name }
                  email={user.name }
                  pic = {user.pic }
                 
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
       
          </div>
          </Col>
      </Container>
    );
  }
}

export default UserContainer;
