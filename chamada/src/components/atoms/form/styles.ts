import styled from "styled-components";

export const FormContainer = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly ;
        align-items: center;
        width: 60%;
        

    }
    
`
export type InputProps = {
    error?: boolean;
}

export const UnicInput = styled.input<InputProps> `
    display: flex ;
    width: 100%;
    margin: 0.4rem;
    boder:none;
    border-radius: 0.3rem;
    border: ${(props) => props.error ? "2px , solid , red " :"none"};
    padding-left : 0.4 ;

`
