'esversion: 6';
function showMedia() {
    document.getElementById('movie').style.display="inline-block";
    document.getElementById('movieDownload').style.display="inline-block";
    document.getElementById('sound').style.display="inline-block";
}
function hideMedia() {
    document.getElementById('movie').style.display="none";
    document.getElementById('movieDownload').style.display="none";
    document.getElementById('sound').style.display="none";
}
function handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').nodeValue;
    const lastName = document.getElementById('lastName').nodeValue;
    const email = document.getElementById('email').nodeValue;
    const message = document.getElementById('message').nodeValue;

    axios({
        method: "POST",
        url: "/send",
        data: {
            name: name,
            email: email,
            message: message
        }
    }).then((response)=>{
        if (respoinse.data.msg === 'success'){
            document.getElementById('response').innerHTML = "Thank you for the message" + firstName + " we'll be in touch";
        } else if (response.data.msg === 'fail') {
            document.getElementById('respoinse').innerHTML = "Your message failed to send, please try again";
        }
    });
}