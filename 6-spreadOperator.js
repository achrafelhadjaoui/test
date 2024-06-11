// Imaginez que vous allez faire des courses.
// Vous avez donc un tableau appelé shoppingList avec tous les produits que vous voulez acheter.

// Maintenant que vous êtes dans le magasin, vous avez un panier avec tous les produits de votre liste, mais vous voulez en ajouter quelques-uns de plus.

// Créez un nouveau tableau appelé shoppingCart, qui sera une copie du tableau shoppingList, et ajoutez-y de nouveaux produits.

const shoppingList = ["oeufs", "lait", "beurre"];

let noveauTableau = shoppingList.slice();
noveauTableau.push("caffe", "le pain");

console.log(shoppingList)
console.log(noveauTableau)