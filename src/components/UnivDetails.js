import React from 'react';
import { Link } from 'react-router-dom';

const UnivDetails = (props) => {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <div className="small mb-1">Nama Universitas: {props.univ.name}</div>
                        <h1 className="display-5 fw-bolder">{props.univ.country}</h1>
                        <div className="fs-5 mb-5">
                            <span>Kode Negara: {props.univ.alpha_two_code}</span>
                        </div>
                        <p className="lead">{props.univ.web_pages}</p>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UnivDetails;