export interface Pagina {
  slug: string;
  titulo: string;
  cuerpo: string[];
}

export const paginas: Pagina[] = [
  {
    slug: 'privacidad',
    titulo: 'Privacidad',
    cuerpo: [
      'Pulso Digital no vende datos personales. Solo recogemos el correo electrónico cuando te suscribes voluntariamente a la newsletter, y lo usamos exclusivamente para enviártela.',
      'Usamos analítica agregada para saber qué historias se leen y mejorar la portada. No creamos perfiles publicitarios propios.',
      'Cuando activemos Google AdSense, este sitio mostrará anuncios personalizados o no personalizados según tu consentimiento. Podrás cambiar esa elección en cualquier momento desde el aviso de cookies.',
      'Para ejercer tus derechos de acceso, rectificación o supresión escribe a nuestro correo de contacto.',
    ],
  },
  {
    slug: 'cookies',
    titulo: 'Cookies',
    cuerpo: [
      'Este sitio funciona sin cookies obligatorias. La única preferencia que guardamos en tu navegador es el modo de color (día o noche), y se queda en tu dispositivo.',
      'Si aceptas el aviso de cookies, cargaremos los scripts de medición y de publicidad de Google. Si lo rechazas, el sitio seguirá funcionando igual, sin esos scripts.',
      'Puedes borrar esas preferencias desde los ajustes de tu navegador en cualquier momento.',
    ],
  },
  {
    slug: 'sobre-nosotros',
    titulo: 'Sobre nosotros',
    cuerpo: [
      'Pulso Digital es un medio independiente en español sobre tecnología, inteligencia artificial y dinero digital. Nuestro objetivo es explicar en cinco minutos lo que otros medios cuentan en veinte, sin humo y sin tecnicismos.',
      'Publicamos con criterio editorial propio: verificamos cifras, citamos fuentes y separamos la opinión del dato. Si algo no lo podemos comprobar, no lo publicamos.',
      'La publicidad nunca condiciona un artículo. Los espacios reservados a anuncios están señalados como tales.',
    ],
  },
  {
    slug: 'contacto',
    titulo: 'Contacto',
    cuerpo: [
      'Para propuestas, correcciones o colaboraciones, escríbenos a hola@pulsodigital.pages.dev.',
      'Respondemos a las correcciones en menos de 48 horas laborables. Si detectas un error en un artículo, indica el enlace y el dato concreto: lo revisamos y, si procede, lo corregimos dejando constancia.',
    ],
  },
];
