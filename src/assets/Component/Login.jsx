/* eslint-disable no-unused-vars */
import { useContext } from "react";
import authentication, { AuthContext } from './Firebaseprovider'
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";


const Login = () => {
    const { signinUser } = useContext(AuthContext);


    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm()

    // const onSubmit = (data) => console.log(data)

    // console.log(watch("example"));
    const onSubmit = (e,data) => {
        const { email, password } = data;
        e.preventDefault()
        signinUser(email, password)
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className="">
            <p className="text-center text-green-500 font-bold text-2xl">We are the best property seller in Bangladesh</p>

            <div onSubmit={(onSubmit)} className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log In</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required 
                                    defaultValue="test" 
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required 
                                    
                                />
                               
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Log In</button><br />
                                <Link to={'/register'}>
                                    <button type="button" className="btn btn-warning"> If New Please Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;