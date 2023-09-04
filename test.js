// const Crypto = require('crypto')
// const crypto = require('crypto-js')

// let timestamp = "1673880127"
// let nonce = "jn1be7lq";
// let appSecret = "9nwbgftww62jypb";
// //
// // //const hash = crypto.createHash('sha256').update(timestamp + nonce + appSecret).toString();o
// // const hash = crypto.SHA256(timestamp + nonce + appSecret).toString();
// // console.log(hash)



const fetch = require('node-fetch');
let bodyJson = {
    user_id: "nguyenloc12021999vn@gmail.com",
    user_mdn: "+84378028840",
    merchant_transaction_id: "TRX101",
    payment_method: "telkomsel_airtime",
    amount: 10000,
    item_name: "Item name",
    custom: "cc"

}

// const bodyJsonString = JSON.stringify(bodyJson);

// const hmac = Crypto.createHmac('sha256', appSecret);
// hmac.update(bodyJsonString);
// const hmacHash = hmac.digest();
// const base64Hash = Buffer.from(hmacHash).toString('base64');
// const bodysign = base64Hash.replace(/\+/g, '-').replace(/\//g, '_');
// console.log(bodysign);


// // appkey:2AAn2auj1hCAsfh5UEP706nUoAKqdWvf
// // timestamp:1673862002037
// // nonce:456
// // secret:44a24fc7fc8d579ce04789cd6b665094d57e6407121f0087a2a3835239cc54d7
// // appid:63c10657764f1bbf1b8b4567
// // bodysign:KLg4vhubjMBSBDgJ6oOxgEXzBLyttggJ5HdgKYhVMHc=
const headers = {
    appkey: "2AAn2auj1hCAsfh5UEP706nUoAKqdWvf",
    timestamp: 1673880127,
    nonce: "jn1be7lq",
    secret: "23fec35d4225d0e2b3db9ea831bb06767cc8e9018527021608656a7c71487cc2",
    bodysign: "VzexNc_QJfib5a55nM9dy9ndKHR7k_IghtJnLARKqnQ=",
    appid: "63c10657764f1bbf1b8b4567"
}

fetch("https://payment.redpay.co.id/api/v2/create", {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(bodyJson)
})
    .then(response => response.json())
    .then(data => console.log(data))