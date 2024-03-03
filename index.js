function qrcodeGerador() {
    var url = document.getElementById("urlCode").value;

    // Verificando de o input não está vazio
    if (url.trim() !== "") {
        // Gera o QR code usando a biblioteca 'qrcode.js'
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 200,
            height: 200,
        });
    } else {
        alert("Por favor, insira um link válido.");
    }
}
