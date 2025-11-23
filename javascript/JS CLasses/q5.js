document.getElementById("movieForm").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;

    if(!/^[A-Za-z ]+$/.test(name)) return alert("Invalid Name");
    if(!/^\S+@\S+\.\S+$/.test(email)) return alert("Invalid Email");
    if(!(seats >= 1 && seats <= 10)) return alert("Seats must be 1–10");

    const booking = { name, email, seats };
    console.log("Ticket Booked:", booking);
    alert(`🎟 Ticket Booked Successfully!\nName: ${name}\nSeats: ${seats}`);
});
