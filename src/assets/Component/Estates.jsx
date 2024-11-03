/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Estates = ({ data = {} }) => {
    console.log(data);
    const { estate_title, segment_name, description, image, id, area } = data;

    return (

        
        <Link to={`/home/${data.id}`}>
             
            <div className="card bg-base-100 w-96 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2>{id}</h2>
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p>{segment_name}</p>
                    <p>{area}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Estates;