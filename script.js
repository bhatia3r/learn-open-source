const form = document.getElementById("form")

const output = document.getElementById("output");

const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    output.innerHTML = `
    <h2> USER DETAILS </h2>
    <p> Name: ${name} </p> 
    <p> Email: ${email} </p>
    `;
    output.style.display = "block";
});
