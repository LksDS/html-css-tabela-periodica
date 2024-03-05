const btnSwitch = document.getElementById("btn__switch");
const root = document.querySelector(":root");
let modo = "claro";
btnSwitch.addEventListener("click", () => {
  if (modo == "claro") {
    root.style.setProperty("--background-color", "black");
    root.style.setProperty("--text-color", "white");
    modo = "escuro";
  } else {
    root.style.setProperty("--background-color", "white");
    root.style.setProperty("--text-color", "black");
    modo = "claro";
  }
});
