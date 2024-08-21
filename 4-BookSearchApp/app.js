// Kitap bulma uygulamasi - kitap hangi rafta ?
// Kullanicinin girdigi isme gore kitabin hangi rafta oldugunu console'da gosteren uygulama

// Kitaplar
let book1 = {
    name: "Her Şeyi Düşünme",
    writer: "Anne Bogel",
    price: 25,
    rack: "1.5. RAF"
}

let book2 = {
    name: "Hiçbir Karşılaşma Tesadüf Değildir",
    writer: "Hakan Mengüç",
    price: 56,
    rack: "2.3. RAF"
}

let book3 = {
    name: "İnsan Neyle Yaşar?",
    writer: "Tolstoy",
    price: 34,
    rack: "3.4. RAF"
}

let book4 = {
    name: "Zafer Sızlanarak Kazanılmaz",
    writer: "Haluk Tatar",
    price: 45,
    rack: "4.1. RAF"
}

let book5 = {
    name: "Şeker Portakalı",
    writer: "Jose Mauro de Vasconcelos",
    price: 22,
    rack: "5.3. RAF"
}

let books = [book1, book2, book3, book4, book5];

// Raflar
let rack11 = { code: "1.1. RAF", show: false }
let rack12 = { code: "1.2. RAF", show: false }
let rack13 = { code: "1.3. RAF", show: false }
let rack14 = { code: "1.4. RAF", show: false }
let rack15 = { code: "1.5. RAF", show: false }

let rack21 = { code: "2.1. RAF", show: false }
let rack22 = { code: "2.2. RAF", show: false }
let rack23 = { code: "2.3. RAF", show: false }
let rack24 = { code: "2.4. RAF", show: false }
let rack25 = { code: "2.5. RAF", show: false }

let rack31 = { code: "3.1. RAF", show: false }
let rack32 = { code: "3.2. RAF", show: false }
let rack33 = { code: "3.3. RAF", show: false }
let rack34 = { code: "3.4. RAF", show: false }
let rack35 = { code: "3.5. RAF", show: false }

let rack41 = { code: "4.1. RAF", show: false }
let rack42 = { code: "4.2. RAF", show: false }
let rack43 = { code: "4.3. RAF", show: false }
let rack44 = { code: "4.4. RAF", show: false }
let rack45 = { code: "4.5. RAF", show: false }

let rack51 = { code: "5.1. RAF", show: false }
let rack52 = { code: "5.2. RAF", show: false }
let rack53 = { code: "5.3. RAF", show: false }
let rack54 = { code: "5.4. RAF", show: false }
let rack55 = { code: "5.5. RAF", show: false }

let racks = [
    [rack51, rack52, rack53, rack54, rack55],  // en ustte kalacak olan raf (cunku raf numarasi yukaridan asagi azalarak iner)
    [rack41, rack42, rack43, rack44, rack45],
    [rack31, rack32, rack33, rack34, rack35],
    [rack21, rack22, rack23, rack24, rack25],
    [rack11, rack12, rack13, rack14, rack15], // en altta kalacak olan raf
];


function createRack() {
    console.clear();
    let row = "";

    for (let i = 0; i < racks.length; i++) {
        for (let j = 0; j < 5; j++) {
            row += "|" + (racks[i][j].show ? racks[i][j].code : "-----") + ""; // raf'in goster degiskeni true ise o rafin kodunu gosterecek false ise ----- seklinde gozukecek
        }
        console.log(row);
        console.log("------------------------------");
        row = "";
    }
}

// kullanicinin girdigi kitap ismi eger raflarda olan kitaplardan herhangi biriyle eslesirse o rafin goster degiskenini true'ya cekecegiz
function searchCode(bookName) {
    let rackCode = null;
    books.forEach(function (book) {
        if (book.name.toUpperCase().includes(bookName.toUpperCase(), 0)) { // 0. indeksten itibaren girilen kitap adi kitaplar dizisiden herhangi birinin ismiyle eslesiyor mu
            rackCode = book.rack; // eselesen kitap varsa kitabin raf kodu donecek
        }
    });

    return rackCode;
}

// gelen raf kodunu raflar dizisinde bularak o rafin goster kismini true yapacak
function rackShow(rackCode) {
    for (let i = 0; i < racks.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (racks[i][j].code == rackCode) {
                racks[i][j].show = true;
                break;
            }
        }
    }
}

createRack();

let bookName = prompt("Lütfen bir kitap ismi giriniz.")
let rackCode = searchCode(bookName);

if (rackCode != null) {
    rackShow(rackCode); // ilgili kitap gorundukten sonra
    createRack(); // tekrar raflari olusturalim ki true olan alan da false olarak guncellenmis olsun
} else {
    alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.");
}