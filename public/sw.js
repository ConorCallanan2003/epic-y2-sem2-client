self.addEventListener("push", function (event) {
  console.log("event occured")
  const message = event.data.json();
  self.registration.showNotification(message.title, { body: message.text });
});
