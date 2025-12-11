const showBtn1 = document.querySelector('.showBtn1');
const showBtn2 = document.querySelector('.showBtn2');
const showBtn3 = document.querySelector('.showBtn3');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const btnsCloseModal = document.querySelectorAll('.closeModal');
const overLay = document.querySelector('.overLay');

// OPEN MODAL
const openModal1 = function () {
  modal1.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
};

const openModal2 = function () {
  modal2.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal1.classList.add('hidden');
  modal3.classList.add('hidden');
};

const openModal3 = function () {
  modal3.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal2.classList.add('hidden');
  modal1.classList.add('hidden');
};

showBtn1.addEventListener('click', openModal1);
/* function () {
  modal1.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
});*/

showBtn2.addEventListener('click', openModal2);
/*function () {
  modal2.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal1.classList.add('hidden');
  modal3.classList.add('hidden');
});*/

showBtn3.addEventListener('click', openModal3);
/*function () {
  modal3.classList.remove('hidden');
  overLay.classList.remove('hidden');
  modal2.classList.add('hidden');
  modal1.classList.add('hidden');
});*/

// CLOSE MODAL
const closeModal = function () {
  overLay.classList.add('hidden');
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
};

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener('click', closeModal);
  /* function () {
    overLay.classList.add('hidden');
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden'); 
  }); */
}

overLay.addEventListener('click', closeModal);
/* function () {
  overLay.classList.add('hidden');
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden'); 
  
});*/

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();

    // if(!modal1.classList.contains('hidden') || !modal2.classList.contains('hidden') || !modal3.classList.contains('hidden')) {
    //     closeModal();
    // }
  }
});
