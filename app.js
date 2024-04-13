//Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 30,
});

//FAQ
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq__accordion-trigger").forEach((faq, index) => {
    faq.addEventListener("click", (event) => {
      const currentCloseParent = event.target.closest(".single__faq-accordion");

      if (!currentCloseParent) return;

      const currentDesc = currentCloseParent.querySelector("p");
      const isActive = currentCloseParent.classList.toggle("active");

      currentDesc.style.height = isActive ? `${currentDesc.scrollHeight}px` : "0px";
      currentDesc.style.marginTop = isActive ? `15px` : "0px";
    });

    if (index === 0) {
      faq.click();
    }
  });
});

//About Section
const aboutTabs = document.querySelectorAll(".about__security-wrapper");

aboutTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    const currentCloseParent = event.target.closest(".about__security-wrapper");

    if (!currentCloseParent) return;

    const currentDesc = currentCloseParent.querySelector("p");

    // Close all tabs except the clicked one
    aboutTabs.forEach((otherTab) => {
      if (otherTab !== currentCloseParent) {
        otherTab.classList.remove("active");
        const otherDesc = otherTab.querySelector("p");
        otherDesc.style.height = "0px";
        otherDesc.style.marginTop = "0px";
      }
    });

    const isActive = currentCloseParent.classList.toggle("active");

    currentDesc.style.height = isActive ? `${currentDesc.scrollHeight}px` : "0px";
    currentDesc.style.marginTop = isActive ? `15px` : "0px";
  });

  if (index === 0) {
    tab.click();
  }
});
