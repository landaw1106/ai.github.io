function checkForm(form)
{
  // regular expression to match only alphanumeric characters and spaces
  var re = /^[\w ]+$/;

  // validation fails if the input doesn't match our regular expression
  if (!re.test(form.feedback.value)) {
    form.feedback.value = ""
    form.feedback.focus();
    return false;
  }

  // validation was successful
  return true;
}

function processData(form) {
  var data = form.feedback.value;
  firebase.database().ref('feedbacks/' + data).set({
    feedback: data
  });
}
