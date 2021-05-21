var initialBalance = 50000;

var online = prompt("Enter *222# To buy goods Online");
if (online == "*222#") {
  var goods = prompt(
    "Information \n 1. Beverages \n 2. Food \n 3. Fruits \n 4. Clothes \n 5. Logage"
  );
  if (goods == 1) {
    var bev = prompt(
      "Information \n 1.Fanta \n 2. Origin \n 3. Cocacola \n 4. Monster Energy \n 5. Bigi Apple \n 6. Five Alive \n"
    );
    if (bev == 1) {
      var entry = Number(prompt("Enter Amount Of Fanta"));
      if (entry <= 2500) {
        var card = prompt("Enter your 10 Digit Number here");
        if (card.length == 10) {
          alert(
            "Transaction Successful Your New Balance is" +
              " " +
              (initialBalance - entry)
          );
        } else if (bev == 2) {
          var entry1 = Number(prompt("Enter Amount of Origin"));
        } else {
          alert("Incorrect Card Number");
        }
      } else {
        alert("Your have Exceeded your daily Target");
      }
    } else {
      alert("Invalid Selection");
    }
  } else {
    alert("Invalid Selection");
  }
} else {
  alert("Invalid Code");
}
