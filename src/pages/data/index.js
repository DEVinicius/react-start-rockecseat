import React, { Component } from 'react';
import api from '../../service/api';

export default class Data extends Component{
    state={
        fact: []
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const data = await api.get(`https://cat-fact.herokuapp.com/facts/${id}`);

        this.setState({
            fact: response.data
        })
    }

    render(){
        const { fact } = this.state
        return(
            <div className = "product-info">
                <h1>{fact.text}</h1>
                <p>{fact.type}</p>

            </div>
        )
    }
}