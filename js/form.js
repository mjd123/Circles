const submitButton = document.form.submit;

function validate(e) {
  e.preventDefault();

  if (document.form.firstname.value == '') {
    alert('Please provide your name!');
    document.form.firstname.focus();
    return false;
  }

  if (document.form.email.value == '') {
    alert('Please provide your Email!');
    document.form.email.focus();
    return false;
  }

  if (document.form.textArea.value == '') {
    alert('Please provide a message');
    document.form.textArea.focus();
    return false;
  }
}

submitButton.addEventListener('click', validate);
document.querySelectorAll('form input').forEach(function (x) {
  x.addEventListener('focus', function () {
    this.style.border = '1px solid white';
  });

  x.addEventListener('focusout', function () {
    this.style.border = '0px';
  });
});
