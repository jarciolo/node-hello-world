import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import searchIcon from '../assets/images/search.png'
import '../css/Header.css'

const HeaderPage = () => {
  return (

    <Navbar variant="dark" className="header">
      <div className="d-flex align-items-center justify-content-between w-100">
        <Nav className="mr-auto" className="navList">
          <Nav.Link className="text-uppercase" href="#">Rankings</Nav.Link>
          <Nav.Link className="text-uppercase" href="#">Tools</Nav.Link>
          <Nav.Link className="text-uppercase" href="#">Blog</Nav.Link>
          <Nav.Link className="text-uppercase" href="#">Resources</Nav.Link>
        </Nav>
        <div style={{ minWidth: "120px" }}>
          <InputGroup className="w-100 d-flex align-items-center">
            <FormControl
              className="searchBox bg-none rounded-0 border-top-0 border-right-0 border-left-0"
              placeholder="Search"
            />
            <InputGroup.Append>
              <a href="#"><img src={searchIcon} className="pl1" alt="search" width="12" height="12" /></a>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </Navbar>
  )
}
export default HeaderPage
