import React, { Component } from "react";
import Container from "./Container";

import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
//import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table'; 
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class UserContainer extends Component {
  state = {
    results: {},
    search: ""
  };
 
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then(res => {
     
        console.log(res)
        this.setState({ results: res.data.results}, () => console.log(this.state.results))
      })
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
      <Row>
      <Col></Col>
      <Col>
      <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
      <Table striped bordered hover>
      <thead>
      <tr>
      <th>Picture</th>
      <th>Name</th>    
      <th>Email</th> 
      </tr>
      </thead>
      <tbody>
           {this.state.results.length> 0 && this.state.results.filter(user => 
            user.name.first.includes(this.state.search)).map(user=>  

              <EmployeeDetail name={user.name.first + " " + user.name.last}
              email={user.email }
              pic = {user.picture.thumbnail }>

              </EmployeeDetail>
            )
              // ) : (
              //   // <h3>No Results to Display</h3>
          }
        </tbody>
 
              </Table>
  
    </Col> 
     <Col>
     
     </Col>
      </Row>
      </Container>
    )
  }
}

export default UserContainer;
