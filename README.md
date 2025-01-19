# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React User Management App

This is a simple React application that demonstrates user management features, including fetching data from an API, state management using Context API, responsive design, dark/light mode, pagination, and error handling.

---

## Features

1. **Home Page**:

   - Fetches and displays a list of users from `https://jsonplaceholder.typicode.com/users`.
   - Search functionality to filter users by name.
   - Sort functionality to arrange users alphabetically (A-Z, Z-A).
   - Pagination for better usability on larger datasets.
   - Click on a user to navigate to their detailed profile page.

2. **User Detail Page**:

   - Displays detailed information about a selected user, including:
     - Name
     - Email
     - Phone
     - Company Name
     - Website
   - Includes a "Go Back" button to return to the Home Page.

3. **State Management**:

   - Uses React Context API for global state management of user data and application state.

4. **Error Handling**:

   - Gracefully handles loading states and displays error messages for API failures or invalid user IDs.

5. **Responsive Design**:

   - Fully responsive layout for both desktop and mobile devices using CSS media queries.

6. **Dark/Light Mode Toggle**:

   - Users can switch between dark and light themes for better accessibility and a customizable experience.

7. **Pagination**:
   - Divides the user list into manageable pages, enhancing usability and performance.

---

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-user-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```plaintext
react-user-management-app/
├── public/
│   └── index.html         # Main HTML file
├── src/
│   ├── components/
│   │   ├── Home.js        # Home page component
│   │   ├── UserDetails.js  # User details page component
│   │   ├── UserContext.js # Context API setup
│   ├── App.js             # Main app component
│   ├── App.css            # Styling
│   └── index.js           # Entry point
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation
```

---

## Available Scripts

- **Start the development server:**
  ```bash
  npm start
  ```

## API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - Endpoints:
    - `GET /users` - Fetches the list of users.
    - `GET /users/:id` - Fetches details of a specific user.

---

## Future Enhancements

1. **Dark/Light Mode:**

   - Improve theme toggle to save user preferences.

2. **Pagination:**

   - Implement server-side pagination for improved performance with large datasets.

3. **Improved State Management:**

   - Integrate Redux for more complex state management if required.

4. **Error Handling and Loading States:**
   - Enhance error messages and loading indicators to improve user experience while fetching or navigating.

---

### Author

Developed by Lakshmi Prasanna.
