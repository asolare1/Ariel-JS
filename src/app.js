import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["a", "the"];
  let subject = ["cat", "dog", "rabbit"];
  let action = ["stole my", "took my", "smelled my"];
  let object = ["food", "bike", "hand"];
  let where = ["in my yard", "in my city", "in my house"];

  let proindex = Math.floor(Math.random() * pronoun.length);
  let subjindex = Math.floor(Math.random() * subject.length);
  let actindex = Math.floor(Math.random() * action.length);
  let objindex = Math.floor(Math.random() * object.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proindex] +
    " " +
    subject[subjindex] +
    " " +
    action[actindex] +
    " " +
    object[objindex] +
    " " +
    where[whereindex]
  );
};
