const headerCallLink = document.querySelector('.header-call__link');
headerCallLink.addEventListener('click',scrollToForm);

const promotionBtn = document.querySelector('.promotion__button');
promotionBtn.addEventListener('click',scrollToDelivery);

const informBlockBtn = document.querySelector('.information-block__button');
informBlockBtn.addEventListener('click',scrollToDelivery);




function scrollToForm() {
    const bannerForm = document.querySelector('.banner-form');
    bannerForm.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollToDelivery() {
    const deliveryForm = document.querySelector('.delivery-form');
    deliveryForm.scrollIntoView({block:'center', behavior:"smooth"});

}