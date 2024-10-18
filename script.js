document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("inputRadio")) {
      const allRadioBts = document.querySelectorAll(".inputRadio");
      const allPriceCarts = document.querySelectorAll(".priceCart-container");

      const quantity = event.target.value;

      for (let i = 1; i <= allPriceCarts.length; i++) {
        if (i == parseInt(quantity)) {
          allPriceCarts[i - 1].getElementsByClassName(
            "product-detail"
          )[0].style.display = "block";
          allPriceCarts[i - 1].style.border = "2px solid #f44336";
        } else {
          allPriceCarts[i - 1].getElementsByClassName(
            "product-detail"
          )[0].style.display = "none";
          allPriceCarts[i - 1].style.border = "2px solid #c8c8c8";
        }
      }

      const style = document.createElement("style");
      for (let i = 1; i <= allRadioBts.length; i++) {
        if (i == parseInt(quantity)) {
          style.innerHTML += `
          .radio-button${i}:nth-child(2)::before {
              border: 5px solid #ff6b82;
           }
         `;
        } else {
          style.innerHTML += `
          .radio-button${i}:nth-child(2)::before {
             border: none;
            }
          `;
        }
      }

      document.head.appendChild(style);
    }
  });
});
