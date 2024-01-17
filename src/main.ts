import * as core from '@actions/core'
import { writeFileSync, existsSync } from 'fs'
import { Badge } from './badge'
import { getCoberturaValue } from './cobertura'
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const badgePath = core.getInput('badge-path')
    const coberturaPath = core.getInput('cobertura-path')
    core.info(`Starting generating badge ${badgePath}`)

    const badge = new Badge()
    if (core.getInput('badge-type')) {
      switch (core.getInput('badge-type')) {
        case 'simple':
          badge.type = 'simple'
          break
        case 'boolean':
          badge.type = 'boolean'
          break
        case 'semaphore':
          badge.type = 'semaphore'
          break
        case 'cobertura':
          badge.type = 'cobertura'
          break
        default:
          badge.type = 'simple'
          break
      }
    } else {
      badge.type = 'simple'
    }
    badge.title = core.getInput('title')
    if (!badge.title) {
      core.setFailed('Title is required')
      return
    }
    if (core.getInput('title-fill-color')) {
      badge.titleFillColor = core.getInput('title-fill-color')
    }
    if (core.getInput('title-font-color')) {
      badge.titleFontColor = core.getInput('title-font-color')
    }
    if (core.getInput('value-fill-color')) {
      badge.valueFillColor = core.getInput('value-fill-color')
    }
    if (core.getInput('value-font-color')) {
      badge.valueFontColor = core.getInput('value-font-color')
    }
    if (core.getInput('badge-theme')) {
      switch (core.getInput('badge-theme')) {
        case 'flat':
          badge.theme = 'flat'
          break
        case 'plastic':
          badge.theme = 'plastic'
          break
        case 'flat-square':
          badge.theme = 'flat-square'
          break
        case 'plastic-square':
          badge.theme = 'plastic-square'
          break
        default:
          badge.theme = 'plastic'
          break
      }
    }
    if (core.getInput('badge-icon')) {
      switch (core.getInput('badge-icon')) {
        case 'github':
          badge.icon = 'github'
          break
        case 'discord':
          badge.icon = 'discord'
          break
        default:
          badge.icon = 'none'
          break
      }
    }
    if (core.getInput('cobertura-yellow-threshold')) {
      badge.coberturaYellowThreshold = parseInt(
        core.getInput('cobertura-yellow-threshold')
      )
    }
    if (core.getInput('cobertura-green-threshold')) {
      badge.coberturaGreenThreshold = parseInt(
        core.getInput('cobertura-green-threshold')
      )
    }
    if (core.getInput('semaphore-red-value')) {
      badge.semaphoreRedValue = core.getInput('semaphore-red-value')
    }
    if (core.getInput('semaphore-red-color')) {
      badge.semaphoreRedColor = core.getInput('semaphore-red-color')
    }
    if (core.getInput('semaphore-yellow-value')) {
      badge.semaphoreYellowValue = core.getInput('semaphore-yellow-value')
    }
    if (core.getInput('semaphore-yellow-color')) {
      badge.semaphoreYellowColor = core.getInput('semaphore-yellow-color')
    }
    if (core.getInput('semaphore-green-value')) {
      badge.semaphoreGreenValue = core.getInput('semaphore-green-value')
    }
    if (core.getInput('semaphore-green-color')) {
      badge.semaphoreGreenColor = core.getInput('semaphore-green-color')
    }
    if (core.getInput('boolean-false-color')) {
      badge.booleanFalseColor = core.getInput('boolean-false-color')
    }
    if (core.getInput('boolean-true-color')) {
      badge.booleanTrueColor = core.getInput('boolean-true-color')
    }

    switch (badge.type) {
      case 'simple':
        badge.value = core.getInput('value')
        break
      case 'boolean':
        badge.value = core.getInput('value')
        break
      case 'cobertura':
        if (!existsSync(coberturaPath)) {
          core.setFailed(`File not found: ${coberturaPath}`)
          return
        }
        badge.value = getCoberturaValue(coberturaPath)
        break
      case 'semaphore':
        badge.value = core.getInput('value')
        break
    }

    writeFileSync(badgePath, badge.generate(), 'utf-8')
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
