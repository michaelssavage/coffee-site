type Prev = [never, 0, 1, 2, ...0[]];

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

/**
 * A utility type that takes an interface and returns
 * all possible paths for the interface as a union type.
 *
 * Taken from stackoverflow:
 * https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object
 *
 * @example
 *  interface User {
 *    name: string
 *    address: {
 *      street: string
 *    }
 *  }
 *  type UserPaths = Paths<User>
 *  UserPaths = 'name' | 'address' | 'address.street'
 */
export type Paths<T, D extends number = 2> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";
