import React from "react";
import * as Styles from "./style"

//ícones
import arrow from "../../Assets/arrow.png"

function LoginSide(){
    return(
        <Styles.Content>
            <Styles.LoginContent>
                <Styles.AlignBox>

                    <Styles.TitleContent>
                        <div>
                            <img src={arrow}/>
                            <h2>Faça seu Login</h2>
                        </div>
                        <p>Entre com suas informações de cadastro</p>
                    </Styles.TitleContent>
                    
                    <Styles.EmailContent>
                        <span>E-mail</span>
                        <input type="email"/>
                    </Styles.EmailContent>

                    <Styles.PasswordContent>
                        <span>Senha</span>
                        <input type="password"/>
                    </Styles.PasswordContent>

                    <Styles.RememberPasswordContent>
                        <div>
                            <input type="checkbox"/> <p>Lembre-me</p>
                        </div>
                        <span>Esqueci minha senha</span>
                    </Styles.RememberPasswordContent>

                    <button>Entrar</button>
                    <span>Não tem uma conta? <p>Registre-se</p></span>
                    
                </Styles.AlignBox>
            </Styles.LoginContent>
        </Styles.Content>
        
    )
}

export default LoginSide