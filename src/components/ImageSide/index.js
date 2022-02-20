import React from "react";
import * as Styles from "./style"

import camp from "../../Assets/camp.jpg"

function ImageSide(){
    return(
        <Styles.Content>
            <img src={camp}/>
        </Styles.Content>
    )
}

export default ImageSide