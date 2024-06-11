function addressMaker({ville, region}) {
    const newAddress= {
        ville,
        region,
        pays: 'Morocco'
    };
    const addressString = `${newAddress.ville}, ${newAddress.region}, ${newAddress.pays}`;
    console.log(addressString);
}

addressMaker({ville: 'Tanger', region: 'nord'});

