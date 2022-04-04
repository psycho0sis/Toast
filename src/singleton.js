export default class Singleton {
  constructor() {
    if (Singleton.exists) {
      return Singleton.inctance;
    }
    Singleton.inctance = this;
    Singleton.exists = true; 
    this.toasts = []
  }

  findAllToasts() {
    return this.toasts;
  }

  createToast(toast) {
    if (this.toasts.length > 3) {
      return;
    }
    this.toasts.push(toast);
  }

  deleteToast(toasIndex) {
    this.toasts = this.toasts.filter((toast, i) => i !== toasIndex);
  }

  deleteAllToasts() {
    this.toasts.length = 0;
  }
}
