import { useLoaderData, useParams } from "react-router-dom";


const Singlestate = () => {
    const abcd = useLoaderData();
    const { id } = useParams();
    const parint = parseInt(id);

    const singledata = abcd.find(singledata => singledata.id === parint);
    console.log(singledata);

    return (
        <div>
            <div className="card glass w-96">
                <figure>
                    <img
                        src={singledata.image}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>{singledata.price}</p>
                    <p>{singledata.status}</p>
                    <p>{singledata.area}</p>
                    <p>{singledata.location}</p>
                    <p>{singledata.facilities}</p>
                    <p>{singledata.description}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Singlestate;