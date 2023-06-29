var buttonCv = document.getElementById('cv-download');
buttonCv.addEventListener('click', openCvPdf);

function openCvPdf() {
    window.open('./assets/cv.pdf', '_blank');
}


const form = document.getElementById('contact-form');
const sendButton = document.getElementById('submit-button');
const nameContact = document.getElementById('name');
const emailContact = document.getElementById('email-contact');
const message = document.getElementById('message');


const formValid = {
    nameContact: false,
    emailContact: false,
    message: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm();
});

nameContact.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) {
        formValid.nameContact = true;
    } else {
        formValid.nameContact = false;
    }
})

emailContact.addEventListener('change', (e) => {
    const emailValue = e.target.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (emailValue.length > 0 && regex.test(emailValue)) {
        formValid.emailContact = true;
    } else {
        formValid.emailContact = false;
    }
});

message.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) {
        formValid.message = true;
    } else {
        formValid.message = false;
    }
})

const validateForm = () => {
    const formValues = Object.values(formValid)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1) {
        form.submit();
        alert("Tú mensaje ha sido enviado, muy pronto me pondré en contacto contigo.");
    }   else    { 
        alert('Formulario no válido')
    }
}
