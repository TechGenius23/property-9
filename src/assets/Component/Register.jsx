/* eslint-disable no-unused-vars */
import { useContext } from "react";
import authentication, { AuthContext } from './Firebaseprovider'
import { useForm } from "react-hook-form"


const Register = () => {
const {creatUser}=useContext(AuthContext);

    
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
      
        creatUser(email,password)
        .then(result=>{
            console.log(result)
        })
    }

    return (
        <div>
           <from onSubmit={handleSubmit(onSubmit)}>
           <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="email"  {...register("example")} {...register("exampleRequired", { required: true })} className="grow" placeholder="Email" />
              
            </label>
            {errors.exampleRequired && <span>This field is required</span>}
           <label className="input input-bordered flex items-center gap-2">
                Password
                <input type="password"  {...register("example")} {...register("exampleRequired", { required: true })}  className="grow" placeholder="password" />
              
            </label>
            {errors.exampleRequired && <span>This field is required</span>}
           
            <button className="btn btn-secondary">Secondary</button>
           </from>
        </div>
    );
};

export default Register;