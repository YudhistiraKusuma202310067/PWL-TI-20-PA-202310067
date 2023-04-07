import React from "react";

export default function UserCard({ data }) {
  const UserList = ({ user }) => {
    return (
      <div class="card mb-3" style={{ maxWidth: "540px", background: "white" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={require("../../../../../../../../asset/user.png")}
              className="img-fluid rounded-start p-2 mt-2"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">NPM : {user.npm}</h5>
              <p class="card-text">
                Name : {user.firstname} {user.middlename} {user.lastname}{" "}
              </p>
              <p class="card-text">Birthdate : {user.birthdate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="user-list">
      <div className="row d-flex mb-2">
        {Object.values(data).length > 0 ? (
          data.map((v, index) => (
            <div className="col-5" key={index}>
              <UserList user={v} />
            </div>
          ))
        ) : (
          <p className="text-danger">No record found</p>
        )}
      </div>
    </div>
  );
}
