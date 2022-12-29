// http://localhost:8888/encode
// http://localhost:8888/decode

let ourForm1 = document.getElementById("form1");

let ourForm2 = document.getElementById("form2");

ourForm1.addEventListener("submit", async (event) => {
  event.preventDefault();

  let value = document.getElementById("textString").value;

  let encodedData = encodingFunction(value);

  let data = await encodedData;

  let data2 = await data.json();

  let h1 = document.createElement("h2");

  h1.textContent = data2.morseCode;

  let encodingResult = document.getElementById("encodingResult");

  encodingResult.append(h1);
});

let encodingFunction = async (value) => {
  // let url = `http://localhost:8888/encode/${value}`;

  let url = `http://localhost:8888/encode`;

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(value),
  });

  return data;
};

ourForm2.addEventListener("submit", async (event) => {
  event.preventDefault();

  let value = document.getElementById("textString1").value;

  let encodedData = decodingFunction(value);

  let data = await encodedData;

  let data2 = await data.json();

  let h1 = document.createElement("h2");

  h1.textContent = data2.morseCode;

  console.log(data2);

  let encodingResult = document.getElementById("decodingResult");

  encodingResult.append(h1);
});

let decodingFunction = async (value) => {
  let url = `http://localhost:8888/decode`;

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(value),
  });

  return data;
};
