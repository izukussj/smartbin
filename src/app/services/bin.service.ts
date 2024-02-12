import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Bin } from '../models/bin.model';

@Injectable({
  providedIn: 'root'
})
export class BinService {
  private dbPath = '/bins';

  binsRef: AngularFireList<Bin>;

  constructor(private db: AngularFireDatabase) {
    this.binsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Bin> {
    return this.binsRef;
  }

  create(bin: Bin): any {
    return this.binsRef.push(bin);
  }

  update(key: string, value: any): Promise<void> {
    return this.binsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.binsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.binsRef.remove();
  }
}