//Créez une fonction "Add" qui nous permet de récupérer les arguments dans le cas où nous ne connaissons pas le nombre d'arguments qui seront utilisés.

function add (...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}