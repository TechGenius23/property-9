/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";
import Estates from "./Estates";
import Ourproject from "./Ourproject";
import Review from './Review';
import Slider from "./Slider";
import React from "react";
import { Helmet } from "react-helmet";


const Home = () => {
    // const datas=useLoaderData(null)
    // const projects=useLoaderData(null)
    // console.log(projects);
    const { data, project, Reviews } = useLoaderData(null)
    console.log(data, project, Reviews);
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>,
            <Estates></Estates>,
            <div className='grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5'>
                {
                    data?.map(data => <Estates key={data.id} data={data}></Estates>)
                },
            </div>,

            <Ourproject></Ourproject>,
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    project.slice().map(project => <Ourproject key={project.id} projectdata={project}></Ourproject>)
                },
            </div>

            <Review></Review>,
            <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5'>
                {
                    Reviews.map(feedback => <Review key={feedback.id} sheam={feedback}></Review>)
                },

            </div>

        </div>
    );
};

export default Home;