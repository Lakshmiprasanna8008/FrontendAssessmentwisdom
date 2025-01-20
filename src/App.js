import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";
import { AppContextProvider } from "./context/UserContext";
import NotFound from "./components/NotFound";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
  };

  render() {
    const { theme } = this.state;
    return (
      <AppContextProvider value={{ theme }}>
        <div className={`app ${theme}`}>
          <div className={`app ${theme}`}>
            <button
              onClick={this.toggleTheme}
              className={`theme-toggle ${theme}`}
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<UserDetails />} />
                <Route element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
