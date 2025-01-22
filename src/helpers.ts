// @ts-nocheck
import pixelWith from 'string-pixel-width'

export function measureText(text: string, fontSize: number): number {
  const width = pixelWith(text, { font: 'verdana', size: fontSize })
  return width
}
