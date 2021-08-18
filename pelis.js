function getAll(){
  const fs = require("fs");
  const archivo = fs.readFileSync(__dirname + "/pelis.json");
  
  const archivoString = archivo.toString();
  const movies = JSON.parse(archivoString);
  
  return movies
}


function searchBy(text, movies){

  return movies.filter(function (item){return item.title.includes(text)}) 
}



function sortBy(criterio,movies){

  return movies.sort((a, b) => (a[criterio] > b[criterio]) ? 1 : -1)
}


function searchTags(tagWanted, movies){
  return movies.filter(function (item){return item.tags.includes(tagWanted) })}

function showNoFormat(movies){
  const sinFormato = JSON.stringify(movies);
  return sinFormato;
}


exports.searchByCriteria = function (criterios){
  let tmp = getAll();

  if ("search" in criterios) {
    
    tmp = searchBy(criterios.search, tmp);
  } 

  if ("sort" in criterios) {
    tmp = sortBy(criterios.sort, tmp);
    
  }
  
  if("tag" in criterios){
    tmp = searchTags(criterios.tag, tmp);
   
  } 
  if( "no-format" in criterios){
    tmp = showNoFormat(tmp);
    
  }
  return tmp;
}

