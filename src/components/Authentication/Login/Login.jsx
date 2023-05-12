import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from '../../../assets/firstlookLogo.png'
import Navbar from '../../Home/Navbar';

const Login = () => {
    return (
        <>
            <div className="flex h-screen bg-gradient-to-b from-orange-500 to-rose-600">
                {/* <div className="absolute inset-0">
                    <Navbar />
                </div> */}
                <div className="w-full max-w-xs m-auto bg-white rounded-xl p-5">
                    <header>
                        <img className="w-20 mx-auto mb-5" src={logo} />
                    </header>
                    <form>
                        <div className='mt-10'>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 0, width: '32ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-username-input"
                                    label="Username"
                                    type="text"
                                    autoComplete="current-username"
                                />
                            </Box>
                        </div>
                        <div className='mt-6'>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 0, width: '32ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Box>
                        </div>
                        <div>
                            <input className="w-full mt-10 bg-rose-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded-xl" type="submit" />
                        </div>
                    </form>

                    {/* <footer>
                        <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                        <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                    </footer> */}
                </div>
            </div>
        </>
    )
}

export default Login