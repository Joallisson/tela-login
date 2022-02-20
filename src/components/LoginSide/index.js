import React, {useState} from "react";
import * as Styles from "./style"

//Components
import Checkbox from '../../components/Checkbox'

//ícones
import iconArrow from "../../Assets/arrow.png"
import iconEmail from "../../Assets/email.png"
import iconPassword from "../../Assets/password.png"
import iconEye from '../../Assets/eye.png'


function LoginSide(){

    const [showPassword, setShowPassword] = useState(false)

    function SetDisplayPassword(){
        setShowPassword(showPassword ? false : true)
    }

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
                        <input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha"/>
                        <img src={iconPassword}/>

                        <button onClick={SetDisplayPassword} id="iconEyeButton">
                            <img id="iconEyeImg" src={iconEye}/>
                        </button>
                    </Styles.PasswordContent>

                    <Styles.RememberPasswordContent>
                        <label for="remember"> 
                            <Checkbox>Lembre-me</Checkbox>
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