export function retornaDiasEntreDatas(dataHoraInicio = "", dataHoraFim = "", zerarHorario = true) {
  dataHoraInicio = dataHoraInicio ? new Date(dataHoraInicio) : new Date();
  dataHoraFim = dataHoraFim ? new Date(dataHoraFim) : new Date();

  if (zerarHorario) {
      dataHoraInicio.setHours(0, 0, 0, 0);
      dataHoraFim.setHours(0, 0, 0, 0);
  }
  
  return Math.ceil(Math.abs(dataHoraFim - dataHoraInicio) / (1000 * 60 * 60 * 24));
}