export class Bin {
  key?: string | null;
  type?: string|null;
  lieu?: string | null;
  filling_rate?:number;
  isFull?: boolean;
  constructor() {
    this.key = "null";
    this.type = "null";
    this.lieu = "null";
    this.filling_rate = 0;
    this.isFull = false;
  }
}