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
    if (this.toasts.length > 2) {
      return;
    }
    this.toasts.push(toast);

    // console.log(this.toasts)
  }

  deleteToast(toasIdndex) {
    this.toasts = this.toasts.filter((toast, i) => i !== toasIdndex)

    // console.log(this.toasts)
  }

  deleteAllToasts() {
    this.toasts.length = 0;

    // console.log(this.toasts)
  }
}
