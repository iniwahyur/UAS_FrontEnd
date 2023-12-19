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
              <button className="btn">Login</button>

              <Link to ="/form"> <button className="btn">Register</button></Link>
              {/* Mengubah teks "Register" menjadi "Login" */}
            </div>
            <h2 className="welcome-heading">Login</h2>
            <div>
              <span className='small-text'>Please login to your account</span>
            </div>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("username_or_email")} placeholder='Username or Email' />
              <input type="password" {...register("password")} placeholder='Password' />
              {errors.mobile?.type === "required" && "Username or Email is required"}
              <Link to ="/"><button className='btn' type="submit">Login</button></Link> 
              
            </form>

            <div className="already-have-account">
              <span></span>
              <a href="/register">Forgot Your Password</a> {/* Mengubah tautan ke halaman login */}
            </div>

            <div className="terms-privacy">
              <span className="small-text">Terms and Conditions & Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
