const returnDate = () => {
  const date = document.querySelector('.popup-repair-types-content__head-date span'),
    navList = document.querySelector('.nav-list-popup-repair'),
    tableList = document.querySelector('.popup-repair-types-content-table__list > tbody');

  const getData = () => fetch('./db/db.json');

  const render = (date, priceList, navList, data) => {
    data.map(item => {
      // console.log(item.priceList);
      if(item.date) {
        date.textContent = item.date;
      }
      if(item.title) {
        navList.insertAdjacentHTML('beforeend', `<button class='button_o popup-repair-types-nav__item'>${item.title}</button>`)
      }
      if(item.priceList) {
        item.priceList.map(elem => {
          priceList.insertAdjacentHTML('beforeend', `
            <tr class="mobile-row">
            <td class="repair-types-name">${elem.typeService}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${elem.units}</td>
            <td class="repair-types-value">${elem.cost} руб.</td>
            </tr>
          `);
        })
      }
    });

  };

  getData()
    .then(resolve => {
      if(resolve.status !== 200) {
        throw new Error('Status is not 200');
      }
      return resolve.json();
    })
    .then(data => {
      render(date, tableList, navList, data);
    });

};

export default returnDate;