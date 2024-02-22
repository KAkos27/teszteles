export function parose(szam) {
  let psE;
  if (!Number.isNaN(szam)) {
    return "ez nem szám";
  }
  if (Number.isInteger(szam)) {
    szam % 2 === 0 ? (psE = true) : (psE = false);
  }
  return psE;
}
