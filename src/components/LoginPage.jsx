import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm({ mode: "onChange" });
    const errorsMessage = "text-red-500 font-medium";
    const { user, login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("DATA form:", data);

        // login return true or false
        if(login(data)){
            navigate('/watchlist');
        }else{
            alert("Error with login, check email and password!");
        }
    };

    return(
        <div className="max-w-2xl header shadow-md rounded-md mx-auto text-center py-5">
            <h2 className="text-3xl font-medium py-5 pb-7 border-b border-white border-opacity-30">
                Login to your account
            </h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div className="grid grid-cols-1 gap-4 mt-8">
                    {/* Email */}
                    <div className="flex mx-auto gap-2 searchBox px-5 py-3 rounded-lg shadow-lg items-center">
                        <label htmlFor="email" className="w-24">
                            E-Mail
                        </label>
                        <input 
                            type="email"
                            id="email"
                            placeholder="yourEmail@mail.com"
                            {...register("email", { 
                                required: "Pole wymagane.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Niepoprawny e-mail"
                                }
                            })}
                            autoComplete="false"
                            className={`border ${errors.email && "border-2 border-red-500"} px-1 rounded-md bg-transparent w-full`}
                        />
                    </div>
                    {errors.email && <p className={errorsMessage}>{ errors.email.message }</p>}
                    
                    {/* Password */}
                    <div className="flex mx-auto gap-2 searchBox px-5 py-3 rounded-lg shadow-lg">
                        <label htmlFor="password" className="w-24">
                            Password
                        </label>
                        <input 
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            {...register("password", {
                                required: "Pole wymagane."
                            })}
                            autoComplete="false"
                            className={`border ${errors.password && "border-2 border-red-500"} px-1 rounded-md bg-transparent w-full`}
                        />
                    </div>
                    {errors.password && <p className={errorsMessage}>{ errors.password.message }</p>}
                    
                    {/* Button submit */}
                    <div>
                        <button 
                            type="submit" 
                            disabled={ !isValid }
                            className={`${isValid && "hover:scale-105 active:scale-95"} bg-blue-400 px-5 py-2 rounded-lg font-bold my-5 shadow-md border border-blue-500 disabled:opacity-60 transition-all`}
                        >
                            Zaloguj
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;