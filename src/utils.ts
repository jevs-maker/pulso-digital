export const fechaLarga = (fecha: Date) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

export const fechaCorta = (fecha: Date) =>
  fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
