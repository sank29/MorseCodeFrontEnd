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

  console.log(data2);

  form2.value = data2.morseCode;
});

let encodingFunction = async (value) => {
  let url = `http://morsecode-env.eba-hypyvbnw.us-east-1.elasticbeanstalk.com/encode`;
  // let url = "http://localhost:8888/encode";

  let response = { response: value };

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(response),
  });

  // let data2 = await data.json();
  // console.log(data2);

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
  let url = `http://morsecode-env.eba-hypyvbnw.us-east-1.elasticbeanstalk.com/decode`;
  // let url = "http://localhost:8888/decode";

  let response = { response: value };

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(response),
  });

  return data;
};
