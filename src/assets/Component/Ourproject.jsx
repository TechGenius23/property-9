import { NavLink, } from "react-router-dom";


const Ourproject = (projectdata={}) => {
    console.log(projectdata);
    const {estate_title,segment_name } = projectdata;
    return (
        <div>
            <NavLink to={'/ourproject'}></NavLink>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={''}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>{estate_title}</p>
                    <p>{segment_name}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Ourproject;
