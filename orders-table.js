let form = document.querySelector('form.popup');

let ordersTable = document.querySelector('.modifiable-table');
let phoneNumberInput = document.querySelector('#order-phone-number');
let fromInput = document.querySelector('#order-from');
let toInput = document.querySelector('#order-to');
var mapNumber = 3

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let number = phoneNumberInput.value;
    let status = "Ожидает"
    let driver = "Не назначен"
    let from = fromInput.value;
    let to = toInput.value;
    let template = `
                    <td>${number}</td>
                    <td>${status}</td>
                    <td>${driver}</td>
                    <td class="from">${from}</td>
                    <td class="to">${to}</td>`;

    let mapTemplate = `
                    <td colspan = 5 class="map-table-cell">
                        <div class="map" id=${("map"+mapNumber++)}></div>
                    </td>`;

    let row = ordersTable.insertRow(1);
    let mapRow = ordersTable.insertRow(2);

    row.innerHTML = template;
    mapRow.innerHTML = mapTemplate;
    closePopup();
    drawMaps();
});

function closePopup(){
    let popup = document.querySelector('.popup');
    let popupBg = document.querySelector('.popup-background');
    popupBg.classList.remove('active');
    popup.classList.remove('active');
}