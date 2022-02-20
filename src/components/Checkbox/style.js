import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    padding-left: 5px;
    margin: 0px 4px;
    border-radius: 5px;

    display: flex;
    align-items: center;
`

export const CheckboxArea = styled.div`
    width: 23px;
    height: 23px;
    background: red;
`

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    display: none;
`

export const Text = styled.label`
    color: #7f8285;
    font-weight: bold;
`

export const StyledCheckbox = styled.label`
    width: 15px;
    height: 15px;
    margin-right: 6px;
    border-radius: 10%;
    background: #23221e;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #43423e;

    img{
        width: 23px;
        display: ${props => props.checked ? 'flex' : 'none'};
    }
`