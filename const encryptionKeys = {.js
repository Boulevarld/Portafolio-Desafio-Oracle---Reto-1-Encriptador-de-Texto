const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encryptText(text) {
    let encryptedText = text.split('').map(char => encryptionKeys[char] || char).join('');
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text;
    for (let key in encryptionKeys) {
        decryptedText = decryptedText.split(encryptionKeys[key]).join(key);
    }
    return decryptedText;
}

function processText() {
    const inputText = document.getElementById('text').value;
    const mode = document.getElementById('mode').value;
    let result = '';

    if (mode === 'encrypt') {
        result = encryptText(inputText);
    } else if (mode === 'decrypt') {
        result = decryptText(inputText);
    }

    document.getElementById('result').innerText = result;
}