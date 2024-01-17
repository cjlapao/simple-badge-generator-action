export function measureText(
  text: string,
  fontFamily: string,
  fontSize: string
): number {
  var pixelWith = require('string-pixel-width')
  let width = pixelWith(text, { font: fontFamily, size: fontSize })
  return width
}
