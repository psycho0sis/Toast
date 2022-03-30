export default class Singleton {
  constructor() {
    if (Singleton.exists) {
      return Singleton.inctance;
    }
    Singleton.inctance = this;
    Singleton.exists = true;
    this.toasts = [];
  }

  findAllToasts() {
    return this.toasts;
  }

  createToast(toast) {
    this.toasts.push(toast);
  }

  deleteToas(toasId) {
    this.toasts = this.toasts.filter(toast => toast.id !== toasId)
  }
}
