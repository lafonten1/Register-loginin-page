// ŞİFRE AÇ-GİZLE BAŞLANGIÇ

const pwShowHide = document.querySelectorAll(".ShowHidePw"),
  password = document.querySelectorAll(".sifre");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    password.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        password.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// ŞİFRE AÇ-GİZLE SON

// LOGİN-REGİSTER SAYFALARI ARASI GEÇİŞ BAŞLANGIÇ

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "112px";
  x.reset();
}
function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
  y.reset();
}

// LOGİN-REGİSTER SAYFALARI ARASI GEÇİŞ SON

// LOGİN BİLGİ KONTROL BAŞLANGIÇ

var girisyaspbtn = document.getElementById("girisyapbtn");
const username = document.getElementById("kullaniciadi");
const password1 = document.getElementsByClassName("sifre")[0];

girisyaspbtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (password1.value === "12345" && username.value === "admin") {
    Swal.fire("Giriş Başarılı", "Butona tıklayın", "success");
  } else {
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Hatalı kullanıcı adı veya şifre",
    });
  }
});

// LOGİN BİLGİ KONTROL SON

// REGİSTER BİLGİ KONTROL BAŞLANGIÇ

kaydolbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkbox.checked) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Başarıyla kayıt oldunuz",
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Lütfen Kişisel verilerin kullanılması maddesini kabul ediniz",
    });
  }
});

// REGİSTER BİLGİ KONTROL SON

// CHECKBOX KONTROL BAŞLANGIÇ

var checkbox = document.querySelector("[id=KvkCheckbox ]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    const { value: accept } = Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder:
        "Kişisel Verilerin Korunması metnini okudum ve kabul ediyorum.",
      confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return (
          !result &&
          "Lütfen Kişisel verilerin kullanılması maddesini kabul ediniz"
        );
      },
    });
  }
});

// CHECKBOX KONTROL SON
