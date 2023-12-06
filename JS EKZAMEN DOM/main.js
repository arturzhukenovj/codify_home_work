function saveToLocalStorage() {
    const inputData = document.getElementById('dataInput').value;

    localStorage.setItem('savedData', inputData);

    alert('Информация сохранена в локальном хранилище!');
}
document.getElementById('buttonDOM')
