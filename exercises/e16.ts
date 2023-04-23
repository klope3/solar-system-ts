// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
type Callback<TArg> = (arg: TArg) => boolean;

export function find<TElement>(
  array: TElement[],
  callback: Callback<TElement>
) {
  for (const element of array) {
    if (callback(element)) return element;
  }
}
