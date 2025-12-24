import '@material/web/all.js';

document.getElementById('clickYes').addEventListener('click', function() {
    document.getElementById('confirmDelete').setAttribute('open', true);
});




document.getElementById('shareLink').addEventListener('click', function() {
    document.getElementById('shareWithFriends').setAttribute('open', true);
});


document.getElementById('commenceDelete').addEventListener('click', function() {
    document.getElementById('loadingDelete').setAttribute('open', true);
    setTimeout(function() {
        document.getElementById('loadingDelete').removeAttribute('open');
        document.getElementById('errDelete').setAttribute('open', true);
    }, 1000);
});

document.getElementById('OK').addEventListener('click', function()  {
    document.getElementById('errDelete').removeAttribute('open');
});

document.getElementById('learnMore').addEventListener('click', function()  {
    document.getElementById('errDelete').removeAttribute('open');
});