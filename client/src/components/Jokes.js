import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-flow: row wrap;
  
`

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      jokes: []
     }
  }

  componentDidMount(){
            
    axios
      .get('http://localhost:5000/api/jokes', {
        headers: { "authorization": localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
          this.setState({
            jokes: response.data
          })
        })
      
  }


  render() { 
    console.log(this.state.jokes)
    return ( 
      <Container>
        {this.state.jokes.map(joke =>{
          return(
           
            <Card key={joke.id}>
              {console.log(joke)}  

              <CardContent>
                <Typography variant="headline" component="h2">
                  {joke.type}
                </Typography>
                <Typography component="p">
                  {joke.setup}
                </Typography>
                <Typography color="textSecondary">
                  {joke.punchline}
                </Typography>
              </CardContent>              
            </Card>
          
          )
        })}
        
      </Container>
     )
  }
}
 
export default Jokes;