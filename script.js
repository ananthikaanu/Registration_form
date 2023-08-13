//  const form = document.registration;
//  form.addEventListener("submit", function(event) {
//    event.preventDefault(); // Always preventDefault() first
//   let formData = new FormData(this);
//   let object = {};
//   formData.forEach((value, key) => {
//    object[key] = value
//    });
//   let json = JSON.stringify(object);
//   console.log(json);
//   form.reset()
//  }, false);

let userid;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form[name='registration']");

  form.addEventListener("submit", function (event) {
    event.preventDefault();        // Prevent the default form submission behavior

    const formData = new FormData(form);
    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });

    // Send form data to the API using POST request
    fetch("http://localhost:3000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataJSON),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form data submitted successfully:", data);
        userid=data.id
        // Perform any actions you want after successful submission
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
        // Handle error scenarios here
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {

  // Retrieve data using GET request
  const retrieveButton = document.getElementById("retrieveData");

  retrieveButton.addEventListener("click", function () {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Retrieved data:", data[userid -1]);
        submittedDataElement.textContent = JSON.stringify(data[userid - 1], null, 2);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  });
