function sendEmail(event) {
    event.preventDefault(); // Prevents the default form submission
  
    // Fetch values from form inputs
    const firstName = document.querySelector('.contact-input[placeholder="First Name"]').value;
    const lastName = document.querySelector('.contact-input[placeholder="Last Name"]').value;
    const phone = document.querySelector('.contact-input[placeholder="Phone"]').value;
    const email = document.querySelector('.contact-input[placeholder="Email"]').value;
    const message = document.querySelector('.contact-input[placeholder="Message"]').value;
  
    // Send email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_name: firstName,
      from_name: email,
      phone: phone,
      message: message,
    })
    .then(function(response) {
      console.log('Email sent:', response);
      // Add your success message or redirect to a thank you page
    }, function(error) {
      console.error('Error sending email:', error);
      // Add your error message or alert the user about the failure
    });
  }
  