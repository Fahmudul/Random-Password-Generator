const passwordBox = document.getElementById("password");
const length = prompt("Enter the length of password: ");
const button = document.getElementById("generate-button")
const copyButton = document.getElementById("copy-button")
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()<>_+-/|~="
const allChar = upperCase + lowerCase + number + symbol

function generateRandomPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordBox.value = password
}

button.addEventListener("click", generateRandomPassword)
copyButton.addEventListener("click", () => {/* Copy text into clipboard */
        navigator.clipboard.writeText
        (passwordBox.value);
}



)
