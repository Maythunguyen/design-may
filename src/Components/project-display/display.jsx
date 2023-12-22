import React from 'react'

function Display() {
  return (
    <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
                <h1 className="display-3" style={{ fontWeight: 200 }}>Designed for Bohemian</h1>
                <h3 className="text-muted mb-3" style={{ fontWeight: 'lighter' }}>Build anything you want with May</h3>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center">
            <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                    <h2 className="display-5">Ox Point</h2>
                    <p className="lead">Residential style</p>
                </div>
                <img src="https://hommes.studio/wp-content/uploads/18_p_casa_jl_5_solidos_photography_nick_wiesner_anna_dave_yatzer.jpeg" alt="Ox Point Residential Style" className="img-fluid mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }}/>
            </div>
            <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                    <h2 className="display-5">Hunters River</h2>
                    <p className="lead">Residential style</p>
                </div>
                <img src="https://www.estliving.com/wp-content/uploads/2017/12/est-living-interiors-hunters-hill-house-05.jpg" alt="Hunters River Residential Style" className="img-fluid mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }}/>
            </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 justify-content-center">
            <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                    <h2 className="display-5">Surry Hills</h2>
                    <p className="lead">Residential style</p>
                </div>
                <img src="https://i2.au.reastatic.net/800x600/b011384f49b7ee92f537461a8d401485ac850e95accf8b76d490317be3233ca2/main.jpg" alt="Surry Hills Residential Style" className="img-fluid mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }}/>
            </div>
            <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                    <h2 className="display-5">Lane Cove</h2>
                    <p className="lead">Residential style</p>
                </div>
                <img src="https://www.modscape.com.au/wp-content/uploads/2021/03/Modscape_Willioughby_160924_Final_01_Web-Res.jpg" alt="Lane Cove Residential Style" className="img-fluid mx-auto" style={{ width: '90%', height: '500px', objectFit: 'cover' }}/>
            </div>
        </div>
    </div>
  )
}

export default Display;
