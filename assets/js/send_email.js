const btn = document.getElementById('sendbutton');

function changeSendBtnText() {
    btn.textContent = 'Send';
}

function resetContactForm() {
    document.getElementById('contactform').reset();
}

document.getElementById('contactform')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.textContent = 'Sending...';

        const serviceID = 'ifti-khan-portfolio';
        const templateID = 'iftikhan-email-template';

        emailjs.send(serviceID, templateID, {
                "from_name": this.fullname.value,
                "message": this.message.value,
                "subject": this.subject.value,
                "from_email": this.emailaddress.value,
                "contact_number": this.number.value,
            })
            .then((response) => {
                btn.textContent = 'Sent';
                console.log("Message Has Been Sent", response);
                resetContactForm();
                setTimeout(changeSendBtnText, 5000);

            }, (error) => {
                btn.textContent = 'Error';
                console.log("Message Failed To Send", error);
                alert(`Oops something went wrong!`);
                resetContactForm();
                setTimeout(changeSendBtnText, 3000);
                window.location.replace("assets/pages/message_404.html");
            });
    });


/*old code but works fine
function sendMail(contactForm) {
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

                if (alert('Your message has been sent!')) {} else window.location.reload();


            },
            function (error) {
                console.log("FAILED", error);
                if (alert(`Oops something went wrong!`, error)) {} else
                window.location.replace("assets/pages/message_404.html");
            }
        );
    return false; // To block from loading a new page
}*/

/*
Confirm message
if (confirm('Successful Message')) {
    window.location.reload();
}

 href redirect but allow user to go back
                    window.location.href = "assets/pages/message_404.html";
*/
