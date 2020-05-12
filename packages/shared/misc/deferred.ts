export class Deferred {
  public promise: Promise<any>
  public resolve
  public reject

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}
