## Installation

Set environment variables in .env file

Since it is test project all connections are provided
```
DB_HOST='db'
DB_PORT='5432'
DB_NAME='postgres'
DB_USER='postgres'
DB_PASSWORD='psql'

```

Install dependencies
```
npm install
```

## Start the project for development

```
make start
```
or
```
docker-compose up --build
```

The project will be available on `localhost:3000`

## Project structure

```
config - app configuration
migrations - database migrations
modules - application modules (see ReadMe file inside)
plugins - fastify plugins
routes - global app routes
utils - utilities and helpers 
```

## API Documentation
API documentation is available on `localhost:3000/docs`

`localhost:3000/live` - uptime of the server
`localhost:3000/ready` - status of the server

`503` status code with an empty response if the server is not ready (started, shutting down, etc)
