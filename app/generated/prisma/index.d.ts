
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model Pertemuan
 * 
 */
export type Pertemuan = $Result.DefaultSelection<Prisma.$PertemuanPayload>
/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const StatusKehadiran: {
  HADIR: 'HADIR',
  TELAT: 'TELAT',
  IZIN: 'IZIN',
  SAKIT: 'SAKIT',
  ALPHA: 'ALPHA',
  NONE: 'NONE'
};

export type StatusKehadiran = (typeof StatusKehadiran)[keyof typeof StatusKehadiran]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type StatusKehadiran = $Enums.StatusKehadiran

export const StatusKehadiran: typeof $Enums.StatusKehadiran

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pertemuan`: Exposes CRUD operations for the **Pertemuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pertemuans
    * const pertemuans = await prisma.pertemuan.findMany()
    * ```
    */
  get pertemuan(): Prisma.PertemuanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Kelas: 'Kelas',
    Pertemuan: 'Pertemuan',
    Absensi: 'Absensi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "kelas" | "pertemuan" | "absensi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      Pertemuan: {
        payload: Prisma.$PertemuanPayload<ExtArgs>
        fields: Prisma.PertemuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PertemuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PertemuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          findFirst: {
            args: Prisma.PertemuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PertemuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          findMany: {
            args: Prisma.PertemuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>[]
          }
          create: {
            args: Prisma.PertemuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          createMany: {
            args: Prisma.PertemuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PertemuanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>[]
          }
          delete: {
            args: Prisma.PertemuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          update: {
            args: Prisma.PertemuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          deleteMany: {
            args: Prisma.PertemuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PertemuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PertemuanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>[]
          }
          upsert: {
            args: Prisma.PertemuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanPayload>
          }
          aggregate: {
            args: Prisma.PertemuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePertemuan>
          }
          groupBy: {
            args: Prisma.PertemuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PertemuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PertemuanCountArgs<ExtArgs>
            result: $Utils.Optional<PertemuanCountAggregateOutputType> | number
          }
        }
      }
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    kelas?: KelasOmit
    pertemuan?: PertemuanOmit
    absensi?: AbsensiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    absensi: number
    kelasAjar: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | UserCountOutputTypeCountAbsensiArgs
    kelasAjar?: boolean | UserCountOutputTypeCountKelasAjarArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKelasAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    pertemuan: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pertemuan?: boolean | KelasCountOutputTypeCountPertemuanArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountPertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertemuanWhereInput
  }


  /**
   * Count Type PertemuanCountOutputType
   */

  export type PertemuanCountOutputType = {
    absensi: number
  }

  export type PertemuanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | PertemuanCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * PertemuanCountOutputType without action
   */
  export type PertemuanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanCountOutputType
     */
    select?: PertemuanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PertemuanCountOutputType without action
   */
  export type PertemuanCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    nim: string | null
    nip: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    nim: string | null
    nip: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nama: number
    role: number
    createdAt: number
    updatedAt: number
    nim: number
    nip: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    nim?: true
    nip?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    nim?: true
    nip?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    nim?: true
    nip?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    nim: string | null
    nip: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nim?: boolean
    nip?: boolean
    absensi?: boolean | User$absensiArgs<ExtArgs>
    kelasAjar?: boolean | User$kelasAjarArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nim?: boolean
    nip?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nim?: boolean
    nip?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nim?: boolean
    nip?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nama" | "role" | "createdAt" | "updatedAt" | "nim" | "nip", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | User$absensiArgs<ExtArgs>
    kelasAjar?: boolean | User$kelasAjarArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
      kelasAjar: Prisma.$KelasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nama: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      nim: string | null
      nip: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absensi<T extends User$absensiArgs<ExtArgs> = {}>(args?: Subset<T, User$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kelasAjar<T extends User$kelasAjarArgs<ExtArgs> = {}>(args?: Subset<T, User$kelasAjarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly nim: FieldRef<"User", 'String'>
    readonly nip: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.absensi
   */
  export type User$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * User.kelasAjar
   */
  export type User$kelasAjarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    cursor?: KelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasAvgAggregateOutputType = {
    jumlahPertemuan: number | null
  }

  export type KelasSumAggregateOutputType = {
    jumlahPertemuan: number | null
  }

  export type KelasMinAggregateOutputType = {
    id: string | null
    kodeKelas: string | null
    namaKelas: string | null
    pinKelas: string | null
    hariPertemuan: string | null
    jumlahPertemuan: number | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dosenId: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id: string | null
    kodeKelas: string | null
    namaKelas: string | null
    pinKelas: string | null
    hariPertemuan: string | null
    jumlahPertemuan: number | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dosenId: string | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    kodeKelas: number
    namaKelas: number
    pinKelas: number
    hariPertemuan: number
    jumlahPertemuan: number
    statusAktif: number
    createdAt: number
    updatedAt: number
    dosenId: number
    _all: number
  }


  export type KelasAvgAggregateInputType = {
    jumlahPertemuan?: true
  }

  export type KelasSumAggregateInputType = {
    jumlahPertemuan?: true
  }

  export type KelasMinAggregateInputType = {
    id?: true
    kodeKelas?: true
    namaKelas?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenId?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    kodeKelas?: true
    namaKelas?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenId?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    kodeKelas?: true
    namaKelas?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenId?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _avg?: KelasAvgAggregateInputType
    _sum?: KelasSumAggregateInputType
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif: boolean
    createdAt: Date
    updatedAt: Date
    dosenId: string
    _count: KelasCountAggregateOutputType | null
    _avg: KelasAvgAggregateOutputType | null
    _sum: KelasSumAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenId?: boolean
    dosen?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | Kelas$pertemuanArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenId?: boolean
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenId?: boolean
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenId?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeKelas" | "namaKelas" | "pinKelas" | "hariPertemuan" | "jumlahPertemuan" | "statusAktif" | "createdAt" | "updatedAt" | "dosenId", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | Kelas$pertemuanArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosen?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      dosen: Prisma.$UserPayload<ExtArgs>
      pertemuan: Prisma.$PertemuanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeKelas: string
      namaKelas: string
      pinKelas: string
      hariPertemuan: string
      jumlahPertemuan: number
      statusAktif: boolean
      createdAt: Date
      updatedAt: Date
      dosenId: string
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas model
   */
  readonly fields: KelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dosen<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pertemuan<T extends Kelas$pertemuanArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$pertemuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'String'>
    readonly kodeKelas: FieldRef<"Kelas", 'String'>
    readonly namaKelas: FieldRef<"Kelas", 'String'>
    readonly pinKelas: FieldRef<"Kelas", 'String'>
    readonly hariPertemuan: FieldRef<"Kelas", 'String'>
    readonly jumlahPertemuan: FieldRef<"Kelas", 'Int'>
    readonly statusAktif: FieldRef<"Kelas", 'Boolean'>
    readonly createdAt: FieldRef<"Kelas", 'DateTime'>
    readonly updatedAt: FieldRef<"Kelas", 'DateTime'>
    readonly dosenId: FieldRef<"Kelas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.pertemuan
   */
  export type Kelas$pertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    where?: PertemuanWhereInput
    orderBy?: PertemuanOrderByWithRelationInput | PertemuanOrderByWithRelationInput[]
    cursor?: PertemuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PertemuanScalarFieldEnum | PertemuanScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model Pertemuan
   */

  export type AggregatePertemuan = {
    _count: PertemuanCountAggregateOutputType | null
    _avg: PertemuanAvgAggregateOutputType | null
    _sum: PertemuanSumAggregateOutputType | null
    _min: PertemuanMinAggregateOutputType | null
    _max: PertemuanMaxAggregateOutputType | null
  }

  export type PertemuanAvgAggregateOutputType = {
    nomorPertemuan: number | null
  }

  export type PertemuanSumAggregateOutputType = {
    nomorPertemuan: number | null
  }

  export type PertemuanMinAggregateOutputType = {
    id: string | null
    nomorPertemuan: number | null
    tanggalPertemuan: Date | null
    topik: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
    kelasId: string | null
  }

  export type PertemuanMaxAggregateOutputType = {
    id: string | null
    nomorPertemuan: number | null
    tanggalPertemuan: Date | null
    topik: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
    kelasId: string | null
  }

  export type PertemuanCountAggregateOutputType = {
    id: number
    nomorPertemuan: number
    tanggalPertemuan: number
    topik: number
    catatan: number
    createdAt: number
    updatedAt: number
    kelasId: number
    _all: number
  }


  export type PertemuanAvgAggregateInputType = {
    nomorPertemuan?: true
  }

  export type PertemuanSumAggregateInputType = {
    nomorPertemuan?: true
  }

  export type PertemuanMinAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    kelasId?: true
  }

  export type PertemuanMaxAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    kelasId?: true
  }

  export type PertemuanCountAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    kelasId?: true
    _all?: true
  }

  export type PertemuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertemuan to aggregate.
     */
    where?: PertemuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertemuans to fetch.
     */
    orderBy?: PertemuanOrderByWithRelationInput | PertemuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PertemuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertemuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertemuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pertemuans
    **/
    _count?: true | PertemuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PertemuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PertemuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PertemuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PertemuanMaxAggregateInputType
  }

  export type GetPertemuanAggregateType<T extends PertemuanAggregateArgs> = {
        [P in keyof T & keyof AggregatePertemuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePertemuan[P]>
      : GetScalarType<T[P], AggregatePertemuan[P]>
  }




  export type PertemuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertemuanWhereInput
    orderBy?: PertemuanOrderByWithAggregationInput | PertemuanOrderByWithAggregationInput[]
    by: PertemuanScalarFieldEnum[] | PertemuanScalarFieldEnum
    having?: PertemuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PertemuanCountAggregateInputType | true
    _avg?: PertemuanAvgAggregateInputType
    _sum?: PertemuanSumAggregateInputType
    _min?: PertemuanMinAggregateInputType
    _max?: PertemuanMaxAggregateInputType
  }

  export type PertemuanGroupByOutputType = {
    id: string
    nomorPertemuan: number
    tanggalPertemuan: Date
    topik: string | null
    catatan: string | null
    createdAt: Date
    updatedAt: Date
    kelasId: string
    _count: PertemuanCountAggregateOutputType | null
    _avg: PertemuanAvgAggregateOutputType | null
    _sum: PertemuanSumAggregateOutputType | null
    _min: PertemuanMinAggregateOutputType | null
    _max: PertemuanMaxAggregateOutputType | null
  }

  type GetPertemuanGroupByPayload<T extends PertemuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PertemuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PertemuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PertemuanGroupByOutputType[P]>
            : GetScalarType<T[P], PertemuanGroupByOutputType[P]>
        }
      >
    >


  export type PertemuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelasId?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    absensi?: boolean | Pertemuan$absensiArgs<ExtArgs>
    _count?: boolean | PertemuanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuan"]>

  export type PertemuanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelasId?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuan"]>

  export type PertemuanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelasId?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuan"]>

  export type PertemuanSelectScalar = {
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelasId?: boolean
  }

  export type PertemuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomorPertemuan" | "tanggalPertemuan" | "topik" | "catatan" | "createdAt" | "updatedAt" | "kelasId", ExtArgs["result"]["pertemuan"]>
  export type PertemuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    absensi?: boolean | Pertemuan$absensiArgs<ExtArgs>
    _count?: boolean | PertemuanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PertemuanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type PertemuanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $PertemuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pertemuan"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs>
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomorPertemuan: number
      tanggalPertemuan: Date
      topik: string | null
      catatan: string | null
      createdAt: Date
      updatedAt: Date
      kelasId: string
    }, ExtArgs["result"]["pertemuan"]>
    composites: {}
  }

  type PertemuanGetPayload<S extends boolean | null | undefined | PertemuanDefaultArgs> = $Result.GetResult<Prisma.$PertemuanPayload, S>

  type PertemuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PertemuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PertemuanCountAggregateInputType | true
    }

  export interface PertemuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pertemuan'], meta: { name: 'Pertemuan' } }
    /**
     * Find zero or one Pertemuan that matches the filter.
     * @param {PertemuanFindUniqueArgs} args - Arguments to find a Pertemuan
     * @example
     * // Get one Pertemuan
     * const pertemuan = await prisma.pertemuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PertemuanFindUniqueArgs>(args: SelectSubset<T, PertemuanFindUniqueArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pertemuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PertemuanFindUniqueOrThrowArgs} args - Arguments to find a Pertemuan
     * @example
     * // Get one Pertemuan
     * const pertemuan = await prisma.pertemuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PertemuanFindUniqueOrThrowArgs>(args: SelectSubset<T, PertemuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pertemuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanFindFirstArgs} args - Arguments to find a Pertemuan
     * @example
     * // Get one Pertemuan
     * const pertemuan = await prisma.pertemuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PertemuanFindFirstArgs>(args?: SelectSubset<T, PertemuanFindFirstArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pertemuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanFindFirstOrThrowArgs} args - Arguments to find a Pertemuan
     * @example
     * // Get one Pertemuan
     * const pertemuan = await prisma.pertemuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PertemuanFindFirstOrThrowArgs>(args?: SelectSubset<T, PertemuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pertemuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pertemuans
     * const pertemuans = await prisma.pertemuan.findMany()
     * 
     * // Get first 10 Pertemuans
     * const pertemuans = await prisma.pertemuan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pertemuanWithIdOnly = await prisma.pertemuan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PertemuanFindManyArgs>(args?: SelectSubset<T, PertemuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pertemuan.
     * @param {PertemuanCreateArgs} args - Arguments to create a Pertemuan.
     * @example
     * // Create one Pertemuan
     * const Pertemuan = await prisma.pertemuan.create({
     *   data: {
     *     // ... data to create a Pertemuan
     *   }
     * })
     * 
     */
    create<T extends PertemuanCreateArgs>(args: SelectSubset<T, PertemuanCreateArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pertemuans.
     * @param {PertemuanCreateManyArgs} args - Arguments to create many Pertemuans.
     * @example
     * // Create many Pertemuans
     * const pertemuan = await prisma.pertemuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PertemuanCreateManyArgs>(args?: SelectSubset<T, PertemuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pertemuans and returns the data saved in the database.
     * @param {PertemuanCreateManyAndReturnArgs} args - Arguments to create many Pertemuans.
     * @example
     * // Create many Pertemuans
     * const pertemuan = await prisma.pertemuan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pertemuans and only return the `id`
     * const pertemuanWithIdOnly = await prisma.pertemuan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PertemuanCreateManyAndReturnArgs>(args?: SelectSubset<T, PertemuanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pertemuan.
     * @param {PertemuanDeleteArgs} args - Arguments to delete one Pertemuan.
     * @example
     * // Delete one Pertemuan
     * const Pertemuan = await prisma.pertemuan.delete({
     *   where: {
     *     // ... filter to delete one Pertemuan
     *   }
     * })
     * 
     */
    delete<T extends PertemuanDeleteArgs>(args: SelectSubset<T, PertemuanDeleteArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pertemuan.
     * @param {PertemuanUpdateArgs} args - Arguments to update one Pertemuan.
     * @example
     * // Update one Pertemuan
     * const pertemuan = await prisma.pertemuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PertemuanUpdateArgs>(args: SelectSubset<T, PertemuanUpdateArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pertemuans.
     * @param {PertemuanDeleteManyArgs} args - Arguments to filter Pertemuans to delete.
     * @example
     * // Delete a few Pertemuans
     * const { count } = await prisma.pertemuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PertemuanDeleteManyArgs>(args?: SelectSubset<T, PertemuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pertemuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pertemuans
     * const pertemuan = await prisma.pertemuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PertemuanUpdateManyArgs>(args: SelectSubset<T, PertemuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pertemuans and returns the data updated in the database.
     * @param {PertemuanUpdateManyAndReturnArgs} args - Arguments to update many Pertemuans.
     * @example
     * // Update many Pertemuans
     * const pertemuan = await prisma.pertemuan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pertemuans and only return the `id`
     * const pertemuanWithIdOnly = await prisma.pertemuan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PertemuanUpdateManyAndReturnArgs>(args: SelectSubset<T, PertemuanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pertemuan.
     * @param {PertemuanUpsertArgs} args - Arguments to update or create a Pertemuan.
     * @example
     * // Update or create a Pertemuan
     * const pertemuan = await prisma.pertemuan.upsert({
     *   create: {
     *     // ... data to create a Pertemuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pertemuan we want to update
     *   }
     * })
     */
    upsert<T extends PertemuanUpsertArgs>(args: SelectSubset<T, PertemuanUpsertArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pertemuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanCountArgs} args - Arguments to filter Pertemuans to count.
     * @example
     * // Count the number of Pertemuans
     * const count = await prisma.pertemuan.count({
     *   where: {
     *     // ... the filter for the Pertemuans we want to count
     *   }
     * })
    **/
    count<T extends PertemuanCountArgs>(
      args?: Subset<T, PertemuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PertemuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pertemuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PertemuanAggregateArgs>(args: Subset<T, PertemuanAggregateArgs>): Prisma.PrismaPromise<GetPertemuanAggregateType<T>>

    /**
     * Group by Pertemuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PertemuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PertemuanGroupByArgs['orderBy'] }
        : { orderBy?: PertemuanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PertemuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPertemuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pertemuan model
   */
  readonly fields: PertemuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pertemuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PertemuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    absensi<T extends Pertemuan$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Pertemuan$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pertemuan model
   */
  interface PertemuanFieldRefs {
    readonly id: FieldRef<"Pertemuan", 'String'>
    readonly nomorPertemuan: FieldRef<"Pertemuan", 'Int'>
    readonly tanggalPertemuan: FieldRef<"Pertemuan", 'DateTime'>
    readonly topik: FieldRef<"Pertemuan", 'String'>
    readonly catatan: FieldRef<"Pertemuan", 'String'>
    readonly createdAt: FieldRef<"Pertemuan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pertemuan", 'DateTime'>
    readonly kelasId: FieldRef<"Pertemuan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pertemuan findUnique
   */
  export type PertemuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter, which Pertemuan to fetch.
     */
    where: PertemuanWhereUniqueInput
  }

  /**
   * Pertemuan findUniqueOrThrow
   */
  export type PertemuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter, which Pertemuan to fetch.
     */
    where: PertemuanWhereUniqueInput
  }

  /**
   * Pertemuan findFirst
   */
  export type PertemuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter, which Pertemuan to fetch.
     */
    where?: PertemuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertemuans to fetch.
     */
    orderBy?: PertemuanOrderByWithRelationInput | PertemuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertemuans.
     */
    cursor?: PertemuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertemuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertemuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertemuans.
     */
    distinct?: PertemuanScalarFieldEnum | PertemuanScalarFieldEnum[]
  }

  /**
   * Pertemuan findFirstOrThrow
   */
  export type PertemuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter, which Pertemuan to fetch.
     */
    where?: PertemuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertemuans to fetch.
     */
    orderBy?: PertemuanOrderByWithRelationInput | PertemuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pertemuans.
     */
    cursor?: PertemuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertemuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertemuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pertemuans.
     */
    distinct?: PertemuanScalarFieldEnum | PertemuanScalarFieldEnum[]
  }

  /**
   * Pertemuan findMany
   */
  export type PertemuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter, which Pertemuans to fetch.
     */
    where?: PertemuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pertemuans to fetch.
     */
    orderBy?: PertemuanOrderByWithRelationInput | PertemuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pertemuans.
     */
    cursor?: PertemuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pertemuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pertemuans.
     */
    skip?: number
    distinct?: PertemuanScalarFieldEnum | PertemuanScalarFieldEnum[]
  }

  /**
   * Pertemuan create
   */
  export type PertemuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pertemuan.
     */
    data: XOR<PertemuanCreateInput, PertemuanUncheckedCreateInput>
  }

  /**
   * Pertemuan createMany
   */
  export type PertemuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pertemuans.
     */
    data: PertemuanCreateManyInput | PertemuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pertemuan createManyAndReturn
   */
  export type PertemuanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * The data used to create many Pertemuans.
     */
    data: PertemuanCreateManyInput | PertemuanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pertemuan update
   */
  export type PertemuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pertemuan.
     */
    data: XOR<PertemuanUpdateInput, PertemuanUncheckedUpdateInput>
    /**
     * Choose, which Pertemuan to update.
     */
    where: PertemuanWhereUniqueInput
  }

  /**
   * Pertemuan updateMany
   */
  export type PertemuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pertemuans.
     */
    data: XOR<PertemuanUpdateManyMutationInput, PertemuanUncheckedUpdateManyInput>
    /**
     * Filter which Pertemuans to update
     */
    where?: PertemuanWhereInput
    /**
     * Limit how many Pertemuans to update.
     */
    limit?: number
  }

  /**
   * Pertemuan updateManyAndReturn
   */
  export type PertemuanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * The data used to update Pertemuans.
     */
    data: XOR<PertemuanUpdateManyMutationInput, PertemuanUncheckedUpdateManyInput>
    /**
     * Filter which Pertemuans to update
     */
    where?: PertemuanWhereInput
    /**
     * Limit how many Pertemuans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pertemuan upsert
   */
  export type PertemuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pertemuan to update in case it exists.
     */
    where: PertemuanWhereUniqueInput
    /**
     * In case the Pertemuan found by the `where` argument doesn't exist, create a new Pertemuan with this data.
     */
    create: XOR<PertemuanCreateInput, PertemuanUncheckedCreateInput>
    /**
     * In case the Pertemuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PertemuanUpdateInput, PertemuanUncheckedUpdateInput>
  }

  /**
   * Pertemuan delete
   */
  export type PertemuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
    /**
     * Filter which Pertemuan to delete.
     */
    where: PertemuanWhereUniqueInput
  }

  /**
   * Pertemuan deleteMany
   */
  export type PertemuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pertemuans to delete
     */
    where?: PertemuanWhereInput
    /**
     * Limit how many Pertemuans to delete.
     */
    limit?: number
  }

  /**
   * Pertemuan.absensi
   */
  export type Pertemuan$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Pertemuan without action
   */
  export type PertemuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pertemuan
     */
    select?: PertemuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pertemuan
     */
    omit?: PertemuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanInclude<ExtArgs> | null
  }


  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: string | null
    jamAbsen: Date | null
    statusKehadiran: $Enums.StatusKehadiran | null
    lokasi: string | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mahasiswaId: string | null
    pertemuanId: string | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: string | null
    jamAbsen: Date | null
    statusKehadiran: $Enums.StatusKehadiran | null
    lokasi: string | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mahasiswaId: string | null
    pertemuanId: string | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    jamAbsen: number
    statusKehadiran: number
    lokasi: number
    keterangan: number
    createdAt: number
    updatedAt: number
    mahasiswaId: number
    pertemuanId: number
    _all: number
  }


  export type AbsensiMinAggregateInputType = {
    id?: true
    jamAbsen?: true
    statusKehadiran?: true
    lokasi?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    mahasiswaId?: true
    pertemuanId?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    jamAbsen?: true
    statusKehadiran?: true
    lokasi?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    mahasiswaId?: true
    pertemuanId?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    jamAbsen?: true
    statusKehadiran?: true
    lokasi?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    mahasiswaId?: true
    pertemuanId?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: string
    jamAbsen: Date
    statusKehadiran: $Enums.StatusKehadiran
    lokasi: string | null
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
    mahasiswaId: string
    pertemuanId: string
    _count: AbsensiCountAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamAbsen?: boolean
    statusKehadiran?: boolean
    lokasi?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswaId?: boolean
    pertemuanId?: boolean
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamAbsen?: boolean
    statusKehadiran?: boolean
    lokasi?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswaId?: boolean
    pertemuanId?: boolean
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jamAbsen?: boolean
    statusKehadiran?: boolean
    lokasi?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswaId?: boolean
    pertemuanId?: boolean
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectScalar = {
    id?: boolean
    jamAbsen?: boolean
    statusKehadiran?: boolean
    lokasi?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswaId?: boolean
    pertemuanId?: boolean
  }

  export type AbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jamAbsen" | "statusKehadiran" | "lokasi" | "keterangan" | "createdAt" | "updatedAt" | "mahasiswaId" | "pertemuanId", ExtArgs["result"]["absensi"]>
  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }
  export type AbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }
  export type AbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | UserDefaultArgs<ExtArgs>
    pertemuan?: boolean | PertemuanDefaultArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      mahasiswa: Prisma.$UserPayload<ExtArgs>
      pertemuan: Prisma.$PertemuanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jamAbsen: Date
      statusKehadiran: $Enums.StatusKehadiran
      lokasi: string | null
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
      mahasiswaId: string
      pertemuanId: string
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiFindUniqueArgs>(args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiFindFirstArgs>(args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiFindManyArgs>(args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
     */
    create<T extends AbsensiCreateArgs>(args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiCreateManyArgs>(args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absensis and returns the data saved in the database.
     * @param {AbsensiCreateManyAndReturnArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
     */
    delete<T extends AbsensiDeleteArgs>(args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiUpdateArgs>(args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiDeleteManyArgs>(args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiUpdateManyArgs>(args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis and returns the data updated in the database.
     * @param {AbsensiUpdateManyAndReturnArgs} args - Arguments to update many Absensis.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiUpsertArgs>(args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pertemuan<T extends PertemuanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PertemuanDefaultArgs<ExtArgs>>): Prisma__PertemuanClient<$Result.GetResult<Prisma.$PertemuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absensi model
   */
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'String'>
    readonly jamAbsen: FieldRef<"Absensi", 'DateTime'>
    readonly statusKehadiran: FieldRef<"Absensi", 'StatusKehadiran'>
    readonly lokasi: FieldRef<"Absensi", 'String'>
    readonly keterangan: FieldRef<"Absensi", 'String'>
    readonly createdAt: FieldRef<"Absensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Absensi", 'DateTime'>
    readonly mahasiswaId: FieldRef<"Absensi", 'String'>
    readonly pertemuanId: FieldRef<"Absensi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi createManyAndReturn
   */
  export type AbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
  }

  /**
   * Absensi updateManyAndReturn
   */
  export type AbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to delete.
     */
    limit?: number
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nama: 'nama',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nim: 'nim',
    nip: 'nip'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    kodeKelas: 'kodeKelas',
    namaKelas: 'namaKelas',
    pinKelas: 'pinKelas',
    hariPertemuan: 'hariPertemuan',
    jumlahPertemuan: 'jumlahPertemuan',
    statusAktif: 'statusAktif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dosenId: 'dosenId'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const PertemuanScalarFieldEnum: {
    id: 'id',
    nomorPertemuan: 'nomorPertemuan',
    tanggalPertemuan: 'tanggalPertemuan',
    topik: 'topik',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    kelasId: 'kelasId'
  };

  export type PertemuanScalarFieldEnum = (typeof PertemuanScalarFieldEnum)[keyof typeof PertemuanScalarFieldEnum]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    jamAbsen: 'jamAbsen',
    statusKehadiran: 'statusKehadiran',
    lokasi: 'lokasi',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mahasiswaId: 'mahasiswaId',
    pertemuanId: 'pertemuanId'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusKehadiran'
   */
  export type EnumStatusKehadiranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKehadiran'>
    


  /**
   * Reference to a field of type 'StatusKehadiran[]'
   */
  export type ListEnumStatusKehadiranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKehadiran[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    nim?: StringNullableFilter<"User"> | string | null
    nip?: StringNullableFilter<"User"> | string | null
    absensi?: AbsensiListRelationFilter
    kelasAjar?: KelasListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nim?: SortOrderInput | SortOrder
    nip?: SortOrderInput | SortOrder
    absensi?: AbsensiOrderByRelationAggregateInput
    kelasAjar?: KelasOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    nim?: string
    nip?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    absensi?: AbsensiListRelationFilter
    kelasAjar?: KelasListRelationFilter
  }, "id" | "email" | "nim" | "nip">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nim?: SortOrderInput | SortOrder
    nip?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    nim?: StringNullableWithAggregatesFilter<"User"> | string | null
    nip?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: StringFilter<"Kelas"> | string
    kodeKelas?: StringFilter<"Kelas"> | string
    namaKelas?: StringFilter<"Kelas"> | string
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenId?: StringFilter<"Kelas"> | string
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
    pertemuan?: PertemuanListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenId?: SortOrder
    dosen?: UserOrderByWithRelationInput
    pertemuan?: PertemuanOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeKelas?: string
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    namaKelas?: StringFilter<"Kelas"> | string
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenId?: StringFilter<"Kelas"> | string
    dosen?: XOR<UserScalarRelationFilter, UserWhereInput>
    pertemuan?: PertemuanListRelationFilter
  }, "id" | "kodeKelas">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenId?: SortOrder
    _count?: KelasCountOrderByAggregateInput
    _avg?: KelasAvgOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
    _sum?: KelasSumOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kelas"> | string
    kodeKelas?: StringWithAggregatesFilter<"Kelas"> | string
    namaKelas?: StringWithAggregatesFilter<"Kelas"> | string
    pinKelas?: StringWithAggregatesFilter<"Kelas"> | string
    hariPertemuan?: StringWithAggregatesFilter<"Kelas"> | string
    jumlahPertemuan?: IntWithAggregatesFilter<"Kelas"> | number
    statusAktif?: BoolWithAggregatesFilter<"Kelas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kelas"> | Date | string
    dosenId?: StringWithAggregatesFilter<"Kelas"> | string
  }

  export type PertemuanWhereInput = {
    AND?: PertemuanWhereInput | PertemuanWhereInput[]
    OR?: PertemuanWhereInput[]
    NOT?: PertemuanWhereInput | PertemuanWhereInput[]
    id?: StringFilter<"Pertemuan"> | string
    nomorPertemuan?: IntFilter<"Pertemuan"> | number
    tanggalPertemuan?: DateTimeFilter<"Pertemuan"> | Date | string
    topik?: StringNullableFilter<"Pertemuan"> | string | null
    catatan?: StringNullableFilter<"Pertemuan"> | string | null
    createdAt?: DateTimeFilter<"Pertemuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pertemuan"> | Date | string
    kelasId?: StringFilter<"Pertemuan"> | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    absensi?: AbsensiListRelationFilter
  }

  export type PertemuanOrderByWithRelationInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasId?: SortOrder
    kelas?: KelasOrderByWithRelationInput
    absensi?: AbsensiOrderByRelationAggregateInput
  }

  export type PertemuanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PertemuanWhereInput | PertemuanWhereInput[]
    OR?: PertemuanWhereInput[]
    NOT?: PertemuanWhereInput | PertemuanWhereInput[]
    nomorPertemuan?: IntFilter<"Pertemuan"> | number
    tanggalPertemuan?: DateTimeFilter<"Pertemuan"> | Date | string
    topik?: StringNullableFilter<"Pertemuan"> | string | null
    catatan?: StringNullableFilter<"Pertemuan"> | string | null
    createdAt?: DateTimeFilter<"Pertemuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pertemuan"> | Date | string
    kelasId?: StringFilter<"Pertemuan"> | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    absensi?: AbsensiListRelationFilter
  }, "id">

  export type PertemuanOrderByWithAggregationInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasId?: SortOrder
    _count?: PertemuanCountOrderByAggregateInput
    _avg?: PertemuanAvgOrderByAggregateInput
    _max?: PertemuanMaxOrderByAggregateInput
    _min?: PertemuanMinOrderByAggregateInput
    _sum?: PertemuanSumOrderByAggregateInput
  }

  export type PertemuanScalarWhereWithAggregatesInput = {
    AND?: PertemuanScalarWhereWithAggregatesInput | PertemuanScalarWhereWithAggregatesInput[]
    OR?: PertemuanScalarWhereWithAggregatesInput[]
    NOT?: PertemuanScalarWhereWithAggregatesInput | PertemuanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pertemuan"> | string
    nomorPertemuan?: IntWithAggregatesFilter<"Pertemuan"> | number
    tanggalPertemuan?: DateTimeWithAggregatesFilter<"Pertemuan"> | Date | string
    topik?: StringNullableWithAggregatesFilter<"Pertemuan"> | string | null
    catatan?: StringNullableWithAggregatesFilter<"Pertemuan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pertemuan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pertemuan"> | Date | string
    kelasId?: StringWithAggregatesFilter<"Pertemuan"> | string
  }

  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: StringFilter<"Absensi"> | string
    jamAbsen?: DateTimeFilter<"Absensi"> | Date | string
    statusKehadiran?: EnumStatusKehadiranFilter<"Absensi"> | $Enums.StatusKehadiran
    lokasi?: StringNullableFilter<"Absensi"> | string | null
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    mahasiswaId?: StringFilter<"Absensi"> | string
    pertemuanId?: StringFilter<"Absensi"> | string
    mahasiswa?: XOR<UserScalarRelationFilter, UserWhereInput>
    pertemuan?: XOR<PertemuanScalarRelationFilter, PertemuanWhereInput>
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    jamAbsen?: SortOrder
    statusKehadiran?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswaId?: SortOrder
    pertemuanId?: SortOrder
    mahasiswa?: UserOrderByWithRelationInput
    pertemuan?: PertemuanOrderByWithRelationInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    jamAbsen?: DateTimeFilter<"Absensi"> | Date | string
    statusKehadiran?: EnumStatusKehadiranFilter<"Absensi"> | $Enums.StatusKehadiran
    lokasi?: StringNullableFilter<"Absensi"> | string | null
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    mahasiswaId?: StringFilter<"Absensi"> | string
    pertemuanId?: StringFilter<"Absensi"> | string
    mahasiswa?: XOR<UserScalarRelationFilter, UserWhereInput>
    pertemuan?: XOR<PertemuanScalarRelationFilter, PertemuanWhereInput>
  }, "id">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    jamAbsen?: SortOrder
    statusKehadiran?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswaId?: SortOrder
    pertemuanId?: SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Absensi"> | string
    jamAbsen?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    statusKehadiran?: EnumStatusKehadiranWithAggregatesFilter<"Absensi"> | $Enums.StatusKehadiran
    lokasi?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    mahasiswaId?: StringWithAggregatesFilter<"Absensi"> | string
    pertemuanId?: StringWithAggregatesFilter<"Absensi"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    absensi?: AbsensiCreateNestedManyWithoutMahasiswaInput
    kelasAjar?: KelasCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMahasiswaInput
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    absensi?: AbsensiUpdateManyWithoutMahasiswaNestedInput
    kelasAjar?: KelasUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    absensi?: AbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput
    kelasAjar?: KelasUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KelasCreateInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: UserCreateNestedOneWithoutKelasAjarInput
    pertemuan?: PertemuanCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenId: string
    pertemuan?: PertemuanUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: UserUpdateOneRequiredWithoutKelasAjarNestedInput
    pertemuan?: PertemuanUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenId?: StringFieldUpdateOperationsInput | string
    pertemuan?: PertemuanUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenId: string
  }

  export type KelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenId?: StringFieldUpdateOperationsInput | string
  }

  export type PertemuanCreateInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutPertemuanInput
    absensi?: AbsensiCreateNestedManyWithoutPertemuanInput
  }

  export type PertemuanUncheckedCreateInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasId: string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutPertemuanInput
  }

  export type PertemuanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutPertemuanNestedInput
    absensi?: AbsensiUpdateManyWithoutPertemuanNestedInput
  }

  export type PertemuanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    absensi?: AbsensiUncheckedUpdateManyWithoutPertemuanNestedInput
  }

  export type PertemuanCreateManyInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasId: string
  }

  export type PertemuanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiCreateInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: UserCreateNestedOneWithoutAbsensiInput
    pertemuan: PertemuanCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaId: string
    pertemuanId: string
  }

  export type AbsensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: UserUpdateOneRequiredWithoutAbsensiNestedInput
    pertemuan?: PertemuanUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    pertemuanId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiCreateManyInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaId: string
    pertemuanId: string
  }

  export type AbsensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    pertemuanId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type KelasListRelationFilter = {
    every?: KelasWhereInput
    some?: KelasWhereInput
    none?: KelasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nim?: SortOrder
    nip?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PertemuanListRelationFilter = {
    every?: PertemuanWhereInput
    some?: PertemuanWhereInput
    none?: PertemuanWhereInput
  }

  export type PertemuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenId?: SortOrder
  }

  export type KelasAvgOrderByAggregateInput = {
    jumlahPertemuan?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenId?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenId?: SortOrder
  }

  export type KelasSumOrderByAggregateInput = {
    jumlahPertemuan?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type PertemuanCountOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasId?: SortOrder
  }

  export type PertemuanAvgOrderByAggregateInput = {
    nomorPertemuan?: SortOrder
  }

  export type PertemuanMaxOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasId?: SortOrder
  }

  export type PertemuanMinOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasId?: SortOrder
  }

  export type PertemuanSumOrderByAggregateInput = {
    nomorPertemuan?: SortOrder
  }

  export type EnumStatusKehadiranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKehadiran | EnumStatusKehadiranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKehadiranFilter<$PrismaModel> | $Enums.StatusKehadiran
  }

  export type PertemuanScalarRelationFilter = {
    is?: PertemuanWhereInput
    isNot?: PertemuanWhereInput
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    jamAbsen?: SortOrder
    statusKehadiran?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswaId?: SortOrder
    pertemuanId?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    jamAbsen?: SortOrder
    statusKehadiran?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswaId?: SortOrder
    pertemuanId?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    jamAbsen?: SortOrder
    statusKehadiran?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswaId?: SortOrder
    pertemuanId?: SortOrder
  }

  export type EnumStatusKehadiranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKehadiran | EnumStatusKehadiranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKehadiranWithAggregatesFilter<$PrismaModel> | $Enums.StatusKehadiran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKehadiranFilter<$PrismaModel>
    _max?: NestedEnumStatusKehadiranFilter<$PrismaModel>
  }

  export type AbsensiCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput> | AbsensiCreateWithoutMahasiswaInput[] | AbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMahasiswaInput | AbsensiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: AbsensiCreateManyMahasiswaInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type KelasCreateNestedManyWithoutDosenInput = {
    create?: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput> | KelasCreateWithoutDosenInput[] | KelasUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenInput | KelasCreateOrConnectWithoutDosenInput[]
    createMany?: KelasCreateManyDosenInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput> | AbsensiCreateWithoutMahasiswaInput[] | AbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMahasiswaInput | AbsensiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: AbsensiCreateManyMahasiswaInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type KelasUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput> | KelasCreateWithoutDosenInput[] | KelasUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenInput | KelasCreateOrConnectWithoutDosenInput[]
    createMany?: KelasCreateManyDosenInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AbsensiUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput> | AbsensiCreateWithoutMahasiswaInput[] | AbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMahasiswaInput | AbsensiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutMahasiswaInput | AbsensiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: AbsensiCreateManyMahasiswaInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutMahasiswaInput | AbsensiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutMahasiswaInput | AbsensiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type KelasUpdateManyWithoutDosenNestedInput = {
    create?: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput> | KelasCreateWithoutDosenInput[] | KelasUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenInput | KelasCreateOrConnectWithoutDosenInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenInput | KelasUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: KelasCreateManyDosenInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenInput | KelasUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenInput | KelasUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput> | AbsensiCreateWithoutMahasiswaInput[] | AbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutMahasiswaInput | AbsensiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutMahasiswaInput | AbsensiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: AbsensiCreateManyMahasiswaInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutMahasiswaInput | AbsensiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutMahasiswaInput | AbsensiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type KelasUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput> | KelasCreateWithoutDosenInput[] | KelasUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenInput | KelasCreateOrConnectWithoutDosenInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenInput | KelasUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: KelasCreateManyDosenInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenInput | KelasUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenInput | KelasUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKelasAjarInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput
    connect?: UserWhereUniqueInput
  }

  export type PertemuanCreateNestedManyWithoutKelasInput = {
    create?: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput> | PertemuanCreateWithoutKelasInput[] | PertemuanUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanCreateOrConnectWithoutKelasInput | PertemuanCreateOrConnectWithoutKelasInput[]
    createMany?: PertemuanCreateManyKelasInputEnvelope
    connect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
  }

  export type PertemuanUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput> | PertemuanCreateWithoutKelasInput[] | PertemuanUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanCreateOrConnectWithoutKelasInput | PertemuanCreateOrConnectWithoutKelasInput[]
    createMany?: PertemuanCreateManyKelasInputEnvelope
    connect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutKelasAjarNestedInput = {
    create?: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
    connectOrCreate?: UserCreateOrConnectWithoutKelasAjarInput
    upsert?: UserUpsertWithoutKelasAjarInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKelasAjarInput, UserUpdateWithoutKelasAjarInput>, UserUncheckedUpdateWithoutKelasAjarInput>
  }

  export type PertemuanUpdateManyWithoutKelasNestedInput = {
    create?: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput> | PertemuanCreateWithoutKelasInput[] | PertemuanUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanCreateOrConnectWithoutKelasInput | PertemuanCreateOrConnectWithoutKelasInput[]
    upsert?: PertemuanUpsertWithWhereUniqueWithoutKelasInput | PertemuanUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: PertemuanCreateManyKelasInputEnvelope
    set?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    disconnect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    delete?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    connect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    update?: PertemuanUpdateWithWhereUniqueWithoutKelasInput | PertemuanUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: PertemuanUpdateManyWithWhereWithoutKelasInput | PertemuanUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: PertemuanScalarWhereInput | PertemuanScalarWhereInput[]
  }

  export type PertemuanUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput> | PertemuanCreateWithoutKelasInput[] | PertemuanUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanCreateOrConnectWithoutKelasInput | PertemuanCreateOrConnectWithoutKelasInput[]
    upsert?: PertemuanUpsertWithWhereUniqueWithoutKelasInput | PertemuanUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: PertemuanCreateManyKelasInputEnvelope
    set?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    disconnect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    delete?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    connect?: PertemuanWhereUniqueInput | PertemuanWhereUniqueInput[]
    update?: PertemuanUpdateWithWhereUniqueWithoutKelasInput | PertemuanUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: PertemuanUpdateManyWithWhereWithoutKelasInput | PertemuanUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: PertemuanScalarWhereInput | PertemuanScalarWhereInput[]
  }

  export type KelasCreateNestedOneWithoutPertemuanInput = {
    create?: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: KelasCreateOrConnectWithoutPertemuanInput
    connect?: KelasWhereUniqueInput
  }

  export type AbsensiCreateNestedManyWithoutPertemuanInput = {
    create?: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput> | AbsensiCreateWithoutPertemuanInput[] | AbsensiUncheckedCreateWithoutPertemuanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutPertemuanInput | AbsensiCreateOrConnectWithoutPertemuanInput[]
    createMany?: AbsensiCreateManyPertemuanInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutPertemuanInput = {
    create?: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput> | AbsensiCreateWithoutPertemuanInput[] | AbsensiUncheckedCreateWithoutPertemuanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutPertemuanInput | AbsensiCreateOrConnectWithoutPertemuanInput[]
    createMany?: AbsensiCreateManyPertemuanInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type KelasUpdateOneRequiredWithoutPertemuanNestedInput = {
    create?: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: KelasCreateOrConnectWithoutPertemuanInput
    upsert?: KelasUpsertWithoutPertemuanInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutPertemuanInput, KelasUpdateWithoutPertemuanInput>, KelasUncheckedUpdateWithoutPertemuanInput>
  }

  export type AbsensiUpdateManyWithoutPertemuanNestedInput = {
    create?: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput> | AbsensiCreateWithoutPertemuanInput[] | AbsensiUncheckedCreateWithoutPertemuanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutPertemuanInput | AbsensiCreateOrConnectWithoutPertemuanInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutPertemuanInput | AbsensiUpsertWithWhereUniqueWithoutPertemuanInput[]
    createMany?: AbsensiCreateManyPertemuanInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutPertemuanInput | AbsensiUpdateWithWhereUniqueWithoutPertemuanInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutPertemuanInput | AbsensiUpdateManyWithWhereWithoutPertemuanInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutPertemuanNestedInput = {
    create?: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput> | AbsensiCreateWithoutPertemuanInput[] | AbsensiUncheckedCreateWithoutPertemuanInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutPertemuanInput | AbsensiCreateOrConnectWithoutPertemuanInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutPertemuanInput | AbsensiUpsertWithWhereUniqueWithoutPertemuanInput[]
    createMany?: AbsensiCreateManyPertemuanInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutPertemuanInput | AbsensiUpdateWithWhereUniqueWithoutPertemuanInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutPertemuanInput | AbsensiUpdateManyWithWhereWithoutPertemuanInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutAbsensiInput
    connect?: UserWhereUniqueInput
  }

  export type PertemuanCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<PertemuanCreateWithoutAbsensiInput, PertemuanUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: PertemuanCreateOrConnectWithoutAbsensiInput
    connect?: PertemuanWhereUniqueInput
  }

  export type EnumStatusKehadiranFieldUpdateOperationsInput = {
    set?: $Enums.StatusKehadiran
  }

  export type UserUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutAbsensiInput
    upsert?: UserUpsertWithoutAbsensiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAbsensiInput, UserUpdateWithoutAbsensiInput>, UserUncheckedUpdateWithoutAbsensiInput>
  }

  export type PertemuanUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<PertemuanCreateWithoutAbsensiInput, PertemuanUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: PertemuanCreateOrConnectWithoutAbsensiInput
    upsert?: PertemuanUpsertWithoutAbsensiInput
    connect?: PertemuanWhereUniqueInput
    update?: XOR<XOR<PertemuanUpdateToOneWithWhereWithoutAbsensiInput, PertemuanUpdateWithoutAbsensiInput>, PertemuanUncheckedUpdateWithoutAbsensiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusKehadiranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKehadiran | EnumStatusKehadiranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKehadiranFilter<$PrismaModel> | $Enums.StatusKehadiran
  }

  export type NestedEnumStatusKehadiranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKehadiran | EnumStatusKehadiranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKehadiranWithAggregatesFilter<$PrismaModel> | $Enums.StatusKehadiran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKehadiranFilter<$PrismaModel>
    _max?: NestedEnumStatusKehadiranFilter<$PrismaModel>
  }

  export type AbsensiCreateWithoutMahasiswaInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuan: PertemuanCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuanId: string
  }

  export type AbsensiCreateOrConnectWithoutMahasiswaInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput>
  }

  export type AbsensiCreateManyMahasiswaInputEnvelope = {
    data: AbsensiCreateManyMahasiswaInput | AbsensiCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type KelasCreateWithoutDosenInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuan?: PertemuanCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutDosenInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuan?: PertemuanUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutDosenInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput>
  }

  export type KelasCreateManyDosenInputEnvelope = {
    data: KelasCreateManyDosenInput | KelasCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type AbsensiUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutMahasiswaInput, AbsensiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<AbsensiCreateWithoutMahasiswaInput, AbsensiUncheckedCreateWithoutMahasiswaInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutMahasiswaInput, AbsensiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutMahasiswaInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: StringFilter<"Absensi"> | string
    jamAbsen?: DateTimeFilter<"Absensi"> | Date | string
    statusKehadiran?: EnumStatusKehadiranFilter<"Absensi"> | $Enums.StatusKehadiran
    lokasi?: StringNullableFilter<"Absensi"> | string | null
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    mahasiswaId?: StringFilter<"Absensi"> | string
    pertemuanId?: StringFilter<"Absensi"> | string
  }

  export type KelasUpsertWithWhereUniqueWithoutDosenInput = {
    where: KelasWhereUniqueInput
    update: XOR<KelasUpdateWithoutDosenInput, KelasUncheckedUpdateWithoutDosenInput>
    create: XOR<KelasCreateWithoutDosenInput, KelasUncheckedCreateWithoutDosenInput>
  }

  export type KelasUpdateWithWhereUniqueWithoutDosenInput = {
    where: KelasWhereUniqueInput
    data: XOR<KelasUpdateWithoutDosenInput, KelasUncheckedUpdateWithoutDosenInput>
  }

  export type KelasUpdateManyWithWhereWithoutDosenInput = {
    where: KelasScalarWhereInput
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyWithoutDosenInput>
  }

  export type KelasScalarWhereInput = {
    AND?: KelasScalarWhereInput | KelasScalarWhereInput[]
    OR?: KelasScalarWhereInput[]
    NOT?: KelasScalarWhereInput | KelasScalarWhereInput[]
    id?: StringFilter<"Kelas"> | string
    kodeKelas?: StringFilter<"Kelas"> | string
    namaKelas?: StringFilter<"Kelas"> | string
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenId?: StringFilter<"Kelas"> | string
  }

  export type UserCreateWithoutKelasAjarInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    absensi?: AbsensiCreateNestedManyWithoutMahasiswaInput
  }

  export type UserUncheckedCreateWithoutKelasAjarInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    absensi?: AbsensiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type UserCreateOrConnectWithoutKelasAjarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
  }

  export type PertemuanCreateWithoutKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    absensi?: AbsensiCreateNestedManyWithoutPertemuanInput
  }

  export type PertemuanUncheckedCreateWithoutKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutPertemuanInput
  }

  export type PertemuanCreateOrConnectWithoutKelasInput = {
    where: PertemuanWhereUniqueInput
    create: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput>
  }

  export type PertemuanCreateManyKelasInputEnvelope = {
    data: PertemuanCreateManyKelasInput | PertemuanCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutKelasAjarInput = {
    update: XOR<UserUpdateWithoutKelasAjarInput, UserUncheckedUpdateWithoutKelasAjarInput>
    create: XOR<UserCreateWithoutKelasAjarInput, UserUncheckedCreateWithoutKelasAjarInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKelasAjarInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKelasAjarInput, UserUncheckedUpdateWithoutKelasAjarInput>
  }

  export type UserUpdateWithoutKelasAjarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    absensi?: AbsensiUpdateManyWithoutMahasiswaNestedInput
  }

  export type UserUncheckedUpdateWithoutKelasAjarInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    absensi?: AbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type PertemuanUpsertWithWhereUniqueWithoutKelasInput = {
    where: PertemuanWhereUniqueInput
    update: XOR<PertemuanUpdateWithoutKelasInput, PertemuanUncheckedUpdateWithoutKelasInput>
    create: XOR<PertemuanCreateWithoutKelasInput, PertemuanUncheckedCreateWithoutKelasInput>
  }

  export type PertemuanUpdateWithWhereUniqueWithoutKelasInput = {
    where: PertemuanWhereUniqueInput
    data: XOR<PertemuanUpdateWithoutKelasInput, PertemuanUncheckedUpdateWithoutKelasInput>
  }

  export type PertemuanUpdateManyWithWhereWithoutKelasInput = {
    where: PertemuanScalarWhereInput
    data: XOR<PertemuanUpdateManyMutationInput, PertemuanUncheckedUpdateManyWithoutKelasInput>
  }

  export type PertemuanScalarWhereInput = {
    AND?: PertemuanScalarWhereInput | PertemuanScalarWhereInput[]
    OR?: PertemuanScalarWhereInput[]
    NOT?: PertemuanScalarWhereInput | PertemuanScalarWhereInput[]
    id?: StringFilter<"Pertemuan"> | string
    nomorPertemuan?: IntFilter<"Pertemuan"> | number
    tanggalPertemuan?: DateTimeFilter<"Pertemuan"> | Date | string
    topik?: StringNullableFilter<"Pertemuan"> | string | null
    catatan?: StringNullableFilter<"Pertemuan"> | string | null
    createdAt?: DateTimeFilter<"Pertemuan"> | Date | string
    updatedAt?: DateTimeFilter<"Pertemuan"> | Date | string
    kelasId?: StringFilter<"Pertemuan"> | string
  }

  export type KelasCreateWithoutPertemuanInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosen: UserCreateNestedOneWithoutKelasAjarInput
  }

  export type KelasUncheckedCreateWithoutPertemuanInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenId: string
  }

  export type KelasCreateOrConnectWithoutPertemuanInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
  }

  export type AbsensiCreateWithoutPertemuanInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: UserCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateWithoutPertemuanInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaId: string
  }

  export type AbsensiCreateOrConnectWithoutPertemuanInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput>
  }

  export type AbsensiCreateManyPertemuanInputEnvelope = {
    data: AbsensiCreateManyPertemuanInput | AbsensiCreateManyPertemuanInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithoutPertemuanInput = {
    update: XOR<KelasUpdateWithoutPertemuanInput, KelasUncheckedUpdateWithoutPertemuanInput>
    create: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutPertemuanInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutPertemuanInput, KelasUncheckedUpdateWithoutPertemuanInput>
  }

  export type KelasUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosen?: UserUpdateOneRequiredWithoutKelasAjarNestedInput
  }

  export type KelasUncheckedUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiUpsertWithWhereUniqueWithoutPertemuanInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutPertemuanInput, AbsensiUncheckedUpdateWithoutPertemuanInput>
    create: XOR<AbsensiCreateWithoutPertemuanInput, AbsensiUncheckedCreateWithoutPertemuanInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutPertemuanInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutPertemuanInput, AbsensiUncheckedUpdateWithoutPertemuanInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutPertemuanInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutPertemuanInput>
  }

  export type UserCreateWithoutAbsensiInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    kelasAjar?: KelasCreateNestedManyWithoutDosenInput
  }

  export type UserUncheckedCreateWithoutAbsensiInput = {
    id?: string
    email: string
    password: string
    nama: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    nim?: string | null
    nip?: string | null
    kelasAjar?: KelasUncheckedCreateNestedManyWithoutDosenInput
  }

  export type UserCreateOrConnectWithoutAbsensiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
  }

  export type PertemuanCreateWithoutAbsensiInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutPertemuanInput
  }

  export type PertemuanUncheckedCreateWithoutAbsensiInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasId: string
  }

  export type PertemuanCreateOrConnectWithoutAbsensiInput = {
    where: PertemuanWhereUniqueInput
    create: XOR<PertemuanCreateWithoutAbsensiInput, PertemuanUncheckedCreateWithoutAbsensiInput>
  }

  export type UserUpsertWithoutAbsensiInput = {
    update: XOR<UserUpdateWithoutAbsensiInput, UserUncheckedUpdateWithoutAbsensiInput>
    create: XOR<UserCreateWithoutAbsensiInput, UserUncheckedCreateWithoutAbsensiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAbsensiInput, UserUncheckedUpdateWithoutAbsensiInput>
  }

  export type UserUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kelasAjar?: KelasUpdateManyWithoutDosenNestedInput
  }

  export type UserUncheckedUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    kelasAjar?: KelasUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type PertemuanUpsertWithoutAbsensiInput = {
    update: XOR<PertemuanUpdateWithoutAbsensiInput, PertemuanUncheckedUpdateWithoutAbsensiInput>
    create: XOR<PertemuanCreateWithoutAbsensiInput, PertemuanUncheckedCreateWithoutAbsensiInput>
    where?: PertemuanWhereInput
  }

  export type PertemuanUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: PertemuanWhereInput
    data: XOR<PertemuanUpdateWithoutAbsensiInput, PertemuanUncheckedUpdateWithoutAbsensiInput>
  }

  export type PertemuanUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutPertemuanNestedInput
  }

  export type PertemuanUncheckedUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiCreateManyMahasiswaInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuanId: string
  }

  export type KelasCreateManyDosenInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuan?: PertemuanUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuanId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuanId?: StringFieldUpdateOperationsInput | string
  }

  export type KelasUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuan?: PertemuanUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuan?: PertemuanUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateManyWithoutDosenInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanCreateManyKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUpdateManyWithoutPertemuanNestedInput
  }

  export type PertemuanUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUncheckedUpdateManyWithoutPertemuanNestedInput
  }

  export type PertemuanUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyPertemuanInput = {
    id?: string
    jamAbsen: Date | string
    statusKehadiran?: $Enums.StatusKehadiran
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswaId: string
  }

  export type AbsensiUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: UserUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsensiUncheckedUpdateManyWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    jamAbsen?: DateTimeFieldUpdateOperationsInput | Date | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}