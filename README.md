# Backend para la Aplicación de Gestión de Actividades

Este es el backend desarrollado en Node.js utilizando Express para una aplicación de gestión de actividades. Proporciona endpoints para el registro de usuarios e inicio de sesión, así como funcionalidades básicas de autenticación.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:

```
npm install
```

3. Ejecuta el servidor:

```
npm start
```

El servidor se iniciará en el puerto 4000 por defecto.

## Endpoints

```
POST /api/register
```

Permite a los usuarios registrarse en la aplicación. Se espera un cuerpo de solicitud JSON con los siguientes campos:

```
{
  "username": "nombre_de_usuario",
  "password": "contraseña"
}
```

Si el usuario se registra con éxito, recibirá una respuesta con el código de estado 201 (Created) y un mensaje indicando que el usuario ha sido registrado correctamente.

```
POST /api/login
```

Permite a los usuarios iniciar sesión en la aplicación. Se espera un cuerpo de solicitud JSON con los siguientes campos:

```
{
  "username": "nombre_de_usuario",
  "password": "contraseña"
}
```

Si las credenciales son válidas, el usuario recibirá una respuesta con el código de estado 200 (OK) y un mensaje indicando que el inicio de sesión fue exitoso.
