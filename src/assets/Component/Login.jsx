/* eslint-disable no-unused-vars */
import { useContext } from "react";
import authentication, { AuthContext } from './Firebaseprovider'
import { useForm } from "react-hook-form"


const Login = () => {
    const { signinUser } = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => console.log(data)

    // console.log(watch("example"));
    const onSubmit = data => {
        const { email, password } = data;

        signinUser(email, password)
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
               
               <input placeholder="Your Email" {...register("Email","exampleRequired",{ required: true })} />
               {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
              
               <input placeholder="Your Password" {...register("exampleRequired", { required: true })} />
               
               {errors.exampleRequired && <span className="text-red-600">This field is required</span>}

               <button className="btn btn-success">Success</button>

           </form>
        </div>
    );
};

export default Login;