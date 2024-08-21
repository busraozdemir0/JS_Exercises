// ** İkilik sayidan 10'luk sayiya cevirme

let binary = "1101011";  // sonuc 107 

function convertyBinaryToDecimal(binary) {
    let toplam = 0;
    let ust = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        toplam += Number(binary.charAt(i)) * Math.pow(2, ust);
        ust++;
    }

    console.log("Sonuc: " + toplam);
}

convertyBinaryToDecimal(binary);


// ------------------------------------------------

// dizi tanimlama ve uzerinde donme

let isimler=["Büşra","Ömer","Bilal","Kübra"];

isimler.forEach(function(isim){
    console.log(isim);
});