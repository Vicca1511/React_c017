import { FormEvent } from "react";
import { FormContainer, UnicInput } from "./styles";

export interface inputProps {
  placeholder?: string;
  type?: string;
  name: string;
  defaultValue?: string;
}

export interface invalidData {
  name: string;
  errorMessage?: string;
}

export interface FormProps<T = FormEvent<HTMLFormElement>> {
  title: string;
  inputs: inputProps[];
  onSubmit: (value: T) => void;
  cancel?: () => void;
  invalidData?: invalidData[];
}

export function Form({
  inputs,
  onSubmit,
  title,
  cancel,
  invalidData,
}: FormProps) {
  function clearFields(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(invalidData?.length === 0){
      inputs.forEach((input) => e. t[input.name].value = "")
  }
  return (
    <FormContainer>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {inputs.map((input, index) => (
          <>
            {invalidData?.find((i) => i.name === input.name)?.errorMessage && (
              <span>
                {invalidData?.find((i) => i.name === input.name)?.errorMessage}
              </span>
            )}
            <UnicInput
              error={
                invalidData?.find((data) => data.name === input.name)
                  ? true
                  : false
              }
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              defaultValue={input.defaultValue}
              key={index}
            />
          </>
        ))}
        <button type="submit"> Submit </button>
        {cancel && (
          <button type="button" onChange={cancel}>
            Cancel
          </button>
        )}
      </form>
    </FormContainer>
  );
}
