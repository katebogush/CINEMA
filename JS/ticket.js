var ticketsCinemaCiti = document.querySelector('.ticketsCinemaCiti');
var closeticketsBtn = document.querySelector('.closetickets');
var container = document.querySelector('.container');
container.addEventListener('click', openCinemaHall);
function openCinemaHall(e) {
    if (!e.target.classList.contains('time')) {
        return;
    }
    ticketsCinemaCiti.style.display = 'block';
}
closeticketsBtn.addEventListener('click', closeTicketsPlace);
function closeTicketsPlace() {
    ticketsCinemaCiti.style.display = 'none';
}
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Sold"] = "sold";
    Status["Reservation"] = "reservation";
    Status["Hidden"] = "hidden";
})(Status || (Status = {}));
var seats = [
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 1,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '001_1'
    },
    {
        row: 1,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '001_2'
    },
    {
        row: 1,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '001_3'
    },
    {
        row: 1,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '001_4'
    },
    {
        row: 1,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '001_5'
    },
    {
        row: 1,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '001_6'
    },
    {
        row: 1,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '001_7'
    },
    {
        row: 1,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '001_8'
    },
    {
        row: 1,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '001_9'
    },
    {
        row: 1,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '001_10'
    },
    {
        row: 1,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '001_11'
    },
    {
        row: 1,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '001_12'
    },
    {
        row: 1,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '001_13'
    },
    {
        row: 1,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '001_14'
    },
    {
        row: 1,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '001_15'
    },
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 1,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '001'
    },
    {
        row: 2,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '002'
    },
    {
        row: 2,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '002'
    },
    {
        row: 2,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '002_1'
    },
    {
        row: 2,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '002_2'
    },
    {
        row: 2,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '002_3'
    },
    {
        row: 2,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '002_4'
    },
    {
        row: 2,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '002_5'
    },
    {
        row: 2,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '002_6'
    },
    {
        row: 2,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '002_7'
    },
    {
        row: 2,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '002_8'
    },
    {
        row: 2,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '002_9'
    },
    {
        row: 2,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '002_10'
    },
    {
        row: 2,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '002_11'
    },
    {
        row: 2,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '002_12'
    },
    {
        row: 2,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '002_13'
    },
    {
        row: 2,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '002_14'
    },
    {
        row: 2,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '002_15'
    },
    {
        row: 2,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '002_16'
    },
    {
        row: 2,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '002_17'
    },
    {
        row: 2,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '002'
    },
    {
        row: 2,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '002'
    },
    {
        row: 3,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '003'
    },
    {
        row: 3,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '003'
    },
    {
        row: 3,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '003_1'
    },
    {
        row: 3,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '003_2'
    },
    {
        row: 3,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '003_3'
    },
    {
        row: 3,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '003_4'
    },
    {
        row: 3,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '003_5'
    },
    {
        row: 3,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '003_6'
    },
    {
        row: 3,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '003_7'
    },
    {
        row: 3,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '003_8'
    },
    {
        row: 3,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '003_9'
    },
    {
        row: 3,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '003_10'
    },
    {
        row: 3,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '003_11'
    },
    {
        row: 3,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '003_12'
    },
    {
        row: 3,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '003_13'
    },
    {
        row: 3,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '003_14'
    },
    {
        row: 3,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '003_15'
    },
    {
        row: 3,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '003_16'
    },
    {
        row: 3,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '003_17'
    },
    {
        row: 3,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '003'
    },
    {
        row: 3,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '003'
    },
    {
        row: 4,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '004'
    },
    {
        row: 4,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '004'
    },
    {
        row: 4,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '004_1'
    },
    {
        row: 4,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '004_2'
    },
    {
        row: 4,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '004_3'
    },
    {
        row: 4,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '004_4'
    },
    {
        row: 4,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '004_5'
    },
    {
        row: 4,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '004_6'
    },
    {
        row: 4,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '004_7'
    },
    {
        row: 4,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '004_8'
    },
    {
        row: 4,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '004_9'
    },
    {
        row: 4,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '004_10'
    },
    {
        row: 4,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '004_11'
    },
    {
        row: 4,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '004_12'
    },
    {
        row: 4,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '004_13'
    },
    {
        row: 4,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '004_14'
    },
    {
        row: 4,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '004_15'
    },
    {
        row: 4,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '004_16'
    },
    {
        row: 4,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '004_17'
    },
    {
        row: 4,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '004'
    },
    {
        row: 4,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '004'
    },
    {
        row: 5,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '005'
    },
    {
        row: 5,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '005'
    },
    {
        row: 5,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '005_1'
    },
    {
        row: 5,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '005_2'
    },
    {
        row: 5,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '005_3'
    },
    {
        row: 5,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '005_4'
    },
    {
        row: 5,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '005_5'
    },
    {
        row: 5,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '005_6'
    },
    {
        row: 5,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '005_7'
    },
    {
        row: 5,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '005_8'
    },
    {
        row: 5,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '005_9'
    },
    {
        row: 5,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '005_10'
    },
    {
        row: 5,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '005_11'
    },
    {
        row: 5,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '005_12'
    },
    {
        row: 5,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '005_13'
    },
    {
        row: 5,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '005_14'
    },
    {
        row: 5,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '005_15'
    },
    {
        row: 5,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '005_16'
    },
    {
        row: 5,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '005_17'
    },
    {
        row: 5,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '005'
    },
    {
        row: 5,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '005'
    },
    {
        row: 6,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '006'
    },
    {
        row: 6,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '006'
    },
    {
        row: 6,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '006_1'
    },
    {
        row: 6,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '006_2'
    },
    {
        row: 6,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '006_3'
    },
    {
        row: 6,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '006_4'
    },
    {
        row: 6,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '006_5'
    },
    {
        row: 6,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '006_6'
    },
    {
        row: 6,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '006_7'
    },
    {
        row: 6,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '006_8'
    },
    {
        row: 6,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '006_9'
    },
    {
        row: 6,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '006_10'
    },
    {
        row: 6,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '006_11'
    },
    {
        row: 6,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '006_12'
    },
    {
        row: 6,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '006_13'
    },
    {
        row: 6,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '006_14'
    },
    {
        row: 6,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '006_15'
    },
    {
        row: 6,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '006_16'
    },
    {
        row: 6,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '006_17'
    },
    {
        row: 6,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '006'
    },
    {
        row: 6,
        place: 0,
        price: 150,
        status: Status.Hidden,
        id: '006'
    },
    {
        row: 7,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '007_1'
    },
    {
        row: 7,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '007_2'
    },
    {
        row: 7,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '007_3'
    },
    {
        row: 7,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '007_4'
    },
    {
        row: 7,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '007_5'
    },
    {
        row: 7,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '007_6'
    },
    {
        row: 7,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '007_7'
    },
    {
        row: 7,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '007_8'
    },
    {
        row: 7,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '007_9'
    },
    {
        row: 7,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '007_10'
    },
    {
        row: 7,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '007_11'
    },
    {
        row: 7,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '007_12'
    },
    {
        row: 7,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '007_13'
    },
    {
        row: 7,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '007_14'
    },
    {
        row: 7,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '007_15'
    },
    {
        row: 7,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '007_16'
    },
    {
        row: 7,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '007_17'
    },
    {
        row: 7,
        place: 18,
        price: 150,
        status: Status.Active,
        id: '007_18'
    },
    {
        row: 7,
        place: 19,
        price: 150,
        status: Status.Active,
        id: '007_19'
    },
    {
        row: 7,
        place: 20,
        price: 150,
        status: Status.Active,
        id: '007_20'
    },
    {
        row: 7,
        place: 21,
        price: 150,
        status: Status.Active,
        id: '007_21'
    },
    {
        row: 8,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '008_1'
    },
    {
        row: 8,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '008_2'
    },
    {
        row: 8,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '008_3'
    },
    {
        row: 8,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '008_4'
    },
    {
        row: 8,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '008_5'
    },
    {
        row: 8,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '008_6'
    },
    {
        row: 8,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '008_7'
    },
    {
        row: 8,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '008_8'
    },
    {
        row: 8,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '008_9'
    },
    {
        row: 8,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '008_10'
    },
    {
        row: 8,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '008_11'
    },
    {
        row: 8,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '008_12'
    },
    {
        row: 8,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '008_13'
    },
    {
        row: 8,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '008_14'
    },
    {
        row: 8,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '008_15'
    },
    {
        row: 8,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '008_16'
    },
    {
        row: 8,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '008_17'
    },
    {
        row: 8,
        place: 18,
        price: 150,
        status: Status.Active,
        id: '008_18'
    },
    {
        row: 8,
        place: 19,
        price: 150,
        status: Status.Active,
        id: '008_19'
    },
    {
        row: 8,
        place: 20,
        price: 150,
        status: Status.Active,
        id: '008_20'
    },
    {
        row: 8,
        place: 21,
        price: 150,
        status: Status.Active,
        id: '008_21'
    },
    {
        row: 9,
        place: 1,
        price: 150,
        status: Status.Active,
        id: '009_1'
    },
    {
        row: 9,
        place: 2,
        price: 150,
        status: Status.Active,
        id: '009_2'
    },
    {
        row: 9,
        place: 3,
        price: 150,
        status: Status.Active,
        id: '009_3'
    },
    {
        row: 9,
        place: 4,
        price: 150,
        status: Status.Active,
        id: '009_4'
    },
    {
        row: 9,
        place: 5,
        price: 150,
        status: Status.Active,
        id: '009_5'
    },
    {
        row: 9,
        place: 6,
        price: 150,
        status: Status.Active,
        id: '009_6'
    },
    {
        row: 9,
        place: 7,
        price: 150,
        status: Status.Active,
        id: '009_7'
    },
    {
        row: 9,
        place: 8,
        price: 150,
        status: Status.Active,
        id: '009_8'
    },
    {
        row: 9,
        place: 9,
        price: 150,
        status: Status.Active,
        id: '009_9'
    },
    {
        row: 9,
        place: 10,
        price: 150,
        status: Status.Active,
        id: '009_10'
    },
    {
        row: 9,
        place: 11,
        price: 150,
        status: Status.Active,
        id: '009_11'
    },
    {
        row: 9,
        place: 12,
        price: 150,
        status: Status.Active,
        id: '009_12'
    },
    {
        row: 9,
        place: 13,
        price: 150,
        status: Status.Active,
        id: '009_13'
    },
    {
        row: 9,
        place: 14,
        price: 150,
        status: Status.Active,
        id: '009_14'
    },
    {
        row: 9,
        place: 15,
        price: 150,
        status: Status.Active,
        id: '009_15'
    },
    {
        row: 9,
        place: 16,
        price: 150,
        status: Status.Active,
        id: '009_16'
    },
    {
        row: 9,
        place: 17,
        price: 150,
        status: Status.Active,
        id: '009_17'
    },
    {
        row: 9,
        place: 18,
        price: 150,
        status: Status.Active,
        id: '009_18'
    },
    {
        row: 9,
        place: 19,
        price: 150,
        status: Status.Active,
        id: '009_19'
    },
    {
        row: 9,
        place: 20,
        price: 150,
        status: Status.Active,
        id: '009_20'
    },
    {
        row: 9,
        place: 21,
        price: 150,
        status: Status.Active,
        id: '009_21'
    },
];
var maxRow = 0;
var maxPlace = 0;
for (var i = 0; i < seats.length; i++) {
    if (seats[i].row > maxRow) {
        maxRow = seats[i].row;
    }
}
for (var i = 0; i < seats.length; i++) {
    if (seats[i].place > maxPlace) {
        maxPlace = seats[i].place;
    }
}
var placeItems = document.querySelector('.placeItems');
var spanSeats = [];
var divSeatText = [];
for (var i = 0; i < maxRow; i++) {
    var div = document.createElement('div');
    div.classList.add('rov');
    var p1Row = document.createElement('p');
    p1Row.innerHTML = i + 1;
    div.append(p1Row);
    for (var j = 0; j < maxPlace; j++) {
        var spanPlace = document.createElement('span');
        spanPlace.classList.add('seat');
        spanSeats.push(spanPlace);
        var divText = document.createElement('div');
        divText.classList.add('seatText');
        divSeatText.push(divText);
        spanPlace.append(divText);
        div.append(spanPlace);
    }
    var p2Row = document.createElement('p');
    p2Row.innerHTML = i + 1;
    div.append(p2Row);
    placeItems === null || placeItems === void 0 ? void 0 : placeItems.append(div);
}
for (var i = 0; i < seats.length; i++) {
    spanSeats[i].classList.add(seats[i].status);
    spanSeats[i].id = seats[i].id;
    divSeatText[i].innerHTML = "\u0420\u044F\u0434 ".concat(seats[i].row, ", \u041C\u0456\u0441\u0446\u0435 ").concat(seats[i].place) + "<br>" + "\u0446\u0456\u043D\u0430 ".concat(seats[i].price) + ' ₴';
}
var totalTickets = 0;
var totalSum = 0;
var totalTicketsInfo = document.querySelector('.totalTicketsInfo');
var totalPriceInfo = document.querySelector('.totalPriceInfo');
var titleSeats = document.querySelector('.titleSeats');
var timerID = null;
var setsContainer = document.querySelector('.placeItems');
var orderedSeats = document.querySelector('.orderedSeats');
setsContainer.addEventListener('click', creatTicket);
function creatTicket(e) {
    if (!e.target.classList.contains('seat')) {
        return;
    }
    if (!e.target.classList.contains('active')) {
        return;
    }
    totalTickets++;
    for (var i = 0; i < seats.length; i++) {
        if (e.target.id === seats[i].id) {
            seats[i].status = Status.Reservation;
            spanSeats[i].classList.remove('active');
            spanSeats[i].classList.add(seats[i].status);
            totalSum = totalSum + seats[i].price;
        }
    }
    totalTicketsInfo.innerHTML = 'Квитки х ' + totalTickets;
    totalPriceInfo.innerHTML = totalSum + ' ₴';
    titleSeats.innerHTML = '';
    var ticket = document.createElement('div');
    ticket.classList.add('checkedSeat');
    orderedSeats.append(ticket);
    var ticketInfo = document.createElement('div');
    var ticketPrice = document.createElement('div');
    for (var i = 0; i < seats.length; i++) {
        if (e.target.id === seats[i].id) {
            ticketPrice.innerHTML = seats[i].price + ' ₴';
            ticketInfo.innerHTML = 'Ряд ' + seats[i].row + '<br>' + 'Місце ' + seats[i].place;
        }
    }
    ticketInfo.classList.add('ticketInfo');
    ticketPrice.classList.add('ticketPrice');
    ticket.append(ticketInfo);
    ticket.append(ticketPrice);
    var line = document.createElement('div');
    line.classList.add('line');
    var deleteTicket = document.createElement('button');
    deleteTicket.classList.add('btn-close');
    deleteTicket.style.width = '4px';
    deleteTicket.style.height = '4px';
    ticketPrice.append(line);
    ticketPrice.append(deleteTicket);
    deleteTicket.addEventListener('click', function () {
        e.target.classList.remove('reservation');
        e.target.classList.add('active');
        ticket.remove();
        totalTickets--;
        totalTicketsInfo.innerHTML = 'Квитки х ' + totalTickets;
        for (var i = 0; i < seats.length; i++) {
            if (e.target.id === seats[i].id) {
                totalSum = totalSum - seats[i].price;
                totalPriceInfo.innerHTML = totalSum + ' ₴';
            }
        }
    });
    timerID = setTimeout(removeTicket, 10000);
}
function removeTicket() {
    // const reservationSeats = seats.filter((seat) => seat.status === Status.Reservation);
    // updateSeatsStatus(reservationSeats, Status.Active);
    // updataSeatsClasName(reservationSeats, Status.Active);
    for (var i = 0; i < seats.length; i++) {
        if (seats[i].status === Status.Reservation) {
            seats[i].status = Status.Active;
            spanSeats[i].classList.remove(Status.Reservation);
            spanSeats[i].classList.add(seats[i].status);
        }
    }
    totalTicketsInfo.innerHTML = '';
    totalPriceInfo.innerHTML = '';
    titleSeats.innerHTML = 'Будь ласка, оберіть хоча б одне місце на' + '<br>' + 'схемі залу, щоб продовжити';
    orderedSeats.innerHTML = '';
    totalTickets = 0;
    totalSum = 0;
}
// function updateSeatsStatus(seats: Seat[], status: Status): void {
//     seats.forEach((seat) => seat.status = status);
// }
// function updataSeatsClasName(seats: Seat[], className: string): void {
//     seats.forEach((seat) => {
//         const seatRef = document.querySelector(`#${seat.id}`);
//         seatRef?.classList.remove(Status.Reservation);
//         seatRef?.classList.add(className);
//     });
// }
var btnBuyTickets = document.querySelector('.btnBuyTickets');
btnBuyTickets === null || btnBuyTickets === void 0 ? void 0 : btnBuyTickets.addEventListener('click', buyTickets);
function buyTickets() {
    totalTicketsInfo.innerHTML = '';
    totalPriceInfo.innerHTML = '';
    titleSeats.innerHTML = 'Дякуємо за замовлення! Гарного перегляду!';
    orderedSeats.innerHTML = '';
    for (var i = 0; i < seats.length; i++) {
        if (seats[i].status === Status.Reservation) {
            seats[i].status = Status.Sold;
            spanSeats[i].classList.remove(Status.Reservation);
            spanSeats[i].classList.add(seats[i].status);
        }
    }
    clearTimeout(timerID);
}
