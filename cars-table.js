let form = document.querySelector('form.popup');

let carsTable = document.querySelector('.modifiable-table');
let brandInput = document.querySelector('#car-brand');
let modelInput = document.querySelector('#car-model');
let numberInput = document.querySelector('#car-number');
let colorInput = document.querySelector('#car-color');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let brand = brandInput.value;
    let model = modelInput.value;
    let number = numberInput.value;
    let color = colorInput.value;
    let template = `
                <tr>
                    <td>${brand}</td>
                    <td>${model}</td>
                    <td>${number}</td>
                    <td>${color}</td>
                </tr>`;
    carsTable.innerHTML += template;
    closePopup();
});

function closePopup(){
    let popup = document.querySelector('.popup');
    let popupBg = document.querySelector('.popup-background');
    popupBg.classList.remove('active');
    popup.classList.remove('active');
}