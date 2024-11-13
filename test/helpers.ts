import MockDate from "mockdate"

export const withRealDate = async (fn: () => Promise<void> | void) => {
  const mockedDate = new Date()
  MockDate.reset()
  try {
    await fn()
  } finally {
    MockDate.set(mockedDate)
  }
}
