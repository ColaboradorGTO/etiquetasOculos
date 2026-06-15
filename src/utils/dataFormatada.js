export const dataFormatada = (date) => {
  if (!date) return '';
  // Se a data vier no formato 'yyyy-mm-dd hh:mm:ss.sss'
  if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}/)) {
    // Extrai apenas a parte da data
    const [ano, mes, dia] = date.split(' ')[0].split('-');
    return `${dia}/${mes}/${ano}`;
  }
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', options);
  return formattedDate;
};

export const dataHoraFormatada = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDateTime = new Date(date).toLocaleString('pt-BR', options);
  return formattedDateTime;
};

export const formatarDataDTW = (data) => {
  if (!data) return '';

  // Verifica se a data está no formato ISO 8601
  if (data.includes('T')) {
    const dataObj = new Date(data);
    return `${dataObj.getFullYear()}${('0' + (dataObj.getMonth() + 1)).slice(-2)}${('0' + dataObj.getDate()).slice(-2)}`;
  }

  // Verifica se a data está no formato yyyy-mm-dd
  if (data.includes('-')) {
    return data.replace(/-/g, '');
  }

  // Verifica se a data está no formato dd/mm/yyyy
  if (data.includes('/')) {
    const partes = data.split(' ')[0].split('/');
    return `${partes[2]}${partes[1]}${partes[0]}`;
  }

  return '';
}

export const formatMesAnoDTW = (date) => {
  const [day, month, year] = date.split("/");
  return `${month}/${year}`;
}

export const formatarDataParaISO = (data) => {
  if (!data) return '';
  const [dia, mes, ano] = data.split('/');
  return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
};

export const formatarDataParaBR = (data) => {
  if (!data) return "";

  // Formato ISO 8601: 2026-05-15T03:00:00.000Z
  const dateOnly = data.includes("T") ? data.split("T")[0] : data;

  const partes = dateOnly.split("-");
  if (partes.length !== 3) return "";

  return partes[2] + "/" + partes[1] + "/" + partes[0];
};

