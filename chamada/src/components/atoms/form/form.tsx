import { FormEvent } from "react";

export interface inputProps {
  placeholder?: string;
  type?: string;
  name: string;
  defaultValue?: string;
}

export interface FormProps<T = FormEvent<HTMLFormElement>> {
  title: string;
  inputs: inputProps[];
  onSubmit: (value: T) => void;
}

export function Form({ inputs, onSubmit, title }: FormProps) {
  return (
    <section>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {inputs.map((input , index) => (
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            defaultValue={input.defaultValue}
            key={index}
          />
        ))}
        <button type="submit"> Submit </button>
      </form>
    </section>
  );
}
