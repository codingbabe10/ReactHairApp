import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import './login.css';


export default function Login({updateUser}) {
const [user, setUser] = useState({})   
    const [isLogging, setIsLogging] = useState(false);
    const navigate = useNavigate();
    const secondHomeRoute = '/secondHome'; 

    useEffect(() => {
        if (isLogging) {
            loginUser();
        }
    }, [isLogging]);

    async function loginUser() {
        console.log (user)
        try {
            const res = await fetch('http://127.0.0.1:5000/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data, 'userData');
                updateUser({...data, loggedIn: true})

                // Navigate to home page after successful login
                navigate('/secondHome',{replace:true});
            } else {
                // Handle login error
            }
        } catch (error) {
            // Handle fetch error
        } finally {
            setIsLogging(false);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const loginElement = e.currentTarget;
        const loginForm = new FormData(loginElement);
        const formData = Object.fromEntries(loginForm);
        setUser(formData);
        setIsLogging(true);
    }

    return (
        <>
            <h3>Login</h3>
            <form action="" id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /><br />
                <input type="submit" value='Login' />
            </form>
        </>
    );
}
