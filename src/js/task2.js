export class ErrorRepository {
  constructor() {
    this.map = new Map([['1', 'Ошибка #1'], ['2', 'Ошибка #2'], ['3', 'Ошибка #3']]);
  }

  translate(code) {
    this.map.forEach((item, idx) => {
      if (idx == code) return item;
    });
    if (typeof (code) === 'number') code = String(code);
    if (!this.map.has(code)) throw new Error('Ошибка! Такого кода нет.');
  }
}
export const eks2 = new ErrorRepository();
//eks2.translate(3);
