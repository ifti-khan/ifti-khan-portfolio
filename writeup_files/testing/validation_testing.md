# Validation Testing

# Homepage (index.html)

After running the HTML5 online validation, the results came in that my button elements could not be a descendant of the a element. 

PDF File Link Here With Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/homepage_validation_results_with_errors.pdf)

To make the code compliant I had to remove the a element and contain the button element inside of a form element. I also had to put the href link in the form action and change the button type from button to submit.

PDF File Link Here With No Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/homepage_validation_results_no_errors.pdf)

# Resume Page (my_resume.html)

After running the HTML5 online validation, the results came in that I was using the center element which is obsolete and that I had to use CSS to center my elements. I was using an attribute incorrectly, I called it date-education and date-history. Another issue is that I mistakenly gave a bad value to one of the progress bars.

PDF File Link Here With Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/resume_page_validation_results_with_errors.pdf)

To make the code compliant I got rid of the center elements and created a classes for the elements. Then I used the CSS the margin-left and margin-right auto to center my elements. I then fixed the attribute error very easily because I made a simple name mistake, because I had put date instead of data. The last fix was also easy and found in my JavaScript progress bar, I changed the bad value from 100% to 100.

PDF File Link Here With No Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/resume_page_validation_results_no_errors.pdf)

# Project Page (my_projects.html)

After running the HTML5 online validation, the results came in same as my index.html that my button could not be a descendant from an a element. Also my comment line was too long and had to be shortened. 

PDF File Link Here With Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/project_page_validation_results_with_errors.pdf)

To make the code compliant I had shortened the comment lines as well as removing the a elements. I then added in a form elements for the buttons and made the form actions linked to the websites URLs. 

PDF File Link Here With No Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/project_page_validation_results_no_errors.pdf)

# Contact Page (contact_me.html)

After running the HTML5 online validation, the contact page came out with no errors. 

PDF File Link Here With No Errors -> [Visit PDF]( https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/contact_page_validation_results_no_errors.pdf)

# Message 501 Page (message_501.html)

After running the HTML5 online validation, the message 501 page came out with no errors.

PDF File Link Here With No Errors -> [Visit PDF]( https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/html5/message501_page_validation_results_no_errors.pdf)

# Main CSS (style.css)

After running the CSS3 online validation, the results came in and I had no errors, but I did have a warning of which doesn’t impact the CSS3 validation. The warning was in regards to the google font imports I have done in my CSS file.

PDF File Link Here With No Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/css3/main_css_validation_results_no_errors.pdf)

# Media Queries (media_queries.css)

After running the CSS3 online validation, the results came in and I had no errors or warnings. 

PDF File Link Here With No Errors -> [Visit PDF](https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/css3/media_queries_validation_results_no_errors.pdf)

# Contrast Checker

Here below I have shown the online contrast checker that I used, the reason I had chosen to do this is to make sure that my project meets accessibility standards. 

The screenshot below shows that the background colour and foreground colour that I was using in my header and footer element did pass majority of the web accessibility contrast check but failed on one check. The original background colour used in my header element is #888888 and foreground colour #000000.

![Contrast Checker Fail]( https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/contrast/contrast_check_fail.png)

So I then decided to change my background colour for my header and footer element to a lighter colour and keep the foreground colour the same. The new background colour I have chosen is #D3D3D3, this is a lighter grey than the previous colour and it passed all the web accessibility contrast check criteria. 

![Contrast Checker Pass]( https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/contrast/contrast_check_pass.png)

Here i have also ran the contrast checker on my Message 501 html page and it passed with no errors.

![Contrast Checker Message 501 Pass]( https://github.com/ifti-khan/ifti-khan-milestone-project-1/blob/master/writeup_files/validation/contrast/contrast_check_message501_page_pass.jpg)
