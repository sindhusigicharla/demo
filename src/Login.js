import { useState } from "react";


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [country, setCountry] = useState("");
    

    function handleSubmit(){
        if(email==="" || password===""){
            console.log("Enter email and password")
            setError("Enter email and password")
            return
        }
        if(country==""){
            setError("Select the country");
            return;
        }
        console.log("Login successful")
        console.log("email:", email);
        console.log("password: ", password);
        setSuccessMessage("Login succussful!!");
        setPassword("");
        setEmail("")
    }

    return (
        <div>
            <input type="text" placeholder ="email"
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value);
                    setError("");
                }}
            /><br/>
            <input type="password" placeholder ="password"
                value={password}
                onChange={(event)=>{
                    setPassword(event.target.value);
                    setError("");
                }}/><br/>

                <select value={country}
                onChange={(event)=>setCountry(event.target.value)}>
                    <option value="">--select--</option>

                    <option value="india">India</option>
                    <option value="uk">UK</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select><br/>
                <h1>{country}</h1>
                <br/>
            <button 
            onClick={()=>handleSubmit()}>
                    Login</button>
            {error && <p>{error}</p>}
            {setSuccessMessage && <p>{successMessage}</p>}
        </div>
    )
}

export default Login;


// we should collect the email and password
// we should validate the email and password before submitting
// if user clicks on login with entering email or password we should display some error


// input
// edit
// delete


//ex:
//1. Create a register form
//2. It should contain firstname, middle name(option), last name, email, passord, confirm password, age
//3. All the mandatory fields should not be missed. 
//4. password and confirm password should match
//5. age should be >=13
//6. user submits display registration successful
//7. display approproate error messages