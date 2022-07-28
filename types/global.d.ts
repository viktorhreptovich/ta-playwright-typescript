export {};

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toBeSelected(): R;
    }
  }
}
