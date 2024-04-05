//Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 30,
});

//FAQ

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq__accordion-trigger").forEach((faq) => {
    faq.addEventListener("click", (event) => {
      const currentCloseParent = event.target.closest(".single__faq-accordion");

      if (!currentCloseParent) return;

      const currentDesc = currentCloseParent.querySelector("p");
      const isActive = currentCloseParent.classList.toggle("active");

      currentDesc.style.height = isActive ? `${currentDesc.scrollHeight}px` : "0px";
      currentDesc.style.marginTop = isActive ? `15px` : "0px";
    });
  });
});