function enforceFullyInvited() {
    if (!isFullyInvited()) {
        window.location.href = '/wachtwoord';
    }
}

function enforcePartiallyInvited() {
    if (!isFullyInvited()) {
        window.location.href = '/wachtwoord';
    }
}

function isPartiallyInvited() {
    return localStorage.getItem('isPartiallyInvited') !== null || isFullyInvited();
}

function isFullyInvited() {
    return localStorage.getItem('isFullyInvited') !== null;
}

function login() {
    const password = document.getElementById('password');
    if (password && password.value === 'feest') {
        // avondgast
        localStorage.setItem('isPartiallyInvited', true);
        window.location.href = '/programma_feest';
    }
    if (password && password.value === 'ceremonie') {
        // daggast
        localStorage.setItem('isFullyInvited', true);
        window.location.href = '/programma';
    }
}