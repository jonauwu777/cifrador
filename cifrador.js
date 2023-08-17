var passwordEntered = false;

function checkPassword() {
    var passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === "tu_contraseña_segura") { 
        passwordEntered = true;
        document.getElementById("messageSection").style.display = "block";
    } else {
        alert("Contraseña incorrecta.");
    }
}

function cipherText() {
    if (!passwordEntered) {
        alert("Debes ingresar la contraseña primero.");
        return;
    }

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var inputOriginal = document.getElementById('inputOriginalText');
    var result = document.getElementById('cipheredResult');
    let originalMessage = inputOriginal.value;
    let cipheredMessage = '';

    for (let i = 0; i < originalMessage.length; i++) {
        let letra = originalMessage[i];
        let index = alphabet.indexOf(letra);
        let newLetter = alphabet[(index + 5) % alphabet.length];
        cipheredMessage += newLetter;
    }

    result.value = cipheredMessage;
}

function decipherText() {
    if (!passwordEntered) {
        alert("Debes ingresar la contraseña primero.");
        return;
    }

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    var inputCiphered = document.getElementById('inputCipheredText');
    var result = document.getElementById('decipheredResult');
    let cipheredMessage = inputCiphered.value;
    let originalMessage = '';

    for (let i = 0; i < cipheredMessage.length; i++) {
        let letra = cipheredMessage[i];
        let index = alphabet.indexOf(letra);
        let newLetterIndex = (index - 5) < 0 ? (alphabet.length + index - 5) : (index - 5);
        let newLetter = alphabet[newLetterIndex];
        originalMessage += newLetter;
    }

    result.value = originalMessage;
}
