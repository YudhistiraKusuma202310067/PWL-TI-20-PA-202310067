import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import axios from "axios";

export default function FormProfile(props) {
  var today = new Date();
  const currDate = formatDate(today);
  const objProfile = {
    npm: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    birthdate: currDate,
  };

  const [profile, setProfile] = useState(objProfile);

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:8080/api/students",
      headers: { "Content-Type": "application/json" },
      data: profile,
    };
    axios
      .request(config)
      .then((response) => {
        let results = response.data.data;
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getUser();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      })
      .catch((response) => {
        openModal({ header: "Error", message: response.error });
      });
  };

  return (
    <div className="card ">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">
            Form add data user
          </span>
          <span className="text-gray-400 mt-1 fw-bold fs-6">
            Please fill up the form with correctly
          </span>
        </h3>
      </div>
      <div className="card-body">
        <form
          className="form-profile"
          method="post"
          onSubmit={(e) => submitForm(e)}
          id="form-profile"
        >
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">
              NPM
            </label>
            <input
              type="text"
              name="npm"
              required
              className="form-control form-control-lg form-control-solid"
              pattern="^[0-9]*$"
              defaultValue={profile.npm}
              onChange={(e) => setProfile({ ...profile, npm: e.target.value })}
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="form-control form-control-lg form-control-solid"
              defaultValue={profile.firstname}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              required
              className="form-control form-control-lg form-control-solid"
              defaultValue={profile.firstname}
              onChange={(e) =>
                setProfile({ ...profile, firstname: e.target.value })
              }
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">
              Middle Name
            </label>
            <input
              type="text"
              name="middlename"
              className="form-control form-control-lg form-control-solid"
              defaultValue={profile.middlename}
              onChange={(e) =>
                setProfile({ ...profile, middlename: e.target.value })
              }
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              required
              className="form-control form-control-lg form-control-solid"
              defaultValue={profile.lastname}
              onChange={(e) =>
                setProfile({ ...profile, lastname: e.target.value })
              }
            />
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="required form-label fs-6 fw-bolder text-dark">
              Birthdate
            </label>
            <DatePicker
              selected={new Date(profile.birthdate)}
              onChange={(value) =>
                setProfile({ ...profile, birthdate: formatDate(value) })
              }
              className="form-control form-control-lg form-control-solid"
              dateFormat="yyyy-MM-dd"
              placeholderText="Choose Date"
            />
          </div>

          <div className="text-center">
            <button type="button" className="btn btn-lg btn-light">
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-lg btn-primary mx-2 btn-submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const formatDate = (datestring) => {
  const today = new Date(datestring);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};