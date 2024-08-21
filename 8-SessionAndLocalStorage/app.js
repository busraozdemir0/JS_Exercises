// ***Session Storage ve Local Storage kullanimlari (tamamen aynidir tek fark + )
// ** + Session Storage'e eklenmis degerler tarayici kapatilip acinca silinir, fakat Local Storage'e eklenmis degerler tarayici kapatilip acinca dahi silinmez!!

// LOCAL STORAGE'DEKİ VERİLER HİC BİR ZAMAN SİLİNMEZ!!! 

// ** SESSİON STORAGE

// Deger ekleme
sessionStorage.setItem("81", "Büşra");
sessionStorage.setItem("06", "Zehra");
sessionStorage.setItem("61", "Mustafa");
sessionStorage.setItem(30, "Software");

// Deger silme
sessionStorage.removeItem("61");

// Deger alma
let value = sessionStorage.getItem("81");
if (value == null) {
    console.log("Değer bulunamadı");
}
else {
    console.log("Değer bulundu: ", value);
}

// Session storage'deki tum degerleri silme
//sessionStorage.clear();

let value2 = sessionStorage.getItem(30);
console.log(typeof value); // string doner (session storage'e ne eklersek ekleyelim string olarak kabul edilir)

// Session Storage - Array Yazdirma
let names = ["Ali", "Büşra", "Kübra", "Adem", "Ayşenur"];
sessionStorage.setItem("names", JSON.stringify(names)); // elimizdeki diziyi array tipinde yazdirmak icin stringify ile yazdirdik.

let value3 = JSON.parse(sessionStorage.getItem("names")); // array biciminde alabilmek icin JSON sinifinin parse metodu kullanilir.
console.log(value3);


// ** LOCAL STORAGE

// Deger ekleme
localStorage.setItem("motion1", "Push up");
localStorage.setItem("motion2", "Barfix");
localStorage.setItem("motion3", "Burpee");
localStorage.setItem("motion4", "Squat");

// Deger alma
let value4 = localStorage.getItem("motion1");
console.log("Deger: "+ value4);

// Deger silme
localStorage.removeItem("motion4");

// Tumunu temizle
//localStorage.clear();

// Array islemi
let motions = ["Push up", "Barfix", "Burpee", "Squat", "Chin up"];
localStorage.setItem("motions", JSON.stringify(motions));

let value6 = JSON.parse(localStorage.getItem("motions"));
value6.forEach(motion => {
    console.log(motion);
});