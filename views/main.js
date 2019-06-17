//these should be split up into seperate js files per page.
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

$(document).ready(function () {
    $('#submit').on('click', callServer);
});

function callServer() {
    var data = $('form[name="ContactForm"]').serialize();
    $.post('/ContactService', data, function (returnObject) {
        $('#result').html(returnObject.result);
    }, 'json');

}