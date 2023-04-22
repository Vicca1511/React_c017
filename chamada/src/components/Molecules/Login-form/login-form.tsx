import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { api } from "../../../utils/api/api"
import { useNavigate } from "react-router-dom";
import { Loading } from "../../celules/loading/loading";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate()

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayLoad = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayLoad);
    setLoading(false);
    if(!userData){
      setError(true);
      return;
    }
    navigate("/classroom")
    
  }
  return (
    <>{loading ? <Loading/> :
      <><StyledLoginForm>
        <h2> Sign In </h2>
        <StyledForm error={error} onSubmit={handleSubmit}>
          <input placeholder="Email Adress" name="email" required />
          <div>
            <input
              placeholder="Insert your Password"
              type={showPassword ? "text" : "password"}
              name="password" required />
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
          <button type="submit"> Send </button>
        </StyledForm>
      </StyledLoginForm>
      <button onClick={() => {navigate( "/register") } }>Sign Up</button></>

    }
    
    </>
  );
}
