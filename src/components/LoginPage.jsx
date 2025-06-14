import axios from "axios";
import { useRef } from "react";

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = async () => {
    try{
      const emailId = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post(
        "https://4799d8a9-fea0-423a-819e-aa6ae6edd0e9-00-3f0wju7f2j896.sisko.replit.dev/login",
        {
          emailId,
          password,
        },
        {withCredentials:true}
      );
      console.log(response.data);
    }catch(e){
      console.log("Error"+ e.message)
    }
    
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://images.alphacoders.com/829/829094.jpg",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center w-full">
          <div className="max-w-lg w-full space-y-6">
            <h1 className="mb-5 text-6xl font-bold">Login</h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-2xl">Email</legend>
              <input
                ref={emailRef}
                type="email"
                className="input input-lg w-full"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-2xl ">Password</legend>
              <input
                ref={passwordRef}
                type="password"
                className="input input-lg w-full"
                placeholder="Type here"
              />
            </fieldset>
            <button className="btn btn-secondary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
