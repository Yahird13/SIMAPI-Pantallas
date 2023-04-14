import jwt_decode from "jwt-decode"; //npm install jwt-decode

export function isUserAuthenticated() {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token");
      const estado = localStorage.getItem("estado");
      const idInstitucion = localStorage.getItem("idInstitucion");
      const logo = localStorage.getItem("logo");
      const nombreEmpresa = localStorage.getItem("nombreEmpresa");
      //const cantidadCamillas = localStorage.getItem("cantidadCamillas");
      //const cantidadDeSalas = localStorage.getItem("cantidadDeSalas");
      //const cantidadDeIslas = localStorage.getItem("cantidadDeIslas");
      const idColores = localStorage.getItem("idColores");
      const colorPrimario = localStorage.getItem("colorPrimario");
      const colorSecundario = localStorage.getItem("colorSecundario");
      const colorTerciario = localStorage.getItem("colorTerciario");
      localStorage.clear();
      localStorage.setItem("estado", estado);
      localStorage.setItem("idInstitucion", idInstitucion);
      localStorage.setItem("logo", logo);
      localStorage.setItem("nombreEmpresa", nombreEmpresa);
      //localStorage.setItem("cantidadCamillas",cantidadCamillas);
      //localStorage.setItem("cantidadDeSalas",cantidadDeSalas);
      //localStorage.setItem("cantidadDeIslas",cantidadDeIslas);
      localStorage.setItem("idColores", idColores);
      localStorage.setItem("colorPrimario", colorPrimario);
      localStorage.setItem("colorSecundario", colorSecundario);
      localStorage.setItem("colorTerciario", colorTerciario);
      window.location.replace("/");
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
}
