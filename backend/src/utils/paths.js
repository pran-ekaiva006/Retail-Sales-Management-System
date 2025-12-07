import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DB_PATH = path.join(__dirname, '..', '..', 'sales.db');
export const CSV_PATH = path.join(__dirname, '..', 'data', 'data-sample.csv');
