import { useState } from "react";
import LoginForm from "./components/Molecules/Login-form/login-form";



export function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <LoginForm/>
    </div>
  );
}
