let randomNbr = Math.ceil(Math.random() * 20);
console.log(randomNbr);

let message = document.querySelector(".msg");

let number = document.querySelector(".number");

let myScore = 10;
let topScore = 0;

document.querySelector(".check").onclick = () => {
  guessNbr = document.querySelector(".guess").value;
  console.log("d hejdslkdsfd dskfdşosfn", randomNbr, guessNbr);

  if (!guessNbr) {
    message.textContent = "Please enter a number";
    message.style.color = "red";
  } else if (guessNbr == randomNbr) {
    message.textContent = "🥳Congratulations...";
    message.style.color = "red";
    number.textContent = randomNbr;
    number.style.backgroundColor = "#60bf81";
    document.querySelector("body").style.backgroundColor = "#9fd948";

    number.style.color = "white";
    guessNbr = "";
    document.querySelector(".check").disabled = true;

    ///***///***/// */ */En yüksek skoru günceller

    if (myScore > topScore) {
      topScore = myScore;

      document.querySelector(".top-score").textContent = topScore;
    }
  } else {
    //?tahmin yanlışsa
    //?myScore 1 den aşağı düşmemeli, 1 hakkım varken yine yanlış tahminde bulunursam else e düşmeliyim
    if (myScore > 1) {
      myScore--;
      document.querySelector(".my-score").textContent = myScore;
      guessNbr > randomNbr
        ? (message.textContent = "Decrease")
        : (message.textContent = "Increase");
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".my-score").textContent = 0;

      message.textContent = "GameOver...";
      document.querySelector(".check").disabled = true;
    }
  }
};

//**Again butonuna basınca olacaklar */
document.querySelector(".again").onclick = () => {
  console.log("sadbsaddbsdf");

  message.textContent = "New game starts";
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  randomNbr = Math.ceil(Math.random() * 20);
  myScore = 10;
  document.querySelector(".my-score").textContent = myScore;
  document.querySelector(".check").disabled = false;
};
