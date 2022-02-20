import React from "react";
import * as Styles from "./style"

//ícones
import iconArrow from "../../Assets/arrow.png"
import iconEmail from "../../Assets/email.png"
import iconPassword from "../../Assets/password.png"

function LoginSide(){
    return(
        <Styles.Content>
            <Styles.LoginContent>
                <Styles.AlignBox>

                    <Styles.TitleContent>
                        <div>
                            <img src={iconArrow}/>
                            <h2>Faça seu Login</h2>
                        </div>
                        <p>Entre com suas informações de cadastro</p>
                    </Styles.TitleContent>
                    
                    <Styles.EmailContent>
                        <span>E-mail</span>
                        <input type="email" placeholder="Digite seu e-mail"/>
                        <img src={iconEmail}/>
                    </Styles.EmailContent>

                    <Styles.PasswordContent>
                        <span>Senha</span>
                        <input type="password" placeholder="Digite sua senha"/>
                        <img src={iconPassword}/>
                    </Styles.PasswordContent>

                    <Styles.RememberPasswordContent>
                        <label for="remember"> 
                            <input id="remember" type="checkbox"/>
                            <span>Lembre-me</span>
                        </label>
                        
                        <span>Esqueci minha senha</span>
                    </Styles.RememberPasswordContent>

                    <button id="entrarButton">ENTRAR</button>

                    <Styles.RegisterContent>
                        <span id="noAccount">Não tem uma conta?</span>
                        <span id="registrer">Registre-se</span>
                    </Styles.RegisterContent>
                    
                </Styles.AlignBox>
            </Styles.LoginContent>
        </Styles.Content>
        
    )
}

export default LoginSide