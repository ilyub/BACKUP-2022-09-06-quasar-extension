declare module "expect/build/matchers" {
  // eslint-disable-next-line import/no-default-export -- Wait for @skylib/config update
  export default matchers;

  export interface ExpectReturnType {
    /**
     * Returns failure message.
     *
     * @returns Failure message.
     */
    readonly message: () => string;
    readonly pass: boolean;
  }

  export interface Matchers {
    /**
     * Core jest matcher.
     *
     * @param got - Got.
     * @returns Result object.
     */
    readonly toBeDefined: (got: unknown) => ExpectReturnType;
    /**
     * Core jest matcher.
     *
     * @param got - Got.
     * @param expected - Expected.
     * @returns Result object.
     */
    readonly toStrictEqual: (
      got: unknown,
      expected: unknown
    ) => ExpectReturnType;
  }

  const matchers: Matchers;
}
