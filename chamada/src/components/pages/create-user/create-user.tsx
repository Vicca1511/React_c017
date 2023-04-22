import React, { FormEvent, useState } from "react";
import { Form, inputProps, invalidData } from "../../atoms/form/form";


export type validateProps = {
    name: string;
    email: string;
    password: string;
    cpf: string; 

}




export function CreateUser() {
    
    const [error , setError] = useState<invalidData[]>([])
    
    const inputOptions: inputProps[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "cpf",
      type: "text",
      placeholder: "Cpf",
    },
  ];

  function validateData(data : validateProps) {

    let dataIsValid = true

    if(data.password.length < 8 ) {
       setError([ ...error,{ name: "passaword" , errorMessage: "Password must have at least 8 characters"} ])
       dataIsValid = false
    }

    if(!data.email.includes("@")){
        setError([ ...error,{ name:"email" , errorMessage: "The content must be a valid email address"}])
        dataIsValid = false
      
    }
    if(dataIsValid){
      setError([]);
    }
    return dataIsValid; 
  }

 function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = {
      name: e.currentTarget.Name.value ,
      email: e.currentTarget.value.email,
      password: e.currentTarget.value.password ,
      cpf: e.currentTarget.value.cpf,
    }
    const isvalid = validateData(data) 
    

  }

  


  return (
    <div>
      <Form
        title={"Register"}
        inputs={inputOptions}
        onSubmit={handleSubmit}
        invalidData={error}
      ></Form>
    </div>
  );
}
