type QueueItem = () => Promise<void>;

export default class Typewriter {
  #queue: QueueItem[] = [];
  element: HTMLElement;
  loop: boolean;
  typingSpeed: number;
  deletingSpeed: number;
  constructor(
    parent: HTMLElement,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.element = document.createElement('div');
    parent.append(this.element);
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }

  #addToQueue(
    cb: (resolve: (value: void | PromiseLike<void>) => void) => void
  ) {
    this.#queue.push(() => {
      return new Promise(cb);
    });
  }

  typeString(string: string) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const intervalId = setInterval(() => {
        this.element.append(string[i]);
        i++;

        if (i >= string.length) {
          clearInterval(intervalId);
          resolve();
        }
      }, this.typingSpeed);
    });
    return this;
  }

  deleteChars(number: number) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const intervalId = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        i++;

        if (i >= number) {
          clearInterval(intervalId);
          resolve();
        }
      }, this.deletingSpeed);
    });
    return this;
  }

  deleteAll(customDeleteSpeed = this.deletingSpeed) {
    this.#addToQueue((resolve) => {
      const intervalId = setInterval(() => {
        this.element.innerText = this.element.innerText.substring(
          0,
          this.element.innerText.length - 1
        );
        if (this.element.innerText.length === 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, customDeleteSpeed);
    });
    return this;
  }

  pauseFor(duration: number) {
    this.#addToQueue((resolve) => {
      setTimeout(resolve, duration);
    });
    return this;
  }

  async start() {
    let cb = this.#queue.shift();
    while (cb != null) {
      await cb();
      if (this.loop) this.#queue.push(cb);
      cb = this.#queue.shift();
    }
    return this;
  }
}
