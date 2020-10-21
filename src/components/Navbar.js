import React from 'react'
import logo from '../images/logo.png'


const Navbar = () => {
    return (
        <div className='navbar_1'>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img src={logo} alt='logo img' className='logoStyle' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Microsoft 365 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Office</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Windows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Support</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">All Microsoft <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i>
                                    <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true"></i>
                                    <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </form>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
