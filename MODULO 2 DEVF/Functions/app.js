/* Función sin parámetros ni valor de retorno */
function miPrimerFunction(){
    console.log("Hola mundo");
}

/* Función sin parámetros con valor de retorno */
function miPrimerFunction(){
    return "Hola mundo";
}

function suma (a, b){
    return a+b;
}

const suma_anonima=function(a,b){
    return a+b;
}

const suma_arrow=(a,b)=>{
    return a+b;
}

const suma_arrowAlt=(a,b)=>a+b;

const ingredientesChilaquilesRojos=["crema", "totopos", "salsa verde", "queso blanco rallado"]
const ingredientesChilaquilesVerdes=["crema", "totopos", "salsa verde", "queso blanco rallado"]

const cocinarChilaquiles = ()=>{
    for(let i=0; i <limite; i++){
        console.log("pongo", ingredientes[i])
    }
}

cocinarChilaquiles(ingredientesChilaquilesRojos);
cocinarChilaquiles(ingredientesChilaquilesVerdes)





