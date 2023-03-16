function enforceInvited() {
    if (!isInvited()) {
        setTimeout(function(){ document.location.href = "/wachtwoord"; }, 0);
    }
}

function isInvited() {
    return localStorage.getItem('isPartiallyInvited') !== null || localStorage.getItem('isFullyInvited') !== null;
}

function isFullyInvited() {
    return localStorage.getItem('isFullyInvited') !== null;
}

function login() {
    const password = document.getElementById('password');
    if (password && password.value.toLowerCase() === 'feest') {
        // avondgast
        localStorage.setItem('isPartiallyInvited', true);
        setTimeout(function(){ document.location.href = "/programma"; }, 0);
        return;
    }
    if (password && password.value.toLowerCase() === 'ceremonie') {
        // daggast
        localStorage.setItem('isFullyInvited', true);
        setTimeout(function(){ document.location.href = "/programma"; }, 0);
        return;
    }
    alert('Verkeerd wachtwoord, probeer het nog eens.');
}