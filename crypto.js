var btc = document.getElementById("bitcoin");
var doge = document.getElementById("Dogecoin");
 var eth = document.getElementById("Ethereum");
var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
  "method": "GET",
  "headers" : {}
}
$.ajax(settings).done(function(response){
btc.innerHTML = response.bitcoin.usd;
eth.innerHTML = response.Ethereum.usd;
doge.innerHTML = response.Dogecoin.usd;
console.log(response);
});