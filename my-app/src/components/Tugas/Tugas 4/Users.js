import React, { useEffect, useState } from "react";
import FormUser from "./FormUser";
import UserCard from "./UserCard";
import axios from "axios";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
// import PackageJSON from "../../../../../../../../../package.json";

export default function Users() {
  //const [product, setProduct] = useState([]);
  const [user, setUser] = useState({
    loading: false,
    data: [],
    message: ""
  });

  const getUser = () => {
    setUser({ ...user, loading: true });
    let config = { 
      method: 'get',
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/students",
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //setProduct(response.data.data)
        setUser({ ...user, loading: false, data: response.data.data, message:"" });
        //console.log(product)
      })
      .catch((error) => {
        //console.log(error);
        setUser({ ...user, loading: false, message: error, data:[] });
      });
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div id="product-master">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">{Object.values(user.data).length} items of user</h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <select name="sort" className="form-select">
                  <option value="">Sort by</option>
                  <option value="">Name</option>
                  <option value="">NPM</option>
                </select>
              </div>
            </div>
          </div>

          {(user.loading) ? <LoadingSpin /> : ''}
          {(user.message) ? <AlertInfo message={user.message.name+". "+user.message.message} variant="danger" /> : ""}
            <div className="product-items ">
              <UserCard data={user.data} />
            </div>

        </div>
        <div className="col-sm-12 col-lg-4">
          <FormUser getUser={getUser} />
          {/* <FormUser /> */}
        </div>
      </div>
    </div>
  );
}