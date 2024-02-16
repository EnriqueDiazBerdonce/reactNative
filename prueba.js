function obtenerDatosPromise(){
    let segundos = 0;
    setTimeout(()=> {
        //callback(null, {data: 'datos importantes'});
        console.log('datos importantes');
    }, 5000);
    segundos++;
    console.log("Segundo: " + segundos);
}

function obtenerDatosPromise2(){
    const options = {
        headers: {
          Authorization: ""
        }
      };

    fetch('https://tienda.mercadona.es/api/categories/148', options)
    .then( res => res.json() )
    .then( data => console.log(data.categories[0].products[0]) );
}

//obtenerDatosPromise((err, info) => {console.log(info)});
obtenerDatosPromise2();