import db from './SQLiteDatabase';
import Database from './SQLiteDatabase';

export type Bill = {
  id?: number;
  title: string;
  value: number;
  is_paid: boolean;
  description: string;
};

export default class BillRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await db.runAsync(
      'CREATE TABLE IF NOT EXISTS bills (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, value DECIMAL, is_paid BOOLEAN);'
    );
  }

  public async down() {
    await db.runAsync('DROP TABLE bills;');
  }

  public async create(bill: Bill) {
    const result = await db.runAsync(
      'INSERT INTO bills (title, value, is_paid, description) values (?, ?, ?, ?);',
      [bill.title, bill.value, bill.is_paid, bill.description]
    );
    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Bill>('SELECT * FROM bills');
    return result;
  }
}
