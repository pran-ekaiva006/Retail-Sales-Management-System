export function normalizeText(s){ return String(s||'').toLowerCase(); }
export function parseDate(d){ const x = new Date(d); return isNaN(x)? null : x; }

export function transformSalesRow(row) {
  return {
    Date: row.date || row.Date,
    CustomerName: row.customerName || row.CustomerName,
    PhoneNumber: row.phone || row.PhoneNumber,
    CustomerRegion: row.region || row.CustomerRegion,
    ProductCategory: row.category || row.ProductCategory,
    Quantity: parseInt(row.quantity || row.Quantity || 0),
    FinalAmount: parseFloat(row.finalAmount || row.FinalAmount || 0)
  };
}