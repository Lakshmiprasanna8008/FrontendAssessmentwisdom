import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

class UserDetail extends Component {
  state = {
    user: null,
    loading: true,
    error: null,
    darkMode: true,
  };

  componentDidMount() {
    const { id } = this.props.params;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch user details");
        return response.json();
      })
      .then((data) => this.setState({ user: data, loading: false }))
      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  }

  toggleTheme = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { user, loading, error, darkMode } = this.state;

    if (loading)
      return (
        <div className="Err-container">
          <p>Loading...</p>
        </div>
      );
    if (error)
      return (
        <div className="Err-container">
          <p>Not Found</p>
        </div>
      );

    return (
      <div
        className={`whole-containers  ${darkMode ? "dark-mode" : "light-mode"}`}
      >
        <div className={`user-list ${darkMode ? "dark-mode" : "light-mode"}`}>
          <div className="toggle-container">
            <button onClick={this.toggleTheme}>
              Switch to {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
          <p>Website: {user.website}</p>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

const UserDetailWithParams = (props) => {
  const params = useParams();
  return <UserDetail {...props} params={params} />;
};

export default UserDetailWithParams;
