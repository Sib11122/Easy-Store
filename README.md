# 🛒 EasyStore

**EasyStore** is a full-stack e-commerce web application built with **Spring Boot, React, and MySQL**. The project provides a modern shopping experience with a React-based frontend and a Java Spring Boot REST API backend.

The repository contains both the backend and frontend applications in a single project.

## 🚀 Tech Stack

### Backend

* ☕ Java
* 🌱 Spring Boot
* 🌐 Spring Web / REST API
* 🗄️ Spring Data JPA
* 🛢️ MySQL
* 📦 Maven
* 🐳 Docker

### Frontend

* ⚛️ React
* ⚡ Vite
* 🧭 React Router
* 🎨 CSS
* ⭐ FontAwesome
* 📡 REST API integration

The frontend is a Vite React application, while the backend is a Maven-based Spring Boot project.

---

## 📁 Project Structure

```text
Easy-Store/
│
├── EazyStickers/             # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │           └── sql/
│   │               ├── schema.sql
│   │               └── data.sql
│   │
│   ├── Dockerfile
│   ├── pom.xml
│   └── mvnw
│
├── eazystore-ui/             # React Frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── TODO.md
```

The repository currently has separate `EazyStickers` and `eazystore-ui` applications.

---

# ✨ Features

* 🛍️ Product listing
* 🔎 Product browsing
* 🛒 Shopping-oriented frontend
* 🔗 React frontend connected to Spring Boot REST APIs
* 🗄️ Database-backed product data
* 📦 SQL schema and seed data
* 🌓 Frontend theme support
* 📱 Responsive UI
* 🧩 Component-based React architecture
* 🔌 RESTful backend architecture

---

# 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      React UI       │
                    │     Vite + React    │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │    Spring Boot      │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                               │ JPA / JDBC
                               ▼
                    ┌─────────────────────┐
                    │       MySQL         │
                    │      Database       │
                    └─────────────────────┘
```

---

# ⚙️ Prerequisites

Before running EasyStore, install:

* Java 21+
* Maven
* Node.js
* npm
* MySQL 8+
* Git

Docker can optionally be used for running MySQL.

---

# 🔧 Backend Setup

Navigate to the backend:

```bash
cd EazyStickers
```

Build the project:

```bash
./mvnw clean install
```

On Windows:

```cmd
mvnw.cmd clean install
```

Run the application:

```bash
./mvnw spring-boot:run
```

On Windows:

```cmd
mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8081
```

---

# 🗄️ Database Configuration

Create the MySQL database:

```sql
CREATE DATABASE eazystore;
```

Configure your Spring Boot application:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/eazystore
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true

spring.sql.init.mode=always
spring.sql.init.schema-locations=classpath:sql/schema.sql
spring.sql.init.data-locations=classpath:sql/data.sql
```

The project contains SQL resources for creating the schema and loading initial data.

---

# 🐳 Running MySQL with Docker

You can run MySQL using Docker:

```bash
docker run -p 3307:3306 \
  --name eazystoredb \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=eazystore \
  -v "C:\eazystore-mysql-data:/var/lib/mysql" \
  -d mysql:8.0
```

If using port `3307`, configure Spring Boot accordingly:

```properties
spring.datasource.url=jdbc:mysql://localhost:3307/eazystore
```

---

# 🎨 Frontend Setup

Navigate to the frontend:

```bash
cd eazystore-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

The frontend is configured as a Vite React application and includes FontAwesome dependencies.

---

# 🔗 Frontend ↔ Backend

The frontend communicates with the Spring Boot backend through REST APIs.

Configure the backend API URL using the frontend environment file:

```env
VITE_API_BASE_URL=http://localhost:8081
```

Make sure the Spring Boot backend is running before using features that require database/API access.

---

# 📸 Product Images

Product image URLs are provided by the backend and resolved by the frontend to display the appropriate product assets.

The repository's development TODO specifically includes mapping backend `imageUrl` values to frontend assets.

---

# 🧪 Development

Recommended development workflow:

```text
1. Start MySQL
       ↓
2. Start Spring Boot backend
       ↓
3. Start React frontend
       ↓
4. Open the frontend in browser
       ↓
5. React requests data from REST API
       ↓
6. Spring Boot retrieves data from MySQL
       ↓
7. API response is displayed in React
```

---

# 📌 Future Improvements

Some possible improvements for the project:

* [ ] User authentication and authorization
* [ ] Shopping cart persistence
* [ ] Order management
* [ ] Payment gateway integration
* [ ] Admin dashboard
* [ ] Product search
* [ ] Product categories
* [ ] Product reviews and ratings
* [ ] Pagination
* [ ] Wishlist
* [ ] Docker Compose for complete application setup
* [ ] Automated testing
* [ ] CI/CD pipeline
* [ ] Production deployment

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Author

**Sehaj Deep**

GitHub:
https://github.com/Sib11122

---

# 📄 License

This project is currently intended for educational and development purposes.

---

## ⭐ EasyStore

A full-stack e-commerce project built while learning and applying:

**Java + Spring Boot + REST APIs + JPA + MySQL + React + Vite + Docker**
