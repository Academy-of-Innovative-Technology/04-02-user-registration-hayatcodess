document.querySelector(".btn-primary").addEventListener("click", function (event) {

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    const country = document.querySelector("#country").value;
    const acctype = document.querySelector('input[name="accountType"]:checked').value;
    const abyou = document.querySelector("#about-you").value;
    



    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Country:", country);
    console.log("Account Type:", acctype);
    console.log("About You:", abyou);
});

