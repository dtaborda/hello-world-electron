// importamos React.Component, Next.js por defecto importa React
// para soportar JSX, así que solo necesitamos traernos Component
import { Component } from 'react';
// importamos los módulos de Electron que vamos a usar
import { ipcRenderer } from 'electron';

// creamos y exportamos el componente de la home
export default class HomePage extends Component {
	// iniciamos el estado del componente
	state = {
		input: '',
		message: null,
	}

	componentDidMount() {
		// una vez el componente se monta vamos a empezar a escuchar
		// el evento `message` que recibimos del proceso principal
		// mediante el módulo `ipcRenderer`
		ipcRenderer.on('message', this.handleMessage)
	}

	componentWillUnmount() {
		// antes de desmontar el componente dejamos de escuchar
		// el evento `message`
		ipcRenderer.removeListener('message', this.handleMessage)
	}

	handleMessage = (event, message) => {
		// acá recibimos el mensaje del proceso **main** y lo
		// guardamos en el estado interno del componente
		this.setState({ message })
	}

	handleChange = event => {
		// acá guardamos el contenido de un input en el estado
		this.setState({ input: event.target.value })
	}

	handleSubmit = event => {
		// acá evitamos el submit del formulario y enviamos
		// al proceso **main** el contenido del input
		event.preventDefault();
		ipcRenderer.send('message', this.state.input)
	}

	render() {
		// por último hacemos render de un H1, si hay un mensaje
		// desde el proceso **main** lo mostramos, luego el formulario
		// y por último estilizamos el H1.
		return (
			<div>
				<h1>Hello World - Electron </h1>

				{this.state.message &&
					<p>{this.state.message}</p>
				}

				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} />
				</form>

				<style jsx>{`
					h1 {
						color: red;
						font-size: 50px;
					}
				`}</style>
			</div>
		)
	}
}
