import React from 'react'
import img_1 from '../images/1.png'


const Carousel = () => {
    return (
        <div className='carousel_1'>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Microsoft 365</h3>
                            <p>Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.</p>
                            <button> Shop Now  </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Microsoft 365</h3>
                            <p>Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.</p>
                            <button> Shop Now  </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Microsoft 365l</h3>
                            <p>Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription.</p>
                            <button> Shop Now  </button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel
