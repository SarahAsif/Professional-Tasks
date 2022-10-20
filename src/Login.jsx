import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const getLocalItmes = () => {
  let emailvar = localStorage.getItem("Email");

  if (emailvar) {
    return JSON.parse(localStorage.getItem("Email"));
  } else {
    return [];
  }
};

export const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const users = [{ email: "john@gmail.com", password: "testpassword" }];
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));


  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    let valid = handleValidation();
    const account = users.find((user) => {
      return user.email === email && user.password === password
    });
    console.log(account)
    debugger
    if (valid && account) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        navigate("/dashboard");
        alert("welcome");
    }else{
      navigate("/error")
    }
  };

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center h-75">
          <div className="col-md-4">
            <div>
              <div className="mb-2">
                <b>Welcome to Jubilee Insurance Platform</b>
              </div>
              <div>Please log in using your credentials</div>
            </div>
            <form id="loginform">
              <div className="form-group">
                <div className="column d-flex justify-content-center align-items-center">
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="text-primary font-bold mt-3">
                <a>
                  <b>Forgot password?</b>
                </a>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      
    </div>
  )
}

export default Login