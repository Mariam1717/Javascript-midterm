const minNumb = 1;
const maxNumb = 50;
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;
const guessMax = maxNumb / 25;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(
    `გამოიცანით რიცხვი ${minNumb}- დან ${maxNumb}- მდე ${guessMax} ცდაში`
  );
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("გთხოვთ შეიყვანოთ მხოლოდ რიცხვი");
  } else if (guess < minNumb || guess > maxNumb) {
    window.alert("გთხოვთ შეიყვანოთ რიცხვი სწორად");
  } else if (attempts === guessMax - 1) {
    window.alert(`წააგეთ! ცდები ამოგეწურათ: (`);
    running = false;
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(
        `ძალიან დაბალია! კიდევ ერთხელ სცადეთ, თქვენ დაგრჩათ ${
          guessMax - attempts
        } ცდა`
      );
    } else if (guess > answer) {
      window.alert(
        `ძალიან მაღალია! კიდევ ერთხელ სცადეთ, თქვენ დაგრჩათ ${
          guessMax - attempts
        } ცდა`
      );
    } else {
      window.alert(
        `გილოცავთ! თქვენ გამოიცანით! ჩაფიქრებული რიცხვი არის ${answer}`
      );
      window.alert(`გამოსაცნობად დაგჭირდათ ${attempts} ცდა`);
      console.log(
        `გილოცავთ! თქვენ გამოიცანით! ჩაფიქრებული რიცხვი არის ${answer}`
      );
      console.log(`გამოსაცნობად დაგჭირდათ ${attempts} ცდა`);
      running = false;
    }
  }
}
