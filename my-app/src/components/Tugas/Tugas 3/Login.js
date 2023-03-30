import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

export default function Login() {
  const objLogin = {
    email: "",
    password: "",
  };

  const [login, setLogin] = useState(objLogin);
  const [successSubmit, setSuccseesSubmit] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    var formid = e.target.id;
    var target = document.getElementById(formid);
    var myButton = target.getElementsByClassName("btn-submit")[0];
    myButton.textContent = "Processing...";
    myButton.disabled = true;
    if (login.email == "yudha17d@gmail.com" && login.password == "yudha123") {
      setSuccseesSubmit(true);
    } else {
      setShow(true);
    }
    myButton.textContent = "Login";
    myButton.disabled = false;
  };

  return successSubmit ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="w-50 m-auto">
        <div className="card ">
          <div className="card-header">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder text-dark">LOGIN</span>
              <span className="text-gray-400 mt-1 fw-bold fs-6">
                Please fill up the form with correctly
              </span>
            </h3>
          </div>
          <div className="card-body">
            <form
              className="form-login"
              method="post"
              onSubmit={(e) => handlerSubmit(e)}
              id="form-login"
            >
              <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="required form-label fs-6 fw-bolder text-dark">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control form-control-lg form-control-solid"
                  defaultValue={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
              </div>

              <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="required form-label fs-6 fw-bolder text-dark">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="form-control form-control-lg form-control-solid"
                  defaultValue={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary mx-2 btn-submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill in the correct email and password!</Modal.Body>
      </Modal>
    </div>
  );
}
