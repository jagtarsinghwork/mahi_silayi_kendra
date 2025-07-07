export const CategoryEnum: Record<string, string> = Object.freeze({
  '1': 'News',
  '2': 'Marketting',
  '3': 'Education',
  '4': 'Entertainment',
});

export const PlanEnum: Record<string, string> = Object.freeze({
  monthly: process.env.NEXT_PUBLIC_MONTH_DAYS as string,
  quarterly: process.env.NEXT_PUBLIC_QUARTER_DAYS as string,
  yearly: process.env.NEXT_PUBLIC_YEAR_DAYS as string,
});

export const DayEnum: Record<string, string> = Object.freeze({
  [process.env.NEXT_PUBLIC_MONTH_DAYS as string]: 'month',
  [process.env.NEXT_PUBLIC_QUARTER_DAYS as string]: 'quarter',
  [process.env.NEXT_PUBLIC_YEAR_DAYS as string]: 'year',
});
