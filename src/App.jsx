import { Component } from 'react';
import FormGeraNumero from './FormGeraNumero';

class App extends Component {

    state = {
        numGerado : -1
    }

    defNumGerado = (num) => {
        this.setState({ numGerado : num })
    }

    render() {

        return (
            <div className="container">
                <h1 className="title">Gerador de Número Aleatório</h1>
                <p className="subtitle">Insira dois valores para gerar um número aleatório entre o intervalo informado.</p>
                <FormGeraNumero numero={this.defNumGerado}/>
               
                {
                    this.state.numGerado !== -1 &&
                    <h4>Número gerado: <span id="numGerado">{this.state.numGerado}</span></h4>
                }

            </div>
        )

    }
}

export default App;