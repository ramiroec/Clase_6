// script.js

const quotes = [
  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. - Albert Schweitzer",
  "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
  "La vida es 10% lo que te ocurre y 90% cómo reaccionas a ello. - Charles R. Swindoll",
  "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt",
  "No dejes que el miedo a perder sea mayor que la emoción de ganar. - Robert Kiyosaki",
  "El único lugar donde el éxito viene antes que el trabajo es en el diccionario. - Vidal Sassoon",
  "La mejor manera de predecir el futuro es inventarlo. - Alan Kay",
  "La vida es realmente simple, pero insistimos en hacerla complicada. - Confucio",
  "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "No importa cuántas veces fracases, lo importante es levantarte una vez más de las que te caes. - Nelson Mandela"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').innerText = randomQuote;
}
