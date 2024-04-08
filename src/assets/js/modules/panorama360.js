import { Viewer } from "@photo-sphere-viewer/core";
import { Modal } from "./modal.js";

export class Panorama360 extends Modal {
  constructor(modalDiv) {
    super(modalDiv);
    this.viewport = modalDiv.querySelector(".panorama-div");
  }

  open(link) {
    this._renderTitle(link.dataset.index, link.dataset.title);
    this._panoramaInit(link.dataset.img);
    this.modal.classList.toggle("open");
  }

  close() {
    this.modal.classList.remove("open");
    this.viewer && this.viewer.destroy();
  }

  _renderTitle(index, text) {
    const headerTitle = this.modal.querySelector(".modal-360__title");
    const templateIndexHtml = index
      ? `<span class="index">${index}</span>`
      : "";
    const templateTextHtml = text ? `<span>${text}</span>` : "";
    headerTitle.innerHTML = templateIndexHtml + " " + templateTextHtml;
  }
  _panoramaInit(image) {
    this.viewer = new Viewer({
      container: this.viewport,
      panorama: image,
    });
  }
}
