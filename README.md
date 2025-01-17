# User Management Server

This project is a basic **Express.js** server implementation designed to help beginners understand the fundamentals of server-side programming. It focuses on how servers work, how data is handled, and how to integrate servers with a local or external client application.

## Features
- **Basic Express Server**: A lightweight and modular framework for creating server-side applications.
- **CORS Integration**: Enables cross-origin requests between the server and clients running on different domains or ports.
- **API Routes**:
  - `GET /`: Returns a welcome message from the server.
  - `GET /users`: Fetches a list of predefined users.
  - `POST /users`: Allows adding a new user to the list.
- **Middleware Usage**:
  - `express.json()` for parsing JSON request bodies.
  - `cors()` for handling cross-origin resource sharing.
- **In-Memory Data**: The project uses an array to manage user data instead of a database, simplifying the learning process.

## Project Goals
The goal of this project is to:
1. Understand how a server operates locally.
2. Learn how to set up RESTful APIs using Express.js.
3. Explore how to handle client-server communication.
4. Get familiar with middleware and request-response cycles in Express.js.

## Technologies Used
- **Node.js**: JavaScript runtime environment for server-side applications.
- **Express.js**: Web framework for creating robust APIs.
- **CORS**: Middleware to handle cross-origin resource sharing.

## How to Run the Project Locally
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-server.git
   cd user-management-server
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed on your machine, then run:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   node index.js
   ```
   The server will run on the default port `5000` (or as set in `process.env.PORT`).

4. **Test the Endpoints**:
   Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the following endpoints:
   - `GET http://localhost:5000/`
   - `GET http://localhost:5000/users`
   - `POST http://localhost:5000/users` with a JSON body:
     ```json
     {
       "name": "Your Name",
       "email": "your-email@example.com"
     }
     ```

## API Routes
1. **GET `/`**:
   - Description: Returns a welcome message from the server.
   - Response Example:
     ```text
     User management server
     ```

2. **GET `/users`**:
   - Description: Fetches all users.
   - Response Example:
     ```json
     [
       { "id": 1, "name": "Tusher", "email": "tu@gmail.com" },
       { "id": 2, "name": "Bhakta", "email": "bhak@gmail.com" },
       { "id": 3, "name": "Anta", "email": "nt@gmail.com" }
     ]
     ```

3. **POST `/users`**:
   - Description: Adds a new user to the in-memory data array.
   - Request Body Example:
     ```json
     {
       "name": "New User",
       "email": "newuser@example.com"
     }
     ```
   - Response Example:
     ```json
     { "id": 4, "name": "New User", "email": "newuser@example.com" }
     ```

## Folder Structure
```plaintext
user-management-server/
│
├── index.js        # Main server file
├── package.json    # Project dependencies and metadata
├── package-lock.json # Lockfile for dependencies
└── README.md       # Project documentation
```

## Future Improvements
- Add a database (e.g., MongoDB or MySQL) to manage persistent user data.
- Implement user authentication and authorization.
- Build a front-end client to consume the APIs.
- Enhance error handling for invalid or malformed requests.

## Conclusion
This project demonstrates the basic setup and functionality of an Express.js server. It’s a great starting point for understanding server-side programming and building more complex applications. Contributions and feedback are welcome!

