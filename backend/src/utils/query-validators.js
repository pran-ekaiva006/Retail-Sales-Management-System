import { z } from 'zod';

const csvToArray = (v) => (typeof v === 'string' && v.trim() ? v.split(',').map(s => s.trim()).filter(Boolean) : undefined);

const schema = z.object({
  search: z.string().trim().max(200).optional(),
  regions: z.string().optional().transform(csvToArray),
  gender: z.string().optional().transform(csvToArray),
  ageMin: z.coerce.number().int().min(0).max(150).optional(),
  ageMax: z.coerce.number().int().min(0).max(150).optional(),
  categories: z.string().optional().transform(csvToArray),
  tags: z.string().optional().transform(csvToArray),
  paymentMethods: z.string().optional().transform(csvToArray),
  startDate: z.string().optional().transform(v => v ? new Date(v) : undefined),
  endDate: z.string().optional().transform(v => v ? new Date(v) : undefined),
  sort: z.enum(['date_desc', 'quantity', 'name_asc']).default('date_desc'),
  page: z.coerce.number().int().positive().default(1)
}).refine(
  (data) => {
    // Ensure ageMin <= ageMax if both are provided
    if (data.ageMin !== undefined && data.ageMax !== undefined) {
      return data.ageMin <= data.ageMax;
    }
    return true;
  },
  {
    message: 'ageMin must be less than or equal to ageMax',
    path: ['ageMin']
  }
).refine(
  (data) => {
    // Ensure startDate <= endDate if both are provided
    if (data.startDate && data.endDate) {
      return data.startDate <= data.endDate;
    }
    return true;
  },
  {
    message: 'startDate must be before or equal to endDate',
    path: ['startDate']
  }
);

export function parseQuery(query) {
  try {
    // Validate and parse query params
    const parsed = schema.parse(query);
    
    const filters = {
      search: parsed.search,
      regions: parsed.regions || [],
      gender: parsed.gender || [],
      ageMin: parsed.ageMin,
      ageMax: parsed.ageMax,
      categories: parsed.categories || [],
      tags: parsed.tags || [],
      paymentMethods: parsed.paymentMethods || [],
      startDate: parsed.startDate ? parsed.startDate.toISOString().split('T')[0] : undefined,
      endDate: parsed.endDate ? parsed.endDate.toISOString().split('T')[0] : undefined,
      sort: parsed.sort,
      page: parsed.page
    };

    return filters;
  } catch (error) {
    // If validation fails, return error with details
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new Error(`Invalid query parameters: ${errorMessage}`);
    }
    throw error;
  }
}