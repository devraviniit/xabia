import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      axios.get(`https://swapi.dev/api/people/?search=${this.state.username}`)
        .then((response) => {
          if (response.data.count > 0) {
            let result = response.data.results[0];
            if (result.name === this.state.username && result.birth_year === this.state.password) {
              let userData = JSON.stringify(result);
              localStorage.setItem('userinfo', userData);
              this.props.history.push('/search')
            } else {
              alert("Invalid credentials");
            }
          }
        });

    } else {
      alert('Please enter details');
    }
  }

  render() {

    if (localStorage.getItem('userinfo')) {
      this.props.history.push('/search')
    }

    return (
      <>
        <br /><br />
        <Container className="themed-container">
          <Form>
            <FormGroup>
              <Label for="forUsername">Username</Label>
              <Input type="text" name="username" id="forUsername" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="forPassword">Password</Label>
              <Input type="password" name="password" id="forPassword" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Container>
      </>
    )
  }
}
