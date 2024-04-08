import { Modal } from "./modules/modal.js";
import { Panorama360 } from "./modules/panorama360.js";

const main = document.querySelector("main");

const modals = document.querySelectorAll(".modal");
modals.forEach((modalDiv) => {
  if (modalDiv.classList.contains("modal-360")) {
    const modal = new Panorama360(modalDiv);
    modal.init();
    return;
  }
  const modal = new Modal(modalDiv);
  modal.init();
});

const svgMapLinks = document.querySelectorAll(".svg-map__link");
svgMapLinks.forEach((link) => {
  const groupName = link.dataset.group;
  link.addEventListener("mouseenter", (e) => {
    const groupSvg = document.getElementById(groupName);
    groupSvg.classList.add("hover");
  });
  link.addEventListener("mouseleave", () => {
    const groupSvg = document.getElementById(groupName);
    groupSvg.classList.remove("hover");
  });
});

const onResizeAddScroll = () => {
  const svgMap = document.querySelector(".svg-map");
  const link = Array.from(svgMapLinks).find((link) =>
    link.classList.contains("svg-map__link--left")
  );

  if (!link) return;
  if (link.getBoundingClientRect().left < 0) {
    main.classList.add("main-scroll");
  } else if (window.innerWidth > svgMap.clientWidth) {
    main.classList.remove("main-scroll");
  }
};

window.addEventListener("resize", onResizeAddScroll);
onResizeAddScroll();
