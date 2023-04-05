const C_PRIMARIO = "#A3B2CF";
const C_SECUNDARIO = "#385273";
const C_TERCIARIO = "#00264D";

export { C_PRIMARIO, C_SECUNDARIO, C_TERCIARIO };
  

/* import React, { useState } from "react";

let C_PRIMARIO = "";
let C_SECUNDARIO = "";
let C_TERCIARIO = "";

export default function Colors(){

const [C_primario, setC_primario] = useState("");
const [C_secundario, setC_secundario] = useState("");
const [C_Terciario, setC_Terciario] = useState("");

    fetch("http://localhost:8080/api/colores", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb3JyZW9AY29ycmVvLmNvcnJlbyIsImlhdCI6MTY4MDA2MDc2OSwiZXhwIjoxNjgwMTc1OTY5fQ.thshqEjPdTEtapEsCv7Wt_MeX8_YMBAee0Lz1VwMfMU"
        },
        body: JSON.stringify({
            "sala": props.sala,
            "isla": props.isla
        })
    }).then(response => response.json())
    .then(data => {
        setC_primario(data.colorPrimario)
        setC_secundario(data.colorSecundario);
        setC_Terciario(data.colorTerciario);
        C_PRIMARIO = C_primario;
        C_SECUNDARIO = C_secundario;
        C_TERCIARIO = C_Terciario;
    }).catch(error => console.log(error));
    console.log(C_PRIMARIO, C_SECUNDARIO, C_TERCIARIO)
    console.log("hola")
    return {C_PRIMARIO, C_SECUNDARIO, C_TERCIARIO}
} */
  