/* eslint-disable no-unused-vars */
import { useContext } from "react";
import authentication, { AuthContext } from './Firebaseprovider'
import { useForm } from "react-hook-form"


const Register = () => {
    const { creatUser } = useContext(AuthContext);


    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()



  

    const onSubmit = data => {
        const { email, password } = data;

        creatUser(email, password)
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className="">
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

export default Register;