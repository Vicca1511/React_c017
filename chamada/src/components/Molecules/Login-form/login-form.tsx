import { FormEvent } from "react";
import { StyledForm, StyledLoginForm } from "./styles";

export default function LoginForm() {

  function handleSubmit(e:FormEvent<HTMLFormElement>)  {
    e.preventDefault();

    const loginPayLoad = {
     email: e.currentTarget.email.value,
     password: e.currentTarget.password.value,

    }
    console.log(loginPayLoad);

  }
  return (


    <StyledLoginForm>
        <h2> Login Component</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="Email Adress" name="email"/>
        <input placeholder="Insert your Password" name="password"/>
        <button type="submit"> Send </button>
      </StyledForm>
    </StyledLoginForm>
  );
}
