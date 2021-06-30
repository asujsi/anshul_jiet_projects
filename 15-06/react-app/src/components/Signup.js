import React from "react";
import Axios from "axios";

class Signup extends React.Component {
  state = { user: {} };
  onSubmitClick = async (event) => {
    event.preventDefault();
    console.log(this.state.user);
    await Axios.post("http://localhost:7000/signup", this.state.user)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <form>
        <div className="mb-3">
          <label for="firstname" className="form-label">
            First Name
          </label>
          <input
            type="name"
            className="form-control"
            id="firstname"
            placeholder="First Name"
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  firstName: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="name"
            className="form-control"
            id="lastname"
            placeholder="Last Name"
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  lastName: e.target.value,
                },
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  email: e.target.value,
                },
              });
            }}
          />
        </div>
        <div class="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              this.setState({
                user: {
                  ...this.state.user,
                  password: e.target.value,
                },
              });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmitClick}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Signup;
