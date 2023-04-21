import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  border-radius: 5px;
  border: solid 1px ${(props) => props.theme.lightTheme.bg};
  height: 600px;
  background-color: ;

  h2 {
    margin: 20px;
  }
  
`;

export type StyledFormProps = {
  error: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;

  input {
    display: flex;
    width: 90%;
    padding: 3px 5px;
    margin: 5px;
    border: ${(props) => (props.error ? "solid 2px red" : "none")};
    border-radius: 5px;
    height: 35px;
    background: ${(props) => props.theme.darkTheme.fg};
    font-size: 1.2rem;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 5px;
    border-radius: 5px;
    border: none;
    align-items: center;

    input {
      display: flex;
      width: 100%;
      border-radius: 5px 0 0 5px;
      border-right: none;
      padding: 3px 5px;
      margin: 0;
      height: 35px;
    }

    button {
      display: flex;
      border: ${(props) => (props.error ? "solid 2px red" : "none")};
      align-items: center;
      border-left: none;
      margin: 0px;
      cursor: pointer;
      border-radius: 0px 5px 5px 0px;
      height: 35px;
      background: ${(props) => props.theme.darkTheme.fg};
    }
  }

  button {
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 3px 11px;
    margin: 10px;
    font-size: 19px;
    border: none;
    background-color: ${(props) => props.theme.darkTheme.fg};
    cursor: pointer;
  }
`;
