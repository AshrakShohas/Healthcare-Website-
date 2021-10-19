import { Button, ButtonGroup, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css"

const Service = ({service}) => {
    const { id,name, visit, description,qualification,img,specialty } = service;
    return (

     <div className = "container g-3 py-3"> 
                
        <div className = "service-details m-1">
        <div className="col p-2">
            <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                
                
                <div className="card-body">
                    <h3 className="card-title">Name: {name}</h3>
                    <h5 className="card-text">Visiting Fee: {visit}</h5>
                    <h5 className="card-text">Qualification: {qualification}</h5>
                    <p className="card-text">Specialist: {specialty}</p>
                </div>
                
                
                <Link className = "p-3" to ={`/servicedetails/${id}`}>
                <button className = "btn btn-primary mx-auto">Details</button>
                </Link>
            
            </div>
        </div>
        </div>
     </div>

        
    );
};

export default Service;