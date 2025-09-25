# Generation X Encyclopedia

## Overview
The Generation X Encyclopedia is an interactive platform inspired by Douglas Coupland's book "Generation X". This project allows users to read, add, and enjoy newly coined words and expressions that reflect the unique culture and language of the Generation X era.

## Features
- **Read Words**: Users can browse a list of newly coined words and their definitions.
- **Add Words**: Users can submit their own words and expressions to the encyclopedia.
- **Word Details**: Users can view detailed information about each word, including its usage and origin.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
- **src**: Contains the source code for the backend application.
  - **controllers**: Contains the logic for handling requests related to words.
  - **models**: Defines the structure of word objects.
  - **routes**: Sets up the API endpoints for the application.
  - **types**: Contains TypeScript interfaces for type definitions.
  - **app.ts**: The entry point of the backend application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file for the backend.
- **README.md**: Documentation for the backend project.

### Frontend
- **src**: Contains the source code for the frontend application.
  - **components**: Contains reusable components for the application.
  - **pages**: Contains the main pages of the application.
  - **types**: Contains TypeScript interfaces for type definitions.
  - **App.tsx**: The main component that sets up routing and layout.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file for the frontend.
- **README.md**: Documentation for the frontend project.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd generation-x-encyclopedia
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Open a new terminal and navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.