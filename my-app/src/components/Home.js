import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Col, Image,Buton, Button} from 'react-bootstrap'
import './Home.css';

export default class Home extends Component{
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h2>
                        welcome to ISA
                    </h2>
                </Jumbotron>
                <link to="/about">
                <Button>bsStyle = "primary">about</Button>
                </link>
            </Grid>
        )
    }
}