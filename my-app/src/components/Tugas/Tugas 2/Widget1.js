import React, { Component } from "react";
import Layout from "./Layout";

class Widget1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Pem Web Lanjut Apps",
    };
  }

  newTitle = (newTitle) => {
    this.setState({ title: newTitle });
  };

  render() {
    return (
      <Layout title={this.state.title}>
        <div className="bg-body rounded shadow-sm p-10 p-lg-15">
          <form method="post" autoComplete="off" className="form w-100">
            <div className="text-center mb-10">
              <h1 className="text-dark mb-3">Widget One</h1>
              <div className="text-gray-300 fw-bold fs-5">
                Please fill up this form with correctly
              </div>
            </div>

            <div className="fv-row mb-10 fv-plugins-icon-container">
              <label className="form-label fs-6 fw-bolder text-dark my-2">
                Type the title of this web
              </label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg form-control-solid"
                defaultValue={this.state.title}
                onChange={(e) => this.newTitle(e.target.newTitle)}
              />
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100 mb-5 my-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Widget1;
