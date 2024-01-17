import { measureText } from './helpers'

const redColor = '#c21d03'
const yellowColor = '#e9aa2b'
const greenColor = '#2E8B57'
const defaultValueFillColor = '#576C87'
const githubIcon =
  '<path fill="#ebebeb" d="M11 3c-3.868 0-7 3.132-7 7a6.996 6.996 0 0 0 4.786 6.641c.35.062.482-.148.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.822-.079-.202-.42-.823-.717-.99-.245-.13-.595-.454-.01-.463.552-.009.946.508 1.077.718.63 1.058 1.636.76 2.039.577.061-.455.245-.761.446-.936-1.557-.175-3.185-.779-3.185-3.456 0-.762.271-1.392.718-1.882-.07-.175-.315-.892.07-1.855 0 0 .586-.183 1.925.718a6.5 6.5 0 0 1 1.75-.236 6.5 6.5 0 0 1 1.75.236c1.338-.91 1.925-.718 1.925-.718.385.963.14 1.68.07 1.855.446.49.717 1.112.717 1.882 0 2.686-1.636 3.28-3.194 3.456.254.219.473.639.473 1.295 0 .936-.009 1.689-.009 1.925 0 .184.131.402.481.332A7.011 7.011 0 0 0 18 10c0-3.867-3.133-7-7-7z"></path>'
const discordIcon =
  '<path fill="#ebebeb" d="m 16.336705,6.0953698 a 10.515,10.515 0 0 0 -2.623,-0.807 7.206,7.206 0 0 0 -0.336,0.683 9.768,9.768 0 0 0 -2.911,0 7.237,7.237 0 0 0 -0.336,-0.683 10.589,10.589 0 0 0 -2.6249999,0.809 c -1.66,2.456 -2.11,4.8510002 -1.885,7.2120002 v 0 a 10.573,10.573 0 0 0 3.217,1.615 7.77,7.77 0 0 0 0.689,-1.111 6.842,6.842 0 0 1 -1.085,-0.518 c 0.091,-0.066 0.18,-0.134 0.266,-0.2 a 7.557,7.557 0 0 0 6.4319999,0 c 0.087,0.071 0.176,0.139 0.266,0.2 a 6.868,6.868 0 0 1 -1.087,0.519 7.7,7.7 0 0 0 0.689,1.11 10.525,10.525 0 0 0 3.219,-1.614 v 0 c 0.264,-2.738 -0.451,-5.1110002 -1.89,-7.2150002 z M 9.8117051,11.85737 c -0.627,0 -1.145,-0.569 -1.145,-1.269 0,-0.7000002 0.5,-1.2740002 1.143,-1.2740002 0.6429999,0 1.1569999,0.574 1.1459999,1.2740002 -0.011,0.7 -0.505,1.269 -1.1439999,1.269 z m 4.2239999,0 c -0.628,0 -1.144,-0.569 -1.144,-1.269 0,-0.7000002 0.5,-1.2740002 1.144,-1.2740002 0.644,0 1.154,0.574 1.143,1.2740002 -0.011,0.7 -0.504,1.269 -1.143,1.269 z"/>'

export class Badge {
  title: string
  value: string
  titleFillColor: string = '#555'
  titleFontColor: string = '#fff'
  valueFillColor: string = ''
  valueFontColor: string = '#fff'
  isPercentage: boolean = true
  coberturaYellowThreshold: number = 50
  coberturaGreenThreshold: number = 75
  booleanTrueColor: string = greenColor
  booleanFalseColor: string = redColor
  semaphoreRedValue: string = ''
  semaphoreRedColor: string = redColor
  semaphoreYellowValue: string = ''
  semaphoreYellowColor: string = yellowColor
  semaphoreGreenValue: string = ''
  semaphoreGreenColor: string = greenColor
  theme: 'flat' | 'plastic' | 'flat-square' | 'plastic-square' = 'plastic'
  type: 'simple' | 'boolean' | 'semaphore' | 'cobertura' = 'simple'
  icon: 'none' | 'github' | 'discord' = 'none'

  constructor() {
    this.title = ''
    this.value = ''
  }

