import React, { Component } from 'react';
import styled from 'react-emotion';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Container = styled('div')`
  background-color: black;
  height: 100px;
  display: flex;
  align-items: center;

`
const ButtonContainer = styled('div')`
  margin: 5px;
`

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }

 

  login = () => {
    this.props.history.push('/login')
  }
  users = () => {
    this.props.history.push('/jokes')
  }

  register = () => {
    
    if(this.props.location.pathname === "/jokes"){
      localStorage.removeItem('token');
      this.props.history.push('/')
      
    }else{
      this.props.history.push('/register')
      
    }
    
  }


  render() { 
    
    return ( 
      <Container >
        <ButtonContainer>
          {localStorage.getItem('token')
          ? <Button variant="contained" color="primary" onClick={this.users}>
                Jokes
            </Button>
          : <Button variant="contained" color="primary" onClick={this.login}>
                Login
            </Button>
          }
        </ButtonContainer>
        <ButtonContainer>
          <Button variant="contained" color="primary" onClick={this.register}>
              {this.props.location.pathname === "/jokes" 
              ? "Logout"
              : "Register"
              }
          </Button>
        </ButtonContainer>

      </Container>
     )
  }
}
 
export default withRouter(Header);