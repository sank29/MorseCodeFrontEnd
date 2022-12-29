// http://localhost:8888/encode
// http://localhost:8888/decode

let ourForm = document.getElementById("form");

ourForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let value = document.getElementById("textString").value;

  let encodedData = encodingFunction(value);

  let data = await encodedData;

  let data2 = await data.json();

  // let data3 = data2.json();

  let h1 = document.createElement("h2");

  h1.textContent = data2.morseCode;

  let encodingResult = document.getElementById("encodingResult");

  encodingResult.append(h1);
});

let encodingFunction = async (value) => {
  // let url = `http://localhost:8888/encode/${value}`;

  let url = `http://localhost:8888/encode`;

  // let data = await fetch(url);

  // let res = await data.json();

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(value),
  });

  // return res;

  return data;
};

// const postRequest = async (newFood) => {
//   let res = await fetch("http://localhost:3000/api/food", {
//     method: "POST",
//     body: JSON.stringify(newFood),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return res;
// };
