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

  let form2 = document.getElementById("textString1");

  form2.value = data2.morseCode;
});

let encodingFunction = async (value) => {
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

  let form1 = document.getElementById("textString");

  console.log(data2.morseCode);

  form1.value = data2.morseCode;
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
