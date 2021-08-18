const pelis = require("./pelis");

function parseArguments(argv){
  const optionObj = {};
  
  argv.forEach(function (item ,ind){
    if(item.startsWith("--")){
      const nameNoDash = item.slice(2);
     
      optionObj[nameNoDash] = argv[ind+1];
    }
  });

  return optionObj
}


function main(){
const optionsToChoose =  parseArguments(process.argv.slice(2));
const respuesta = pelis.searchByCriteria(optionsToChoose);
//si el objeto de opciones no se llena nunca, entonces es 0
//si es 0, es porque no le paso ningun argumento
if(optionsToChoose== 0){ 
  console.table(respuesta)
}else{
  console.log(respuesta);
}
}

main();