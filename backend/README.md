# Generation X Encyclopedia Backend

This is the backend for the Generation X Encyclopedia project, inspired by Douglas Coupland's book "Generation X". The backend is built using Node.js and TypeScript, providing an API for managing newly coined words and expressions.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling requests related to words.
    - `wordsController.ts`: Controller for managing word-related operations.
  - **models/**: Contains the data models used in the application.
    - `word.ts`: Defines the structure of a word object.
  - **routes/**: Contains the route definitions for the API.
    - `wordsRoutes.ts`: Defines the API endpoints for words.
  - `app.ts`: Entry point of the backend application, initializes the Express app.
  - **types/**: Contains TypeScript interfaces for type definitions.
    - `index.ts`: Defines the types used in the application.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd generation-x-encyclopedia/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- `GET /api/words`: Retrieve a list of all words.
- `POST /api/words`: Add a new word.
- `GET /api/words/:id`: Retrieve a specific word by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.