class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket = new OnlineTicket("Avatar", "A12", 300, 50);

console.log(ticket.printTicket());
console.log("Total:", ticket.getTotalAmount());
