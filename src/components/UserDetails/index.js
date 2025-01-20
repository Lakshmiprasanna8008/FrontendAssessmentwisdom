import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/UserContext";
import "./index.css";

class UserDetails extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`User not found (status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => this.setState({ user: data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { user, loading, error } = this.state;
    const { theme } = this.context;

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
    if (!user)
      return (
        <div className="progress-container">
          <p>No User Found</p>
        </div>
      );

    return (
      <div className={`user-detail ${theme}`}>
        <div className="user-details">
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company?.name}</p>
          <p>Website: {user.website}</p>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

const UserDetailWithParams = (props) => {
  const params = useParams();
  return <UserDetails {...props} params={params} />;
};

export default UserDetailWithParams;
