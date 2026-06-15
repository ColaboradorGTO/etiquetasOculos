import { format, parse } from 'date-fns';

export const dataFormatadaa = (value) => {
  if (typeof value !== 'string') {
    return value;
  }

  const formatosDeData = [
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
  ];

  for (const formato of formatosDeData) {
    try {
      const parseData = parse(value, formato, new Date());
      if (parseData instanceof Date && !isNaN(parseData)) {
        return format(parseData, 'yyyy-MM-dd HH:mm:ss');
      }
    } catch (error) {

    }
  }


  return value;
};