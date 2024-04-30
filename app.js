/*
Building the About section:
*/


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};


// for adding the contact form sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbw_Bjz-X6sEHLObiBfK_prM7OKrj1POLKcPHPdu9PuZzG7Y1PN8Rl0QyUH17MK3Sfmu/exec';
const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});
