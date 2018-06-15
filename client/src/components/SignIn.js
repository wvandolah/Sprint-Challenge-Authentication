import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import styled from 'react-emotion';

const ContainerM = styled('div')`
  height: 100vh;  
  display: flex;
  justify-content: center;
  // align-items: center;
`

const InputC = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin: 5px;
`



class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pw: '',
      
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name] : event.target.value });
  };

  handNewUser = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/users', {
        username: this.state.name,
        password: this.state.pw,
        
      })
      .then(response => {

        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })

      this.setState({
        name: '',
        pw: '',
       
      })

  }

  handleReturningUser = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/login', {
        username: this.state.name,
        password: this.state.pw,
      })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        this.props.history.push('/jokes')
              

        
      })
      .catch(err => {
        console.log(err)
      })

      this.setState({
        name: '',
        pw: '',
      })

  }

  render() {
    const locations = this.props.match.path

    return (
      <ContainerM>
        <InputC>
        <FormControl >
          <InputLabel htmlFor="name-simple">UserName</InputLabel>
          <Input id="name-simple" name="name" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <FormControl >
          <InputLabel htmlFor="name-simple">Password</InputLabel>
          <Input id="name-simple2" name="pw" type="password" value={this.state.pw} onChange={this.handleChange} />
        </FormControl>
        {/* <FormControl >
          <InputLabel htmlFor="name-simple">Race</InputLabel>
          <Input id="name-simple3" name="race"  value={this.state.race} onChange={this.handleChange} />
        </FormControl> */}
        {locations === '/login'
        ? <Button variant="contained" color="primary" onClick={this.handleReturningUser}>
            login
          </Button>
        : <Button variant="contained" color="primary" onClick={this.handNewUser}>
            Sign-Up
          </Button>
          
        }

      </InputC>

      </ContainerM>
     )
  }
}

export default SignIn;
