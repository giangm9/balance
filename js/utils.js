function randomElement(array) {
    return array[Math.floor(Math.random() * array.length )];
}

function getParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
