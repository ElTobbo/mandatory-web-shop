var stuffContainer = document.getElementById("stuff");

var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://demo.edument.se/api/products');
myRequest.onload = function(){
    //console.log(myRequest.responseText);
    var myData = JSON.parse(myRequest.responseText);
    //console.log(myData[0]);
    let shopStuff = myData.map(data=> `
    <div class="mapStuff" data-value="${data.Id}">   
    <img src="${data.Image}"><br>
    <h3 class="detail">${data.Name}</h3>
    ${data.Description} <br>
    <a href="${data.Url}">${data.Url}</a><br>
    $ ${data.Price}  <br>
    <button class="buy" data-value="${data.Id}">KÖP</button>
     <hr>
     </div>
    `);
    //console.log(shopStuff);

    let shopStuffs = shopStuff.join(" ");                     //Plockar bort kommatecken, oklart varför det inte funkar direkt på shopItem
    document.getElementById("stuff").innerHTML=shopStuffs;     //Publicering
};

myRequest.send();









