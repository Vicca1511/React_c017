import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginPayLoad = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayLoad);
  }
  return (
    <StyledLoginForm>
      <h2> Sign In </h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Email Adress" name="email" required/>
        <div>
          <input
            placeholder="Insert your Password"
            type={showPassword ? "text" : "password"}
            name="password" required
          />
          <button onClick={handleShowPassword}>
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
        <button type="submit"> Send </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
