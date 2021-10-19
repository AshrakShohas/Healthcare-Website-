import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./ServiceDetails.css"

const ServiceDetails = () => {
    const {doctorId} = useParams();
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/service-cart.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const item = doctors.filter(doctor => doctor.id == doctorId)

    return (
        <div className="d-flex justify-content-center ser-details">

        <div className="card m-3 " style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="">
                    <img src={item[0]?.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="">
                    <div className="card-body">
                        <h3 className="card-title">Name: {item[0]?.name}</h3>
                        <h4 className="card-text"><b>Specialist: </b> : {item[0]?.specialty}</h4>
                        <h4 className="card-text"><b>Qualification: </b> : <i> {item[0]?.qualification}</i></h4>
                        <h4 className="card-text"><b>Visiting Fee: </b> : <i> {item[0]?.visit}</i></h4>
                        <p className="card-text"> {item[0]?.description}</p>
                        <Link as={HashLink} to="/home"><button className="btn btn-primary">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetails;