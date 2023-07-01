import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    //parameter ada key dan value
    //session storage cuman ada di page dimana item itu di set kalau local storage misal open new tab sessionnya tetep bakal kesimpen
    sessionStorage.setItem('nama', 'yudhis')
    localStorage.setItem("npm", "202310067")
    return (
      <div className='container'>
        <h1>Hello this is a HOME page</h1>
        <p className="text-center">
          Clik <Link to="/profile">here</Link> to access the profile page.
        </p>
      </div>
    )
  }
}