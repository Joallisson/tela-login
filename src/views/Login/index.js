import React from "react";
import * as Styles from "./style"

//Componentes
import LoginSide from '../../components/LoginSide'
import ImageSide from '../../components/ImageSide'

function Login(){
    return(
        <Styles.Container>
            <LoginSide/>
            <ImageSide/>
        </Styles.Container>
    )
}

export default Login