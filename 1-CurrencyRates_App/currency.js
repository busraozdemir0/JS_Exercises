class Currency {
    constructor(){
        // freecurrencyapi sitesine uye olunarak api key alindi
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Yl1pz2FJWw0gV1HLpVR7kRbpruFsnzbyDXYuYYgw&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        // Api'ye istegimizi atiyoruz
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency]; // İkinci girilen deger ve girilen miktar ile carpiyoruz. (Orn: miktar 5 girilmisse USD=>TRY icin 1 dolarin tl'deki karsiligini 5 ile carpip sonuca yazdiracagiz)

        return exchangedResult;
    }
}