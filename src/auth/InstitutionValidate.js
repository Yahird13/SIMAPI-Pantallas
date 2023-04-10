export function isInstitutionAuthenticated() {
  const nombreEmpresa = localStorage.getItem("nombreEmpresa");
  if (!nombreEmpresa) {
    return false;
  }
  return true
}