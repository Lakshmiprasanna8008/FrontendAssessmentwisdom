import React, { createContext, Component } from "react";

// Create Context
export const UserContext = createContext();

class UserProvider extends Component {
  state = {
    users: [],
    loading: true,
    error: null,
  };

  // Fetch users and manage state
  fetchUsers = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      this.setState({ users: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, fetchUsers: this.fetchUsers }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
