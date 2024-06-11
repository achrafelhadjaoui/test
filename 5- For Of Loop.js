//En utilisant la boucle "for of", parcourez le tableau et affichez dans la console un message comme :
// output : Tom habite à Lisbonne


const students = [ 
    { nom: "John", ville: "New York" },
    { nom: "Peter", ville: "Paris"},
    { nom: "Kate", ville: "Sidney" }
]

for (let {nom, ville} of students) {
    console.log(`${nom} habite a ${ville}`)
}