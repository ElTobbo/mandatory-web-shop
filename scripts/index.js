document.getElementById("detail").style.display = "none";

//Array över produkter

var products = [
    { id: 1, url: "http://firstworldimports.com/store/images/14OZ%20Banana.png", name: "Baron", price: 55, description: "Naturligt söt utan socker eller färgämnen! En bananketchup av rang för den medvetne.", qty: 12, bag: 0 },
    { id: 2, url: "http://wellingtonspices.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/e/det-monte-real-banana-ketch.jpg", name: "Del Monte", price: 42, description: "Om det är några som kan bananer så är det Del Monte. Ketchupen är fyllig och söt med lite sting. Ett säkert val!", qty: 12, bag: 0 },
    { id: 3, url: "https://i5.walmartimages.com/asr/e60553fd-bfa6-421a-bf93-f8245b61fe05_1.eea15a229367df05ba02edab4eeb4544.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff", name: "Jufran",  price: 40, description: "Världens mest sålda bananketchup. Behöver vi säga mer?", qty: 12, bag: 0 },
    { id: 4, url: "http://sinclaircondiments.co.uk/perch/resources/banana-w320h320.jpg", name: "Sinclair", price: 72, description: "En handgjord brittisk bananketchup med lite hetta för den kräsne. Helt utan några konstiga tillsatser.", qty: 10, bag: 0 },
    { id: 5, url: "http://www.vikingstlucia.com/files/products/thumbs/Banana-Ketchup-Box-359ml.gif", name: "Viking", price: 45, description: "Som hörs på namnet är detta en bananketchup för dig som är ute efter den autentiska karibiska smaken", qty: 12, bag: 0 },
    { id: 6, url: "http://sendmespecial.com/platform/image/cache/data/condiments/ufcbanana_ketchup-550x600.jpg", name: "UFC", price: 35, description: "Originalet från Filippinerna. En bananketchup för alla smaker och plånböcker", qty: 12, bag: 0  },
    { id: 7, url: "http://cee-enterprises.com/2222-thickbox_default/ufc-banana-sauce-small-hot.jpg", name: "UFC Hot & Spicy", price: 35, description: "Originalet i en hetare variant. För dig som vill kittla smaklökarna lite extra.", qty: 12, bag: 0 }
];

var reviews = [];

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
    <div class="mapShop" data-value="${product.id}">   
    <img src="${product.url}"><br>
    <h3 class="zoom">${product.name}</h3>
    ${product.description} <br>
    ${product.price}:-  <button class="buy" data-value="${product.id}">KÖP</button>
     <hr>
     </div>
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
    document.getElementById("detail").style.display = "none";
}

let shoppa = document.getElementById("shoppa").addEventListener("click", browse);

function browse(){
    this.style.backgroundColor = "yellow";
    document.getElementById("shop").style.display = "flex";
    document.getElementById("checkout").style.display = "none";
    document.getElementById("kassa").style.backgroundColor = "grey";
    document.getElementById("detail").style.display = "none";
}

//Varukorg
/*
var purchase = [
 { name: "Baron", price: 55, qty: 0 },
 { name: "Del Monte", price: 42, qty: 0 },
 { name: "Jufran",  price: 40, qty: 0 },
 { name: "Sinclair", price: 72, qty: 0 },
 { name: "Viking", price: 45, qty: 0 },
 { name: "UFC", price: 35, qty: 0  },
 { name: "UFC Hot & Spicy", price: 35, qty: 0 }
];
*/


//console.log("Basket", basket);
/*
document.getElementsByClassName('buy')[0].addEventListener("click", function(){
 var basket = products.map(basket=> `<h6>${basket.name}</h6> ${basket.qty =+ 1} st ${basket.price * basket.qty}:- `);
}
);
 console.log(basket);
 */

let cartObject = {

};

/*
document.getElementsByClassName("buy").addEventListener("click", bag);  //getElementsByClassName returnerar array. Duger inte här!
  //  buy(this.data('value'));
*/

// Leta upp alla element med klass "buy" = alla knappar
var buyButtons = document.getElementsByClassName('buy');

// Sätt en event-lyssnare på resp. knapp
for ( var i = 0; i < buyButtons.length; i++ ) {
    buyButtons[i].addEventListener('click', function() {

        // Vid tryck på en knapp triggas funktionen add_to_cart som får ett värde från data-value-attributet
        add_to_cart( this.getAttribute("data-value") );

    });
}

function add_to_cart(id){
    if (cartObject[id]){
        cartObject[id]++;
    } else {
        cartObject[id] = 1;
    }
    //console.log("DATAVALUE", id, cartObject);
    displayBasket();
}


/*
function bag(e){
    let id = e.target.getAttribute("data-value");
    cartObject.push(id);
    let basket = document.getElementById("basket").innerHTML = cartArray;
    console.log("Cart", cartArray);
}
*/

function displayBasket() {
    var basket = document.getElementById("basket");
    basket.innerHTML = " ";
    for (let key in cartObject) {
        let qty = cartObject[key];
        //let product = products.find(p => p.id == key);
        let product;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == key) {
                product = products[i];
            }
        }
        if (qty) {
            basket.innerHTML += `                                                                                                             
            <li><h5>${product.name}</h5></li>                                                                                                                
            <li>${product.price}:- </li>
            <button class="decrease" data-value="${product.id}">-</button> 
            <input type="text" value="${cartObject[key]}" size="4" class="bagged">
            <button class="increase" data-value="${product.id}">+</button>  
            <li>${product.price * cartObject[key]}</li>
             <hr>                                                                             
        `;
        }
    }


    let minusBtns = document.getElementsByClassName("decrease");
    let plusBtns = document.getElementsByClassName("increase");
    /*
    for(let i=0; i < minusBtns.length; i--); {
        minusBtns[i].addEventListener("click", function(event){

              event.target()
        });
    }
    */

    for (var i = 0; i < minusBtns.length; i++) {
        minusBtns[i].addEventListener('click', function (e) {
            remove_from_cart(this.getAttribute("data-value"));
            // console.log('Target is: ' + e.target.getAttribute("data-value"))
            //console.log('CLICKED ON MINUS ' + this.getAttribute("data-value"));
            // remove_from_cart( this.getAttribute("data-value") );


        });
    }
    for (var i = 0; i < plusBtns.length; i++) {
        plusBtns[i].addEventListener('click', function (e) {
            add_to_cart(this.getAttribute("data-value"));
            // console.log('Target is: ' + e.target.getAttribute("data-value"))
            //console.log('CLICKED ON PLUS ' + this.getAttribute("data-value"));
            // remove_from_cart( this.getAttribute("data-value") );
        });
    }

    let total = Array.from(document.getElementsByClassName("bagged"));
    let totalItems = total.reduce(function(accumulator, node){
        return accumulator+parseInt(node.getAttribute("value"));
    }, 0);
    //console.log("Totalt antal", totalItems);
    //document.getElementById("itemCount").innerHTML = totalItems;
    $("#itemCount").html(totalItems);
}
function remove_from_cart(id) {

    if (cartObject[id]) {
        cartObject[id]--;
    }
    displayBasket();
    //console.log("DATAVALUE", id, cartObject);
}