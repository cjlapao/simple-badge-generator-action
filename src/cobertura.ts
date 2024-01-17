import { readFileSync } from 'fs'
import { XMLParser } from 'fast-xml-parser'

export function getCoberturaValue(coberturaPath: string): string {
  const xmlData = readFileSync(coberturaPath, 'utf-8')
  const parser = new XMLParser({ ignoreAttributes: false })
  const coberturaValue = parser.parse(xmlData)
  const lineRate = coberturaValue.coverage['@_line-rate'] * 100
  return lineRate.toFixed(2)
}
