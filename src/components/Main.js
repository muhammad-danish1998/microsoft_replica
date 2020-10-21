import React from 'react'
import img from '../images/4.webp'
import img1 from '../images/3.webp'

const Main = () => {
    return (
        <div className='main_1'>
            <div className=''>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-12'>
                        <div className="card">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn ">SHOP NOW   </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-12'>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn ">SHOP NOW   </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-12'>
                        <div className="card">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn ">SHOP NOW   </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-12'>
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn ">SHOP NOW   </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
