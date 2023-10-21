import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import axios from "axios";

const SignUp = () => {

    const {createUser}=useContext(Authcontext)

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const email= form.email.value;
        const password=form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            const createdAt=result?.user?.metadata?.creationTime;
            const user={email , createdAt:createdAt};

          // using axios
           
          axios.post('http://localhost:5003/user',user)
          .then(data=>{
            console.log(data.data.insertedId)
          })
          


            //using fetch
            // fetch("http://localhost:5003/user",{
            //     method:"POST",

            //     headers:{
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify(user)

            // })
            // .then(res=>res.json())
            // .then(data=>{
            //     console.log(data)
            //     if(data.insertedId){
            //         alert('your data is is stored in mongoDB')
            //     }
            // })
        })
        .catch(err=>{
            console.log(err.message)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">sign up now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;