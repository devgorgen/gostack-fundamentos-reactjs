import { format } from 'date-fns';

const formatDate = (date: Date, pattern: string): string =>
  format(date, pattern);

export default formatDate;
