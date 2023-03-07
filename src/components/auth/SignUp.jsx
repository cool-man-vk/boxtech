import React from 'react';
import { TextField } from '@mui/material';

const SignUp = (props) => {

  const [showDetails , setShowDetails] = React.useState(false);



  return (
    <div>
        <h1 className='text-center text-[35px] p-3'>Sign Up</h1>
              <h3 className='text-[16px] text-center'>
                <span>Already a Member?</span>
                <span className='text-[blue]'>
                  <button onClick={props.clickFunction}>Login</button>
                </span>
              </h3>
              {
                showDetails
                ? <div className='w-[100%]'>
                            <div className='w-[100%] flex flex-col justify-center items-center'>
                                <div className='m-2'>
                                    <TextField 
                                        label="Email" 
                                        variant="outlined" 
                                        name='email'
                                    />
                                </div>
                                <div className='m-2'>
                                    <TextField 
                                        label="Password" 
                                        variant="outlined" 
                                        name='password'
                                        type="password"
                                    />
                                </div>
                                <button className='bg-[orange] w-full mx-2 rounded-[5px] p-2 text-white my-3'>
                                    Signup
                                </button>
                                <div>
                                    <h3 className='text-center text-[18px] py-3'>or signup with</h3>
                                    <div className='flex justify-center items-center'>
                                        <button className='p-3'>
                                            <img src="images/icons/fb-icon.png" alt='fb icon' className='w-[40px] h-[40px]'/>
                                        </button>
                                        <button className='p-3'>
                                            <img src="images/icons/google-icon.png" alt='google icon' className='w-[40px] h-[40px]'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                : <div>
                <div className='flex flex-col justify-center items-center'>
                    <button className='bg-[#1e4dab] text-white text-[14px] p-2 my-3 rounded-[5px]'>
                        <div className='flex items-center justify-center w-[230px] tracking-[1px]'>
                                    <img src="images/icons/fb-icon.png" alt='fb icon' className='w-[25px] h-[25px]'/>
                                    <p className='p-2'>Signup with Facebook</p>
                        </div>
                    </button>
                            <button className='bg-[#6795f0] text-white text-[14px] p-2 my-3 rounded-[5px]'>
                            <div className='flex items-center justify-center w-[230px] tracking-[1px]'>
                                <img src="images/icons/google-icon.png" alt='google icon' className='w-[25px] h-[25px]'/>
                                <p className='p-2'>Signup with Google</p>
                            </div>
                            </button>
                        </div>
                        <div>
                                <h3 className='text-center my-4'>Or</h3>
                                <button
                                    onClick={() => setShowDetails(!showDetails)} 
                                    className='bg-white text-black text-[14px] border-black border-2 p-2 my-3 rounded-[5px]'>
                                    <div className='flex items-center justify-center w-[230px] tracking-[1px]'>
                                        <img src="images/icons/mail-icon.png" alt='google icon' className='w-[25px] h-[25px]'/>
                                        <p className='p-2'>Signup with Mail</p>
                                    </div>
                                </button>
                        </div>
                </div>
              }
    </div>
  )
}

export default SignUp