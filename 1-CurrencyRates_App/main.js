// Elementleri secelim

const amountInput=document.querySelector("#amount");
const firstOption=document.querySelector("#firstCurrencyOption");
const secondOption=document.querySelector("#secondCurrencyOption");
const resultInput=document.querySelector("#result");

const currency = new Currency(); // Kendi olusturdugumuz siniftan nesne turettik (currency.js dosyasi)

runEventListeners();

function runEventListeners(){
    // amountInput alanina deger girilirse/tetiklenirse exchange adindaki fonksiyon calistirilacak
    amountInput.addEventListener("input", exchange); 
}

function exchange(){
    const amount = Number(amountInput.value.trim()); // Amount inputuna girilen deger string oldugu icin sayi'ya ceviriyoruz ve bosluk varsa kaldiriyoruz.
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent; // o anki secilen indexin icerigini alacak (USD, EUR, TRY, ...)

    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount, firstOptionValue, secondOptionValue) // currency.js dosyasinda yazdigimiz exchange metodu ile apiye istek atiliyor
        .then((result) => {
            resultInput.value = result.toFixed(3); // toFixed() => noktadan sonra kac basamak gosterecegini belirtir
        })
}