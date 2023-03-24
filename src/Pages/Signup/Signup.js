import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import signup from '../../assets/images/login.svg'
import { useToken } from '../../Hooks/useToken';


const Signup = () => {
    const { createUser, googleSignin, updateUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    /*
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);

    if (token) {
        navigate('/');
    }*/

    const handleToSignup = (data) => {
        setSignupError('');
        createUser(data.email, data.password, data.condition)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                alert("Created user successfully");
                const userInfo = {
                    displayName: data.name,
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name, data.condition);
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setSignupError(error.message);
            })

    }
    // create user collections

    const saveUser = (email, name, userType) => {
        const user = { email, name, userType };
        fetch('https://smart-resale-stall-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/');
            })
    }

    // google login
    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800] w-full flex flex-col md:flex-row justify-center items-center shadow-2xl my-10'>
            <img className='w-2/5' src={signup} alt="" />
            <div className='w-3/5'>
                <h1 className='text-2xl font-semibold text-center'>Signup</h1>
                <form onSubmit={handleSubmit(handleToSignup)}>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your name is required</p>}
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full" type='email'{...register("email",
                            { required: "Email address is required" }
                        )}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p
                            role='alert' className='text-red-700 font-xs'>{errors.email?.message}</p>}
                    </div>

                    <div className=" w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full" type='password'{...register("password",
                            {
                                required: "Password is required",
                            },
                        )}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p
                            role='alert' className='text-red-700 font-xs'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {signupError && <p className='text-red-700'>{signupError}</p>}
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">I am as a</span>
                        </label>
                        <select className="select select-bordered w-full"
                            {...register('condition', { required: "Please select one" })}
                        >
                            <option selected>user</option>
                            <option>seller</option>
                            <option>buyer</option>
                        </select>
                    </div>

                    <div className=" w-full my-3">
                        <input className='btn btn-accent' type="submit" value="Signup" />
                    </div>

                    <div>
                        <span>Already have an account? <Link className='text-primary hover:underline text-xs' to='/login'>Go to login</Link></span>
                    </div>


                </form>
                <div className=' w-full my-3'>
                    <div className="divider">OR</div>

                    <button onClick={handleGoogleSignIn} className='btn btn-outline mt-4'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;