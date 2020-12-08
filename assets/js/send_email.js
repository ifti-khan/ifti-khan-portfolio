const btn = document.getElementById('sendbutton');

document.getElementById('contactform')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'iftikhan-email-template';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send';
                console.log("Message Has Been Sent");
                if (alert('Your message has been sent!')) {} else window.location.reload();
            }, (error) => {
                btn.textContent = 'Send';
                console.log("Message Failed To Send", error);
                if (alert(`Oops something went wrong!`)) {} else
                    window.location.replace("assets/pages/message_404.html");
            });
    });

/*function sendMail(contactForm) {
    emailjs.send("ifti-khan-portfolio", "iftikhan-email-template", {
            "from_name": contactForm.fullname.value,
            "message": contactForm.message.value,
            "subject": contactForm.subject.value,
            "from_email": contactForm.emailaddress.value,
            "contact_number": contactForm.number.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);

                Confirm message
                if (confirm('Successful Message')) {
                    window.location.reload();
                }

                if (alert('Your message has been sent!')) {} else window.location.reload();


            },
            function (error) {
                console.log("FAILED", error);
                if (alert(`Oops something went wrong!`, error)) {} else

                    href redirect but allow user to go back
                    window.location.href = "assets/pages/message_404.html";
                    window.location.replace("assets/pages/message_404.html");
            }
        );
    return false; // To block from loading a new page
}*/
