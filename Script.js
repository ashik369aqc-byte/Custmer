document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("successMsg").innerText =
        "Thank you " + name + "! Your request has been submitted.";

    this.reset();
});
