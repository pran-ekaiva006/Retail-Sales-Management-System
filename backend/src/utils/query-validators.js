import { z } from 'zod';
const csvToArray = (v)=> (typeof v==='string' && v.trim()? v.split(',').map(s=>s.trim()).filter(Boolean): undefined);
const schema = z.object({
  search: z.string().trim().max(200).optional(),
  regions: z.string().optional().transform(csvToArray),
  gender: z.string().optional().transform(csvToArray),
  ageMin: z.coerce.number().int().nonnegative().optional(),
  ageMax: z.coerce.number().int().nonnegative().optional(),
  categories: z.string().optional().transform(csvToArray),
  tags: z.string().optional().transform(csvToArray),
  paymentMethods: z.string().optional().transform(csvToArray),
  startDate: z.string().optional().transform(v=>v? new Date(v): undefined),
  endDate: z.string().optional().transform(v=>v? new Date(v): undefined),
  sort: z.enum(['date_desc','quantity','name_asc']).default('date_desc'),
  page: z.coerce.number().int().positive().default(1)
}).refine(o=>!o.ageMin || !o.ageMax || o.ageMin<=o.ageMax, { message:'ageMin must be <= ageMax' });
export function parseQuery(query) {
  const filters = {
    search: query.search && query.search.trim() ? query.search.trim() : undefined,
    regions: query.regions ? query.regions.split(',').filter(Boolean) : [],
    gender: query.gender ? query.gender.split(',').filter(Boolean) : [],
    ageMin: query.ageMin && !isNaN(parseInt(query.ageMin)) ? parseInt(query.ageMin) : undefined,
    ageMax: query.ageMax && !isNaN(parseInt(query.ageMax)) ? parseInt(query.ageMax) : undefined,
    categories: query.categories ? query.categories.split(',').filter(Boolean) : [],
    tags: query.tags ? query.tags.split(',').filter(Boolean) : [],
    paymentMethods: query.paymentMethods ? query.paymentMethods.split(',').filter(Boolean) : [],
    startDate: query.startDate && query.startDate.trim() ? query.startDate.trim() : undefined,
    endDate: query.endDate && query.endDate.trim() ? query.endDate.trim() : undefined,
    sort: query.sort && ['date_desc', 'quantity', 'name_asc'].includes(query.sort) ? query.sort : 'date_desc',
    page: query.page && !isNaN(parseInt(query.page)) ? parseInt(query.page) : 1
  };

  return filters;
}
