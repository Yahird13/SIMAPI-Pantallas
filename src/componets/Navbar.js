import React from 'react';
import TextField from './inputs/TextField';
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock} from '@fortawesome/free-solid-svg-icons';
import EmailField from './inputs/EmailField';
import PasswordField from './inputs/PasswordField';
import SimapiNavbar from './navbar/SimapiNavbar';
import IconContainer from './containers/IconContainer';
import { C_PRIMARIO, C_SECUNDARIO, C_TERCIARIO } from './colors';
import Button from './buttons/Button';
import CamillaContainer from './containers/CamillaContainer';
import SimapiSelect from './select/SimapiSelect';
import MultiSelect from './select/MultiSelect';

export default function MyNavbar(){
  return (
    <>
      <SimapiNavbar logo={"https://www.hnm.org.mx/img/hnm.png"} navbarItems={[
        {path: "/inicio", text: "Inicio"},
        {path: "/camillas", text: "Camillas"},
        {path: "/usuarios", text: "Usuarios"},
        {path: "/historial", text: "Historial"}
      ]}/>
      <TextField style={{marginTop: 150}}/>
      <EmailField icon={faEnvelope} />
      <PasswordField icon={faLock} passIcons={[faEye, faEyeSlash]} />
      {/* camillasContainer */}
      <CamillaContainer idIsla={'1'} idSala={'2'}/>
      <IconContainer icon={faUser} size={"5x"} style={{border: "1px solid black", borderRadius: "50%", width: 200, height: 200, backgroundColor: C_TERCIARIO}} />
      <Button text={"Hola"} style={{backgroundColor: C_PRIMARIO, width: 423, height: 84}} />
      <div style={{height: "200%", width: "100%", backgroundColor: 'black'}}></div>
      <MultiSelect />
    </>
  );
}
