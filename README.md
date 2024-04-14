# TWC TEST API

Basic Node.js REST API with CRUD operations

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)

## Project Structure

The project follows the following directory structure:

- `src/`: This is where your application code lives.
- `auth/`: Authentication related code.
- `config/`: Configuration files for your application.
- `controllers/`: Controllers handle the logic of routes.
- `middleware/`: Middleware functions.
- `models/`: Mongoose models.
- `routes/`: Application routes.
- `services/`: Services encapsulate business logic.
- `utils/`: Utility functions that can be reused throughout the app.

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/Niraj-Dilshan/twc-test-api
    ```
2. Navigate to the project directory:
     ```
     cd twc-test-api
     ```
3. Install dependencies:
     ```
     npm install
     ```
4. Set up the .env file:
     ```
     cp .env.example .env
     ```
5. Update the .env file with the following information:
     ```
     PORT=portnumber
     MONGODB_URI=mongodb://localhost/db
     SECRET_KEY=SecretKey
     ```

## Usage

1. Run the project locally:
     ```
     npm start
     ```
2. Access your application at http://localhost:3000 (replace "portnumber" with the port you specified).
