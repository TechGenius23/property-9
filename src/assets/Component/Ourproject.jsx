/* eslint-disable react/prop-types */
import { NavLink, } from "react-router-dom";


const Ourproject = ({ projectdata = {} }) => {

    const { estate_title, segment_name, image, price, status, area, location, facilities, description } = projectdata;
    return (
        <div>
            <NavLink to={'/ourproject'}>
                <div className="card bg-base-100 w-96 shadow-xl">

                    <figure>
                        <img
                            src={image}
                             />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{estate_title}</h2>
                        <p>{segment_name}</p>
                        <p>{price}</p>
                        <p>{status}</p>
                        <p>{area}</p>
                        <p>{location}</p>
                        <p>{facilities}</p>
                        <p>{description}</p>

                    </div>

                </div>
            </NavLink>
        </div>
    );
};

export default Ourproject;
