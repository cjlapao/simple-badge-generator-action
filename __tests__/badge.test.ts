import { Badge } from '../src/badge'

describe('Badge', () => {
  let badge: Badge

  beforeEach(() => {
    badge = new Badge()
  })

  it('should generate a badge with title and value', () => {
    badge.title = 'Coverage'
    badge.value = '80'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112.36" height="20" role="img" aria-label="Coverage: 80">
  <title>Coverage: 80</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="112.36" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="35.36" height="20" fill="#576C87"/>
    <rect width="112.36" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="94.68" y="15" textLength="15.36" fill="#010101" fill-opacity=".3">80</text>
    <text x="94.68" y="14" fill="#fff" textLength="15.36">80</text>
  </g>
</svg>
`

    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as percentage green', () => {
    badge.title = 'Coverage'
    badge.value = '80'
    badge.type = 'cobertura'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125.32" height="20" role="img" aria-label="Coverage: 80%">
  <title>Coverage: 80%</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="125.32" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="48.32" height="20" fill="#2E8B57"/>
    <rect width="125.32" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="101.16" y="15" textLength="28.32" fill="#010101" fill-opacity=".3">80%</text>
    <text x="101.16" y="14" fill="#fff" textLength="28.32">80%</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as percentage yellow', () => {
    badge.title = 'Coverage'
    badge.value = '45'
    badge.yellowThreshold = 40
    badge.type = 'cobertura'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125.32" height="20" role="img" aria-label="Coverage: 45%">
  <title>Coverage: 45%</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="125.32" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="48.32" height="20" fill="#aba03a"/>
    <rect width="125.32" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="101.16" y="15" textLength="28.32" fill="#010101" fill-opacity=".3">45%</text>
    <text x="101.16" y="14" fill="#fff" textLength="28.32">45%</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as percentage red', () => {
    badge.title = 'Coverage'
    badge.value = '45'
    badge.yellowThreshold = 70
    badge.type = 'cobertura'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="125.32" height="20" role="img" aria-label="Coverage: 45%">
  <title>Coverage: 45%</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="125.32" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="48.32" height="20" fill="#de8220"/>
    <rect width="125.32" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="101.16" y="15" textLength="28.32" fill="#010101" fill-opacity=".3">45%</text>
    <text x="101.16" y="14" fill="#fff" textLength="28.32">45%</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title value and github icon and red color', () => {
    badge.title = 'Build'
    badge.value = 'failed'
    badge.type = 'boolean'
    badge.icon = 'github'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="114.28" height="20" role="img" aria-label="Build: failed">
  <title>Build: failed</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="114.28" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61.76" height="20" fill="#555"/>
    <rect x="61.76" width="52.519999999999996" height="20" fill="#c21d03"/>
    <rect width="114.28" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="36.879999999999995" y="15" fill="#010101" fill-opacity=".3" textLength="29.759999999999998">Build</text>
    <text x="36.879999999999995" y="14" fill="#fff" textLength="29.759999999999998">Build</text>
    <text x="88.02" y="15" textLength="32.519999999999996" fill="#010101" fill-opacity=".3">failed</text>
    <text x="88.02" y="14" fill="#fff" textLength="32.519999999999996">failed</text>
  </g>
  <path fill="#ebebeb" d="M11 3c-3.868 0-7 3.132-7 7a6.996 6.996 0 0 0 4.786 6.641c.35.062.482-.148.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.822-.079-.202-.42-.823-.717-.99-.245-.13-.595-.454-.01-.463.552-.009.946.508 1.077.718.63 1.058 1.636.76 2.039.577.061-.455.245-.761.446-.936-1.557-.175-3.185-.779-3.185-3.456 0-.762.271-1.392.718-1.882-.07-.175-.315-.892.07-1.855 0 0 .586-.183 1.925.718a6.5 6.5 0 0 1 1.75-.236 6.5 6.5 0 0 1 1.75.236c1.338-.91 1.925-.718 1.925-.718.385.963.14 1.68.07 1.855.446.49.717 1.112.717 1.882 0 2.686-1.636 3.28-3.194 3.456.254.219.473.639.473 1.295 0 .936-.009 1.689-.009 1.925 0 .184.131.402.481.332A7.011 7.011 0 0 0 18 10c0-3.867-3.133-7-7-7z"></path>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title value and github icon and green color', () => {
    badge.title = 'Build'
    badge.value = 'true'
    badge.type = 'boolean'
    badge.icon = 'github'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="106.35999999999999" height="20" role="img" aria-label="Build: true">
  <title>Build: true</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="106.35999999999999" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61.76" height="20" fill="#555"/>
    <rect x="61.76" width="44.599999999999994" height="20" fill="#2E8B57"/>
    <rect width="106.35999999999999" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="36.879999999999995" y="15" fill="#010101" fill-opacity=".3" textLength="29.759999999999998">Build</text>
    <text x="36.879999999999995" y="14" fill="#fff" textLength="29.759999999999998">Build</text>
    <text x="84.06" y="15" textLength="24.599999999999998" fill="#010101" fill-opacity=".3">true</text>
    <text x="84.06" y="14" fill="#fff" textLength="24.599999999999998">true</text>
  </g>
  <path fill="#ebebeb" d="M11 3c-3.868 0-7 3.132-7 7a6.996 6.996 0 0 0 4.786 6.641c.35.062.482-.148.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.822-.079-.202-.42-.823-.717-.99-.245-.13-.595-.454-.01-.463.552-.009.946.508 1.077.718.63 1.058 1.636.76 2.039.577.061-.455.245-.761.446-.936-1.557-.175-3.185-.779-3.185-3.456 0-.762.271-1.392.718-1.882-.07-.175-.315-.892.07-1.855 0 0 .586-.183 1.925.718a6.5 6.5 0 0 1 1.75-.236 6.5 6.5 0 0 1 1.75.236c1.338-.91 1.925-.718 1.925-.718.385.963.14 1.68.07 1.855.446.49.717 1.112.717 1.882 0 2.686-1.636 3.28-3.194 3.456.254.219.473.639.473 1.295 0 .936-.009 1.689-.009 1.925 0 .184.131.402.481.332A7.011 7.011 0 0 0 18 10c0-3.867-3.133-7-7-7z"></path>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title value and discord icon and green color', () => {
    badge.title = 'Build'
    badge.value = 'true'
    badge.type = 'boolean'
    badge.icon = 'discord'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="106.35999999999999" height="20" role="img" aria-label="Build: true">
  <title>Build: true</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="106.35999999999999" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="61.76" height="20" fill="#555"/>
    <rect x="61.76" width="44.599999999999994" height="20" fill="#2E8B57"/>
    <rect width="106.35999999999999" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="36.879999999999995" y="15" fill="#010101" fill-opacity=".3" textLength="29.759999999999998">Build</text>
    <text x="36.879999999999995" y="14" fill="#fff" textLength="29.759999999999998">Build</text>
    <text x="84.06" y="15" textLength="24.599999999999998" fill="#010101" fill-opacity=".3">true</text>
    <text x="84.06" y="14" fill="#fff" textLength="24.599999999999998">true</text>
  </g>
  <path fill="#ebebeb" d="m 16.336705,6.0953698 a 10.515,10.515 0 0 0 -2.623,-0.807 7.206,7.206 0 0 0 -0.336,0.683 9.768,9.768 0 0 0 -2.911,0 7.237,7.237 0 0 0 -0.336,-0.683 10.589,10.589 0 0 0 -2.6249999,0.809 c -1.66,2.456 -2.11,4.8510002 -1.885,7.2120002 v 0 a 10.573,10.573 0 0 0 3.217,1.615 7.77,7.77 0 0 0 0.689,-1.111 6.842,6.842 0 0 1 -1.085,-0.518 c 0.091,-0.066 0.18,-0.134 0.266,-0.2 a 7.557,7.557 0 0 0 6.4319999,0 c 0.087,0.071 0.176,0.139 0.266,0.2 a 6.868,6.868 0 0 1 -1.087,0.519 7.7,7.7 0 0 0 0.689,1.11 10.525,10.525 0 0 0 3.219,-1.614 v 0 c 0.264,-2.738 -0.451,-5.1110002 -1.89,-7.2150002 z M 9.8117051,11.85737 c -0.627,0 -1.145,-0.569 -1.145,-1.269 0,-0.7000002 0.5,-1.2740002 1.143,-1.2740002 0.6429999,0 1.1569999,0.574 1.1459999,1.2740002 -0.011,0.7 -0.505,1.269 -1.1439999,1.269 z m 4.2239999,0 c -0.628,0 -1.144,-0.569 -1.144,-1.269 0,-0.7000002 0.5,-1.2740002 1.144,-1.2740002 0.644,0 1.154,0.574 1.143,1.2740002 -0.011,0.7 -0.504,1.269 -1.143,1.269 z"/>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and no value', () => {
    badge.title = 'Coverage'
    badge.type = 'simple'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77" height="20" role="img" aria-label="Coverage: ">
  <title>Coverage: </title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="77" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect width="77" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and no value flat', () => {
    badge.title = 'Coverage'
    badge.type = 'simple'
    badge.theme = 'flat'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77" height="20" role="img" aria-label="Coverage: ">
  <title>Coverage: </title>
  <clipPath id="r">
    <rect width="77" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and no value flat-square', () => {
    badge.title = 'Coverage'
    badge.type = 'simple'
    badge.theme = 'flat-square'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77" height="20" role="img" aria-label="Coverage: ">
  <title>Coverage: </title>
  <clipPath id="r">
    <rect width="77" height="20" rx="0" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as semaphore', () => {
    badge.title = 'Coverage'
    badge.value = 'Failed'
    badge.type = 'semaphore'
    badge.semaphoreRedValue = 'Failed'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="132.16" height="20" role="img" aria-label="Coverage: Failed">
  <title>Coverage: Failed</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="132.16" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="55.16" height="20" fill="#c21d03"/>
    <rect width="132.16" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="104.58" y="15" textLength="35.16" fill="#010101" fill-opacity=".3">Failed</text>
    <text x="104.58" y="14" fill="#fff" textLength="35.16">Failed</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as semaphore yellow', () => {
    badge.title = 'Coverage'
    badge.value = 'Failed'
    badge.type = 'semaphore'
    badge.semaphoreYellowValue = 'Failed'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="132.16" height="20" role="img" aria-label="Coverage: Failed">
  <title>Coverage: Failed</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="132.16" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="55.16" height="20" fill="#e9aa2b"/>
    <rect width="132.16" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="104.58" y="15" textLength="35.16" fill="#010101" fill-opacity=".3">Failed</text>
    <text x="104.58" y="14" fill="#fff" textLength="35.16">Failed</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  it('should generate a badge with title and value as semaphore green', () => {
    badge.title = 'Coverage'
    badge.value = 'Failed'
    badge.type = 'semaphore'
    badge.semaphoreGreenValue = 'Failed'
    const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="132.16" height="20" role="img" aria-label="Coverage: Failed">
  <title>Coverage: Failed</title>
  <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="132.16" height="20" rx="4" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="77" height="20" fill="#555"/>
    <rect x="77" width="55.16" height="20" fill="#2E8B57"/>
    <rect width="132.16" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana" text-rendering="geometricPrecision" font-size="11">
    <text aria-hidden="true" x="38.5" y="15" fill="#010101" fill-opacity=".3" textLength="57">Coverage</text>
    <text x="38.5" y="14" fill="#fff" textLength="57">Coverage</text>
    <text x="104.58" y="15" textLength="35.16" fill="#010101" fill-opacity=".3">Failed</text>
    <text x="104.58" y="14" fill="#fff" textLength="35.16">Failed</text>
  </g>
</svg>
`
    const result = badge.generate()

    expect(result).toEqual(expectedSvg)
  })

  // Add more test cases as needed
})
