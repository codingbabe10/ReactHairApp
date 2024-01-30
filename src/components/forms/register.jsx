import { useState } from "react"



export default function Register() {
    const history=useHistory();
    
    const [user, setUser] = useState({ username: '', email: '', password: '' })
   
       
   
    async function registerUser(){
        const res = await fetch('http://127.0.0.1:5000/user',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        registerUser()
        console.log(user, 'form submitted');
        setUser({username:'',email:'',password:''})
    }


    const handleHistory = () => {
        history.push("/PlanSelection");
    }

    return (
        <>
            <h3>Create Account</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">New Username</label>
        <br />
        <input
          type="text"
          name="new username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <br />
        <label htmlFor="create password">Create Password</label>
        <br />
        <input
          type="password"
          name="create password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <br />
        {/* Button to register and navigate to PlanSelection */}
        <button type="submit">Register</button>
      </form>
    </>
    );
}