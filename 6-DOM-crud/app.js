// ** Dinamik olarak element olusturmak

// class ismi card-body olanin ikincisini seciyoruz
const cardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");

const link = document.createElement("a");
link.id = "goYouTubeSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://www.youtube.com";
link.target = "_blank";
link.innerHTML = "YouTube Sitesine Git"

cardBody.appendChild(link); // cardBody'min sonuna olusturulan elemani ekleyecek

// TO DO 5 olusturma
const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href = "#";
todoLink.className = "delete-item";

i.className = "fa fa-remove";

todoLink.appendChild(i); // a etiketinin icerisine i elementini koyduk
todo.appendChild(todoLink); // a etiketini de olusturacagimiz yeni todo'nun icerisine koyduk

todoList.appendChild(todo); // olusturdugumuz todo 5'i de todoList icerisine ekledik

console.log(link);


// Element silmek

const todoList2 = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item");

//todos[0].remove(); // to do list icerisindeki ilk eleman gidecek
//todos[todos.length-1].remove(); // son elemani silmek icin

// todoList.removeChild(todos[0]); // todoList'ten ilk elemani silebilme yontemi daha
//todoList.removeChild(todoList.lastElementChild); // son elemani silebilme yontemi

console.log(todo);
