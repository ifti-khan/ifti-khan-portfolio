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

                /*Confirm message
                if (confirm('Successful Message')) {
                    window.location.reload();
                }*/

                if (alert('Your message has been sent!')) {} else window.location.reload();


            },
            function (error) {
                console.log("FAILED", error);
                if (alert(`Oops something went wrong!`, error)) {} else

                    /*href redirect but allow user to go back
                    window.location.href = "assets/pages/message_404.html";*/
                    window.location.replace("assets/pages/message_404.html");
            }
        );
    return false; // To block from loading a new page
}

/* Email template Format
emailjs.send("ifti-khan-portfolio","iftikhan-email-template",{
    from_name: "Ifti Khan",
    message: "this message is a test message",
    subject: "Testing",
    from_email: "ifti@ifti.com",
    contact_number: "0123456789",
});*/
