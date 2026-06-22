const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strengthBar = document.getElementById("strength");
const securityText = document.getElementById("securityText");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const lengthValue = document.getElementById("lengthValue");

let passwordLength = 12;

plusBtn.addEventListener("click", () => {
    if(passwordLength < 20){
            passwordLength++;
                    lengthValue.textContent = passwordLength;
                        }
                        });

                        minusBtn.addEventListener("click", () => {
                            if(passwordLength > 1){
                                    passwordLength--;
                                            lengthValue.textContent = passwordLength;
                                                }
                                                });

                                                function generatePassword(){

                                                    let chars = "";

                                                        if(upper.checked){
                                                                chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                                                    }

                                                                        if(lower.checked){
                                                                                chars += "abcdefghijklmnopqrstuvwxyz";
                                                                                    }

                                                                                        if(numbers.checked){
                                                                                                chars += "0123456789";
                                                                                                    }

                                                                                                        if(symbols.checked){
                                                                                                                chars += "!@#$%&*()_+=-[]{}<>?";
                                                                                                                    }

                                                                                                                        if(chars === ""){
                                                                                                                                alert("Selecione pelo menos uma opção!");
                                                                                                                                        return;
                                                                                                                                            }

                                                                                                                                                let password = "";

                                                                                                                                                    for(let i = 0; i < passwordLength; i++){
                                                                                                                                                            const randomIndex =
                                                                                                                                                                    Math.floor(Math.random() * chars.length);

                                                                                                                                                                            password += chars[randomIndex];
                                                                                                                                                                                }

                                                                                                                                                                                    passwordField.value = password;

                                                                                                                                                                                        checkStrength(password);
                                                                                                                                                                                        }

                                                                                                                                                                                        function checkStrength(password){

                                                                                                                                                                                            let score = 0;

                                                                                                                                                                                                if(password.length >= 8) score++;
                                                                                                                                                                                                    if(password.length >= 12) score++;

                                                                                                                                                                                                        if(/[A-Z]/.test(password)) score++;
                                                                                                                                                                                                            if(/[a-z]/.test(password)) score++;
                                                                                                                                                                                                                if(/[0-9]/.test(password)) score++;
                                                                                                                                                                                                                    if(/[^A-Za-z0-9]/.test(password)) score++;

                                                                                                                                                                                                                        if(score <= 2){

                                                                                                                                                                                                                                strengthBar.style.width = "33%";
                                                                                                                                                                                                                                        strengthBar.style.background = "#ff3b30";

                                                                                                                                                                                                                                                securityText.textContent =
                                                                                                                                                                                                                                                        "Segurança: Fraca";

                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                else if(score <= 4){

                                                                                                                                                                                                                                                                        strengthBar.style.width = "66%";
                                                                                                                                                                                                                                                                                strengthBar.style.background = "#FFD60A";

                                                                                                                                                                                                                                                                                        securityText.textContent =
                                                                                                                                                                                                                                                                                                "Segurança: Média";

                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                        else{

                                                                                                                                                                                                                                                                                                                strengthBar.style.width = "100%";
                                                                                                                                                                                                                                                                                                                        strengthBar.style.background = "#32D74B";

                                                                                                                                                                                                                                                                                                                                securityText.textContent =
                                                                                                                                                                                                                                                                                                                                        "Segurança: Forte";

                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                            generateBtn.addEventListener(
                                                                                                                                                                                                                                                                                                                                            "click",
                                                                                                                                                                                                                                                                                                                                            generatePassword
                                                                                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                                                                                            copyBtn.addEventListener("click", () => {

                                                                                                                                                                                                                                                                                                                                                navigator.clipboard.writeText(
                                                                                                                                                                                                                                                                                                                                                        passwordField.value
                                                                                                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                                                                                                                alert("Senha copiada!");
                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                generatePassword();