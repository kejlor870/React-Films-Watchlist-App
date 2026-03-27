import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = JSON.parse(localStorage.getItem('FWAuser'));
        return savedUser ? savedUser : null;
    });

    useEffect(() => {
        console.log(user);
    }, [user]);

    const login = (data) => {
        if(data){
            const logUser = {
                email: data.email
            };
            setUser(logUser);
            localStorage.setItem('FWAuser', JSON.stringify(logUser));

            return true;
        }else{
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('FWAuser');
    };

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used with AuthProvider");
    }

    return context;
};