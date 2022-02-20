import  React, {useState} from 'react';
import * as Styles from './style'

//Ícone
import iconCheckbox from '../../Assets/checkbox-checked.png'

function Checkbox() {

   const [checked, setChecked] = useState(false);
   
   function handleCheckboxChange(){
      setChecked(!checked);
   }

   return (
      <Styles.CheckboxContainer checked={checked} onClick={handleCheckboxChange}>

         <Styles.HiddenCheckbox onChange={handleCheckboxChange /*A CHECKBOX É ESSE COMPONENTE*/} checked={checked}/>
         
         <Styles.StyledCheckbox checked={checked}>
            <img src={iconCheckbox}/>
         </Styles.StyledCheckbox>
         
         <Styles.Text checked={checked}> Lembre-me </Styles.Text>

      </Styles.CheckboxContainer>
   );
}
export default Checkbox;