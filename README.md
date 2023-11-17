
# Instrucciones de uso

Para iniciar el backend y el frontend se necesita lo siguiente:


## Instalaciones obligatorias

#### - [Git](https://git-scm.com/download/win)
#### - [NodeJS](https://nodejs.org/en/)
Pude ser tanto la versión LTS como la actual (current).
#### - [VS Code](https://code.visualstudio.com/)
#### - [Community server de MongoDB](https://www.mongodb.com/try/download/community) (opcional)

#### Instalar en caso de que no se pueda conectar a la base de datos, ya que se esta usando una conexión a la nube y puede que cuando se este revisando el repositorio la base de datos este apagada por inactividad, y en ese caso me pueden pedir que la active manualmente o seguir las indicaciones siguientes:

Instalar community server como servicio y mongodb compass (que aparece como opción en la misma ventana de instalación del community server) para poder revisar facilmente la información almacenada en la base de datos.

Suponiendo que ya se clono el proyecto y que falló la conexión a la nube, cambiar el string MONGO_URL ubicado en la carpeta api en el archivo app.js a:

```
const MONGO_URL = "mongodb://127.0.0.1:27017/Portafolio";
```


---

### Una vez clonado el proyecto:

## Para la API

Desde la raíz ingresar a la carpeta api con el comando:
```bash
 cd api
```

#### Instalar las dependencias:
```bash
 npm install 
```

#### Para iniciar el servidor:

```bash
 npm run dev
```

Para verificar su funcionamiento entrar a http://localhost:3000/api/profile

## Para el frontend

Abrir una nueva consola y en la raíz e ingresar a la carpeta web con el comando:
```bash
 cd web
```

#### Instalar las dependencias:
```bash
 npm install 
```

#### Para iniciar el servidor:

```bash
 npm run dev
```
Para verificar su funcionamiento en la misma consola presionar la tecla "o" para abrir el frontend en el navegador. La ruta por defecto es: http://localhost:5173



