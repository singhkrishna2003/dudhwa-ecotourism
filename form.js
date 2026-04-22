
function sendToWhatsApp() {

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var age = document.getElementById("age").value;
    var adults = document.getElementById("adults").value;
   // var children = document.getElementById("children").value;
    var nationality = document.getElementById("nationality").value.trim();
   // var date = document.getElementById("date").value;
    //var message = document.getElementById("message").value.trim();

    if (!name || !phone ) {
        alert("Please fill all required fields");
        return;
    }

    /*
    if (!name || !phone || !date) {
        alert("Please fill all required fields");
        return;
    }
    */

    /* ✅ Emoji-safe WhatsApp message (Unicode) */
    var whatsappMessage =
        "\uD83D\uDCCC *New Booking Request*\n" +
        "-------------------------\n" +
        "\uD83D\uDC64 Name: " + name + "\n" +
        "\uD83D\uDCDE Contact: " + phone + "\n" +
        "\uD83C\uDF82 Age: " + (age || "N/A") + "\n" +
        "\uD83D\uDC6A Number of Persons: " + (adults || "N/A") + "\n" +
        //"\uD83D\uDC76 Children: " + (children || "N/A") + "\n" +
        "\uD83C\uDF0D Nationality: " + (nationality || "N/A") + "\n" ;
        //+
       // "\uD83D\uDCC5 Date: " + date + "\n\n" +
       // "\uD83D\uDCDD Message:\n" + (message || "No additional message")

    var whatsappNumber = "919559829836"; // ✅ Your number

    var url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");
}
