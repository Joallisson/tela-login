import styled from 'styled-components'

export const Content = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContent = styled.div`
    background: #23221e;
    color: #fff;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AlignBox = styled.div`
    margin-top: 20px;
    
`

export const TitleContent = styled.div`
    color: #7f8285;
    
    div{
        display: flex;


        img{
            width: 20px;
            height: 20px;
            margin-top: 5px;
        }

        h2{
            margin-top: 0px;
            margin-left: 5px;
            font-weight: bold;
        }
    }

    p{
        margin-top: -10px;
        font-weight: bold;
    }
`

export const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    color: #7f8285;

    input{
        margin-top: 5px;
        padding: 12px;
        background: #23221e;
        border: 5px solid #f0cd76;
        border-radius: 10px;
    }
`

export const PasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    color: #7f8285;

    input{
        margin-top: 5px;
        padding: 12px;
        background: #23221e;
        border: 5px solid #f0cd76;
        border-radius: 10px;
    }
`

export const RememberPasswordContent = styled.div`

`
