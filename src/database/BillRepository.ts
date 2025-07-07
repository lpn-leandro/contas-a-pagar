import db from './SQLiteDatabase';
import Database from './SQLiteDatabase';

export type Bill = {
  id?: number;
  title: string;
  value: number;
  is_paid: boolean;
  due_date: Date | string | number;
  description: string;
};

export default class BillRepository {
  constructor() {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS bills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        value REAL NOT NULL,
        due_date TEXT NOT NULL,
        is_paid INTEGER DEFAULT 0,
        description TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public async up() {
    await db.runAsync(
      'CREATE TABLE IF NOT EXISTS bills (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, value REAL, is_paid NUMERIC, due_date: NUMERIC, description: TEXT);'
    );
  }

  public async down() {
    await db.runAsync('DROP TABLE bills;');
  }

  public async create(bill: Bill) {
    const result = await db.runAsync(
      'INSERT INTO bills (title, value, is_paid, due_date, description) values (?, ?, ?, ?, ?);',
      [
        bill.title,
        bill.value,
        bill.is_paid,
        bill.due_date instanceof Date ? bill.due_date.getTime() : bill.due_date,
        bill.description,
      ]
    );
    return result.lastInsertRowId;
  }

  public async all() {
    const result = await db.getAllAsync<Bill>('SELECT * FROM bills');
    return result;
  }

  public async getById(id: number): Promise<Bill | null> {
    const result = await db.getFirstAsync<Bill>(
      'SELECT * FROM bills WHERE id = ?;',
      [id]
    );
    return result || null;
  }

  public async update(id: number, bill: Bill): Promise<boolean> {
    const result = await db.runAsync(
      'UPDATE bills SET title = ?, value = ?, is_paid = ?, due_date = ?, description = ? WHERE id = ?;',
      [
        bill.title,
        bill.value,
        bill.is_paid ? 1 : 0,
        bill.due_date instanceof Date ? bill.due_date.getTime() : bill.due_date,
        bill.description,
        id,
      ]
    );
    return result.changes > 0;
  }
}
