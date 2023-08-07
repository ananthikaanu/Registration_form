const form = document.registration;
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Always preventDefault() first
  let formData = new FormData(this);
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value
  });
  let json = JSON.stringify(object);
  console.log(json);
}, false);
    