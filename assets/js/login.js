/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent);
  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      closeModal();
      modalContainer.classList.add("show-modal");
    });
  }
};
showModal("open-modal-login", "modal-container-login");
showModal("open-modal-register", "modal-container-register");
showModal("open-modal-login-reverse", "modal-container-login");

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll(".close-modal");

function closeModal() {
  if (
    document
      .getElementById("modal-container-login")
      .classList.contains("show-modal")
  ) {
    const modalContainer = document.getElementById("modal-container-login");
    modalContainer.classList.remove("show-modal");
  } else if (
    document
      .getElementById("modal-container-register")
      .classList.contains("show-modal")
  ) {
    const modalContainer = document.getElementById("modal-container-register");
    modalContainer.classList.remove("show-modal");
  }
}
closeBtn.forEach((c) => c.addEventListener("click", closeModal));

/*=============== VALIDATE FORM REGISTER ===============*/
const form_login = document.getElementById("form-login");
const inputs_login = document.querySelectorAll("#form-login input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{6,12}$/, // 6 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{10,14}$/, // 10 a 14 numeros.
};

const fields_login = {
  email_login: false,
  password_login: false,
};

const validateFormLogin = (e) => {
  switch (e.target.name) {
    case "email":
      validateField(expresiones.email, e.target, "email_login");
      break;
    case "password":
      validateField(expresiones.password, e.target, "password_login");
      break;
  }
};

inputs_login.forEach((input) => {
  input.addEventListener("keyup", validateFormLogin);
  input.addEventListener("blur", validateFormLogin);
});

form_login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (fields_login.email_login && fields_login.password_login) {
    form_login.reset();
  } else {
    alert("Por favor rellene el formulario correctamente");
  }
});

/*=============== VALIDATE FORM REGISTER ===============*/
const formulario = document.getElementById("form-register");
const inputs = document.querySelectorAll("#form-register input");

const fields = {
  name: false,
  lastname: false,
  email: false,
  password: false,
  phone: false,
};

const validateForm = (e) => {
  switch (e.target.name) {
    case "name":
      validateField(expresiones.name, e.target, e.target.name);
      break;
    case "lastname":
      validateField(expresiones.name, e.target, e.target.name);
      break;
    case "email":
      validateField(expresiones.email, e.target, e.target.name);
      break;
    case "password":
      validateField(expresiones.password, e.target, e.target.name);
      break;
    case "phone":
      validateField(expresiones.phone, e.target, e.target.name);
      break;
  }
};

const validateField = (expresion, input, field) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`line__span-${field}`)
      .classList.remove("line__span-error");
    document
      .getElementById(`line__span-${field}`)
      .classList.add("line__span-correct");
    if (field == "email_login" || field == "password_login") {
      fields_login[field] = true;
    } else {
      fields[field] = true;
    }
  } else {
    document
      .getElementById(`line__span-${field}`)
      .classList.remove("line__span-correct");
    document
      .getElementById(`line__span-${field}`)
      .classList.add("line__span-error");
    if (field == "email_login" || field == "password_login") {
      fields_login[field] = false;
    } else {
      fields[field] = false;
    }
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    fields.name &&
    fields.lastname &&
    fields.email &&
    fields.password &&
    fields.phone
  ) {
    formulario.reset();
  } else {
    alert("Por favor rellene el formulario correctamente");
  }
});
