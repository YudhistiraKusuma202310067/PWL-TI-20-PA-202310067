// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { Modal } from "react-bootstrap";

// export default function Login() {
//   const objLogin = {
//     email: "",
//     password: "",
//   };

//   const [login, setLogin] = useState(objLogin);
//   const [successSubmit, setSuccseesSubmit] = useState(false);

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);

//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     var formid = e.target.id;
//     var target = document.getElementById(formid);
//     var myButton = target.getElementsByClassName("btn-submit")[0];
//     myButton.textContent = "Processing...";
//     myButton.disabled = true;
//     if (login.email == "yudha17d@gmail.com" && login.password == "yudha123") {
//       setSuccseesSubmit(true);
//     } else {
//       setShow(true);
//     }
//     myButton.textContent = "Login";
//     myButton.disabled = false;
//   };

//   return successSubmit ? (
//     <Navigate to="/home" replace={true} />
//   ) : (
//     <div className="container" style={{ marginTop: 150 }}>
//       <div className="w-50 m-auto">
//         <div className="card ">
//           <div className="card-header">
//             <h3 className="card-title align-items-start flex-column">
//               <span className="card-label fw-bolder text-dark">LOGIN</span>
//               <span className="text-gray-400 mt-1 fw-bold fs-6">
//                 Please fill up the form with correctly
//               </span>
//             </h3>
//           </div>
//           <div className="card-body">
//             <form
//               className="form-login"
//               method="post"
//               onSubmit={(e) => handlerSubmit(e)}
//               id="form-login"
//             >
//               <div className="fv-row mb-10 fv-plugins-icon-container">
//                 <label className="required form-label fs-6 fw-bolder text-dark">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="form-control form-control-lg form-control-solid"
//                   defaultValue={login.email}
//                   onChange={(e) =>
//                     setLogin({ ...login, email: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="fv-row mb-10 fv-plugins-icon-container">
//                 <label className="required form-label fs-6 fw-bolder text-dark">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   required
//                   className="form-control form-control-lg form-control-solid"
//                   defaultValue={login.password}
//                   onChange={(e) =>
//                     setLogin({ ...login, password: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="btn btn-lg btn-primary mx-2 btn-submit"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Information</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Please fill in the correct email and password!</Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// //PERTEMUAN AFTER UAS
// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Form() {
//   return (
//     <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
//         <Link to={"/"} className="mb-12">
//             <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
//         </Link>
//         <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor:"#80008008" }}>
//             <form method="post" className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'>
//                 <div className="text-center mb-10">
//                     <h1 className="text-dark mb-3">Sign In to Portal</h1>
//                     <div className="text-gray-400 fw-bold fs-4">
//                         New Here ?
//                         <Link to={"/signup"} className="ms-2 text-decoration-none">Create an account</Link>
//                     </div>
//                 </div>
//                 <div className="fv-row mb-10 fv-plugins-icon-container">
//                     <label className="form-label fs-6 fw-bolder text-dark">Email</label>
//                     <input type="email" name="email" className='form-control form-control-lg' />
//                 </div>
//                 <div className="fv-row mb-10 fv-plugins-icon-container">
//                     <label className="form-label fs-6 fw-bolder text-dark">Password</label>
//                     <input type="password" name="password" className='form-control form-control-lg' />
//                 </div>
//                 <div className="text-center">
//                     <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Continue</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

//Tugas 5
import React, { useState }  from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { openModal } from '../../Latihan/Pertemuan 4/layouts/components/modals/ModalPopUp';

const Login = () => {
    // data
    const [objAuth, setObjAuth] = useState({
        email: "",
        password: ""
    });

    // submit form
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (objAuth.email !== "" && objAuth.password !== "") {
            setPostAuth({ ...postAuth, loading: true, message: "", data: [] });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8080/api/auth/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: objAuth
            };
            axios.request(config)
                .then((response) => {
                    let results = response.results;
                    if (results === 'false') {
                        setPostAuth({ ...postAuth, loading: false, message: "Email or password is not match", data: [] });
                    } else {
                        setPostAuth({ ...postAuth, loading: false, message: "welcome " + objAuth.email, data: response });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setPostAuth({ ...postAuth, loading: false, message: error });
                })
        } else {
            openModal({ header: "Information", message: "Please fill up the form with correctly" });
        }
    }

    // post
    const [postAuth, setPostAuth] = useState({
        loading: false,
        data: [],
        message: ""
    })
    // session storage
    sessionStorage.setItem('nama', 'yudhis')

    // local storage
    localStorage.setItem("npm", "202310067")

    return (
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <Link to={"/"} className="mb-12">
                <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="logo-ibik" className='h-40px' />
            </Link>
            <div className="w-lg-500px rounded shadow-sm p-10 p-lg-15 mx-auto" style={{ backgroundColor: "#80008008" }}>
                <form method="post" className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework' autoComplete='off'
                    onSubmit={(e) => handlerSubmit(e)}>
                    <div className="text-center mb-10">
                        <h1 className="text-dark mb-3">Sign In to Portal</h1>
                        <div className="text-gray-400 fw-bold fs-4">
                            New Here ?
                            <Link to={"/signup"} className="ms-2 text-decoration-none">Create an account</Link>
                        </div>
                    </div>
                    <div className='alert alert-primary'>
                        {(postAuth.message) ? <p>{postAuth.message}</p> : ""}
                    </div>

                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input type="email" name="email" className='form-control form-control-lg'
                            defaultValue={objAuth.email}
                            onChange={(e) => setObjAuth({ ...objAuth, email: e.target.value })} />
                    </div>
                    <div className="fv-row mb-10 fv-plugins-icon-container">
                        <label className="form-label fs-6 fw-bolder text-dark">Password</label>
                        <input type="password" name="password" className='form-control form-control-lg'
                            defaultValue={objAuth.password}
                            onChange={(e) => setObjAuth({ ...objAuth, password: e.target.value })}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-lg btn-primary w-100 mb-5" type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
