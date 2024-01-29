export const SaveInStorage = (key, item) => {

    //Obtener elementos en localstorage
    let items = JSON.parse(localStorage.getItem(key));
    console.log(items);
    //comprobar si es una array
    if (Array.isArray(items)) {
      //Añadir elemento nuevo
      items.push(item);
    }else{
      items = [item];
    }

    //console.log(items)
    //guardar en el local storage

    localStorage.setItem(key, JSON.stringify(items));
    //devolver objeto

    return movie;
}