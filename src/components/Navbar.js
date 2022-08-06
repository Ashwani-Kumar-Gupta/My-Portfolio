import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.toggleMode()} bg-${props.mode}`}>
                <div className="container-fluid" style={{backgroundColor:'violet', border:'2px solid white', borderRadius:20, margin:5}}>
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        {/* <div className={`form-check form-switch`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="Toggle"/>
                            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="Toggle">{props.mode==='light'?'Dark':'Light'} Mode</label>
                        </div> */}
                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary'); props.showAlert("Mode Applied", "primary") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger'); props.showAlert("Mode Applied", "danger") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success'); props.showAlert("Mode Applied", "success") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning'); props.showAlert("Mode Applied", "warning") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark'); props.showAlert("Mode Applied", "dark") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light'); props.showAlert("Light Mode Applied", "success") }} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    myName: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "Nothing",
    myName: "Nothing",
}
