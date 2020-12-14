const changeDialogMenu = () => {
  const dialogMenu = document.querySelector('.popup-dialog-menu'),
    menuBtn = document.querySelector('.menu__icon'),
    repairLinkTabble = document.querySelectorAll('.link-list-repair a')[1],
    linkPrivacy = document.querySelectorAll('.link-privacy'),
    buttonFooter = document.querySelector('.button-footer a');

  const openModal = (modal) => {
    modal.style.visibility = 'visible';
  };

  const closeMenu = (x, y) => {
      dialogMenu.style.transform = `translate3d(${x}px,${y}px,0)`;
  };

  const closeModal = (modal) => {
    modal.style.visibility = 'hidden';
  };

  const showPolicy = () => {
    const popUpPrivacy = document.querySelector('.popup-privacy');
    openModal(popUpPrivacy);

    popUpPrivacy.addEventListener('click', event => {
      const target = event.target;

      if(target.matches('.close')) {
        closeModal(popUpPrivacy);
      }
    });
  };

  const checkWindow = () => {
    if(document.documentElement.clientWidth <= 576) {
      dialogMenu.style.transform = 'translate3d(0,-1845px,0)';
      closeMenu(0, -1845);
    } else {
      dialogMenu.style.transform = 'translate3d(1645px,0,0)';
      closeMenu(1645, 0);
    }
  };

  const showTypesRepair = () => {
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    openModal(popupRepairTypes);

    popupRepairTypes.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.popup-dialog-repair-types');
      
      closeModal(popupRepairTypes);
      if(!target) {
        closeModal(popupRepairTypes)
      }
    });
  };

  const slowMove = (e, elem) => {
    e.preventDefault();
    const scroll = elem.getAttribute('href').substring(1);
    document.getElementById(scroll).scrollIntoView({
      behavior: 'smooth',
      top: 'start'
    });
  };

  const redirect = (e) => {
    let target = e.target;
    if(target.matches('.close-menu')) {
      checkWindow();
    }

    if(target.matches('.no-overflow')) {
      showTypesRepair();
    }

    if(target.matches('a') && !target.matches('.no-overflow')) {
      checkWindow();
      slowMove(e, target);
    }
  }

  dialogMenu.addEventListener('click', e => redirect(e));
  repairLinkTabble.addEventListener('click', showTypesRepair);
  linkPrivacy.forEach(item => item.addEventListener('click', showPolicy));
  menuBtn.addEventListener('click', () => closeMenu(0, 0));
  buttonFooter.addEventListener('click', e => slowMove(e, buttonFooter));

}

export default changeDialogMenu;