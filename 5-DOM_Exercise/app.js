
// *** SELECTORS (SECİCİLER)

// **  getElementById ile secme
let value;
value = document.getElementById("todoAddButton"); // verilen id'ye sahip olan elemani secer

//value = value.id; // elemanin id'sini gonderir

//value = value.getAttribute("class");

//value = value.classList[3]; // butonun classlarindan ucuncusunu alir

//value = value.textContent; // butonun textini getirir

value.innerHTML = "<b> Merhaba </b>"; // innerHTML ozelligi ile html elemanlari iceren degeri ekrana basabiliriz


//console.log(value);


// ** getElementByClassName ile secme

const todoList = Array.from(document.getElementsByClassName("list-group-item"));
todoList.forEach(function (todo) {
    console.log(todo);
})
//console.log(todoList);


// ** getElementsByTagName() ile secme

const forms = Array.from(document.getElementsByTagName("form")); // form'lar array'e cevriliyor
forms.forEach(function (form) {
    console.log(form);
})

const addButton = document.querySelector("#todoAddButton"); // id'ye sahip oldugu icin basina # koyarak querySelector ile sectik
console.log(addButton);

const todoList2 = document.querySelectorAll("li:first-child"); // li'ler icerisinde ilk cocugu getirir (last-child ise sonuncuyu getirir)
const todoList3 = document.querySelectorAll("li:nth-child(2)"); // li'ler icerisinde 2. cocugu

// odd => tekleri secer
// even => ciftleri secer

const todoList4 = document.querySelectorAll("li:nth-child(odd)"); // li'ler icerisinde tek numaraliya sahip olanlari secer



// ** Elementler uzerinde gezinme

// Ebeveynden cocuklara erismek
let value;

value = todoList.children; // cocuklarini yakaladik
value = todoList.children[0]; // ilk cocuga erismek
value = todoList.children[3].textContent = "Değiştir";


// Cocuktan anneye erismek
value = todo;
let cardBody = todo.parentElement.parentElement; // iki ustundeki parentini alir
let card = cardBody.parentElement;
//let row = card.parentElement;


// ** Kardesler arasinda gezinmek

value = todo;
value = todo.nextElementSibling;  // to donun bir sonraki kardesini aliyoruz (ToDo 2) - bir sonraki elemana gitmek icin bir daha .nextElementSibling yazarak 3. to doya erisiriz

value = todo.previousElementSibling;  // to donun bir onceki kardesini aliyoruz 

const row = document.querySelector(".row");
value = row.children[0].children[3].children[0].textContent = "Değiştir"; // card-title classina sahip olan h5 elementini secmis olduk

// TO DO 3 kisminin stilleriyle oynama
let todo3 = row.children[0].children[3].children[2].children[2]
todo3.textContent = "to do3 değişti";
todo3.style.backgroundColor="lightGrey";
todo3.style.color="red";

console.log(value);


