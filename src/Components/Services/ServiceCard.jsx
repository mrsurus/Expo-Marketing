import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
    const { service_id,name,photo,description,rating,duration} = service
    return (
        <div className="card card-compact text-left bg-base-100 shadow-2xl ">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{rating}</p>
                <p>{duration}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/sevicedetails/${service_id}`}>  <button className="btn btn-primary">More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard