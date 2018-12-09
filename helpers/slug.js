import slugify from 'slugify'

export default function slug(name) {
  /* Helper que ayuda a convertir un texto en url */
  return slugify(name, {lower: true}).replace(/[^\w\-]+/g, '')
}