//botões de acessibilidade 
document.addEventListener ("DOMContentLoaded, () =>{
    
const btnContrast = document.getElementById("btn-constraste");
const btnAumentar = document.getElementById("btn-aummentar-texto");
const btnDimunuir = document.getElementById("btn-dimunuir-texto");

//aumentar a fonte

let tamanhoAtualFonte = 100;

//função alto constraste

btnContrast.addEventListener("click",()=>{
    
 document.body.classList.toogle("alto-constraste");
 
 //acessibilidade para leitores de tela

 const ativo = document.body.classList.contains("alto-contraste");
 btnContrast.setAttibute("aria-pressed",ativo);
)



}")
