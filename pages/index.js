// importamos React.Component, Next.js por defecto importa React
// para soportar JSX, así que solo necesitamos traernos Component
import { Component } from 'react';
// importamos los módulos de Electron que vamos a usar
import { ipcRenderer } from 'electron';

import {
	Alert
} from 'patternfly-react';

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
				<h1>Hola Pibe!</h1>

				{this.state.message &&
					<p>{this.state.message}</p>
				}

				<form onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleChange} />
				</form>

				<Alert />

				{/* <VNavbar>
			    <VNavbar.Brand>
			        <img className="navbar-brand-icon" src="http://www.patternfly.org/assets/img/logo-alt.svg" alt=""/><img
			        className="navbar-brand-name" src="http://www.patternfly.org/assets/img/brand-alt.svg"
			        alt="PatternFly Enterprise Application"/>
			    </VNavbar.Brand>
			    <VNavbar.LeftPanel>
			        <NavItem><a href="#" target="_blank"
			                    className="nav-item-iconic nav-item-iconic-new-window"><span
			            title="Launch" className="fa fa-external-link"></span></a></NavItem>
			    </VNavbar.LeftPanel>
			    <VNavbar.RightPanel>
			        <NavInfoList id='id1' label='Notification' onClear={()=>console.log('hola')}>
			            <NavInfoItem label='Modified Datasources ExampleDS' />
			            <NavInfoItem label='Test Message' />
			            <NavInfoItem label='Error: System Failure' />
			        </NavInfoList>
			        <NavDropDown name='Help' icon='pficon-help'>
			            <NavDropDownItem label='Help' onSelect={()=>console.log('hola')} payload={{command: 'help'}}/>
			            <NavDropDownItem label='About' onSelect={()=>console.log('hola')} payload={{command: 'about'}}/>
			        </NavDropDown>
			        <NavDropDown name='User' icon='pficon-user'>
			            <NavDropDownItem label='Preferences' onSelect={()=>console.log('hola')} payload={{command: 'preferences'}}/>
			            <NavDropDownItem label='Logout' onSelect={()=>console.log('hola')} payload={{command: 'logout'}}/>
			        </NavDropDown>
			    </VNavbar.RightPanel>
			</VNavbar> */}

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
