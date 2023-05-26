var btnWhatsapp = document.querySelector('.btn-whatsapp');
btnWhatsapp.addEventListener('click', function(event) {
  event.preventDefault();
  window.open(this.href, '_blank');
});