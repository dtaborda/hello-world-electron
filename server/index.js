const { app, BrowserWindow, ipcMain } = require('electron');
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

let win;
function createWindow() {
  nextApp.prepare()
  .then(() => {
    const server = express()

    server.get('/test', (req, res) => {
      res.json(200, { name: 'damian' })
    });

    server.get('*', (req, res) => {
      // si recibimos una petición por fuera de Electron
			// respondemos con un 404
      if (req.headers['user-agent'].indexOf('Electron') === -1) {
				res.writeHead(404);
				res.end();
				return;
			}

      res.setHeader('Access-Control-Request-Method', 'GET');

			// solo permitimos peticiones GET
			if (req.method !== 'GET') {
				res.writeHead(405);
				res.end('Method Not Allowed');
				return;
			}

			// dejamos que Next maneje las peticiones
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')

      // una vez iniciamos el servidor creamos una nueva ventana
			win = new BrowserWindow({
				height: 768,
				width: 1024,
			});

			// y abrimos la URL local del servidor HTTP que creamos
			win.loadURL('http://localhost:3000');

			// abrimos las herramientas de desarrollo
			if (dev) {
				win.webContents.openDevTools();
			}

			win.on('close', () => {
				// cuando el usuario cierra la ventana borramo `win`
				// y paramos el servidor HTTP
				win = null;
				server.close();
			});
    })
  })
}

// una vez la app esté lista iniciamos una ventana nueva
app.on('ready', createWindow)

// si todas las ventanas se cerraros matamos la aplicación
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// cuando se activa la app volvemos a abrir una ventana nueva
// (algo solo para Mac)
app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});

// acá vamos a usar el módulo `ipcMain` para recibir mensajes desde
// nuestro proceso de UI y reenviar ese mensaje a quién lo envió
ipcMain.on('message', (event, message) => {
	event.sender.send('message', message);
});
