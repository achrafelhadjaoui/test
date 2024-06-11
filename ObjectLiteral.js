// Comment corriger cette fonction en utilisant Object literal :

function addressMaker(ville, region) {
    const newAddress = { ville, region };
    
    console.log(newAddress);
}

addressMaker('Tanger', 'Nord');
