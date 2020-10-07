import React, {Component} from 'react';
import api from "../../service/api";
import './style.css'

export default class Main extends Component{
    //estados em React
    state = {
        facts: []
    }

    //função para executar assim que um componente for exibido na tela
    componentDidMount(){
        this.loadCats();
    }

    loadCats = async () => {
        const response = await api.get('/facts');
        console.log(response.data.all);

        this.setState({
            facts: response.data.all
        })
    }

    render(){
        return (
            <div className="product-list">
                {this.state.facts.map(
                    fact => (
                        <article key={fact._id}>
                            <strong>{fact.text}</strong>
                            <p>{fact.type}</p>

                            <a href="#">Acessar</a>
                        </article>

                    )
                )}
                <div className="actions">
                    <button>Anterior</button>
                    <button>Próximo</button>
                </div>
            </div>
        )
    }
}