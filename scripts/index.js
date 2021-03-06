//Array över produkter

const products = [
    { url: "http://firstworldimports.com/store/images/14OZ%20Banana.png", name: "Baron", price: 55, description: "Naturligt söt utan socker eller färgämnen! En bananketchup av rang för den medvetne." },
    { url: "http://wellingtonspices.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/e/det-monte-real-banana-ketch.jpg", name: "Del Monte", price: 42, description: "Om det är några som kan bananer så är det Del Monte. Ketchupen är fyllig och söt med lite sting. Ett säkert val!" },
    { url: "https://i5.walmartimages.com/asr/e60553fd-bfa6-421a-bf93-f8245b61fe05_1.eea15a229367df05ba02edab4eeb4544.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", name: "Jufran",  price: 40, description: "Världens mest sålda bananketchup. Behöver vi säga mer?" },
    { url: "http://sinclaircondiments.co.uk/perch/resources/banana-w320h320.jpg", name: "Sinclair", price: 72, description: "En handgjord brittisk bananketchup med lite hetta för den kräsne. Helt utan några konstiga tillsatser." },
    { url: "http://www.vikingstlucia.com/files/products/thumbs/Banana-Ketchup-Box-359ml.gif", name: "Viking", price: 45, description: "Som hörs på namnet är detta en bananketchup för dig som är ute efter den autentiska karibiska smaken" },
    { url: "http://sendmespecial.com/platform/image/cache/data/condiments/ufcbanana_ketchup-550x600.jpg", name: "UFC", price: 35, description: "Originalet från Filippinerna. En bananketchup för alla smaker och plånböcker" },
    { url: "http://cee-enterprises.com/2222-thickbox_default/ufc-banana-sauce-small-hot.jpg", name: "UFC Hot & Spicy", price: 35, description: "Originalet i en hetare variant. För dig som vill kittla smaklökarna lite extra." }
];

/*
 //Mappar över arrayen och plockar ut
 //det som specas för publicering
let shopItem = products.map(function(product){ return `
    <img src="${product.url}">
    <br><h3>${product.name}</h3>
    ${product.description} <br>
    ${product.price}:- <hr>
`});
*/
//Samma som:
let shopItem = products.map(product=> `   
    <img src="${product.url}">            
    <br><h3>${product.name}</h3>
    ${product.description} <br>
    ${product.price}:- <hr>
`);

let shopItems = shopItem.join(" ");                     //Plockar bort kommatecken, oklart varför det inte funkar direkt på shopItem
document.getElementById("shop").innerHTML=shopItems;    //Publicering

let button = document.getElementById("button").addEventListener("click", validateForm); //Beställningsknappen


function validateForm() {
    let fName = document.forms["info"]["firstName"].value;
    if (fName == "") {
        document.getElementsByTagName('p')[0].innerHTML = "Fältet måste vara ifyllt!";
    } else {
        document.getElementsByTagName('p')[0].innerHTML = "";
    }

    let lName = document.forms["info"]["lastName"].value;
    if (lName == "") {
        document.getElementsByTagName('p')[1].innerHTML = "Fältet måste vara ifyllt!";
    } else {
        document.getElementsByTagName('p')[1].innerHTML = "";
    }

    let eMail = document.forms["info"]["eMail"].value;
    if (eMail == "") {
        document.getElementsByTagName('p')[2].innerHTML = "Fältet måste vara ifyllt!";
    } else {
        document.getElementsByTagName('p')[2].innerHTML = "";
    }

    let street = document.forms["info"]["street"].value;
    if (street == "") {
        document.getElementsByTagName('p')[4].innerHTML = "Fältet måste vara ifyllt!";
    } else {
        document.getElementsByTagName('p')[4].innerHTML = "";
    }

    let zip = document.forms["info"]["zip"].value;
    if (zip == "") {
        document.getElementsByTagName('p')[5].innerHTML = "Fältet måste vara ifyllt!"; //Hann inte riktigt mecka med individuella krav/budskap för respektive fält...
    } else {
        document.getElementsByTagName('p')[5].innerHTML = "";
    }

    let city = document.forms["info"]["city"].value;
    if (city == "") {
        document.getElementsByTagName('p')[6].innerHTML = "Fältet måste vara ifyllt!";
    } else {
        document.getElementsByTagName('p')[6].innerHTML = "";
    }

}

let kassa = document.getElementById("kassa").addEventListener("click", betala);     //För att toggla mellan shop och checkout

function betala(){
     this.style.backgroundColor = "yellow";
     document.getElementById("shop").style.display = "none";
     document.getElementById("checkout").style.display = "flex";
     document.getElementById("shoppa").style.backgroundColor = "grey";

}

let shoppa = document.getElementById("shoppa") .addEventListener("click", browse);

function browse(){
    this.style.backgroundColor = "yellow";
    document.getElementById("shop").style.display = "flex";
    document.getElementById("checkout").style.display = "none";
    document.getElementById("kassa").style.backgroundColor = "grey";
}