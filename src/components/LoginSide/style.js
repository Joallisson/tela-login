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
    margin-top: 40px;
    flex-direction: column;

    #entrarButton{
        margin-top: 20px;
        width: 100%;
        padding: 15px;
        color: #513400;
        font-size: 16px;
        font-weight: bold;
        background: #ffc631;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 15px;

        &:hover{
            opacity: 0.7;
        }
    }
    
`

export const TitleContent = styled.div`
    color: #7f8285;
    margin-bottom: 30px;
    
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
    margin-bottom: 10px;
    color: #7f8285;

    input{
        color: #fff;
        margin-top: 5px;
        padding: 12px;
        padding-left: 40px;
        background: #23221e;
        border: 4px solid #f0cd76;
        border-radius: 10px;
    }

    img{
        width: 25px;
        height: 20px;
        position: relative;
        bottom: 35px;
        left: 10px;
    }
`

export const PasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    color: #7f8285;

    input{
        color: #fff;
        margin-top: 5px;
        padding: 12px;
        padding-left: 40px;
        background: #23221e;
        border: 4px solid #f0cd76;
        border-radius: 10px;
    }

    img{
        width: 20px;
        height: 20px;
        position: relative;
        bottom: 35px;
        left: 10px;
    }

    #iconEyeButton{
        width: 25px;
        height: 18px;
        position: relative;
        left: 88%;
        bottom: 52px;
        background: none;
        border: none;

        #iconEyeImg{
            width: 25px;
            height: 18px;
            position: relative;
            top: -1px;
            left: -50%;
            cursor: pointer;

            &:hover{
                opacity: 0.7;
            }
        }
    }
`

export const RememberPasswordContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -10px;

    label{
        display: flex;
        align-items: center;
        cursor: pointer;

        input{
            width: 20px;
            height: 20px;
        }

        span{
            display: flex;
            align-items: center;
            color: #838382;
        }
    }

    span{
        font-weight: bold;
        color: #d2aa4e;
        cursor: pointer;
    }

`

export const RegisterContent = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

    #noAccount{
        color: #c4aa6d;
    }

    #registrer{
        color: #e6c060;
        font-weight: bold;
    }
`
