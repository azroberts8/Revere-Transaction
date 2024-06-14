const merchantId = 'a6ea44dc-435d-44bf-b3d8-874632e922db';
const publicAPIKey = '2hCbBHOSfiTgA9lCyPi3OlGIfP9.30650230572fde2f0034ab1048e81590d96df27259748da347f76cfcfcbb39651390901abd15945619be42db36eccd5d501459650231009295d7e2c881cbdb12e763ca2aabdb6c4c08dbd6a142e13c2ee640eb93e705876a7291e6a15ea7b31ad4289e7f799c07';

const reverePay = new window.tokenizer.SimpleReverePay({
    merchantId: merchantId,
    publicAPIKey: publicAPIKey,
    config: {
        paymentMethods: ['card'],
        sandbox: true
    }
});

reverePay.onSuccess = (data) => {
    console.log("Tokenizer returned successfully!");

    console.log(data);
    
    fetch("./api/transact", {
        method: "POST",
        body: JSON.stringify({
            "token": data.token
        })
    })
        .then(res => console.log(res));
}

reverePay.onError = (err) => {
    console.log('ERROR!');
    console.log(err);
};

const submitButton = document.getElementById("submitPayment");
submitButton.onclick = () => {
    reverePay.submit();
    console.log("Submitted Details");
}