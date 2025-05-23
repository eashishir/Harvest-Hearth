import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';

const Login = () => {
const captchaRef = useRef(null)
const [disabled, setDisabled] =useState(true);
const {signIn} = useContext(AuthContext);


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        // Swal.fire({
        //     title: 'User Login Successful.',
        //     showClass: {
        //         popup: 'animate__animated animate__fadeInDown'
        //     },
        //     hideClass: {
        //         popup: 'animate__animated animate__fadeOutUp'
        //     }
        // });
        // navigate(from, { replace: true });
    })
  }

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
  }
  else {
      setDisabled(true);
  }
    
  }



  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col md:flex-row-reverse">
    <img
                        src="https://img.freepik.com/premium-vector/cartoon-woman-preparing-food-kitchen-home-vector-interior_507816-563.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input ref={captchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

                </div>
                <div className="form-control mt-6">
                    {/* TODO: apply disabled for re captcha */}
                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
            </form>
            <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
           
        </div>
    </div>
</div>
  );
};

export default Login;