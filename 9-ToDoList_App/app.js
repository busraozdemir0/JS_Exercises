
// ** TO DO LİST PROJESİ (Ekleme, silme, filtreleme, local storage'e ekleme, local storage'den silme)

// Tum elementleri secmek
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch"); // arama, filtreleme inputu

let todos = [];

// sayfa acildigi gibi ilk calisacak metod
runEvents();

function runEvents() {
    form.addEventListener("submit", addToDo); // biri forma submit yaparsa addToDo fonksiyonunu calistir
    document.addEventListener("DOMContentLoaded", pageLoaded); // sayfa yuklendiginde eger local storage'de veri varsa onlari getirmek icin event yazdik
    secondCardBody.addEventListener("click", removeToDoToUI); // to do maddesinin en sagindaki x ikonuna tiklandiginda o to do'yu silecek olan event
    clearButton.addEventListener("click", allTodosEverywhere); // tum to do'lari silecek olan butona tiklandiginda gerceklesecek olan eylem
    filterInput.addEventListener("keyup", filter); // arama kismi icin calisacak olan eylemler (keyup => bir tusa basip biraktigi an calismasi icin kullanilmaktadir)
}

// sayfa yuklendiginde local storage'den veri cekme
function pageLoaded() {
    checkTodosFromStorage(); // local storage'de deger var mi diye kontrol ettirilen metod
    todos.forEach(function (todo) {
        addToDoToUI(todo); // todos'ta olan degerleri ekrana bastiriyoruz
    });
}

// Arama, filtreleme kismi icin calisacak
function filter(e) { // e parametresini sadece ihtiyacimiz oldugu durumlarda kullaniriz
    const filterValue = e.target.value.toLowerCase().trim(); // bu sekilde inputa girilen degeri almis oluyoruz (trim() metodu sag ve solda bosluk karakteri varsa onlari atar)
    const todoList = document.querySelectorAll(".list-group-item");

    if (todoList.length > 0) {
        todoList.forEach(function (todo) {
            // ** inputa bir deger yazdiktan sonra o degeri iceren veriler gelmesi icin == yerine includes metodunu kullaniyoruz.
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) { // girilen filter degeri todo listesinin herhangi birisi icinde geziyorsa 
                todo.setAttribute("style", "display : block"); // deger todo'daki herhangi biriyle eslesiyorsa o todoyu goster
            } else { // eslesmiyorsa o todoyu gosterme
                todo.setAttribute("style", "display : none !important"); // !important => bootstrap ozelliklerini degil, benim yazdigim ozellikleri dikkate almasi icin
            }
        });
    } else {
        showAlert("warning", "Filtreleme yapmak için en az bir to do olmalıdır!");
    }
}

// Tum Todolari Temizle butonu icin
function allTodosEverywhere() {
    const todoList = document.querySelectorAll(".list-group-item");
    if (todoList.length > 0) { // eger ekranda bir to do varsa
        // UI'dan silme
        todoList.forEach(function (todo) { // ekranda var olan tum to do'lar uzerinde dolas ve bunlari tek tek sil
            todo.remove();
        });

        // Storage'den silme
        todos = []; // mevcuttaki array'i tertemiz hale getirdik
        localStorage.setItem("todos", JSON.stringify(todos)); // ardindan mevcut todos'u storage'e setledik
        showAlert("success", "Tüm To Do'lar başarılı bir şekilde silindi.");

    } else {
        showAlert("warning", "Silme işlemi için en az bir to do olmalıdır.");
    }
}

// UI'dan to do silme islemi
function removeToDoToUI(e) {   // to do maddesinin en sagindaki x ikonuna tiklandiginda o to do'yu silecek
    // i etiketine yani x ikonuna bastigini anlamak icin className'i fa fa-remove mu diye kontrol ettirdik
    if (e.target.className === "fa fa-remove") {
        // Ekrandan yani UI'dan to do silme
        const todo = e.target.parentElement.parentElement; // e.target => i elementini gosterir, bir ustu a, bir ustu daha li elementidir
        todo.remove();

        // Local storage'den to do silme
        removeToDoToStorage(todo.textContent);

        showAlert("success", "To Do başarıyla silindi.");
    }
}

// Local Storage'den to do silme islemi
function removeToDoToStorage(removeToDo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) { // to do'yu ve o to donun index numarasini aliyoruz
        if (removeToDo === todo) { // silinecek olan icerik ile o an uzerinde dondugumuz todo esit ise o todo'yu local storage'den silecegiz
            todos.splice(index, 1); //silinecek olan todo'nun index numarasini veriyoruz ve 1 deger silinecegi icin 1 yazdik 
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos)); // todos'un guncel halini storage'e setliyoruz
}

// to do ekleme
function addToDo(e) {
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") { // eger inputa bir deger girilmeden submit edilmisse uyari veriyoruz
        showAlert("warning", "Lütfen boş bırakmayınız!");

    } else {
        // Arayuze degeri ekleme
        addToDoToUI(inputText);
        // Local Storage degeri ekleme
        addToDoToStorage(inputText);
        showAlert("success", "Todo eklendi."); // to do basarili olarak eklendiyse ekranda basarili alerti gosteriyoruz
    }
    e.preventDefault(); // farkli bir sayfaya yonlendirmemesi icin
}

// eklenen to do'yu sayfada gosterme
function addToDoToUI(newTodo) {

    // -- Asagidaki html kodu js ile olusturularak ekrana bastirilacak

    //  <li class="list-group-item d-flex justify-content-between">Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>
    //  </li>

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

// to do'yu local storage'e ekleme (local storage'de veri silinmez)
function addToDoToStorage(newTodo) {
    checkTodosFromStorage(); // localstorage'e onceden eklenmis todos varsa bunu alip ustune ekleme yapmamiz gerekiyor (onceki todo'lar silinmemesi icin)
    todos.push(newTodo); // yeni todo'yu todos icine gondererek guncelle
    localStorage.setItem("todos", JSON.stringify(todos)); // JSON stringify ile guncel todos'u, local storage'e göm.

}

// localstorage'e onceden eklenmis todos varsa bunu alip ustune ekleme yapmamiz gerekiyor (onceki todo'lar silinmemesi icin)
function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) { // keyi todos olan bir sey var mi
        todos = []; // yoksa bos baslat
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // varsa JSON biciminde dizilestirerek todos degiskenine setle
    }
}

// ekleme durumunda mesaj ile bildirimde bulunmak icin alert gosterimi
function showAlert(type, message) {
    // <div class="alert alert-warning" role="alert">
    //     Alert yazısı
    // </div>  
    const div = document.createElement("div");
    div.className = "alert alert-" + type; // gelen type warning, success, danger .. olabilir
    div.textContent = message;

    firstCardBody.appendChild(div);

    // Alert eklendikten 2.5 saniye sonra kaldirilmasi icin
    setTimeout(function () {
        div.remove();
    }, 2500);
}