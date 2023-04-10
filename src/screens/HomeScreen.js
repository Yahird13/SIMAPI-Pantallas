import React, { useEffect } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import CamillaContainer from "../componets/containers/CamillaContainer";
import { isUserAuthenticated } from "../auth/TokenValidate";
import { pathContext } from "../utils/PathContext";

let lastColorPrimario = '';
let lastColorSecundario = '';
let lastColorTerciario = '';

export default function HomeScreen() {
  //useEffect(() => {
  //})

  if (!isUserAuthenticated()) {
    window.location.replace("/");
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
          marginTop: "12%",
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
