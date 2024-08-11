document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("paypal-modal");
  const paypalLink = document.getElementById("paypal-link");
  const closeButton = document.querySelector(".close");
  const confirmButton = document.getElementById("confirm");
  const spinner = confirmButton.querySelector(".spinner");

  paypalLink.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
    confirmButton.disabled = true;
    spinner.style.display = "inline-block";
    // Start countdown
    let countdown = 5;
    confirmButton.textContent = `Wait ${countdown.toFixed(1)} seconds`;
    confirmButton.prepend(spinner);
    const interval = setInterval(() => {
      countdown -= 0.1;
      confirmButton.textContent = `Wait ${countdown.toFixed(1)} seconds`;
      confirmButton.prepend(spinner);

      if (countdown <= 0) {
        clearInterval(interval);
        confirmButton.textContent = "Confirm";
        spinner.style.display = "none";
        confirmButton.disabled = false;
      }
    }, 100);
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  confirmButton.addEventListener("click", () => {
    window.location.href = "https://paypal.me/Gaaaaaav";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btcmodal = document.getElementById("btc-modal");
  const btcpaypalLink = document.getElementById("btc-link");
  const btccloseButton = document.getElementById("btc-close");

  btcpaypalLink.addEventListener("click", (event) => {
    event.preventDefault();
    btcmodal.style.display = "block";
  });

  btccloseButton.addEventListener("click", () => {
    btcmodal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === btcmodal) {
      btcmodal.style.display = "none";
    }
  });
});
