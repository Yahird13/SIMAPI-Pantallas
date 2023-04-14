import React, { useEffect } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import CamillaContainer from "../componets/containers/CamillaContainer";
import { isUserAuthenticated } from "../auth/TokenValidate";
import { pathContext } from "../utils/PathContext";
import { isInstitutionAuthenticated } from "../auth/InstitutionValidate";

let lastColorPrimario = '';
let lastColorSecundario = '';
let lastColorTerciario = '';

export default function HomeScreen() {
  //useEffect(() => {
  //})

  if (!isUserAuthenticated()) {
    if(!isInstitutionAuthenticated()){
      window.location.replace("/");
    }
  }

  return (
    <div>
      <SimapiNavbar
        navbarItems={[
          { path: "/inicio", text: "Inicio" },
          { path: "/camillas", text: "Camillas" },
          { path: "/usuarios", text: "Usuarios" },
          { path: "/historial", text: "Historial" },
        ]}
      />

      <div
        style={{
          margin: "5%",
          marginTop: "10%",
          borderRadius: "15px",
          border: "5px solid black",
          minHeight: 300,
        }}
      >
        <CamillaContainer idIsla={""} idSala={""} />
      </div>
    </div>
  );
}
