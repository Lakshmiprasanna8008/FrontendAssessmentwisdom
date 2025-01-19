import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./index.css";

class Home extends Component {
  static contextType = UserContext;

  state = {
    currentPage: 1,
    usersPerPage: 5,
    darkMode: false,
    // Set the number of users to display per page
  };

  // Handle page change
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  toggleTheme = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { users, loading, error } = this.context;
    const { currentPage, usersPerPage, darkMode } = this.state;

    if (loading)
      return (
        <div className="Err-container">
          <p>Loading...</p>
        </div>
      );
    if (error)
      return (
        <div className="Err-container">
          <p>Not Found : {error}</p>
        </div>
      );

    // Calculate the index of the users to display
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Total pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    return (
      <div
        className={`whole-container ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <div className={`user-list ${darkMode ? "dark-mode" : "light-mode"}`}>
          <div className="toggle-container">
            {" "}
            <button onClick={this.toggleTheme}>
              Switch to {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>

          <header className="headers">
            <h1>User List</h1>
          </header>
          <ul>
            {currentUsers.map((user) => (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>City: {user.address.city}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => this.handlePageChange(page)}
                disabled={page === currentPage}
                style={{
                  margin: "0 5px",
                  padding: "5px 10px",
                  cursor: page === currentPage ? "not-allowed" : "pointer",
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
