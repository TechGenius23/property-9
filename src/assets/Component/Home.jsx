
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates";
import Ourproject from "./Ourproject";
import Review from "./Review";
import Slider from "./Slider";



const Home = () => {
    const datas=useLoaderData(null)
    const projects=useLoaderData(null)
    return (
        <div>
          
            <Slider></Slider>,
            <Estates></Estates>,
            <div  className='grid grid-cols-3'>
            {
                datas?.map(data=><Estates key={data.id} data={data}></Estates>)
            },
            </div>
            <Ourproject></Ourproject>,
            <div className="grid grid-cols-4">
            {
                projects.slice(0,2).map(project=><Ourproject key={project.id} projectdata={project}></Ourproject>)
            },
            </div>
            <Review></Review>,
            
        </div>
    );
};

export default Home;