  generate(): string {
    let text = this.value
    if (this.type === 'cobertura') {
      text += '%'
    }
    let iconSize = 0
    let icon = ''
    if (this.icon && this.icon !== 'none') {
      iconSize = 12
      switch (this.icon) {
        case 'github':
          icon = githubIcon
          break
        case 'discord':
          icon = discordIcon
          break
      }
    }

    const textSize = measureText(this.title, 12)
    const textRectSize = textSize + 20 + iconSize
    const textX = textSize / 2 + 10 + iconSize
    const textY1 = 15
    const textY2 = 14
    const valueSize = measureText(text, 12)
    let valueRectSize = valueSize + 20
    const valueX = textRectSize + valueSize / 2 + 10
    const valueY1 = textY1
    const valueY2 = textY2
    let badgeSize = textRectSize + valueRectSize
    let currentSteps = Math.round(parseFloat(this.value) / 10)
    const redSteps = Math.round(this.coberturaYellowThreshold / 10)
    const yellowSteps = Math.round((100 - this.coberturaGreenThreshold) / 10)
    if (text === '') {
      badgeSize = textRectSize
      valueRectSize = 0
    }

    let coberturaColor = defaultValueFillColor
    if (this.valueFillColor === '') {
      switch (this.type) {
        case 'boolean':
          if (
            this.value.toLocaleLowerCase() === 'true' ||
            this.value.toLocaleLowerCase() === 't' ||
            this.value.toLocaleLowerCase() === '1' ||
            this.value.toLocaleLowerCase() === 'yes' ||
            this.value.toLocaleLowerCase() === 'y' ||
            this.value.toLocaleLowerCase() === 'on' ||
            this.value.toLocaleLowerCase() === 'enabled' ||
            this.value.toLocaleLowerCase() === 'active' ||
            this.value.toLocaleLowerCase() === 'success'
          ) {
            this.valueFillColor = greenColor
            if (this.booleanTrueColor) {
              this.valueFillColor = this.booleanTrueColor
            }
          } else {
            this.valueFillColor = redColor
            if (this.booleanFalseColor) {
              this.valueFillColor = this.booleanFalseColor
            }
          }
          break
        case 'cobertura':
          if (parseFloat(this.value) < this.coberturaYellowThreshold) {
            coberturaColor = this.interpolateColor(
              redColor,
              yellowColor,
              redSteps
            )[currentSteps]
          } else if (
            parseFloat(this.value) >= this.coberturaYellowThreshold &&
            parseFloat(this.value) < this.coberturaGreenThreshold
          ) {
            currentSteps -= redSteps
            coberturaColor = this.interpolateColor(
              yellowColor,
              greenColor,
              yellowSteps
            )[currentSteps]
          } else if (parseFloat(this.value) >= this.coberturaGreenThreshold) {
            coberturaColor = greenColor
          }
          this.valueFillColor = coberturaColor
          break
        case 'semaphore':
          if (
            this.value.toLocaleLowerCase() ===
            this.semaphoreRedValue.toLocaleLowerCase()
          ) {
            this.valueFillColor = redColor
            if (this.semaphoreRedColor) {
              this.valueFillColor = this.semaphoreRedColor
            }
          } else if (
            this.value.toLocaleLowerCase() ===
            this.semaphoreYellowValue.toLocaleLowerCase()
          ) {
            this.valueFillColor = yellowColor
            if (this.semaphoreYellowColor) {
              this.valueFillColor = this.semaphoreYellowColor
            }
          } else if (
            this.value.toLocaleLowerCase() ===
            this.semaphoreGreenValue.toLocaleLowerCase()
          ) {
            this.valueFillColor = greenColor
            if (this.semaphoreGreenColor) {
              this.valueFillColor = this.semaphoreGreenColor
            }
          }
          break
        default:
          this.valueFillColor = defaultValueFillColor
          break
      }
    }
    let roundness = 4
    if (this.theme === 'flat-square' || this.theme === 'plastic-square') {
      roundness = 0
    }

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${badgeSize}" height="20" role="img" aria-label="${this.title}: ${text}">\n`
    svg += `  <title>${this.title}: ${text}</title>\n`
    if (this.theme === 'plastic' || this.theme === 'plastic-square') {
      svg += '  <linearGradient id="s" x2="0" y2="100%">\n'
      svg += '    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>\n'
      svg += '    <stop offset="1" stop-opacity=".1"/>\n'
      svg += '  </linearGradient>\n'
    }
    svg += '  <clipPath id="r">\n'
    svg += `    <rect width="${badgeSize}" height="20" rx="${roundness}" fill="#fff"/>\n`
    svg += '  </clipPath>\n'
    svg += '  <g clip-path="url(#r)">\n'
    svg += `    <rect width="${textRectSize}" height="20" fill="${this.titleFillColor}"/>\n`
    if (text) {
      svg += `    <rect x="${textRectSize}" width="${valueRectSize}" height="20" fill="${this.valueFillColor}"/>\n`
    }
    if (this.theme === 'plastic' || this.theme === 'plastic-square') {
      svg += `    <rect width="${badgeSize}" height="20" fill="url(#s)"/>\n`
    }
    svg += '  </g>\n'
    svg +=
      '  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">\n'
    svg += `    <text aria-hidden="true" x="${textX}" y="${textY1}" fill="#010101" fill-opacity=".3" textLength="${textSize}">${this.title}</text>\n`
    svg += `    <text x="${textX}" y="${textY2}" fill="${this.titleFontColor}" textLength="${textSize}">${this.title}</text>\n`
    if (text) {
      svg += `    <text x="${valueX}" y="${valueY1}" textLength="${valueSize}" fill="#010101" fill-opacity=".3">${text}</text>\n`
      svg += `    <text x="${valueX}" y="${valueY2}" fill="${this.valueFontColor}" textLength="${valueSize}">${text}</text>\n`
    }
    svg += '  </g>\n'
    if (this.icon && this.icon !== 'none') {
      svg += `  ${icon}\n`
    }
    svg += '</svg>\n'

    return svg
  }

  interpolateColor(color1: string, color2: string, steps: number): string[] {
    const colorArray1: number[] = color1
      .match(/\w\w/g)!
      .map(c => parseInt(c, 16))
    const colorArray2: number[] = color2
      .match(/\w\w/g)!
      .map(c => parseInt(c, 16))
    const interpolatedColors: string[] = []

    for (let step = 0; step <= steps; step++) {
      const interpolatedColor = colorArray1
        .map((startValue, i) => {
          const endValue = colorArray2[i]
          const stepValue =
            startValue + (endValue - startValue) * (step / steps)
          return Math.round(stepValue).toString(16).padStart(2, '0')
        })
        .join('')

      interpolatedColors.push(`#${interpolatedColor}`)
    }

    return interpolatedColors
  }
}
