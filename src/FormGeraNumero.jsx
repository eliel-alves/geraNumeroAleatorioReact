import { Component } from "react";

class FormGeraNumero extends Component {

    state = {
        num1 : 0,
        num2 : 10
    }

    geraNumero = () => {
        let maior = Math.max(this.state.num1, this.state.num2);
        let menor = Math.min(this.state.num1, this.state.num2);
        let numGerado = Math.floor(Math.random() * (maior - menor)) + menor;
        
        this.props.numero(numGerado);
    }

    render() {
        return (
            <div>
                <label for="valorUm">Valor 1</label>
                <input id="valorUm" type="number" value={this.state.num1} onChange={e => this.setState({num1 : e.target.value})}/>
                <br/>

                <label for="valorDois">Valor 2</label>
                <input id="valorDois" type="number" value={this.state.num2} onChange={e => this.setState({num2 : e.target.value})}/>
                <br/>

                <button className="btnBlue" onClick={() => this.geraNumero()}>Gerar Número</button>
            </div>
        )
    }
}

export default FormGeraNumero;