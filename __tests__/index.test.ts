import { run } from '../src/main'

// Mock the action's entrypoint
jest.mock('../src/main', () => ({
  run: jest.fn()
}))

describe('index', () => {
  it('calls run when imported', async () => {
    run()

    expect(run).toHaveBeenCalled()
  })
})
