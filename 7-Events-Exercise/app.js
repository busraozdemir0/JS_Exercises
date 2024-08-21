// *** EVENTS (OLAYLAR) ***

function changeTitle() {
    document.querySelectorAll(".card-title")[1].textContent = "Başlık değişti..";
}


// ** addEventListener() kullanimi

const clearButton = document.querySelector("#clearButton3"); // clearButton3 id'li buton secildi
clearButton.addEventListener("click", function () { // bu butona event tanimlandi (html sayfasinda onclick yazmak yerine boyle yapilabilir)
    alert("Merhaba");
});

clearButton.addEventListener("click", changeTitle); // fonk adindan sonra parantez ac kapa yapmıyoruz

function fonksiyon(e) {
    console.log(e); // calisan metodun parametresi ile event ile ilgili ozelliklere ulasabiliriz
    console.log(e.type); // yapilan eventin tipini gosterir (click vb.)
}

// **MOUSE EVENTS

// window.addEventListener("load", run);

function run(e) {
    //  alert("Sayfa yüklendi");
    console.log(e.type);
    //console.log(e.key); // basilan tusu console'da gosterir
    // console.log(e.keyCode); // basilan tusun ascii kodunu gosterir
}

const cardTitle = document.querySelectorAll(".card-title")[1];
cardTitle.addEventListener("click", run);

const cardTitle1 = document.querySelectorAll(".card-title")[0];
cardTitle1.addEventListener("dblclick", run); // cift tiklandiginda calisir

const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseover", run); // mouse ile uzerine geldigimizde -- hem cardBody'de hem de cardBody icerisindeki elemanlarda gezinirsek tetiklenir.

cardBody.addEventListener("mouseout", run); // mouse ile disari ciktigimizda

cardBody.addEventListener("mouseenter", run); // mouseover ile benzer -- sadece cardBody'de tetiklenir, cardBody icerisindeki elemanlarda gezinsek de tetiklenmez

cardBody.addEventListener("mouseleave", run);  // mouseout ile benzer


// **KLAVYE EVENTS

// keypress => sadece harf ve sayilarda tetiklenen event'tir.
document.addEventListener("keypress", run);

// keydown => harf, sayi, bosluk tuus, capslock gibi tum tuslarda tetiklenen event'tir.
document.addEventListener("keydown", run);

// keyup => tustan elimizi kaldirdigimizda calisan event'tir
document.addEventListener("keyup", run);


// Ornek
const cardtitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

console.log(input);
input.addEventListener("keyup", write); // input icerisinde bir tusa basilirsa write metodu calisacak

function write(e) {
    cardtitle.textContent = e.target.value; // inputa girilen deger cardtitle kismina yazdirilacak
    console.log(e.target.value); // o an icinde bulunulan target'in value ozelligini yani inputun degerini console'a basar
}


// ** İNPUT EVENTS

const todo = document.querySelector("#todoName");

// focus => inputun icine tiklanildiginda, odaklanildiginda
todo.addEventListener("focus",inputEvents);

// blur => input icinden ciktigimizda
todo.addEventListener("blur",inputEvents);

// copy => input icerisindeki veriyi kopyalarsak
todo.addEventListener("copy",inputEvents);

// paste => input icerisine paste islemi yaparsak
todo.addEventListener("paste",inputEvents);

// cut => input icerisinde cut islemi yapilirsa
todo.addEventListener("cut",inputEvents);

// select => input icerisinde bir seyi sectigimizde secmeyi biraktigimiz an tetiklenen olay
todo.addEventListener("select",inputEvents);

function inputEvents(e){
    console.log(e.type);
}