/* eslint-disable no-unused-vars */
import { useContext } from "react";
import authentication, { AuthContext } from './Firebaseprovider'
import { useForm } from "react-hook-form"


const Login = () => {
const {signinUser}=useContext(AuthContext);

    
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    // const onSubmit = (data) => console.log(data)
  
    // console.log(watch("example"));
    const onSubmit = data => {
        const {email,password}=data;
      
        signinUser(email,password)
        .then(result=>{
            console.log(result)
        })
    }

    return (
        <div>
           <from onSubmit={handleSubmit(onSubmit)}>
           <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text"  {...register("example")} {...register("exampleRequired", { required: true })} className="grow" placeholder="Email" />
                {errors.exampleRequired && <span>This field is required</span>}
            </label>
           <label className="input input-bordered flex items-center gap-2">
                Password
                <input type="password"  {...register("example")} {...register("exampleRequired", { required: true })}  className="grow" placeholder="password" />
                {errors.exampleRequired && <span>This field is required</span>}
            </label>
            
            <button className="btn btn-success">Success</button>
           
           </from>
        </div>
    );
};

export default Login;