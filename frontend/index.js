const messageContainer = document.querySelector("#message");

fetch("http://localhost:3001")
  .then((resp) => resp.json())
  .then(({ message }) => {
    messageContainer.innerText = message;
  });
