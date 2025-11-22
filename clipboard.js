function copyToClipboard(address) {
  navigator.clipboard.writeText(address)
      .then(() => {
          // Show the notification if the copy is successful
          const notification = document.getElementById("copyNotification");
          notification.textContent = "Address copied to clipboard!";
          notification.style.display = "block"; 

          // Hide the notification after 2 seconds
          setTimeout(() => {
              notification.style.display = "none";
          }, 2000);
      })
      .catch(err => {
          console.error("Failed to copy: ", err);
      });
}
