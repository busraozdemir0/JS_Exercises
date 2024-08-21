// ** 10'luk sayiyi 2'lik sayiya cevirme

// Sayiyi bolum 1 olana kadar hep ikiye bolecegiz ve kalanlarini tersten bir sekilde yazacagiz(en son bolum 1 olani da yaziyoruz)


convertDecimalToBinary(10);

function convertDecimalToBinary(number) {
    let binary = "";
    while (true) {
        binary += (number % 2).toString(); // 10'u ikiye bölümünden kalan 0
        // asagidaki kod number degerini yani bolen degerini belirlemesi icin (orn. 10'u ikiye bölünce bölüm 5 / yeni sayimiz 5 oluyor)
        number = Math.floor(number / 2); // floow metodu cikan küsüratli sonucun virgulden sonrasini atip bize tam kismini verir.
        if (number == 1) {
            // Bolum artik 1 ise bolme islemini durduruyoruz ve o 1 rakamini da sonuca ekliyoruz.
            binary += 1;
            break; // Dongunun durmasi icin
        }
    }
    console.log("Hatali: " + binary); // (10 sayisi icin sonuc) 0101 (ters cevrilmesi gerekir)

    let result = reverse(binary);

    console.log("Dogru: " + result); //(10 sayisi icin sonuc) 1010 
}

// Sonuclari tersten yazmamiz gerektigi icin sonucu ters cevirecek metod
function reverse(binary) {
    let reverseBinary = "";
    for (let i = binary.length - 1; i >= 0; i--) {
        reverseBinary += binary.charAt(i); // Rakamlari tek tek alarak birlestiriyoruz
    }
    return reverseBinary;
}