export class Modal {
  constructor(modal) {
    this.modal = modal;
    this.links =
      modal.dataset.id &&
      document.querySelectorAll(`a[href*="#modal/${modal.dataset.id}"`);
  }

  init() {
    this._eventLinks();
    this._eventClose();
  }

  _eventLinks() {
    if (!this.links) return;
    this.links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.open(link);
      });
    });
  }

  _eventClose() {
    this.modal.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target.classList.contains("modal") ||
        target.closest(".modal__close")
      ) {
        this.close();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") this.close();
    });
  }

  open(link) {
    this.modal.classList.add("open");
  }
  close(link) {
    this.modal.classList.remove("open");
  }
  toggle(link) {
    this.modal.classList.toggle("open");
  }
}
