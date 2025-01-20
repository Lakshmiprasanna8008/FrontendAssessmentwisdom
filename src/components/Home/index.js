import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/UserContext";
import "./index.css";

class Home extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: "",
      sortOrder: "asc",
      loading: true,
      error: null,
      currentPage: 1,
      usersPerPage: 5,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSort = () => {
    const { sortOrder, users } = this.state;
    const sortedUsers = [...users].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    this.setState({
      users: sortedUsers,
      sortOrder: sortOrder === "asc" ? "desc" : "asc",
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      users,
      search,
      loading,
      error,
      currentPage,
      usersPerPage,
    } = this.state;
    const { theme } = this.context;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    const startIndex = (currentPage - 1) * usersPerPage;
    const currentUsers = filteredUsers.slice(
      startIndex,
      startIndex + usersPerPage
    );

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    if (loading)
      return (
        <div className="progress-container">
          <p>Loading...</p>
        </div>
      );
    if (error)
      return (
        <div className="progress-container">
          <p>Error: {error.message}</p>
        </div>
      );

    return (
      <div className={`home ${theme}`}>
        <h1>User List</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={this.handleSearch}
        />
        <button className="sort-button" onClick={this.handleSort}>
          Sort {this.state.sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
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
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => this.handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
