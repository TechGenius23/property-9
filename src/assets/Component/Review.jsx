/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Review = (sheam) => {
  const { reviewerName, jobTitle } = sheam;

  return (

    <div className="card bg-base-100 w-96 shadow-xl">
      <NavLink to={'/review'}></NavLink>
      <div className="card-body">
        <h2 className="card-title">{reviewerName}</h2>
        <h2 className="card-title">{jobTitle}</h2>
        <p>Are you ready to buy?</p>
      </div>

    </div>
  );
};

export default Review;