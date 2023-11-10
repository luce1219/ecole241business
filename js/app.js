const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();


   btn.value = 'Envoie...';

   const serviceID = 'default_service';
   const templateID = 'template_qs2jlbm';
   document.getElementById('form').style.display = 'none';
   document.getElementById('imgf').style.display = 'block';
   document.getElementById('pat').innerHTML = 'Veuillez patienter...';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoie';
      document.getElementById('imgf').style.display = 'none';
      document.getElementById('pat').innerHTML = 'Message envoyé 😊';
      setTimeout(() => {
        document.getElementById('over').style.display = 'none';
        window.location.reload();
      }, 5000)
      
      
    }, (err) => {
      btn.value = 'Send Email';
      document.getElementById('imgf').style.display = 'none';
      document.getElementById('pat').innerHTML = 'Une <b style="color: \'red\' !important;">erreur</b>  s\'est produite ...';
      setTimeout(() => {
        document.getElementById('over').style.display = 'none';
        window.location.reload();
      }, 5000)
      
    });
}); 

