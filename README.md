# com.diegoenriquezserrano

A PWA for a multi-tenant blog built with Next.js and TypeScript that allows multiple users to create, manage, and subscribe to newsletters via a separate authorized API server application. Users can manage their newsletters and subscribers. Includes support for registered user subscriptions as well as unregistered subscribers. User registrations and unregistered subscriptions require confirmed receipt of emailed timestamped signed tokens for activation. The API supports token-based authentication.

---

## Index

- [Features](#features)
- [Stack](#tech-stack)
- [Requirements](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database](#database-migrations)
- [Running the Application](#running-the-application)
- [Authentication](#authentication)
- [Testing](#testing)
- [License](#license)

---

## Features

- User registration, confirmation and token-based authentication
- User and non-user subscriptions
- User profiles
- Post categories, comments, likes and bookmarks
- Post notifications

---

## Stack

- Node.js 22+
- Next.js
- Docker & Docker Compose

---

## Requirements

- Node.js 22 higher
- npm
- Docker & Docker Compose

---

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/DiegoEnriquezSerrano/com.diegoenriquezserrano
   cd ./com.diegoenriquezserrano
   ```

2. Install project dependencies

   ```bash
   npm install
   ```

3. Build docker environment
   ```bash
   docker compose build
   ```

---

## Configuration

1. Copy `example.env` to `.env`

   ```bash
   cp example.env.docker .env.docker
   ```

2. Update environment variables in `.env`, refer to comments for directions on setting values.

---

## Running the Application

1. Start your services using docker compose
   ```bash
   docker compose up -d
   ```

Your client server will be accessible at `http://localhost:3035/`.

---

## Authentication

This API uses JWT for authentication. Include the token in the `Authorization` header for protected endpoints:

```text
Authorization: Bearer <your-access-token>
```

the token is also sent as an Http cookie upon successful login attempt.

---

## Testing

Run tests with:

```bash
npm run test
```

---

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the COPYING file for details.
