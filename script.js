const scriptURL = 'https://script.google.com/macros/s/AKfycbwjzBdOyArcyXEEV5Ml3kyArPMfLxszI9fw66vVVXwIUrzAZz73sOiX8sqKQu0jwDgm/exec'
const form = document.forms['enquiry-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(repsonse => alert("Thanks fo Contacting us...! We will contact you soon..."))
    .catch(error => console.error('Error!', error.message))
})