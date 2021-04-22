const units = [
  'em',
  'ex',
  'px',
  'cm',
  'mm',
  'in',
  'pc',
  'pt',
  'em',
  'rem',
  'vh',
  'vmin',
  'vmax',
  '%',
  'auto'
]

const parseSizeWithUnit = (size) => {
  if (isNaN(size) === false) return size + 'px'
  if (units.some(unit => size.includes(unit))) return size
}

export const calculateCssSize = (value) => {
  if (!value) return null

  if (typeof value === 'string' && value.includes(' ')) {
    const sizes = value.split(' ')

    return sizes.map(size => parseSizeWithUnit(size)).join(' ')
  }

  return parseSizeWithUnit(value)
}
