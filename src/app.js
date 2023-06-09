const email = document.getElementById('email');

const password = document.getElementById('password')

const button = document.getElementById('submit')

// Via ce script vous spécifiez que l'email doit :
// - contenir une arobase et un point
// - avant la présence de l'arobase nous pouvons trouver, des lettres quelconques
//     (en minuscule ou majuscule), n'importe quel chiffre, et les caractères "-" ou "_"
// - aprés l'arobase, la vérification reste la même mais on interdit la présence de "_"
//     et il faut impérativement au moins de caractères entre l'arobase et le point
// - aprés le point, nous devons une succession de 2 ou 3 caractères doivent être
//     présentes afin de pouvoir valider l'adresse email.

function validateEmail(email){
    var check = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

    // console.log(check.exec(email))

    if (check.exec(email) == null) {
        return false;
    } else {
        return true;
    }
    
}

function validatePassword(password){

    var check = /^[A-Za-z]\w{8,50}$/;
    
    if (check.exec(password) == null) {
        return false;
    } else {
        return true;
    }
}

let isValidateEmail;
let isValidatePassword;

email.addEventListener("input",(e)=>{
    isValidateEmail = validateEmail(e.target.value);
    // console.log(isValidateEmail)

    if (isValidateEmail == false) {
        e.target.classList.remove("done");
        e.target.classList.add("error");
      } else {
        e.target.classList.remove("error");
        e.target.classList.add("done");
      }
      checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

password.addEventListener("input", (e) => {
    isValidatePassword = validationPassword(e.target.value);
    if (isValidatePassword == false) {
      e.target.classList.remove("done");
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
      e.target.classList.add("done");
    }
    checkIsButtonDone();
    if (e.target.value === "") {
      e.target.classList.remove("done");
      e.target.classList.remove("error");
    }
  });

function checkIsButtonDone() {
    if (isValidateEmail && isValidatePassword) {
      button.classList.add("correct");
    } else {
      button.classList.remove("correct");
    }
  }