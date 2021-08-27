 /* Theme Name: MAIS
   Author: MAIS
   Version: 1.0.0
   File Description: Main JS file of the template
*/
 

// loader
$(window).on('load', function() {
    $('.status').fadeOut();
    $('.preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});

// Form from formspress.io
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission! We will contact you as soon as possible.";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)