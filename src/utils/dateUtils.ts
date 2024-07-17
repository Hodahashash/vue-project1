import { format, isToday as isTodayDate, isThisWeek as isThisWeekDate, isPast, parseISO } from 'date-fns';

// Check if a given date is today
export function isToday(dateString: string): boolean {
  const date = parseISO(dateString);
  return isTodayDate(date);
}

// Check if a given date is this week
export function isThisWeek(dateString: string): boolean {
  const date = parseISO(dateString);
  return isThisWeekDate(date, { weekStartsOn: 1 }); // Week starts on Monday
}

// Check if a given date is overdue
export function isOverdue(dateString: string): boolean {
  const date = parseISO(dateString);
  return isPast(date) && !isTodayDate(date);
}

// Format date to a readable string
export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
}
