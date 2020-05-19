import React, { Component } from 'react'
import { Container, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import SearchResult from './SearchResult';
export default class Search extends Component {
  state = {
    search: '',
    planets: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let searchText = e.target.value;
    searchText = searchText.trim();
    if (searchText) {
      axios.get(`https://swapi.dev/api/planets/?search=${searchText}`)
      .then((response) => {
        if (response.data.count > 0) {
          let results = response.data.results;
          this.setState({ planets: results })
        }
      });
    }else{
      this.setState({planets:''})
    }
  }


render() {
  if (!localStorage.getItem('userinfo')) {
    this.props.history.push('/')
  }

  return (
    <>
      <br /><br />
      <Container className="themed-container">
        <FormGroup>
          <Input type="text" name="search" id="forSearch" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
        </FormGroup>
        {this.state.planets ? <SearchResult searchData={this.state.planets} /> : ''}
      </Container>

    </>
  )
}
}
