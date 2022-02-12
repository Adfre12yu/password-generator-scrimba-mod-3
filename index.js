let images = [
  document.getElementById("image-1"),
  document.getElementById("image-2"),
  document.getElementById("image-3"),
  document.getElementById("image-4"),
];

let passwords = [
  document.getElementById("password-1"),
  document.getElementById("password-2"),
  document.getElementById("password-3"),
  document.getElementById("password-4"),
];

let passwordLength = 15;

let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_<>";

function GeneratePasswords() {
  for (let i = 0; i < images.length; i++) {
    images[i].remove();
    let pass = "";
    for (let y = 0; y < passwordLength; y++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwords[i].textContent = pass;
  }
}
