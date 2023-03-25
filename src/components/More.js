
import React from "react";

export default class More extends React.Component {
    render() {
        return <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/7486/7486797.png" alt="404"
                            className="img-fluid" />
                    </div>
                    <div className=" col-md-6 mt-5 text-light">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <a href="/" className="btn btn-primary">Go Home</a>
                    </div>

                </div>
    </div>
    }
}