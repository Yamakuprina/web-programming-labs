let form = document.querySelector('form.popup');

let driversTable = document.querySelector('.modifiable-table');
let nameInput = document.querySelector('#driver-name');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let name = nameInput.value;
    let status = "Неактивен"
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${status}</td>
                </tr>`;
    driversTable.innerHTML += template;
    closePopup();
});

function closePopup(){
    let popup = document.querySelector('.popup');
    let popupBg = document.querySelector('.popup-background');
    popupBg.classList.remove('active');
    popup.classList.remove('active');
}