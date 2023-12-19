import React from 'react';
import bgImg from '../assets/background.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
        <div className="col-1">
          <div className="button-container">
            <Link to ="/Login"><button className="btn">Login</button></Link> 
            <button className="btn">Register</button>
          </div>
          <h2>Welcome</h2>
          <div>
            <span className='small-text'>Please fill out the form to create your account</span>
          </div>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("yourname")} placeholder='Your Name' />
            <input type="text" {...register("username")} placeholder='Username' />
            <input type="text" {...register("email")} placeholder='Email' />
            <input type="password" {...register("password")} placeholder='Password' />
            <input type="password" {...register("confirmpwd")} placeholder='Confirm Password' />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <Link to ="/login"><button className='btn'>Sign Up</button></Link>
            
          </form>

          <div className="already-have-account">
            <span>Already have an account?</span>
            <a href="/login">Login here</a>
          </div>

          <div className="terms-privacy">
            <span className="small-text">Terms and Conditions & Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
