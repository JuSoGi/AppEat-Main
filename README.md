# AppEat 🍽️

## Descripción del proyecto

AppEat es una aplicación web desarrollada como proyecto académico de Ingeniería de Software, orientada a la gestión de donaciones de alimentos entre supermercados, comercios y organizaciones beneficiarias.

La plataforma busca contribuir a la reducción del desperdicio alimentario mediante la publicación y consulta de productos disponibles para donación, facilitando la administración básica de inventarios y promoviendo el aprovechamiento de recursos alimentarios.

---

## Objetivo

Desarrollar una solución tecnológica que permita gestionar donaciones de alimentos de manera sencilla, contribuyendo a disminuir el desperdicio alimentario y facilitando la interacción entre posibles donantes y organizaciones beneficiarias.

---

## Tecnologías utilizadas

### Frontend

* React
* JavaScript
* HTML5
* CSS3

### Backend (Arquitectura propuesta)

* Node.js
* Express

### Base de Datos (Arquitectura propuesta)

* PostgreSQL

### DevOps

* GitHub
* GitHub Actions
* Docker
* Docker Compose
* Vercel

---

## Arquitectura General

El sistema sigue una arquitectura cliente-servidor compuesta por:

1. Frontend desarrollado en React.
2. Backend desarrollado con Node.js y Express.
3. Base de datos PostgreSQL para almacenamiento persistente.
4. Integración continua mediante GitHub Actions.
5. Despliegue web utilizando Vercel.

---

## Funcionalidades Implementadas

### Autenticación

* Inicio de sesión de usuario.
* Registro de usuario (simulado).

### Gestión de Inventario

* Visualización de productos disponibles.
* Consulta de inventario.

### Gestión de Donaciones

* Publicación de nuevas donaciones.
* Actualización dinámica de la lista de productos.

---

## Historias de Usuario Implementadas

* Como usuario, quiero iniciar sesión para acceder al sistema.
* Como usuario, quiero registrarme para utilizar la plataforma.
* Como usuario, quiero visualizar productos disponibles para consulta.
* Como usuario, quiero publicar una donación para compartir alimentos disponibles.
* Como usuario, quiero consultar el inventario actualizado.
* Como usuario, quiero cerrar sesión para finalizar el uso del sistema.

---

## Pruebas Realizadas

Se implementaron pruebas automatizadas utilizando Jest para validar funcionalidades relacionadas con:

* Inicio de sesión.
* Gestión de productos.
* Inventario.

Resultado:

* 3 pruebas ejecutadas.
* 3 pruebas aprobadas exitosamente.

---

## Integración Continua (CI/CD)

El proyecto incorpora un pipeline de integración continua mediante GitHub Actions.

Las tareas automatizadas incluyen:

* Instalación de dependencias.
* Verificación del proyecto.
* Ejecución de pruebas automatizadas.

---

## Contenedorización

El proyecto incluye:

* Dockerfile
* docker-compose.yml

Estos archivos permiten la ejecución del sistema mediante contenedores Docker para facilitar futuras implementaciones.

---

## Instalación Local

### Clonar repositorio

```bash
git clone https://github.com/JuSoGi/AppEat-Main.git
```

### Ingresar al proyecto

```bash
cd AppEat-Main
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar aplicación

```bash
npm start
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

## Estructura del Proyecto

```text
AppEat-Main
│
├── .github
│   └── workflows
│       └── ci.yml
│
├── public
├── src
│   ├── tests
│   ├── App.js
│   └── App.css
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## Estado del Proyecto

Versión MVP funcional desarrollada con fines académicos.  

Se implementaron las funcionalidades esenciales definidas para la entrega final del proyecto de Ingeniería de Software.

---

## Autor

Juan Felipe Sosa Giraldo

Ingeniería de Software
