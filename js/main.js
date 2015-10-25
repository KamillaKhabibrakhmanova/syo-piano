$('a[href*=#bio]').on('click', function(event){
    event.preventDefault();

    $('.nav-link').removeClass('active');
    $(this).parent().addClass('active');
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 53);
});
$('a[href*=#testimonials]').on('click', function(event){
    event.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).parent().addClass('active');
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 553);
});

$('a[href*=#contact]').on('click', function(event){
    event.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).parent().addClass('active');
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 553);
});

var signupForm = document.getElementById('signup-form');
var signupSuccess = document.getElementById('signup-success');
var signupError = document.getElementById('signup-error');
var signupBtn = document.getElementById('signup-button');
var onSignupComplete = function(error) {
  signupBtn.disabled = false;
  if (error) {
    signupError.innerHTML = 'Sorry. Something went wrong. Please try again.';
  } else {
    signupSuccess.innerHTML = 'Thank you for your interest, your message was sent! I\'ll get back to you shortly';
    // hide the form
    signupForm.style.display = 'none';
  }
};

function signup(formObj) {
    if(formObj.human.value.toString() !== '5'){
        signupError.innerHTML = 'Please fill in the last field to help verify that you are human!';
        return false;
    }

    // Store emails to firebase
    var myFirebaseRef = new Firebase("https://syossetpianoacademy.firebaseio.com/emails");
    myFirebaseRef.push({
      email: formObj.email.value,
      phone: formObj.phone.value,
      name: formObj.name.value,
      message: formObj.message.value
    }, onSignupComplete);
    signupBtn.disabled = true;
    return false;
}
