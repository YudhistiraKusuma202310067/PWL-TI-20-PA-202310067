import React from "react";

const Layout = (props) => {
  return (
    <div
      className="d-flex flex-column flex-root vh-100"
      style={{ backgroundColor: "purple" }}
    >
      <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <h1 className="mb-12 text-white text-center my-5">{props.title}</h1>
          <div className="w-50 bg-body rounded shadow-sm p-4 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
