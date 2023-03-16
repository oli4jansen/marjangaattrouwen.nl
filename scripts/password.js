function enforceInvited() {
    if (!isInvited()) {
        window.location.href = '/wachtwoord';
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
    if (password && password.value === 'feest') {
        // avondgast
        localStorage.setItem('isPartiallyInvited', true);
        window.location.href = '/programma';
    }
    if (password && password.value === 'ceremonie') {
        // daggast
        localStorage.setItem('isFullyInvited', true);
        window.location.href = '/programma';
    }
}