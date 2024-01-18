import { readFileSync } from 'fs'
import { XMLParser } from 'fast-xml-parser'
import * as core from '@actions/core'

export function getCoberturaValue(coberturaPath: string): string {
  core.info(`Reading cobertura file ${coberturaPath}`)
  const xmlData = readFileSync(coberturaPath, 'utf-8')
  core.info(`Parsing cobertura file ${coberturaPath}`)
  const parser = new XMLParser({ ignoreAttributes: false })
  const coberturaValue = parser.parse(xmlData)
  const lineRate = coberturaValue.coverage['@_line-rate'] * 100
  core.info(`Cobertura value ${lineRate}`)
  return lineRate.toFixed(2)
}
