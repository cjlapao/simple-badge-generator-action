import { run } from '../src/main'
import { Badge } from '../src/badge'
import * as core from '@actions/core'
import * as fs from 'fs'

jest.mock('../src/badge')
jest.mock('@actions/core')
jest.mock('fs', () => ({
  promises: {
    access: jest.fn()
  },
  readFileSync: jest.fn(() => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE coverage SYSTEM "http://cobertura.sourceforge.net/xml/coverage-04.dtd">
    <coverage line-rate="0.80" branch-rate="0" lines-covered="37" lines-valid="60" branches-covered="0" branches-valid="0" complexity="0" version="" timestamp="1705315425267"><packages><package name="github.com/cjlapao/common-go-cryptorand" line-rate="0.6166667" branch-rate="0" complexity="0" line-count="60" line-hits="37"><classes><class name="-" filename="random_string.go" line-rate="0" branch-rate="0" complexity="0" line-count="21" line-hits="0"><methods><method name="GetAlphaNumericRandomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="10" hits="0"/></lines></method><method name="GetRandomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="14" hits="0"/></lines></method><method name="GetUpperCaseRandomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="18" hits="0"/></lines></method><method name="GetLowerCaseRandomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="22" hits="0"/></lines></method><method name="GetNumericRandomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="26" hits="0"/></lines></method><method name="randomString" signature="" line-rate="0" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="30" hits="0"/><line number="31" hits="0"/><line number="33" hits="0"/><line number="34" hits="0"/><line number="37" hits="0"/><line number="38" hits="0"/><line number="41" hits="0"/><line number="42" hits="0"/><line number="44" hits="0"/><line number="45" hits="0"/><line number="46" hits="0"/><line number="47" hits="0"/><line number="48" hits="0"/><line number="49" hits="0"/><line number="51" hits="0"/><line number="56" hits="0"/></lines></method></methods><lines><line number="10" hits="0"/><line number="14" hits="0"/><line number="18" hits="0"/><line number="22" hits="0"/><line number="26" hits="0"/><line number="30" hits="0"/><line number="31" hits="0"/><line number="33" hits="0"/><line number="34" hits="0"/><line number="37" hits="0"/><line number="38" hits="0"/><line number="41" hits="0"/><line number="42" hits="0"/><line number="44" hits="0"/><line number="45" hits="0"/><line number="46" hits="0"/><line number="47" hits="0"/><line number="48" hits="0"/><line number="49" hits="0"/><line number="51" hits="0"/><line number="56" hits="0"/></lines></class><class name="-" filename="constants.go" line-rate="1" branch-rate="0" complexity="0" line-count="5" line-hits="5"><methods><method name="AlphaCharacters" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="11" hits="1"/></lines></method><method name="AlphaNumericCharacters" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="18" hits="1"/></lines></method><method name="NumericCharacters" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="26" hits="10"/></lines></method><method name="LowerCaseAlphaCharacters" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="32" hits="31"/></lines></method><method name="UpperCaseAlphaCharacters" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="38" hits="31"/></lines></method></methods><lines><line number="11" hits="1"/><line number="18" hits="1"/><line number="26" hits="10"/><line number="32" hits="31"/><line number="38" hits="31"/></lines></class><class name="CryptoSource" filename="crypto-source.go" line-rate="0.8" branch-rate="0" complexity="0" line-count="5" line-hits="4"><methods><method name="Seed" signature="" line-rate="NaN" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines/></method><method name="Int63" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="14" hits="44"/></lines></method><method name="Uint64" signature="" line-rate="0.75" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="18" hits="44"/><line number="19" hits="44"/><line number="20" hits="0"/><line number="22" hits="44"/></lines></method></methods><lines><line number="14" hits="44"/><line number="18" hits="44"/><line number="19" hits="44"/><line number="20" hits="0"/><line number="22" hits="44"/></lines></class><class name="-" filename="main.go" line-rate="1" branch-rate="0" complexity="0" line-count="5" line-hits="5"><methods><method name="New" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="10" hits="6"/><line number="11" hits="6"/></lines></method><method name="Rand" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="17" hits="11"/><line number="18" hits="11"/><line number="19" hits="11"/></lines></method></methods><lines><line number="10" hits="6"/><line number="11" hits="6"/><line number="17" hits="11"/><line number="18" hits="11"/><line number="19" hits="11"/></lines></class><class name="CryptoRand" filename="main.go" line-rate="1" branch-rate="0" complexity="0" line-count="19" line-hits="19"><methods><method name="GetRandomNumber" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="23" hits="1"/></lines></method><method name="GetAlphaNumericRandomString" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="27" hits="1"/><line number="29" hits="1"/></lines></method><method name="GetRandomString" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="33" hits="1"/><line number="35" hits="1"/></lines></method><method name="GetUpperCaseRandomString" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="39" hits="1"/><line number="40" hits="1"/><line number="42" hits="1"/></lines></method><method name="GetLowerCaseRandomString" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="46" hits="1"/><line number="47" hits="1"/><line number="49" hits="1"/></lines></method><method name="getRandomFromArray" signature="" line-rate="1" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="53" hits="4"/><line number="54" hits="4"/><line number="55" hits="4"/><line number="56" hits="4"/><line number="57" hits="4"/><line number="58" hits="40"/><line number="59" hits="40"/><line number="64" hits="4"/></lines></method></methods><lines><line number="23" hits="1"/><line number="27" hits="1"/><line number="29" hits="1"/><line number="33" hits="1"/><line number="35" hits="1"/><line number="39" hits="1"/><line number="40" hits="1"/><line number="42" hits="1"/><line number="46" hits="1"/><line number="47" hits="1"/><line number="49" hits="1"/><line number="53" hits="4"/><line number="54" hits="4"/><line number="55" hits="4"/><line number="56" hits="4"/><line number="57" hits="4"/><line number="58" hits="40"/><line number="59" hits="40"/><line number="64" hits="4"/></lines></class><class name="-" filename="random_int.go" line-rate="0.8" branch-rate="0" complexity="0" line-count="5" line-hits="4"><methods><method name="GetRandomNumber" signature="" line-rate="0.8" branch-rate="0" complexity="0" line-count="0" line-hits="0"><lines><line number="9" hits="3"/><line number="11" hits="3"/><line number="12" hits="3"/><line number="13" hits="0"/><line number="16" hits="3"/></lines></method></methods><lines><line number="9" hits="3"/><line number="11" hits="3"/><line number="12" hits="3"/><line number="13" hits="0"/><line number="16" hits="3"/></lines></class></classes></package></packages><sources><source>/Users/cjlapao/code/GitHub/common-go-cryptorand</source></sources></coverage>
    `
  }),
  existsSync: jest.fn(),
  writeFileSync: jest.fn()
}))

describe('main', () => {
  const badgeMock = jest.mocked(Badge, { shallow: false })
  const coreMock = jest.mocked(core, { shallow: false })
  const fsMockWriterFileSync = jest.spyOn(fs, 'writeFileSync')

  beforeEach(() => {
    badgeMock.mockClear()
    coreMock.getInput.mockClear()
    fsMockWriterFileSync.mockClear()
  })

  it('runs with badge-type with no defined type and title, expect error', async () => {
    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBeUndefined()
    expect(instance.type).toBe('simple')
    expect(instance.generate).not.toHaveBeenCalled()
    expect(coreMock.setFailed).toHaveBeenCalledWith('Title is required')
  })

  it('throws an error and catch it', async () => {
    coreMock.getInput.mockImplementation(() => {
      throw new Error('some error')
    })

    await run()

    expect(core.setFailed).toHaveBeenCalledWith('some error')
  })

  it('runs with unknown badge-type then simple is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'unknown'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-type with type simple is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-type with type boolean is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'boolean'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('boolean')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-type with type semaphore is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'semaphore'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('semaphore')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-type with type cobertura is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'cobertura'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true)

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('cobertura')
    expect(instance.value).toBe('80.00')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-type with type cobertura is set, with not file', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'cobertura'
        case 'title':
          return 'title'
        default:
          return ''
      }
    })
    jest.spyOn(fs, 'existsSync').mockImplementation(() => false)

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('cobertura')
    expect(coreMock.setFailed).toHaveBeenCalledWith('File not found: ')
    expect(instance.generate).not.toHaveBeenCalled()
    expect(fsMockWriterFileSync).not.toHaveBeenCalled()
  })

  it('runs with all configurations they are set in the badge', async () => {
    const defaultColor = '#4c1'
    const defaultThreshold = '80'
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'title-fill-color':
          return defaultColor
        case 'title-font-color':
          return defaultColor
        case 'value-fill-color':
          return defaultColor
        case 'value-font-color':
          return defaultColor
        case 'cobertura-yellow-threshold':
          return defaultThreshold
        case 'cobertura-green-threshold':
          return defaultThreshold
        case 'semaphore-red-value':
          return defaultThreshold
        case 'semaphore-red-color':
          return defaultColor
        case 'semaphore-yellow-value':
          return defaultThreshold
        case 'semaphore-yellow-color':
          return defaultColor
        case 'semaphore-green-value':
          return defaultThreshold
        case 'semaphore-green-color':
          return defaultColor
        case 'boolean-red-color':
          return defaultColor
        case 'boolean-green-color':
          return defaultColor
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.titleFillColor).toBe(defaultColor)
    expect(instance.titleFontColor).toBe(defaultColor)
    expect(instance.valueFillColor).toBe(defaultColor)
    expect(instance.valueFontColor).toBe(defaultColor)
    expect(instance.coberturaYellowThreshold).toBe(parseInt(defaultThreshold))
    expect(instance.coberturaGreenThreshold).toBe(parseInt(defaultThreshold))
    expect(instance.semaphoreGreenColor).toBe(defaultColor)
    expect(instance.semaphoreGreenValue).toBe(defaultThreshold)
    expect(instance.semaphoreYellowColor).toBe(defaultColor)
    expect(instance.semaphoreYellowValue).toBe(defaultThreshold)
    expect(instance.semaphoreRedColor).toBe(defaultColor)
    expect(instance.semaphoreRedValue).toBe(defaultThreshold)
    expect(instance.booleanFalseColor).toBe(defaultColor)
    expect(instance.booleanTrueColor).toBe(defaultColor)
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-theme flat is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-theme':
          return 'flat'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.theme).toBe('flat')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-theme plastic is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-theme':
          return 'plastic'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.theme).toBe('plastic')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-theme flat-square is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-theme':
          return 'flat-square'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.theme).toBe('flat-square')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-theme plastic-square is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-theme':
          return 'plastic-square'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.theme).toBe('plastic-square')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-theme unknown, plastic is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-theme':
          return 'plastic-square-old'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.theme).toBe('plastic')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-icon unknown, none is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-icon':
          return 'some-icon'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.icon).toBe('none')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-icon github is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-icon':
          return 'github'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.icon).toBe('github')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })

  it('runs with badge-icon discord is set', async () => {
    coreMock.getInput.mockImplementation((name: string) => {
      switch (name) {
        case 'badge-type':
          return 'simple'
        case 'title':
          return 'title'
        case 'badge-icon':
          return 'discord'
        default:
          return ''
      }
    })

    await run()

    expect(badgeMock).toHaveBeenCalledWith()
    const instance = badgeMock.mock.instances[0]
    expect(instance.title).toBe('title')
    expect(instance.type).toBe('simple')
    expect(instance.icon).toBe('discord')
    expect(instance.generate).toHaveBeenCalled()
    expect(fsMockWriterFileSync).toHaveBeenCalled()
  })
})
