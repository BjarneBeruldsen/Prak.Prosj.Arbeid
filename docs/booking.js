let rooms = Array(12).fill(false);

function bookRoom(roomNumber) {
    if (rooms[roomNumber - 1]) {
        alert("Rom " + roomNumber + " er allerede booket.");
    } else {
        rooms[roomNumber - 1] = true;
        updateRoomStatus();
        alert("Du har nå booket rom " + roomNumber); // Viser melding når rommet blir booket
    }
}

function cancelBooking(roomNumber) {
    rooms[roomNumber - 1] = false;
    updateRoomStatus();
}

function updateRoomStatus() {
    let roomList = document.getElementById("room-list");
    roomList.innerHTML = "";

    rooms.forEach(function (isBooked, index) {
        let roomStatus = isBooked ? "Booket" : "Ledig";
        let textColorClass = isBooked ? "booked" : "available";
        let roomItem = document.createElement("div");
        roomItem.classList.add("room-item");
        roomItem.innerHTML = `
            <div>Rom ${index + 1}</div>
            <div class="${textColorClass}">${roomStatus}</div>
        `;
        roomList.appendChild(roomItem);
    });
}

// Initialize room status display
updateRoomStatus();

function cancelAllBookings() {
    rooms = Array(12).fill(false); // Nullstill alle bookinger
    updateRoomStatus(); // Oppdater romstatusen
    alert("Alle bookingene er angret."); // Vis melding om at alle bookinger er angret
}