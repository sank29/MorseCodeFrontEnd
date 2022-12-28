// http://localhost:8888/encode
// http://localhost:8888/decode

let ourForm = document.getElementById("form");

ourForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Hiii");

  let value = document.getElementById("textString").value;

  let encodedData = encodingFunction(value);

  let data = encodedData;

  console.log(data);
});

let encodingFunction = async (value) => {
  let url = "http://localhost:8888/encode";

  let data = await fetch(url, {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: `{

     "response":${value}

    }`,
  });

  return data;
};
