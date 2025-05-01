
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Dosen
 * 
 */
export type Dosen = $Result.DefaultSelection<Prisma.$DosenPayload>
/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = $Result.DefaultSelection<Prisma.$MahasiswaPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model MahasiswaKelas
 * 
 */
export type MahasiswaKelas = $Result.DefaultSelection<Prisma.$MahasiswaKelasPayload>
/**
 * Model PertemuanAbsensi
 * 
 */
export type PertemuanAbsensi = $Result.DefaultSelection<Prisma.$PertemuanAbsensiPayload>

/**
 * Enums
 */
export namespace $Enums {
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

export type StatusKehadiran = $Enums.StatusKehadiran

export const StatusKehadiran: typeof $Enums.StatusKehadiran

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.mahasiswaKelas`: Exposes CRUD operations for the **MahasiswaKelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MahasiswaKelas
    * const mahasiswaKelas = await prisma.mahasiswaKelas.findMany()
    * ```
    */
  get mahasiswaKelas(): Prisma.MahasiswaKelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pertemuanAbsensi`: Exposes CRUD operations for the **PertemuanAbsensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PertemuanAbsensis
    * const pertemuanAbsensis = await prisma.pertemuanAbsensi.findMany()
    * ```
    */
  get pertemuanAbsensi(): Prisma.PertemuanAbsensiDelegate<ExtArgs, ClientOptions>;
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
    Admin: 'Admin',
    Dosen: 'Dosen',
    Mahasiswa: 'Mahasiswa',
    Kelas: 'Kelas',
    MahasiswaKelas: 'MahasiswaKelas',
    PertemuanAbsensi: 'PertemuanAbsensi'
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
      modelProps: "admin" | "dosen" | "mahasiswa" | "kelas" | "mahasiswaKelas" | "pertemuanAbsensi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Dosen: {
        payload: Prisma.$DosenPayload<ExtArgs>
        fields: Prisma.DosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findFirst: {
            args: Prisma.DosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          findMany: {
            args: Prisma.DosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          create: {
            args: Prisma.DosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          createMany: {
            args: Prisma.DosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DosenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          delete: {
            args: Prisma.DosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          update: {
            args: Prisma.DosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          deleteMany: {
            args: Prisma.DosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DosenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>[]
          }
          upsert: {
            args: Prisma.DosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.DosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      Mahasiswa: {
        payload: Prisma.$MahasiswaPayload<ExtArgs>
        fields: Prisma.MahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          findMany: {
            args: Prisma.MahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          create: {
            args: Prisma.MahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          createMany: {
            args: Prisma.MahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MahasiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          delete: {
            args: Prisma.MahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          update: {
            args: Prisma.MahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MahasiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>[]
          }
          upsert: {
            args: Prisma.MahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.MahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
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
      MahasiswaKelas: {
        payload: Prisma.$MahasiswaKelasPayload<ExtArgs>
        fields: Prisma.MahasiswaKelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MahasiswaKelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MahasiswaKelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          findFirst: {
            args: Prisma.MahasiswaKelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MahasiswaKelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          findMany: {
            args: Prisma.MahasiswaKelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>[]
          }
          create: {
            args: Prisma.MahasiswaKelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          createMany: {
            args: Prisma.MahasiswaKelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MahasiswaKelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>[]
          }
          delete: {
            args: Prisma.MahasiswaKelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          update: {
            args: Prisma.MahasiswaKelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          deleteMany: {
            args: Prisma.MahasiswaKelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MahasiswaKelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MahasiswaKelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>[]
          }
          upsert: {
            args: Prisma.MahasiswaKelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MahasiswaKelasPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaKelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswaKelas>
          }
          groupBy: {
            args: Prisma.MahasiswaKelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaKelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MahasiswaKelasCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaKelasCountAggregateOutputType> | number
          }
        }
      }
      PertemuanAbsensi: {
        payload: Prisma.$PertemuanAbsensiPayload<ExtArgs>
        fields: Prisma.PertemuanAbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PertemuanAbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PertemuanAbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          findFirst: {
            args: Prisma.PertemuanAbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PertemuanAbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          findMany: {
            args: Prisma.PertemuanAbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>[]
          }
          create: {
            args: Prisma.PertemuanAbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          createMany: {
            args: Prisma.PertemuanAbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PertemuanAbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>[]
          }
          delete: {
            args: Prisma.PertemuanAbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          update: {
            args: Prisma.PertemuanAbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          deleteMany: {
            args: Prisma.PertemuanAbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PertemuanAbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PertemuanAbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>[]
          }
          upsert: {
            args: Prisma.PertemuanAbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PertemuanAbsensiPayload>
          }
          aggregate: {
            args: Prisma.PertemuanAbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePertemuanAbsensi>
          }
          groupBy: {
            args: Prisma.PertemuanAbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PertemuanAbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PertemuanAbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<PertemuanAbsensiCountAggregateOutputType> | number
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
    admin?: AdminOmit
    dosen?: DosenOmit
    mahasiswa?: MahasiswaOmit
    kelas?: KelasOmit
    mahasiswaKelas?: MahasiswaKelasOmit
    pertemuanAbsensi?: PertemuanAbsensiOmit
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
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    kelasUtama: number
    kelasPendamping: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelasUtama?: boolean | DosenCountOutputTypeCountKelasUtamaArgs
    kelasPendamping?: boolean | DosenCountOutputTypeCountKelasPendampingArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountKelasUtamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountKelasPendampingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    kelas: number
    pertemuan: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | MahasiswaCountOutputTypeCountKelasArgs
    pertemuan?: boolean | MahasiswaCountOutputTypeCountPertemuanArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaKelasWhereInput
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertemuanAbsensiWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    mahasiswa: number
    pertemuan: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | KelasCountOutputTypeCountMahasiswaArgs
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
  export type KelasCountOutputTypeCountMahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaKelasWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountPertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertemuanAbsensiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    nama: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nama: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly nama: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    id: string | null
    nip: string | null
    nama: string | null
    email: string | null
    password: string | null
    noHP: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenMaxAggregateOutputType = {
    id: string | null
    nip: string | null
    nama: string | null
    email: string | null
    password: string | null
    noHP: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DosenCountAggregateOutputType = {
    id: number
    nip: number
    nama: number
    email: number
    password: number
    noHP: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenMaxAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DosenCountAggregateInputType = {
    id?: true
    nip?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosen to aggregate.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DosenWhereInput
    orderBy?: DosenOrderByWithAggregationInput | DosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    id: string
    nip: string
    nama: string
    email: string
    password: string
    noHP: string | null
    alamat: string | null
    createdAt: Date
    updatedAt: Date
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelasUtama?: boolean | Dosen$kelasUtamaArgs<ExtArgs>
    kelasPendamping?: boolean | Dosen$kelasPendampingArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dosen"]>

  export type DosenSelectScalar = {
    id?: boolean
    nip?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nip" | "nama" | "email" | "password" | "noHP" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["dosen"]>
  export type DosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelasUtama?: boolean | Dosen$kelasUtamaArgs<ExtArgs>
    kelasPendamping?: boolean | Dosen$kelasPendampingArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DosenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DosenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dosen"
    objects: {
      kelasUtama: Prisma.$KelasPayload<ExtArgs>[]
      kelasPendamping: Prisma.$KelasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nip: string
      nama: string
      email: string
      password: string
      noHP: string | null
      alamat: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type DosenGetPayload<S extends boolean | null | undefined | DosenDefaultArgs> = $Result.GetResult<Prisma.$DosenPayload, S>

  type DosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface DosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dosen'], meta: { name: 'Dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DosenFindUniqueArgs>(args: SelectSubset<T, DosenFindUniqueArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(args: SelectSubset<T, DosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DosenFindFirstArgs>(args?: SelectSubset<T, DosenFindFirstArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(args?: SelectSubset<T, DosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dosenWithIdOnly = await prisma.dosen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DosenFindManyArgs>(args?: SelectSubset<T, DosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends DosenCreateArgs>(args: SelectSubset<T, DosenCreateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DosenCreateManyArgs>(args?: SelectSubset<T, DosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dosens and returns the data saved in the database.
     * @param {DosenCreateManyAndReturnArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dosens and only return the `id`
     * const dosenWithIdOnly = await prisma.dosen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DosenCreateManyAndReturnArgs>(args?: SelectSubset<T, DosenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends DosenDeleteArgs>(args: SelectSubset<T, DosenDeleteArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DosenUpdateArgs>(args: SelectSubset<T, DosenUpdateArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DosenDeleteManyArgs>(args?: SelectSubset<T, DosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DosenUpdateManyArgs>(args: SelectSubset<T, DosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens and returns the data updated in the database.
     * @param {DosenUpdateManyAndReturnArgs} args - Arguments to update many Dosens.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dosens and only return the `id`
     * const dosenWithIdOnly = await prisma.dosen.updateManyAndReturn({
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
    updateManyAndReturn<T extends DosenUpdateManyAndReturnArgs>(args: SelectSubset<T, DosenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends DosenUpsertArgs>(args: SelectSubset<T, DosenUpsertArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
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
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dosen model
   */
  readonly fields: DosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelasUtama<T extends Dosen$kelasUtamaArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$kelasUtamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kelasPendamping<T extends Dosen$kelasPendampingArgs<ExtArgs> = {}>(args?: Subset<T, Dosen$kelasPendampingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dosen model
   */
  interface DosenFieldRefs {
    readonly id: FieldRef<"Dosen", 'String'>
    readonly nip: FieldRef<"Dosen", 'String'>
    readonly nama: FieldRef<"Dosen", 'String'>
    readonly email: FieldRef<"Dosen", 'String'>
    readonly password: FieldRef<"Dosen", 'String'>
    readonly noHP: FieldRef<"Dosen", 'String'>
    readonly alamat: FieldRef<"Dosen", 'String'>
    readonly createdAt: FieldRef<"Dosen", 'DateTime'>
    readonly updatedAt: FieldRef<"Dosen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dosen findUnique
   */
  export type DosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen findFirst
   */
  export type DosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosen to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter, which Dosens to fetch.
     */
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     */
    orderBy?: DosenOrderByWithRelationInput | DosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     */
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * Dosen create
   */
  export type DosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to create a Dosen.
     */
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }

  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen createManyAndReturn
   */
  export type DosenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * The data used to create many Dosens.
     */
    data: DosenCreateManyInput | DosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dosen update
   */
  export type DosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The data needed to update a Dosen.
     */
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen updateManyAndReturn
   */
  export type DosenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * The data used to update Dosens.
     */
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to update.
     */
    limit?: number
  }

  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     */
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     */
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }

  /**
   * Dosen delete
   */
  export type DosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    /**
     * Filter which Dosen to delete.
     */
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dosens to delete
     */
    where?: DosenWhereInput
    /**
     * Limit how many Dosens to delete.
     */
    limit?: number
  }

  /**
   * Dosen.kelasUtama
   */
  export type Dosen$kelasUtamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Dosen.kelasPendamping
   */
  export type Dosen$kelasPendampingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Dosen without action
   */
  export type DosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
  }


  /**
   * Model Mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id: string | null
    nim: string | null
    nama: string | null
    email: string | null
    password: string | null
    noHP: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    nama: string | null
    email: string | null
    password: string | null
    noHP: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id: number
    nim: number
    nama: number
    email: number
    password: number
    noHP: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id?: true
    nim?: true
    nama?: true
    email?: true
    password?: true
    noHP?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswa to aggregate.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaWhereInput
    orderBy?: MahasiswaOrderByWithAggregationInput | MahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    id: string
    nim: string
    nama: string
    email: string
    password: string
    noHP: string | null
    alamat: string | null
    createdAt: Date
    updatedAt: Date
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | Mahasiswa$kelasArgs<ExtArgs>
    pertemuan?: boolean | Mahasiswa$pertemuanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mahasiswa"]>

  export type MahasiswaSelectScalar = {
    id?: boolean
    nim?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    noHP?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "nama" | "email" | "password" | "noHP" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["mahasiswa"]>
  export type MahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | Mahasiswa$kelasArgs<ExtArgs>
    pertemuan?: boolean | Mahasiswa$pertemuanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MahasiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MahasiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mahasiswa"
    objects: {
      kelas: Prisma.$MahasiswaKelasPayload<ExtArgs>[]
      pertemuan: Prisma.$PertemuanAbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      nama: string
      email: string
      password: string
      noHP: string | null
      alamat: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type MahasiswaGetPayload<S extends boolean | null | undefined | MahasiswaDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaPayload, S>

  type MahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface MahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mahasiswa'], meta: { name: 'Mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaFindUniqueArgs>(args: SelectSubset<T, MahasiswaFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaFindFirstArgs>(args?: SelectSubset<T, MahasiswaFindFirstArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaFindManyArgs>(args?: SelectSubset<T, MahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends MahasiswaCreateArgs>(args: SelectSubset<T, MahasiswaCreateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaCreateManyArgs>(args?: SelectSubset<T, MahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mahasiswas and returns the data saved in the database.
     * @param {MahasiswaCreateManyAndReturnArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mahasiswas and only return the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MahasiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, MahasiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaDeleteArgs>(args: SelectSubset<T, MahasiswaDeleteArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaUpdateArgs>(args: SelectSubset<T, MahasiswaUpdateArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaDeleteManyArgs>(args?: SelectSubset<T, MahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaUpdateManyArgs>(args: SelectSubset<T, MahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas and returns the data updated in the database.
     * @param {MahasiswaUpdateManyAndReturnArgs} args - Arguments to update many Mahasiswas.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mahasiswas and only return the `id`
     * const mahasiswaWithIdOnly = await prisma.mahasiswa.updateManyAndReturn({
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
    updateManyAndReturn<T extends MahasiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, MahasiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaUpsertArgs>(args: SelectSubset<T, MahasiswaUpsertArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mahasiswa model
   */
  readonly fields: MahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends Mahasiswa$kelasArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$kelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pertemuan<T extends Mahasiswa$pertemuanArgs<ExtArgs> = {}>(args?: Subset<T, Mahasiswa$pertemuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mahasiswa model
   */
  interface MahasiswaFieldRefs {
    readonly id: FieldRef<"Mahasiswa", 'String'>
    readonly nim: FieldRef<"Mahasiswa", 'String'>
    readonly nama: FieldRef<"Mahasiswa", 'String'>
    readonly email: FieldRef<"Mahasiswa", 'String'>
    readonly password: FieldRef<"Mahasiswa", 'String'>
    readonly noHP: FieldRef<"Mahasiswa", 'String'>
    readonly alamat: FieldRef<"Mahasiswa", 'String'>
    readonly createdAt: FieldRef<"Mahasiswa", 'DateTime'>
    readonly updatedAt: FieldRef<"Mahasiswa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mahasiswa findUnique
   */
  export type MahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa findFirst
   */
  export type MahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswa to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which Mahasiswas to fetch.
     */
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     */
    orderBy?: MahasiswaOrderByWithRelationInput | MahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     */
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Mahasiswa.
     */
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }

  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa createManyAndReturn
   */
  export type MahasiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to create many Mahasiswas.
     */
    data: MahasiswaCreateManyInput | MahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Mahasiswa.
     */
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa updateManyAndReturn
   */
  export type MahasiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * The data used to update Mahasiswas.
     */
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to update.
     */
    limit?: number
  }

  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     */
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     */
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }

  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
    /**
     * Filter which Mahasiswa to delete.
     */
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mahasiswas to delete
     */
    where?: MahasiswaWhereInput
    /**
     * Limit how many Mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * Mahasiswa.kelas
   */
  export type Mahasiswa$kelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    where?: MahasiswaKelasWhereInput
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    cursor?: MahasiswaKelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaKelasScalarFieldEnum | MahasiswaKelasScalarFieldEnum[]
  }

  /**
   * Mahasiswa.pertemuan
   */
  export type Mahasiswa$pertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    where?: PertemuanAbsensiWhereInput
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    cursor?: PertemuanAbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PertemuanAbsensiScalarFieldEnum | PertemuanAbsensiScalarFieldEnum[]
  }

  /**
   * Mahasiswa without action
   */
  export type MahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     */
    select?: MahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mahasiswa
     */
    omit?: MahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaInclude<ExtArgs> | null
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
    deskripsi: string | null
    pinKelas: string | null
    hariPertemuan: string | null
    jumlahPertemuan: number | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dosenUtamaId: string | null
    dosenPendampingId: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id: string | null
    kodeKelas: string | null
    namaKelas: string | null
    deskripsi: string | null
    pinKelas: string | null
    hariPertemuan: string | null
    jumlahPertemuan: number | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    dosenUtamaId: string | null
    dosenPendampingId: string | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    kodeKelas: number
    namaKelas: number
    deskripsi: number
    pinKelas: number
    hariPertemuan: number
    jumlahPertemuan: number
    statusAktif: number
    createdAt: number
    updatedAt: number
    dosenUtamaId: number
    dosenPendampingId: number
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
    deskripsi?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenUtamaId?: true
    dosenPendampingId?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    kodeKelas?: true
    namaKelas?: true
    deskripsi?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenUtamaId?: true
    dosenPendampingId?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    kodeKelas?: true
    namaKelas?: true
    deskripsi?: true
    pinKelas?: true
    hariPertemuan?: true
    jumlahPertemuan?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    dosenUtamaId?: true
    dosenPendampingId?: true
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
    deskripsi: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif: boolean
    createdAt: Date
    updatedAt: Date
    dosenUtamaId: string
    dosenPendampingId: string | null
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
    deskripsi?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenUtamaId?: boolean
    dosenPendampingId?: boolean
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
    mahasiswa?: boolean | Kelas$mahasiswaArgs<ExtArgs>
    pertemuan?: boolean | Kelas$pertemuanArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenUtamaId?: boolean
    dosenPendampingId?: boolean
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenUtamaId?: boolean
    dosenPendampingId?: boolean
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    kodeKelas?: boolean
    namaKelas?: boolean
    deskripsi?: boolean
    pinKelas?: boolean
    hariPertemuan?: boolean
    jumlahPertemuan?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dosenUtamaId?: boolean
    dosenPendampingId?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeKelas" | "namaKelas" | "deskripsi" | "pinKelas" | "hariPertemuan" | "jumlahPertemuan" | "statusAktif" | "createdAt" | "updatedAt" | "dosenUtamaId" | "dosenPendampingId", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
    mahasiswa?: boolean | Kelas$mahasiswaArgs<ExtArgs>
    pertemuan?: boolean | Kelas$pertemuanArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
  }
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dosenUtama?: boolean | DosenDefaultArgs<ExtArgs>
    dosenPendamping?: boolean | Kelas$dosenPendampingArgs<ExtArgs>
  }

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      dosenUtama: Prisma.$DosenPayload<ExtArgs>
      dosenPendamping: Prisma.$DosenPayload<ExtArgs> | null
      mahasiswa: Prisma.$MahasiswaKelasPayload<ExtArgs>[]
      pertemuan: Prisma.$PertemuanAbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeKelas: string
      namaKelas: string
      deskripsi: string | null
      pinKelas: string
      hariPertemuan: string
      jumlahPertemuan: number
      statusAktif: boolean
      createdAt: Date
      updatedAt: Date
      dosenUtamaId: string
      dosenPendampingId: string | null
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
    dosenUtama<T extends DosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DosenDefaultArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosenPendamping<T extends Kelas$dosenPendampingArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$dosenPendampingArgs<ExtArgs>>): Prisma__DosenClient<$Result.GetResult<Prisma.$DosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends Kelas$mahasiswaArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$mahasiswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pertemuan<T extends Kelas$pertemuanArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$pertemuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly deskripsi: FieldRef<"Kelas", 'String'>
    readonly pinKelas: FieldRef<"Kelas", 'String'>
    readonly hariPertemuan: FieldRef<"Kelas", 'String'>
    readonly jumlahPertemuan: FieldRef<"Kelas", 'Int'>
    readonly statusAktif: FieldRef<"Kelas", 'Boolean'>
    readonly createdAt: FieldRef<"Kelas", 'DateTime'>
    readonly updatedAt: FieldRef<"Kelas", 'DateTime'>
    readonly dosenUtamaId: FieldRef<"Kelas", 'String'>
    readonly dosenPendampingId: FieldRef<"Kelas", 'String'>
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
   * Kelas.dosenPendamping
   */
  export type Kelas$dosenPendampingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dosen
     */
    select?: DosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dosen
     */
    omit?: DosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DosenInclude<ExtArgs> | null
    where?: DosenWhereInput
  }

  /**
   * Kelas.mahasiswa
   */
  export type Kelas$mahasiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    where?: MahasiswaKelasWhereInput
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    cursor?: MahasiswaKelasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MahasiswaKelasScalarFieldEnum | MahasiswaKelasScalarFieldEnum[]
  }

  /**
   * Kelas.pertemuan
   */
  export type Kelas$pertemuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    where?: PertemuanAbsensiWhereInput
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    cursor?: PertemuanAbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PertemuanAbsensiScalarFieldEnum | PertemuanAbsensiScalarFieldEnum[]
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
   * Model MahasiswaKelas
   */

  export type AggregateMahasiswaKelas = {
    _count: MahasiswaKelasCountAggregateOutputType | null
    _min: MahasiswaKelasMinAggregateOutputType | null
    _max: MahasiswaKelasMaxAggregateOutputType | null
  }

  export type MahasiswaKelasMinAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    kelasId: string | null
    tanggalGabung: Date | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaKelasMaxAggregateOutputType = {
    id: string | null
    mahasiswaId: string | null
    kelasId: string | null
    tanggalGabung: Date | null
    statusAktif: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MahasiswaKelasCountAggregateOutputType = {
    id: number
    mahasiswaId: number
    kelasId: number
    tanggalGabung: number
    statusAktif: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MahasiswaKelasMinAggregateInputType = {
    id?: true
    mahasiswaId?: true
    kelasId?: true
    tanggalGabung?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaKelasMaxAggregateInputType = {
    id?: true
    mahasiswaId?: true
    kelasId?: true
    tanggalGabung?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MahasiswaKelasCountAggregateInputType = {
    id?: true
    mahasiswaId?: true
    kelasId?: true
    tanggalGabung?: true
    statusAktif?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MahasiswaKelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MahasiswaKelas to aggregate.
     */
    where?: MahasiswaKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MahasiswaKelas to fetch.
     */
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MahasiswaKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MahasiswaKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MahasiswaKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MahasiswaKelas
    **/
    _count?: true | MahasiswaKelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaKelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaKelasMaxAggregateInputType
  }

  export type GetMahasiswaKelasAggregateType<T extends MahasiswaKelasAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswaKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswaKelas[P]>
      : GetScalarType<T[P], AggregateMahasiswaKelas[P]>
  }




  export type MahasiswaKelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MahasiswaKelasWhereInput
    orderBy?: MahasiswaKelasOrderByWithAggregationInput | MahasiswaKelasOrderByWithAggregationInput[]
    by: MahasiswaKelasScalarFieldEnum[] | MahasiswaKelasScalarFieldEnum
    having?: MahasiswaKelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaKelasCountAggregateInputType | true
    _min?: MahasiswaKelasMinAggregateInputType
    _max?: MahasiswaKelasMaxAggregateInputType
  }

  export type MahasiswaKelasGroupByOutputType = {
    id: string
    mahasiswaId: string
    kelasId: string
    tanggalGabung: Date
    statusAktif: boolean
    createdAt: Date
    updatedAt: Date
    _count: MahasiswaKelasCountAggregateOutputType | null
    _min: MahasiswaKelasMinAggregateOutputType | null
    _max: MahasiswaKelasMaxAggregateOutputType | null
  }

  type GetMahasiswaKelasGroupByPayload<T extends MahasiswaKelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaKelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaKelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaKelasGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaKelasGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaKelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    kelasId?: boolean
    tanggalGabung?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswaKelas"]>

  export type MahasiswaKelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    kelasId?: boolean
    tanggalGabung?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswaKelas"]>

  export type MahasiswaKelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mahasiswaId?: boolean
    kelasId?: boolean
    tanggalGabung?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswaKelas"]>

  export type MahasiswaKelasSelectScalar = {
    id?: boolean
    mahasiswaId?: boolean
    kelasId?: boolean
    tanggalGabung?: boolean
    statusAktif?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MahasiswaKelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mahasiswaId" | "kelasId" | "tanggalGabung" | "statusAktif" | "createdAt" | "updatedAt", ExtArgs["result"]["mahasiswaKelas"]>
  export type MahasiswaKelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type MahasiswaKelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type MahasiswaKelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $MahasiswaKelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MahasiswaKelas"
    objects: {
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mahasiswaId: string
      kelasId: string
      tanggalGabung: Date
      statusAktif: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mahasiswaKelas"]>
    composites: {}
  }

  type MahasiswaKelasGetPayload<S extends boolean | null | undefined | MahasiswaKelasDefaultArgs> = $Result.GetResult<Prisma.$MahasiswaKelasPayload, S>

  type MahasiswaKelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MahasiswaKelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaKelasCountAggregateInputType | true
    }

  export interface MahasiswaKelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MahasiswaKelas'], meta: { name: 'MahasiswaKelas' } }
    /**
     * Find zero or one MahasiswaKelas that matches the filter.
     * @param {MahasiswaKelasFindUniqueArgs} args - Arguments to find a MahasiswaKelas
     * @example
     * // Get one MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MahasiswaKelasFindUniqueArgs>(args: SelectSubset<T, MahasiswaKelasFindUniqueArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MahasiswaKelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MahasiswaKelasFindUniqueOrThrowArgs} args - Arguments to find a MahasiswaKelas
     * @example
     * // Get one MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MahasiswaKelasFindUniqueOrThrowArgs>(args: SelectSubset<T, MahasiswaKelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MahasiswaKelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasFindFirstArgs} args - Arguments to find a MahasiswaKelas
     * @example
     * // Get one MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MahasiswaKelasFindFirstArgs>(args?: SelectSubset<T, MahasiswaKelasFindFirstArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MahasiswaKelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasFindFirstOrThrowArgs} args - Arguments to find a MahasiswaKelas
     * @example
     * // Get one MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MahasiswaKelasFindFirstOrThrowArgs>(args?: SelectSubset<T, MahasiswaKelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MahasiswaKelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findMany()
     * 
     * // Get first 10 MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mahasiswaKelasWithIdOnly = await prisma.mahasiswaKelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MahasiswaKelasFindManyArgs>(args?: SelectSubset<T, MahasiswaKelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MahasiswaKelas.
     * @param {MahasiswaKelasCreateArgs} args - Arguments to create a MahasiswaKelas.
     * @example
     * // Create one MahasiswaKelas
     * const MahasiswaKelas = await prisma.mahasiswaKelas.create({
     *   data: {
     *     // ... data to create a MahasiswaKelas
     *   }
     * })
     * 
     */
    create<T extends MahasiswaKelasCreateArgs>(args: SelectSubset<T, MahasiswaKelasCreateArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MahasiswaKelas.
     * @param {MahasiswaKelasCreateManyArgs} args - Arguments to create many MahasiswaKelas.
     * @example
     * // Create many MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MahasiswaKelasCreateManyArgs>(args?: SelectSubset<T, MahasiswaKelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MahasiswaKelas and returns the data saved in the database.
     * @param {MahasiswaKelasCreateManyAndReturnArgs} args - Arguments to create many MahasiswaKelas.
     * @example
     * // Create many MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MahasiswaKelas and only return the `id`
     * const mahasiswaKelasWithIdOnly = await prisma.mahasiswaKelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MahasiswaKelasCreateManyAndReturnArgs>(args?: SelectSubset<T, MahasiswaKelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MahasiswaKelas.
     * @param {MahasiswaKelasDeleteArgs} args - Arguments to delete one MahasiswaKelas.
     * @example
     * // Delete one MahasiswaKelas
     * const MahasiswaKelas = await prisma.mahasiswaKelas.delete({
     *   where: {
     *     // ... filter to delete one MahasiswaKelas
     *   }
     * })
     * 
     */
    delete<T extends MahasiswaKelasDeleteArgs>(args: SelectSubset<T, MahasiswaKelasDeleteArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MahasiswaKelas.
     * @param {MahasiswaKelasUpdateArgs} args - Arguments to update one MahasiswaKelas.
     * @example
     * // Update one MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MahasiswaKelasUpdateArgs>(args: SelectSubset<T, MahasiswaKelasUpdateArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MahasiswaKelas.
     * @param {MahasiswaKelasDeleteManyArgs} args - Arguments to filter MahasiswaKelas to delete.
     * @example
     * // Delete a few MahasiswaKelas
     * const { count } = await prisma.mahasiswaKelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MahasiswaKelasDeleteManyArgs>(args?: SelectSubset<T, MahasiswaKelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MahasiswaKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MahasiswaKelasUpdateManyArgs>(args: SelectSubset<T, MahasiswaKelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MahasiswaKelas and returns the data updated in the database.
     * @param {MahasiswaKelasUpdateManyAndReturnArgs} args - Arguments to update many MahasiswaKelas.
     * @example
     * // Update many MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MahasiswaKelas and only return the `id`
     * const mahasiswaKelasWithIdOnly = await prisma.mahasiswaKelas.updateManyAndReturn({
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
    updateManyAndReturn<T extends MahasiswaKelasUpdateManyAndReturnArgs>(args: SelectSubset<T, MahasiswaKelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MahasiswaKelas.
     * @param {MahasiswaKelasUpsertArgs} args - Arguments to update or create a MahasiswaKelas.
     * @example
     * // Update or create a MahasiswaKelas
     * const mahasiswaKelas = await prisma.mahasiswaKelas.upsert({
     *   create: {
     *     // ... data to create a MahasiswaKelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MahasiswaKelas we want to update
     *   }
     * })
     */
    upsert<T extends MahasiswaKelasUpsertArgs>(args: SelectSubset<T, MahasiswaKelasUpsertArgs<ExtArgs>>): Prisma__MahasiswaKelasClient<$Result.GetResult<Prisma.$MahasiswaKelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MahasiswaKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasCountArgs} args - Arguments to filter MahasiswaKelas to count.
     * @example
     * // Count the number of MahasiswaKelas
     * const count = await prisma.mahasiswaKelas.count({
     *   where: {
     *     // ... the filter for the MahasiswaKelas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaKelasCountArgs>(
      args?: Subset<T, MahasiswaKelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaKelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MahasiswaKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MahasiswaKelasAggregateArgs>(args: Subset<T, MahasiswaKelasAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaKelasAggregateType<T>>

    /**
     * Group by MahasiswaKelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaKelasGroupByArgs} args - Group by arguments.
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
      T extends MahasiswaKelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaKelasGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaKelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MahasiswaKelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MahasiswaKelas model
   */
  readonly fields: MahasiswaKelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MahasiswaKelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MahasiswaKelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MahasiswaKelas model
   */
  interface MahasiswaKelasFieldRefs {
    readonly id: FieldRef<"MahasiswaKelas", 'String'>
    readonly mahasiswaId: FieldRef<"MahasiswaKelas", 'String'>
    readonly kelasId: FieldRef<"MahasiswaKelas", 'String'>
    readonly tanggalGabung: FieldRef<"MahasiswaKelas", 'DateTime'>
    readonly statusAktif: FieldRef<"MahasiswaKelas", 'Boolean'>
    readonly createdAt: FieldRef<"MahasiswaKelas", 'DateTime'>
    readonly updatedAt: FieldRef<"MahasiswaKelas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MahasiswaKelas findUnique
   */
  export type MahasiswaKelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter, which MahasiswaKelas to fetch.
     */
    where: MahasiswaKelasWhereUniqueInput
  }

  /**
   * MahasiswaKelas findUniqueOrThrow
   */
  export type MahasiswaKelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter, which MahasiswaKelas to fetch.
     */
    where: MahasiswaKelasWhereUniqueInput
  }

  /**
   * MahasiswaKelas findFirst
   */
  export type MahasiswaKelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter, which MahasiswaKelas to fetch.
     */
    where?: MahasiswaKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MahasiswaKelas to fetch.
     */
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MahasiswaKelas.
     */
    cursor?: MahasiswaKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MahasiswaKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MahasiswaKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MahasiswaKelas.
     */
    distinct?: MahasiswaKelasScalarFieldEnum | MahasiswaKelasScalarFieldEnum[]
  }

  /**
   * MahasiswaKelas findFirstOrThrow
   */
  export type MahasiswaKelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter, which MahasiswaKelas to fetch.
     */
    where?: MahasiswaKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MahasiswaKelas to fetch.
     */
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MahasiswaKelas.
     */
    cursor?: MahasiswaKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MahasiswaKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MahasiswaKelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MahasiswaKelas.
     */
    distinct?: MahasiswaKelasScalarFieldEnum | MahasiswaKelasScalarFieldEnum[]
  }

  /**
   * MahasiswaKelas findMany
   */
  export type MahasiswaKelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter, which MahasiswaKelas to fetch.
     */
    where?: MahasiswaKelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MahasiswaKelas to fetch.
     */
    orderBy?: MahasiswaKelasOrderByWithRelationInput | MahasiswaKelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MahasiswaKelas.
     */
    cursor?: MahasiswaKelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MahasiswaKelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MahasiswaKelas.
     */
    skip?: number
    distinct?: MahasiswaKelasScalarFieldEnum | MahasiswaKelasScalarFieldEnum[]
  }

  /**
   * MahasiswaKelas create
   */
  export type MahasiswaKelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * The data needed to create a MahasiswaKelas.
     */
    data: XOR<MahasiswaKelasCreateInput, MahasiswaKelasUncheckedCreateInput>
  }

  /**
   * MahasiswaKelas createMany
   */
  export type MahasiswaKelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MahasiswaKelas.
     */
    data: MahasiswaKelasCreateManyInput | MahasiswaKelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MahasiswaKelas createManyAndReturn
   */
  export type MahasiswaKelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * The data used to create many MahasiswaKelas.
     */
    data: MahasiswaKelasCreateManyInput | MahasiswaKelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MahasiswaKelas update
   */
  export type MahasiswaKelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * The data needed to update a MahasiswaKelas.
     */
    data: XOR<MahasiswaKelasUpdateInput, MahasiswaKelasUncheckedUpdateInput>
    /**
     * Choose, which MahasiswaKelas to update.
     */
    where: MahasiswaKelasWhereUniqueInput
  }

  /**
   * MahasiswaKelas updateMany
   */
  export type MahasiswaKelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MahasiswaKelas.
     */
    data: XOR<MahasiswaKelasUpdateManyMutationInput, MahasiswaKelasUncheckedUpdateManyInput>
    /**
     * Filter which MahasiswaKelas to update
     */
    where?: MahasiswaKelasWhereInput
    /**
     * Limit how many MahasiswaKelas to update.
     */
    limit?: number
  }

  /**
   * MahasiswaKelas updateManyAndReturn
   */
  export type MahasiswaKelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * The data used to update MahasiswaKelas.
     */
    data: XOR<MahasiswaKelasUpdateManyMutationInput, MahasiswaKelasUncheckedUpdateManyInput>
    /**
     * Filter which MahasiswaKelas to update
     */
    where?: MahasiswaKelasWhereInput
    /**
     * Limit how many MahasiswaKelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MahasiswaKelas upsert
   */
  export type MahasiswaKelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * The filter to search for the MahasiswaKelas to update in case it exists.
     */
    where: MahasiswaKelasWhereUniqueInput
    /**
     * In case the MahasiswaKelas found by the `where` argument doesn't exist, create a new MahasiswaKelas with this data.
     */
    create: XOR<MahasiswaKelasCreateInput, MahasiswaKelasUncheckedCreateInput>
    /**
     * In case the MahasiswaKelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MahasiswaKelasUpdateInput, MahasiswaKelasUncheckedUpdateInput>
  }

  /**
   * MahasiswaKelas delete
   */
  export type MahasiswaKelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
    /**
     * Filter which MahasiswaKelas to delete.
     */
    where: MahasiswaKelasWhereUniqueInput
  }

  /**
   * MahasiswaKelas deleteMany
   */
  export type MahasiswaKelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MahasiswaKelas to delete
     */
    where?: MahasiswaKelasWhereInput
    /**
     * Limit how many MahasiswaKelas to delete.
     */
    limit?: number
  }

  /**
   * MahasiswaKelas without action
   */
  export type MahasiswaKelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaKelas
     */
    select?: MahasiswaKelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MahasiswaKelas
     */
    omit?: MahasiswaKelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MahasiswaKelasInclude<ExtArgs> | null
  }


  /**
   * Model PertemuanAbsensi
   */

  export type AggregatePertemuanAbsensi = {
    _count: PertemuanAbsensiCountAggregateOutputType | null
    _avg: PertemuanAbsensiAvgAggregateOutputType | null
    _sum: PertemuanAbsensiSumAggregateOutputType | null
    _min: PertemuanAbsensiMinAggregateOutputType | null
    _max: PertemuanAbsensiMaxAggregateOutputType | null
  }

  export type PertemuanAbsensiAvgAggregateOutputType = {
    nomorPertemuan: number | null
  }

  export type PertemuanAbsensiSumAggregateOutputType = {
    nomorPertemuan: number | null
  }

  export type PertemuanAbsensiMinAggregateOutputType = {
    id: string | null
    nomorPertemuan: number | null
    tanggalPertemuan: Date | null
    topik: string | null
    catatan: string | null
    mahasiswaId: string | null
    statusKehadiran: $Enums.StatusKehadiran | null
    jamAbsen: Date | null
    lokasi: string | null
    keterangan: string | null
    kelasId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PertemuanAbsensiMaxAggregateOutputType = {
    id: string | null
    nomorPertemuan: number | null
    tanggalPertemuan: Date | null
    topik: string | null
    catatan: string | null
    mahasiswaId: string | null
    statusKehadiran: $Enums.StatusKehadiran | null
    jamAbsen: Date | null
    lokasi: string | null
    keterangan: string | null
    kelasId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PertemuanAbsensiCountAggregateOutputType = {
    id: number
    nomorPertemuan: number
    tanggalPertemuan: number
    topik: number
    catatan: number
    mahasiswaId: number
    statusKehadiran: number
    jamAbsen: number
    lokasi: number
    keterangan: number
    kelasId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PertemuanAbsensiAvgAggregateInputType = {
    nomorPertemuan?: true
  }

  export type PertemuanAbsensiSumAggregateInputType = {
    nomorPertemuan?: true
  }

  export type PertemuanAbsensiMinAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    mahasiswaId?: true
    statusKehadiran?: true
    jamAbsen?: true
    lokasi?: true
    keterangan?: true
    kelasId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PertemuanAbsensiMaxAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    mahasiswaId?: true
    statusKehadiran?: true
    jamAbsen?: true
    lokasi?: true
    keterangan?: true
    kelasId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PertemuanAbsensiCountAggregateInputType = {
    id?: true
    nomorPertemuan?: true
    tanggalPertemuan?: true
    topik?: true
    catatan?: true
    mahasiswaId?: true
    statusKehadiran?: true
    jamAbsen?: true
    lokasi?: true
    keterangan?: true
    kelasId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PertemuanAbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PertemuanAbsensi to aggregate.
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PertemuanAbsensis to fetch.
     */
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PertemuanAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PertemuanAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PertemuanAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PertemuanAbsensis
    **/
    _count?: true | PertemuanAbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PertemuanAbsensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PertemuanAbsensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PertemuanAbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PertemuanAbsensiMaxAggregateInputType
  }

  export type GetPertemuanAbsensiAggregateType<T extends PertemuanAbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregatePertemuanAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePertemuanAbsensi[P]>
      : GetScalarType<T[P], AggregatePertemuanAbsensi[P]>
  }




  export type PertemuanAbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PertemuanAbsensiWhereInput
    orderBy?: PertemuanAbsensiOrderByWithAggregationInput | PertemuanAbsensiOrderByWithAggregationInput[]
    by: PertemuanAbsensiScalarFieldEnum[] | PertemuanAbsensiScalarFieldEnum
    having?: PertemuanAbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PertemuanAbsensiCountAggregateInputType | true
    _avg?: PertemuanAbsensiAvgAggregateInputType
    _sum?: PertemuanAbsensiSumAggregateInputType
    _min?: PertemuanAbsensiMinAggregateInputType
    _max?: PertemuanAbsensiMaxAggregateInputType
  }

  export type PertemuanAbsensiGroupByOutputType = {
    id: string
    nomorPertemuan: number
    tanggalPertemuan: Date
    topik: string | null
    catatan: string | null
    mahasiswaId: string
    statusKehadiran: $Enums.StatusKehadiran
    jamAbsen: Date | null
    lokasi: string | null
    keterangan: string | null
    kelasId: string
    createdAt: Date
    updatedAt: Date
    _count: PertemuanAbsensiCountAggregateOutputType | null
    _avg: PertemuanAbsensiAvgAggregateOutputType | null
    _sum: PertemuanAbsensiSumAggregateOutputType | null
    _min: PertemuanAbsensiMinAggregateOutputType | null
    _max: PertemuanAbsensiMaxAggregateOutputType | null
  }

  type GetPertemuanAbsensiGroupByPayload<T extends PertemuanAbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PertemuanAbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PertemuanAbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PertemuanAbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], PertemuanAbsensiGroupByOutputType[P]>
        }
      >
    >


  export type PertemuanAbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    mahasiswaId?: boolean
    statusKehadiran?: boolean
    jamAbsen?: boolean
    lokasi?: boolean
    keterangan?: boolean
    kelasId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuanAbsensi"]>

  export type PertemuanAbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    mahasiswaId?: boolean
    statusKehadiran?: boolean
    jamAbsen?: boolean
    lokasi?: boolean
    keterangan?: boolean
    kelasId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuanAbsensi"]>

  export type PertemuanAbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    mahasiswaId?: boolean
    statusKehadiran?: boolean
    jamAbsen?: boolean
    lokasi?: boolean
    keterangan?: boolean
    kelasId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pertemuanAbsensi"]>

  export type PertemuanAbsensiSelectScalar = {
    id?: boolean
    nomorPertemuan?: boolean
    tanggalPertemuan?: boolean
    topik?: boolean
    catatan?: boolean
    mahasiswaId?: boolean
    statusKehadiran?: boolean
    jamAbsen?: boolean
    lokasi?: boolean
    keterangan?: boolean
    kelasId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PertemuanAbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomorPertemuan" | "tanggalPertemuan" | "topik" | "catatan" | "mahasiswaId" | "statusKehadiran" | "jamAbsen" | "lokasi" | "keterangan" | "kelasId" | "createdAt" | "updatedAt", ExtArgs["result"]["pertemuanAbsensi"]>
  export type PertemuanAbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type PertemuanAbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }
  export type PertemuanAbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mahasiswa?: boolean | MahasiswaDefaultArgs<ExtArgs>
  }

  export type $PertemuanAbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PertemuanAbsensi"
    objects: {
      kelas: Prisma.$KelasPayload<ExtArgs>
      mahasiswa: Prisma.$MahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomorPertemuan: number
      tanggalPertemuan: Date
      topik: string | null
      catatan: string | null
      mahasiswaId: string
      statusKehadiran: $Enums.StatusKehadiran
      jamAbsen: Date | null
      lokasi: string | null
      keterangan: string | null
      kelasId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pertemuanAbsensi"]>
    composites: {}
  }

  type PertemuanAbsensiGetPayload<S extends boolean | null | undefined | PertemuanAbsensiDefaultArgs> = $Result.GetResult<Prisma.$PertemuanAbsensiPayload, S>

  type PertemuanAbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PertemuanAbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PertemuanAbsensiCountAggregateInputType | true
    }

  export interface PertemuanAbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PertemuanAbsensi'], meta: { name: 'PertemuanAbsensi' } }
    /**
     * Find zero or one PertemuanAbsensi that matches the filter.
     * @param {PertemuanAbsensiFindUniqueArgs} args - Arguments to find a PertemuanAbsensi
     * @example
     * // Get one PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PertemuanAbsensiFindUniqueArgs>(args: SelectSubset<T, PertemuanAbsensiFindUniqueArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PertemuanAbsensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PertemuanAbsensiFindUniqueOrThrowArgs} args - Arguments to find a PertemuanAbsensi
     * @example
     * // Get one PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PertemuanAbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, PertemuanAbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PertemuanAbsensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiFindFirstArgs} args - Arguments to find a PertemuanAbsensi
     * @example
     * // Get one PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PertemuanAbsensiFindFirstArgs>(args?: SelectSubset<T, PertemuanAbsensiFindFirstArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PertemuanAbsensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiFindFirstOrThrowArgs} args - Arguments to find a PertemuanAbsensi
     * @example
     * // Get one PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PertemuanAbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, PertemuanAbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PertemuanAbsensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PertemuanAbsensis
     * const pertemuanAbsensis = await prisma.pertemuanAbsensi.findMany()
     * 
     * // Get first 10 PertemuanAbsensis
     * const pertemuanAbsensis = await prisma.pertemuanAbsensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pertemuanAbsensiWithIdOnly = await prisma.pertemuanAbsensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PertemuanAbsensiFindManyArgs>(args?: SelectSubset<T, PertemuanAbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PertemuanAbsensi.
     * @param {PertemuanAbsensiCreateArgs} args - Arguments to create a PertemuanAbsensi.
     * @example
     * // Create one PertemuanAbsensi
     * const PertemuanAbsensi = await prisma.pertemuanAbsensi.create({
     *   data: {
     *     // ... data to create a PertemuanAbsensi
     *   }
     * })
     * 
     */
    create<T extends PertemuanAbsensiCreateArgs>(args: SelectSubset<T, PertemuanAbsensiCreateArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PertemuanAbsensis.
     * @param {PertemuanAbsensiCreateManyArgs} args - Arguments to create many PertemuanAbsensis.
     * @example
     * // Create many PertemuanAbsensis
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PertemuanAbsensiCreateManyArgs>(args?: SelectSubset<T, PertemuanAbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PertemuanAbsensis and returns the data saved in the database.
     * @param {PertemuanAbsensiCreateManyAndReturnArgs} args - Arguments to create many PertemuanAbsensis.
     * @example
     * // Create many PertemuanAbsensis
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PertemuanAbsensis and only return the `id`
     * const pertemuanAbsensiWithIdOnly = await prisma.pertemuanAbsensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PertemuanAbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, PertemuanAbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PertemuanAbsensi.
     * @param {PertemuanAbsensiDeleteArgs} args - Arguments to delete one PertemuanAbsensi.
     * @example
     * // Delete one PertemuanAbsensi
     * const PertemuanAbsensi = await prisma.pertemuanAbsensi.delete({
     *   where: {
     *     // ... filter to delete one PertemuanAbsensi
     *   }
     * })
     * 
     */
    delete<T extends PertemuanAbsensiDeleteArgs>(args: SelectSubset<T, PertemuanAbsensiDeleteArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PertemuanAbsensi.
     * @param {PertemuanAbsensiUpdateArgs} args - Arguments to update one PertemuanAbsensi.
     * @example
     * // Update one PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PertemuanAbsensiUpdateArgs>(args: SelectSubset<T, PertemuanAbsensiUpdateArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PertemuanAbsensis.
     * @param {PertemuanAbsensiDeleteManyArgs} args - Arguments to filter PertemuanAbsensis to delete.
     * @example
     * // Delete a few PertemuanAbsensis
     * const { count } = await prisma.pertemuanAbsensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PertemuanAbsensiDeleteManyArgs>(args?: SelectSubset<T, PertemuanAbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PertemuanAbsensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PertemuanAbsensis
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PertemuanAbsensiUpdateManyArgs>(args: SelectSubset<T, PertemuanAbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PertemuanAbsensis and returns the data updated in the database.
     * @param {PertemuanAbsensiUpdateManyAndReturnArgs} args - Arguments to update many PertemuanAbsensis.
     * @example
     * // Update many PertemuanAbsensis
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PertemuanAbsensis and only return the `id`
     * const pertemuanAbsensiWithIdOnly = await prisma.pertemuanAbsensi.updateManyAndReturn({
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
    updateManyAndReturn<T extends PertemuanAbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, PertemuanAbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PertemuanAbsensi.
     * @param {PertemuanAbsensiUpsertArgs} args - Arguments to update or create a PertemuanAbsensi.
     * @example
     * // Update or create a PertemuanAbsensi
     * const pertemuanAbsensi = await prisma.pertemuanAbsensi.upsert({
     *   create: {
     *     // ... data to create a PertemuanAbsensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PertemuanAbsensi we want to update
     *   }
     * })
     */
    upsert<T extends PertemuanAbsensiUpsertArgs>(args: SelectSubset<T, PertemuanAbsensiUpsertArgs<ExtArgs>>): Prisma__PertemuanAbsensiClient<$Result.GetResult<Prisma.$PertemuanAbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PertemuanAbsensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiCountArgs} args - Arguments to filter PertemuanAbsensis to count.
     * @example
     * // Count the number of PertemuanAbsensis
     * const count = await prisma.pertemuanAbsensi.count({
     *   where: {
     *     // ... the filter for the PertemuanAbsensis we want to count
     *   }
     * })
    **/
    count<T extends PertemuanAbsensiCountArgs>(
      args?: Subset<T, PertemuanAbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PertemuanAbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PertemuanAbsensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PertemuanAbsensiAggregateArgs>(args: Subset<T, PertemuanAbsensiAggregateArgs>): Prisma.PrismaPromise<GetPertemuanAbsensiAggregateType<T>>

    /**
     * Group by PertemuanAbsensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PertemuanAbsensiGroupByArgs} args - Group by arguments.
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
      T extends PertemuanAbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PertemuanAbsensiGroupByArgs['orderBy'] }
        : { orderBy?: PertemuanAbsensiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PertemuanAbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPertemuanAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PertemuanAbsensi model
   */
  readonly fields: PertemuanAbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PertemuanAbsensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PertemuanAbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends MahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MahasiswaDefaultArgs<ExtArgs>>): Prisma__MahasiswaClient<$Result.GetResult<Prisma.$MahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PertemuanAbsensi model
   */
  interface PertemuanAbsensiFieldRefs {
    readonly id: FieldRef<"PertemuanAbsensi", 'String'>
    readonly nomorPertemuan: FieldRef<"PertemuanAbsensi", 'Int'>
    readonly tanggalPertemuan: FieldRef<"PertemuanAbsensi", 'DateTime'>
    readonly topik: FieldRef<"PertemuanAbsensi", 'String'>
    readonly catatan: FieldRef<"PertemuanAbsensi", 'String'>
    readonly mahasiswaId: FieldRef<"PertemuanAbsensi", 'String'>
    readonly statusKehadiran: FieldRef<"PertemuanAbsensi", 'StatusKehadiran'>
    readonly jamAbsen: FieldRef<"PertemuanAbsensi", 'DateTime'>
    readonly lokasi: FieldRef<"PertemuanAbsensi", 'String'>
    readonly keterangan: FieldRef<"PertemuanAbsensi", 'String'>
    readonly kelasId: FieldRef<"PertemuanAbsensi", 'String'>
    readonly createdAt: FieldRef<"PertemuanAbsensi", 'DateTime'>
    readonly updatedAt: FieldRef<"PertemuanAbsensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PertemuanAbsensi findUnique
   */
  export type PertemuanAbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which PertemuanAbsensi to fetch.
     */
    where: PertemuanAbsensiWhereUniqueInput
  }

  /**
   * PertemuanAbsensi findUniqueOrThrow
   */
  export type PertemuanAbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which PertemuanAbsensi to fetch.
     */
    where: PertemuanAbsensiWhereUniqueInput
  }

  /**
   * PertemuanAbsensi findFirst
   */
  export type PertemuanAbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which PertemuanAbsensi to fetch.
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PertemuanAbsensis to fetch.
     */
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PertemuanAbsensis.
     */
    cursor?: PertemuanAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PertemuanAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PertemuanAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PertemuanAbsensis.
     */
    distinct?: PertemuanAbsensiScalarFieldEnum | PertemuanAbsensiScalarFieldEnum[]
  }

  /**
   * PertemuanAbsensi findFirstOrThrow
   */
  export type PertemuanAbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which PertemuanAbsensi to fetch.
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PertemuanAbsensis to fetch.
     */
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PertemuanAbsensis.
     */
    cursor?: PertemuanAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PertemuanAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PertemuanAbsensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PertemuanAbsensis.
     */
    distinct?: PertemuanAbsensiScalarFieldEnum | PertemuanAbsensiScalarFieldEnum[]
  }

  /**
   * PertemuanAbsensi findMany
   */
  export type PertemuanAbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter, which PertemuanAbsensis to fetch.
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PertemuanAbsensis to fetch.
     */
    orderBy?: PertemuanAbsensiOrderByWithRelationInput | PertemuanAbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PertemuanAbsensis.
     */
    cursor?: PertemuanAbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PertemuanAbsensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PertemuanAbsensis.
     */
    skip?: number
    distinct?: PertemuanAbsensiScalarFieldEnum | PertemuanAbsensiScalarFieldEnum[]
  }

  /**
   * PertemuanAbsensi create
   */
  export type PertemuanAbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a PertemuanAbsensi.
     */
    data: XOR<PertemuanAbsensiCreateInput, PertemuanAbsensiUncheckedCreateInput>
  }

  /**
   * PertemuanAbsensi createMany
   */
  export type PertemuanAbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PertemuanAbsensis.
     */
    data: PertemuanAbsensiCreateManyInput | PertemuanAbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PertemuanAbsensi createManyAndReturn
   */
  export type PertemuanAbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many PertemuanAbsensis.
     */
    data: PertemuanAbsensiCreateManyInput | PertemuanAbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PertemuanAbsensi update
   */
  export type PertemuanAbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a PertemuanAbsensi.
     */
    data: XOR<PertemuanAbsensiUpdateInput, PertemuanAbsensiUncheckedUpdateInput>
    /**
     * Choose, which PertemuanAbsensi to update.
     */
    where: PertemuanAbsensiWhereUniqueInput
  }

  /**
   * PertemuanAbsensi updateMany
   */
  export type PertemuanAbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PertemuanAbsensis.
     */
    data: XOR<PertemuanAbsensiUpdateManyMutationInput, PertemuanAbsensiUncheckedUpdateManyInput>
    /**
     * Filter which PertemuanAbsensis to update
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * Limit how many PertemuanAbsensis to update.
     */
    limit?: number
  }

  /**
   * PertemuanAbsensi updateManyAndReturn
   */
  export type PertemuanAbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * The data used to update PertemuanAbsensis.
     */
    data: XOR<PertemuanAbsensiUpdateManyMutationInput, PertemuanAbsensiUncheckedUpdateManyInput>
    /**
     * Filter which PertemuanAbsensis to update
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * Limit how many PertemuanAbsensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PertemuanAbsensi upsert
   */
  export type PertemuanAbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the PertemuanAbsensi to update in case it exists.
     */
    where: PertemuanAbsensiWhereUniqueInput
    /**
     * In case the PertemuanAbsensi found by the `where` argument doesn't exist, create a new PertemuanAbsensi with this data.
     */
    create: XOR<PertemuanAbsensiCreateInput, PertemuanAbsensiUncheckedCreateInput>
    /**
     * In case the PertemuanAbsensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PertemuanAbsensiUpdateInput, PertemuanAbsensiUncheckedUpdateInput>
  }

  /**
   * PertemuanAbsensi delete
   */
  export type PertemuanAbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
    /**
     * Filter which PertemuanAbsensi to delete.
     */
    where: PertemuanAbsensiWhereUniqueInput
  }

  /**
   * PertemuanAbsensi deleteMany
   */
  export type PertemuanAbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PertemuanAbsensis to delete
     */
    where?: PertemuanAbsensiWhereInput
    /**
     * Limit how many PertemuanAbsensis to delete.
     */
    limit?: number
  }

  /**
   * PertemuanAbsensi without action
   */
  export type PertemuanAbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PertemuanAbsensi
     */
    select?: PertemuanAbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PertemuanAbsensi
     */
    omit?: PertemuanAbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PertemuanAbsensiInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id: 'id',
    nip: 'nip',
    nama: 'nama',
    email: 'email',
    password: 'password',
    noHP: 'noHP',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    nama: 'nama',
    email: 'email',
    password: 'password',
    noHP: 'noHP',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    kodeKelas: 'kodeKelas',
    namaKelas: 'namaKelas',
    deskripsi: 'deskripsi',
    pinKelas: 'pinKelas',
    hariPertemuan: 'hariPertemuan',
    jumlahPertemuan: 'jumlahPertemuan',
    statusAktif: 'statusAktif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dosenUtamaId: 'dosenUtamaId',
    dosenPendampingId: 'dosenPendampingId'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const MahasiswaKelasScalarFieldEnum: {
    id: 'id',
    mahasiswaId: 'mahasiswaId',
    kelasId: 'kelasId',
    tanggalGabung: 'tanggalGabung',
    statusAktif: 'statusAktif',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MahasiswaKelasScalarFieldEnum = (typeof MahasiswaKelasScalarFieldEnum)[keyof typeof MahasiswaKelasScalarFieldEnum]


  export const PertemuanAbsensiScalarFieldEnum: {
    id: 'id',
    nomorPertemuan: 'nomorPertemuan',
    tanggalPertemuan: 'tanggalPertemuan',
    topik: 'topik',
    catatan: 'catatan',
    mahasiswaId: 'mahasiswaId',
    statusKehadiran: 'statusKehadiran',
    jamAbsen: 'jamAbsen',
    lokasi: 'lokasi',
    keterangan: 'keterangan',
    kelasId: 'kelasId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PertemuanAbsensiScalarFieldEnum = (typeof PertemuanAbsensiScalarFieldEnum)[keyof typeof PertemuanAbsensiScalarFieldEnum]


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    nama?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    nama?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    nama?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type DosenWhereInput = {
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    id?: StringFilter<"Dosen"> | string
    nip?: StringFilter<"Dosen"> | string
    nama?: StringFilter<"Dosen"> | string
    email?: StringFilter<"Dosen"> | string
    password?: StringFilter<"Dosen"> | string
    noHP?: StringNullableFilter<"Dosen"> | string | null
    alamat?: StringNullableFilter<"Dosen"> | string | null
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    kelasUtama?: KelasListRelationFilter
    kelasPendamping?: KelasListRelationFilter
  }

  export type DosenOrderByWithRelationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelasUtama?: KelasOrderByRelationAggregateInput
    kelasPendamping?: KelasOrderByRelationAggregateInput
  }

  export type DosenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nip?: string
    email?: string
    AND?: DosenWhereInput | DosenWhereInput[]
    OR?: DosenWhereInput[]
    NOT?: DosenWhereInput | DosenWhereInput[]
    nama?: StringFilter<"Dosen"> | string
    password?: StringFilter<"Dosen"> | string
    noHP?: StringNullableFilter<"Dosen"> | string | null
    alamat?: StringNullableFilter<"Dosen"> | string | null
    createdAt?: DateTimeFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeFilter<"Dosen"> | Date | string
    kelasUtama?: KelasListRelationFilter
    kelasPendamping?: KelasListRelationFilter
  }, "id" | "nip" | "email">

  export type DosenOrderByWithAggregationInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    OR?: DosenScalarWhereWithAggregatesInput[]
    NOT?: DosenScalarWhereWithAggregatesInput | DosenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dosen"> | string
    nip?: StringWithAggregatesFilter<"Dosen"> | string
    nama?: StringWithAggregatesFilter<"Dosen"> | string
    email?: StringWithAggregatesFilter<"Dosen"> | string
    password?: StringWithAggregatesFilter<"Dosen"> | string
    noHP?: StringNullableWithAggregatesFilter<"Dosen"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Dosen"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dosen"> | Date | string
  }

  export type MahasiswaWhereInput = {
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    id?: StringFilter<"Mahasiswa"> | string
    nim?: StringFilter<"Mahasiswa"> | string
    nama?: StringFilter<"Mahasiswa"> | string
    email?: StringFilter<"Mahasiswa"> | string
    password?: StringFilter<"Mahasiswa"> | string
    noHP?: StringNullableFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    kelas?: MahasiswaKelasListRelationFilter
    pertemuan?: PertemuanAbsensiListRelationFilter
  }

  export type MahasiswaOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelas?: MahasiswaKelasOrderByRelationAggregateInput
    pertemuan?: PertemuanAbsensiOrderByRelationAggregateInput
  }

  export type MahasiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    email?: string
    AND?: MahasiswaWhereInput | MahasiswaWhereInput[]
    OR?: MahasiswaWhereInput[]
    NOT?: MahasiswaWhereInput | MahasiswaWhereInput[]
    nama?: StringFilter<"Mahasiswa"> | string
    password?: StringFilter<"Mahasiswa"> | string
    noHP?: StringNullableFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeFilter<"Mahasiswa"> | Date | string
    kelas?: MahasiswaKelasListRelationFilter
    pertemuan?: PertemuanAbsensiListRelationFilter
  }, "id" | "nim" | "email">

  export type MahasiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    OR?: MahasiswaScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaScalarWhereWithAggregatesInput | MahasiswaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nim?: StringWithAggregatesFilter<"Mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"Mahasiswa"> | string
    email?: StringWithAggregatesFilter<"Mahasiswa"> | string
    password?: StringWithAggregatesFilter<"Mahasiswa"> | string
    noHP?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Mahasiswa"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mahasiswa"> | Date | string
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: StringFilter<"Kelas"> | string
    kodeKelas?: StringFilter<"Kelas"> | string
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenUtamaId?: StringFilter<"Kelas"> | string
    dosenPendampingId?: StringNullableFilter<"Kelas"> | string | null
    dosenUtama?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    dosenPendamping?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    mahasiswa?: MahasiswaKelasListRelationFilter
    pertemuan?: PertemuanAbsensiListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenUtamaId?: SortOrder
    dosenPendampingId?: SortOrderInput | SortOrder
    dosenUtama?: DosenOrderByWithRelationInput
    dosenPendamping?: DosenOrderByWithRelationInput
    mahasiswa?: MahasiswaKelasOrderByRelationAggregateInput
    pertemuan?: PertemuanAbsensiOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeKelas?: string
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenUtamaId?: StringFilter<"Kelas"> | string
    dosenPendampingId?: StringNullableFilter<"Kelas"> | string | null
    dosenUtama?: XOR<DosenScalarRelationFilter, DosenWhereInput>
    dosenPendamping?: XOR<DosenNullableScalarRelationFilter, DosenWhereInput> | null
    mahasiswa?: MahasiswaKelasListRelationFilter
    pertemuan?: PertemuanAbsensiListRelationFilter
  }, "id" | "kodeKelas">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenUtamaId?: SortOrder
    dosenPendampingId?: SortOrderInput | SortOrder
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
    deskripsi?: StringNullableWithAggregatesFilter<"Kelas"> | string | null
    pinKelas?: StringWithAggregatesFilter<"Kelas"> | string
    hariPertemuan?: StringWithAggregatesFilter<"Kelas"> | string
    jumlahPertemuan?: IntWithAggregatesFilter<"Kelas"> | number
    statusAktif?: BoolWithAggregatesFilter<"Kelas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kelas"> | Date | string
    dosenUtamaId?: StringWithAggregatesFilter<"Kelas"> | string
    dosenPendampingId?: StringNullableWithAggregatesFilter<"Kelas"> | string | null
  }

  export type MahasiswaKelasWhereInput = {
    AND?: MahasiswaKelasWhereInput | MahasiswaKelasWhereInput[]
    OR?: MahasiswaKelasWhereInput[]
    NOT?: MahasiswaKelasWhereInput | MahasiswaKelasWhereInput[]
    id?: StringFilter<"MahasiswaKelas"> | string
    mahasiswaId?: StringFilter<"MahasiswaKelas"> | string
    kelasId?: StringFilter<"MahasiswaKelas"> | string
    tanggalGabung?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    statusAktif?: BoolFilter<"MahasiswaKelas"> | boolean
    createdAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    updatedAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }

  export type MahasiswaKelasOrderByWithRelationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    kelasId?: SortOrder
    tanggalGabung?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mahasiswa?: MahasiswaOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
  }

  export type MahasiswaKelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mahasiswaId_kelasId?: MahasiswaKelasMahasiswaIdKelasIdCompoundUniqueInput
    AND?: MahasiswaKelasWhereInput | MahasiswaKelasWhereInput[]
    OR?: MahasiswaKelasWhereInput[]
    NOT?: MahasiswaKelasWhereInput | MahasiswaKelasWhereInput[]
    mahasiswaId?: StringFilter<"MahasiswaKelas"> | string
    kelasId?: StringFilter<"MahasiswaKelas"> | string
    tanggalGabung?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    statusAktif?: BoolFilter<"MahasiswaKelas"> | boolean
    createdAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    updatedAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }, "id" | "mahasiswaId_kelasId">

  export type MahasiswaKelasOrderByWithAggregationInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    kelasId?: SortOrder
    tanggalGabung?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MahasiswaKelasCountOrderByAggregateInput
    _max?: MahasiswaKelasMaxOrderByAggregateInput
    _min?: MahasiswaKelasMinOrderByAggregateInput
  }

  export type MahasiswaKelasScalarWhereWithAggregatesInput = {
    AND?: MahasiswaKelasScalarWhereWithAggregatesInput | MahasiswaKelasScalarWhereWithAggregatesInput[]
    OR?: MahasiswaKelasScalarWhereWithAggregatesInput[]
    NOT?: MahasiswaKelasScalarWhereWithAggregatesInput | MahasiswaKelasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MahasiswaKelas"> | string
    mahasiswaId?: StringWithAggregatesFilter<"MahasiswaKelas"> | string
    kelasId?: StringWithAggregatesFilter<"MahasiswaKelas"> | string
    tanggalGabung?: DateTimeWithAggregatesFilter<"MahasiswaKelas"> | Date | string
    statusAktif?: BoolWithAggregatesFilter<"MahasiswaKelas"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MahasiswaKelas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MahasiswaKelas"> | Date | string
  }

  export type PertemuanAbsensiWhereInput = {
    AND?: PertemuanAbsensiWhereInput | PertemuanAbsensiWhereInput[]
    OR?: PertemuanAbsensiWhereInput[]
    NOT?: PertemuanAbsensiWhereInput | PertemuanAbsensiWhereInput[]
    id?: StringFilter<"PertemuanAbsensi"> | string
    nomorPertemuan?: IntFilter<"PertemuanAbsensi"> | number
    tanggalPertemuan?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    topik?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    catatan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    mahasiswaId?: StringFilter<"PertemuanAbsensi"> | string
    statusKehadiran?: EnumStatusKehadiranFilter<"PertemuanAbsensi"> | $Enums.StatusKehadiran
    jamAbsen?: DateTimeNullableFilter<"PertemuanAbsensi"> | Date | string | null
    lokasi?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    keterangan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    kelasId?: StringFilter<"PertemuanAbsensi"> | string
    createdAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    updatedAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }

  export type PertemuanAbsensiOrderByWithRelationInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    mahasiswaId?: SortOrder
    statusKehadiran?: SortOrder
    jamAbsen?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kelas?: KelasOrderByWithRelationInput
    mahasiswa?: MahasiswaOrderByWithRelationInput
  }

  export type PertemuanAbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kelasId_nomorPertemuan_mahasiswaId?: PertemuanAbsensiKelasIdNomorPertemuanMahasiswaIdCompoundUniqueInput
    AND?: PertemuanAbsensiWhereInput | PertemuanAbsensiWhereInput[]
    OR?: PertemuanAbsensiWhereInput[]
    NOT?: PertemuanAbsensiWhereInput | PertemuanAbsensiWhereInput[]
    nomorPertemuan?: IntFilter<"PertemuanAbsensi"> | number
    tanggalPertemuan?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    topik?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    catatan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    mahasiswaId?: StringFilter<"PertemuanAbsensi"> | string
    statusKehadiran?: EnumStatusKehadiranFilter<"PertemuanAbsensi"> | $Enums.StatusKehadiran
    jamAbsen?: DateTimeNullableFilter<"PertemuanAbsensi"> | Date | string | null
    lokasi?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    keterangan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    kelasId?: StringFilter<"PertemuanAbsensi"> | string
    createdAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    updatedAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, MahasiswaWhereInput>
  }, "id" | "kelasId_nomorPertemuan_mahasiswaId">

  export type PertemuanAbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    mahasiswaId?: SortOrder
    statusKehadiran?: SortOrder
    jamAbsen?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PertemuanAbsensiCountOrderByAggregateInput
    _avg?: PertemuanAbsensiAvgOrderByAggregateInput
    _max?: PertemuanAbsensiMaxOrderByAggregateInput
    _min?: PertemuanAbsensiMinOrderByAggregateInput
    _sum?: PertemuanAbsensiSumOrderByAggregateInput
  }

  export type PertemuanAbsensiScalarWhereWithAggregatesInput = {
    AND?: PertemuanAbsensiScalarWhereWithAggregatesInput | PertemuanAbsensiScalarWhereWithAggregatesInput[]
    OR?: PertemuanAbsensiScalarWhereWithAggregatesInput[]
    NOT?: PertemuanAbsensiScalarWhereWithAggregatesInput | PertemuanAbsensiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PertemuanAbsensi"> | string
    nomorPertemuan?: IntWithAggregatesFilter<"PertemuanAbsensi"> | number
    tanggalPertemuan?: DateTimeWithAggregatesFilter<"PertemuanAbsensi"> | Date | string
    topik?: StringNullableWithAggregatesFilter<"PertemuanAbsensi"> | string | null
    catatan?: StringNullableWithAggregatesFilter<"PertemuanAbsensi"> | string | null
    mahasiswaId?: StringWithAggregatesFilter<"PertemuanAbsensi"> | string
    statusKehadiran?: EnumStatusKehadiranWithAggregatesFilter<"PertemuanAbsensi"> | $Enums.StatusKehadiran
    jamAbsen?: DateTimeNullableWithAggregatesFilter<"PertemuanAbsensi"> | Date | string | null
    lokasi?: StringNullableWithAggregatesFilter<"PertemuanAbsensi"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"PertemuanAbsensi"> | string | null
    kelasId?: StringWithAggregatesFilter<"PertemuanAbsensi"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PertemuanAbsensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PertemuanAbsensi"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasUtama?: KelasCreateNestedManyWithoutDosenUtamaInput
    kelasPendamping?: KelasCreateNestedManyWithoutDosenPendampingInput
  }

  export type DosenUncheckedCreateInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasUtama?: KelasUncheckedCreateNestedManyWithoutDosenUtamaInput
    kelasPendamping?: KelasUncheckedCreateNestedManyWithoutDosenPendampingInput
  }

  export type DosenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasUtama?: KelasUpdateManyWithoutDosenUtamaNestedInput
    kelasPendamping?: KelasUpdateManyWithoutDosenPendampingNestedInput
  }

  export type DosenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasUtama?: KelasUncheckedUpdateManyWithoutDosenUtamaNestedInput
    kelasPendamping?: KelasUncheckedUpdateManyWithoutDosenPendampingNestedInput
  }

  export type DosenCreateManyInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DosenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas?: MahasiswaKelasCreateNestedManyWithoutMahasiswaInput
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas?: MahasiswaKelasUncheckedCreateNestedManyWithoutMahasiswaInput
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: MahasiswaKelasUpdateManyWithoutMahasiswaNestedInput
    pertemuan?: PertemuanAbsensiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: MahasiswaKelasUncheckedUpdateManyWithoutMahasiswaNestedInput
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KelasCreateInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtama: DosenCreateNestedOneWithoutKelasUtamaInput
    dosenPendamping?: DosenCreateNestedOneWithoutKelasPendampingInput
    mahasiswa?: MahasiswaKelasCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
    dosenPendampingId?: string | null
    mahasiswa?: MahasiswaKelasUncheckedCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtama?: DosenUpdateOneRequiredWithoutKelasUtamaNestedInput
    dosenPendamping?: DosenUpdateOneWithoutKelasPendampingNestedInput
    mahasiswa?: MahasiswaKelasUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: MahasiswaKelasUncheckedUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
    dosenPendampingId?: string | null
  }

  export type KelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
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
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MahasiswaKelasCreateInput = {
    id?: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutKelasInput
    kelas: KelasCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaKelasUncheckedCreateInput = {
    id?: string
    mahasiswaId: string
    kelasId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKelasNestedInput
    kelas?: KelasUpdateOneRequiredWithoutMahasiswaNestedInput
  }

  export type MahasiswaKelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaKelasCreateManyInput = {
    id?: string
    mahasiswaId: string
    kelasId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaKelasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiCreateInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutPertemuanInput
    mahasiswa: MahasiswaCreateNestedOneWithoutPertemuanInput
  }

  export type PertemuanAbsensiUncheckedCreateInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    mahasiswaId: string
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    kelasId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutPertemuanNestedInput
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPertemuanNestedInput
  }

  export type PertemuanAbsensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiCreateManyInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    mahasiswaId: string
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    kelasId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type KelasListRelationFilter = {
    every?: KelasWhereInput
    some?: KelasWhereInput
    none?: KelasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DosenCountOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    id?: SortOrder
    nip?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type MahasiswaKelasListRelationFilter = {
    every?: MahasiswaKelasWhereInput
    some?: MahasiswaKelasWhereInput
    none?: MahasiswaKelasWhereInput
  }

  export type PertemuanAbsensiListRelationFilter = {
    every?: PertemuanAbsensiWhereInput
    some?: PertemuanAbsensiWhereInput
    none?: PertemuanAbsensiWhereInput
  }

  export type MahasiswaKelasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PertemuanAbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    noHP?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DosenScalarRelationFilter = {
    is?: DosenWhereInput
    isNot?: DosenWhereInput
  }

  export type DosenNullableScalarRelationFilter = {
    is?: DosenWhereInput | null
    isNot?: DosenWhereInput | null
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenUtamaId?: SortOrder
    dosenPendampingId?: SortOrder
  }

  export type KelasAvgOrderByAggregateInput = {
    jumlahPertemuan?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenUtamaId?: SortOrder
    dosenPendampingId?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    kodeKelas?: SortOrder
    namaKelas?: SortOrder
    deskripsi?: SortOrder
    pinKelas?: SortOrder
    hariPertemuan?: SortOrder
    jumlahPertemuan?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dosenUtamaId?: SortOrder
    dosenPendampingId?: SortOrder
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

  export type MahasiswaScalarRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type MahasiswaKelasMahasiswaIdKelasIdCompoundUniqueInput = {
    mahasiswaId: string
    kelasId: string
  }

  export type MahasiswaKelasCountOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    kelasId?: SortOrder
    tanggalGabung?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaKelasMaxOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    kelasId?: SortOrder
    tanggalGabung?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MahasiswaKelasMinOrderByAggregateInput = {
    id?: SortOrder
    mahasiswaId?: SortOrder
    kelasId?: SortOrder
    tanggalGabung?: SortOrder
    statusAktif?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusKehadiranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKehadiran | EnumStatusKehadiranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKehadiran[] | ListEnumStatusKehadiranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKehadiranFilter<$PrismaModel> | $Enums.StatusKehadiran
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PertemuanAbsensiKelasIdNomorPertemuanMahasiswaIdCompoundUniqueInput = {
    kelasId: string
    nomorPertemuan: number
    mahasiswaId: string
  }

  export type PertemuanAbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    mahasiswaId?: SortOrder
    statusKehadiran?: SortOrder
    jamAbsen?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertemuanAbsensiAvgOrderByAggregateInput = {
    nomorPertemuan?: SortOrder
  }

  export type PertemuanAbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    mahasiswaId?: SortOrder
    statusKehadiran?: SortOrder
    jamAbsen?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertemuanAbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    nomorPertemuan?: SortOrder
    tanggalPertemuan?: SortOrder
    topik?: SortOrder
    catatan?: SortOrder
    mahasiswaId?: SortOrder
    statusKehadiran?: SortOrder
    jamAbsen?: SortOrder
    lokasi?: SortOrder
    keterangan?: SortOrder
    kelasId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PertemuanAbsensiSumOrderByAggregateInput = {
    nomorPertemuan?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KelasCreateNestedManyWithoutDosenUtamaInput = {
    create?: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput> | KelasCreateWithoutDosenUtamaInput[] | KelasUncheckedCreateWithoutDosenUtamaInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenUtamaInput | KelasCreateOrConnectWithoutDosenUtamaInput[]
    createMany?: KelasCreateManyDosenUtamaInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type KelasCreateNestedManyWithoutDosenPendampingInput = {
    create?: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput> | KelasCreateWithoutDosenPendampingInput[] | KelasUncheckedCreateWithoutDosenPendampingInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenPendampingInput | KelasCreateOrConnectWithoutDosenPendampingInput[]
    createMany?: KelasCreateManyDosenPendampingInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type KelasUncheckedCreateNestedManyWithoutDosenUtamaInput = {
    create?: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput> | KelasCreateWithoutDosenUtamaInput[] | KelasUncheckedCreateWithoutDosenUtamaInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenUtamaInput | KelasCreateOrConnectWithoutDosenUtamaInput[]
    createMany?: KelasCreateManyDosenUtamaInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type KelasUncheckedCreateNestedManyWithoutDosenPendampingInput = {
    create?: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput> | KelasCreateWithoutDosenPendampingInput[] | KelasUncheckedCreateWithoutDosenPendampingInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenPendampingInput | KelasCreateOrConnectWithoutDosenPendampingInput[]
    createMany?: KelasCreateManyDosenPendampingInputEnvelope
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KelasUpdateManyWithoutDosenUtamaNestedInput = {
    create?: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput> | KelasCreateWithoutDosenUtamaInput[] | KelasUncheckedCreateWithoutDosenUtamaInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenUtamaInput | KelasCreateOrConnectWithoutDosenUtamaInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenUtamaInput | KelasUpsertWithWhereUniqueWithoutDosenUtamaInput[]
    createMany?: KelasCreateManyDosenUtamaInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenUtamaInput | KelasUpdateWithWhereUniqueWithoutDosenUtamaInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenUtamaInput | KelasUpdateManyWithWhereWithoutDosenUtamaInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type KelasUpdateManyWithoutDosenPendampingNestedInput = {
    create?: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput> | KelasCreateWithoutDosenPendampingInput[] | KelasUncheckedCreateWithoutDosenPendampingInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenPendampingInput | KelasCreateOrConnectWithoutDosenPendampingInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenPendampingInput | KelasUpsertWithWhereUniqueWithoutDosenPendampingInput[]
    createMany?: KelasCreateManyDosenPendampingInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenPendampingInput | KelasUpdateWithWhereUniqueWithoutDosenPendampingInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenPendampingInput | KelasUpdateManyWithWhereWithoutDosenPendampingInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type KelasUncheckedUpdateManyWithoutDosenUtamaNestedInput = {
    create?: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput> | KelasCreateWithoutDosenUtamaInput[] | KelasUncheckedCreateWithoutDosenUtamaInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenUtamaInput | KelasCreateOrConnectWithoutDosenUtamaInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenUtamaInput | KelasUpsertWithWhereUniqueWithoutDosenUtamaInput[]
    createMany?: KelasCreateManyDosenUtamaInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenUtamaInput | KelasUpdateWithWhereUniqueWithoutDosenUtamaInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenUtamaInput | KelasUpdateManyWithWhereWithoutDosenUtamaInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type KelasUncheckedUpdateManyWithoutDosenPendampingNestedInput = {
    create?: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput> | KelasCreateWithoutDosenPendampingInput[] | KelasUncheckedCreateWithoutDosenPendampingInput[]
    connectOrCreate?: KelasCreateOrConnectWithoutDosenPendampingInput | KelasCreateOrConnectWithoutDosenPendampingInput[]
    upsert?: KelasUpsertWithWhereUniqueWithoutDosenPendampingInput | KelasUpsertWithWhereUniqueWithoutDosenPendampingInput[]
    createMany?: KelasCreateManyDosenPendampingInputEnvelope
    set?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    disconnect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    delete?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    connect?: KelasWhereUniqueInput | KelasWhereUniqueInput[]
    update?: KelasUpdateWithWhereUniqueWithoutDosenPendampingInput | KelasUpdateWithWhereUniqueWithoutDosenPendampingInput[]
    updateMany?: KelasUpdateManyWithWhereWithoutDosenPendampingInput | KelasUpdateManyWithWhereWithoutDosenPendampingInput[]
    deleteMany?: KelasScalarWhereInput | KelasScalarWhereInput[]
  }

  export type MahasiswaKelasCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput> | MahasiswaKelasCreateWithoutMahasiswaInput[] | MahasiswaKelasUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutMahasiswaInput | MahasiswaKelasCreateOrConnectWithoutMahasiswaInput[]
    createMany?: MahasiswaKelasCreateManyMahasiswaInputEnvelope
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
  }

  export type PertemuanAbsensiCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput> | PertemuanAbsensiCreateWithoutMahasiswaInput[] | PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput | PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PertemuanAbsensiCreateManyMahasiswaInputEnvelope
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
  }

  export type MahasiswaKelasUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput> | MahasiswaKelasCreateWithoutMahasiswaInput[] | MahasiswaKelasUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutMahasiswaInput | MahasiswaKelasCreateOrConnectWithoutMahasiswaInput[]
    createMany?: MahasiswaKelasCreateManyMahasiswaInputEnvelope
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
  }

  export type PertemuanAbsensiUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput> | PertemuanAbsensiCreateWithoutMahasiswaInput[] | PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput | PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput[]
    createMany?: PertemuanAbsensiCreateManyMahasiswaInputEnvelope
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
  }

  export type MahasiswaKelasUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput> | MahasiswaKelasCreateWithoutMahasiswaInput[] | MahasiswaKelasUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutMahasiswaInput | MahasiswaKelasCreateOrConnectWithoutMahasiswaInput[]
    upsert?: MahasiswaKelasUpsertWithWhereUniqueWithoutMahasiswaInput | MahasiswaKelasUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: MahasiswaKelasCreateManyMahasiswaInputEnvelope
    set?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    disconnect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    delete?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    update?: MahasiswaKelasUpdateWithWhereUniqueWithoutMahasiswaInput | MahasiswaKelasUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: MahasiswaKelasUpdateManyWithWhereWithoutMahasiswaInput | MahasiswaKelasUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
  }

  export type PertemuanAbsensiUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput> | PertemuanAbsensiCreateWithoutMahasiswaInput[] | PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput | PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PertemuanAbsensiUpsertWithWhereUniqueWithoutMahasiswaInput | PertemuanAbsensiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PertemuanAbsensiCreateManyMahasiswaInputEnvelope
    set?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    disconnect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    delete?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    update?: PertemuanAbsensiUpdateWithWhereUniqueWithoutMahasiswaInput | PertemuanAbsensiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PertemuanAbsensiUpdateManyWithWhereWithoutMahasiswaInput | PertemuanAbsensiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
  }

  export type MahasiswaKelasUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput> | MahasiswaKelasCreateWithoutMahasiswaInput[] | MahasiswaKelasUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutMahasiswaInput | MahasiswaKelasCreateOrConnectWithoutMahasiswaInput[]
    upsert?: MahasiswaKelasUpsertWithWhereUniqueWithoutMahasiswaInput | MahasiswaKelasUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: MahasiswaKelasCreateManyMahasiswaInputEnvelope
    set?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    disconnect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    delete?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    update?: MahasiswaKelasUpdateWithWhereUniqueWithoutMahasiswaInput | MahasiswaKelasUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: MahasiswaKelasUpdateManyWithWhereWithoutMahasiswaInput | MahasiswaKelasUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
  }

  export type PertemuanAbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput> | PertemuanAbsensiCreateWithoutMahasiswaInput[] | PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput | PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput[]
    upsert?: PertemuanAbsensiUpsertWithWhereUniqueWithoutMahasiswaInput | PertemuanAbsensiUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: PertemuanAbsensiCreateManyMahasiswaInputEnvelope
    set?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    disconnect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    delete?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    update?: PertemuanAbsensiUpdateWithWhereUniqueWithoutMahasiswaInput | PertemuanAbsensiUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: PertemuanAbsensiUpdateManyWithWhereWithoutMahasiswaInput | PertemuanAbsensiUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
  }

  export type DosenCreateNestedOneWithoutKelasUtamaInput = {
    create?: XOR<DosenCreateWithoutKelasUtamaInput, DosenUncheckedCreateWithoutKelasUtamaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutKelasUtamaInput
    connect?: DosenWhereUniqueInput
  }

  export type DosenCreateNestedOneWithoutKelasPendampingInput = {
    create?: XOR<DosenCreateWithoutKelasPendampingInput, DosenUncheckedCreateWithoutKelasPendampingInput>
    connectOrCreate?: DosenCreateOrConnectWithoutKelasPendampingInput
    connect?: DosenWhereUniqueInput
  }

  export type MahasiswaKelasCreateNestedManyWithoutKelasInput = {
    create?: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput> | MahasiswaKelasCreateWithoutKelasInput[] | MahasiswaKelasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutKelasInput | MahasiswaKelasCreateOrConnectWithoutKelasInput[]
    createMany?: MahasiswaKelasCreateManyKelasInputEnvelope
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
  }

  export type PertemuanAbsensiCreateNestedManyWithoutKelasInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput> | PertemuanAbsensiCreateWithoutKelasInput[] | PertemuanAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutKelasInput | PertemuanAbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: PertemuanAbsensiCreateManyKelasInputEnvelope
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
  }

  export type MahasiswaKelasUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput> | MahasiswaKelasCreateWithoutKelasInput[] | MahasiswaKelasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutKelasInput | MahasiswaKelasCreateOrConnectWithoutKelasInput[]
    createMany?: MahasiswaKelasCreateManyKelasInputEnvelope
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
  }

  export type PertemuanAbsensiUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput> | PertemuanAbsensiCreateWithoutKelasInput[] | PertemuanAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutKelasInput | PertemuanAbsensiCreateOrConnectWithoutKelasInput[]
    createMany?: PertemuanAbsensiCreateManyKelasInputEnvelope
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
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

  export type DosenUpdateOneRequiredWithoutKelasUtamaNestedInput = {
    create?: XOR<DosenCreateWithoutKelasUtamaInput, DosenUncheckedCreateWithoutKelasUtamaInput>
    connectOrCreate?: DosenCreateOrConnectWithoutKelasUtamaInput
    upsert?: DosenUpsertWithoutKelasUtamaInput
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutKelasUtamaInput, DosenUpdateWithoutKelasUtamaInput>, DosenUncheckedUpdateWithoutKelasUtamaInput>
  }

  export type DosenUpdateOneWithoutKelasPendampingNestedInput = {
    create?: XOR<DosenCreateWithoutKelasPendampingInput, DosenUncheckedCreateWithoutKelasPendampingInput>
    connectOrCreate?: DosenCreateOrConnectWithoutKelasPendampingInput
    upsert?: DosenUpsertWithoutKelasPendampingInput
    disconnect?: DosenWhereInput | boolean
    delete?: DosenWhereInput | boolean
    connect?: DosenWhereUniqueInput
    update?: XOR<XOR<DosenUpdateToOneWithWhereWithoutKelasPendampingInput, DosenUpdateWithoutKelasPendampingInput>, DosenUncheckedUpdateWithoutKelasPendampingInput>
  }

  export type MahasiswaKelasUpdateManyWithoutKelasNestedInput = {
    create?: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput> | MahasiswaKelasCreateWithoutKelasInput[] | MahasiswaKelasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutKelasInput | MahasiswaKelasCreateOrConnectWithoutKelasInput[]
    upsert?: MahasiswaKelasUpsertWithWhereUniqueWithoutKelasInput | MahasiswaKelasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: MahasiswaKelasCreateManyKelasInputEnvelope
    set?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    disconnect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    delete?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    update?: MahasiswaKelasUpdateWithWhereUniqueWithoutKelasInput | MahasiswaKelasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: MahasiswaKelasUpdateManyWithWhereWithoutKelasInput | MahasiswaKelasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
  }

  export type PertemuanAbsensiUpdateManyWithoutKelasNestedInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput> | PertemuanAbsensiCreateWithoutKelasInput[] | PertemuanAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutKelasInput | PertemuanAbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: PertemuanAbsensiUpsertWithWhereUniqueWithoutKelasInput | PertemuanAbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: PertemuanAbsensiCreateManyKelasInputEnvelope
    set?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    disconnect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    delete?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    update?: PertemuanAbsensiUpdateWithWhereUniqueWithoutKelasInput | PertemuanAbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: PertemuanAbsensiUpdateManyWithWhereWithoutKelasInput | PertemuanAbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
  }

  export type MahasiswaKelasUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput> | MahasiswaKelasCreateWithoutKelasInput[] | MahasiswaKelasUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: MahasiswaKelasCreateOrConnectWithoutKelasInput | MahasiswaKelasCreateOrConnectWithoutKelasInput[]
    upsert?: MahasiswaKelasUpsertWithWhereUniqueWithoutKelasInput | MahasiswaKelasUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: MahasiswaKelasCreateManyKelasInputEnvelope
    set?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    disconnect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    delete?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    connect?: MahasiswaKelasWhereUniqueInput | MahasiswaKelasWhereUniqueInput[]
    update?: MahasiswaKelasUpdateWithWhereUniqueWithoutKelasInput | MahasiswaKelasUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: MahasiswaKelasUpdateManyWithWhereWithoutKelasInput | MahasiswaKelasUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
  }

  export type PertemuanAbsensiUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput> | PertemuanAbsensiCreateWithoutKelasInput[] | PertemuanAbsensiUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: PertemuanAbsensiCreateOrConnectWithoutKelasInput | PertemuanAbsensiCreateOrConnectWithoutKelasInput[]
    upsert?: PertemuanAbsensiUpsertWithWhereUniqueWithoutKelasInput | PertemuanAbsensiUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: PertemuanAbsensiCreateManyKelasInputEnvelope
    set?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    disconnect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    delete?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    connect?: PertemuanAbsensiWhereUniqueInput | PertemuanAbsensiWhereUniqueInput[]
    update?: PertemuanAbsensiUpdateWithWhereUniqueWithoutKelasInput | PertemuanAbsensiUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: PertemuanAbsensiUpdateManyWithWhereWithoutKelasInput | PertemuanAbsensiUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
  }

  export type MahasiswaCreateNestedOneWithoutKelasInput = {
    create?: XOR<MahasiswaCreateWithoutKelasInput, MahasiswaUncheckedCreateWithoutKelasInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKelasInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutMahasiswaInput = {
    create?: XOR<KelasCreateWithoutMahasiswaInput, KelasUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: KelasCreateOrConnectWithoutMahasiswaInput
    connect?: KelasWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutKelasNestedInput = {
    create?: XOR<MahasiswaCreateWithoutKelasInput, MahasiswaUncheckedCreateWithoutKelasInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutKelasInput
    upsert?: MahasiswaUpsertWithoutKelasInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutKelasInput, MahasiswaUpdateWithoutKelasInput>, MahasiswaUncheckedUpdateWithoutKelasInput>
  }

  export type KelasUpdateOneRequiredWithoutMahasiswaNestedInput = {
    create?: XOR<KelasCreateWithoutMahasiswaInput, KelasUncheckedCreateWithoutMahasiswaInput>
    connectOrCreate?: KelasCreateOrConnectWithoutMahasiswaInput
    upsert?: KelasUpsertWithoutMahasiswaInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutMahasiswaInput, KelasUpdateWithoutMahasiswaInput>, KelasUncheckedUpdateWithoutMahasiswaInput>
  }

  export type KelasCreateNestedOneWithoutPertemuanInput = {
    create?: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: KelasCreateOrConnectWithoutPertemuanInput
    connect?: KelasWhereUniqueInput
  }

  export type MahasiswaCreateNestedOneWithoutPertemuanInput = {
    create?: XOR<MahasiswaCreateWithoutPertemuanInput, MahasiswaUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPertemuanInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type EnumStatusKehadiranFieldUpdateOperationsInput = {
    set?: $Enums.StatusKehadiran
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type KelasUpdateOneRequiredWithoutPertemuanNestedInput = {
    create?: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: KelasCreateOrConnectWithoutPertemuanInput
    upsert?: KelasUpsertWithoutPertemuanInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutPertemuanInput, KelasUpdateWithoutPertemuanInput>, KelasUncheckedUpdateWithoutPertemuanInput>
  }

  export type MahasiswaUpdateOneRequiredWithoutPertemuanNestedInput = {
    create?: XOR<MahasiswaCreateWithoutPertemuanInput, MahasiswaUncheckedCreateWithoutPertemuanInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutPertemuanInput
    upsert?: MahasiswaUpsertWithoutPertemuanInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<XOR<MahasiswaUpdateToOneWithWhereWithoutPertemuanInput, MahasiswaUpdateWithoutPertemuanInput>, MahasiswaUncheckedUpdateWithoutPertemuanInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type KelasCreateWithoutDosenUtamaInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenPendamping?: DosenCreateNestedOneWithoutKelasPendampingInput
    mahasiswa?: MahasiswaKelasCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutDosenUtamaInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenPendampingId?: string | null
    mahasiswa?: MahasiswaKelasUncheckedCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutDosenUtamaInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput>
  }

  export type KelasCreateManyDosenUtamaInputEnvelope = {
    data: KelasCreateManyDosenUtamaInput | KelasCreateManyDosenUtamaInput[]
    skipDuplicates?: boolean
  }

  export type KelasCreateWithoutDosenPendampingInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtama: DosenCreateNestedOneWithoutKelasUtamaInput
    mahasiswa?: MahasiswaKelasCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutDosenPendampingInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
    mahasiswa?: MahasiswaKelasUncheckedCreateNestedManyWithoutKelasInput
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutDosenPendampingInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput>
  }

  export type KelasCreateManyDosenPendampingInputEnvelope = {
    data: KelasCreateManyDosenPendampingInput | KelasCreateManyDosenPendampingInput[]
    skipDuplicates?: boolean
  }

  export type KelasUpsertWithWhereUniqueWithoutDosenUtamaInput = {
    where: KelasWhereUniqueInput
    update: XOR<KelasUpdateWithoutDosenUtamaInput, KelasUncheckedUpdateWithoutDosenUtamaInput>
    create: XOR<KelasCreateWithoutDosenUtamaInput, KelasUncheckedCreateWithoutDosenUtamaInput>
  }

  export type KelasUpdateWithWhereUniqueWithoutDosenUtamaInput = {
    where: KelasWhereUniqueInput
    data: XOR<KelasUpdateWithoutDosenUtamaInput, KelasUncheckedUpdateWithoutDosenUtamaInput>
  }

  export type KelasUpdateManyWithWhereWithoutDosenUtamaInput = {
    where: KelasScalarWhereInput
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyWithoutDosenUtamaInput>
  }

  export type KelasScalarWhereInput = {
    AND?: KelasScalarWhereInput | KelasScalarWhereInput[]
    OR?: KelasScalarWhereInput[]
    NOT?: KelasScalarWhereInput | KelasScalarWhereInput[]
    id?: StringFilter<"Kelas"> | string
    kodeKelas?: StringFilter<"Kelas"> | string
    namaKelas?: StringFilter<"Kelas"> | string
    deskripsi?: StringNullableFilter<"Kelas"> | string | null
    pinKelas?: StringFilter<"Kelas"> | string
    hariPertemuan?: StringFilter<"Kelas"> | string
    jumlahPertemuan?: IntFilter<"Kelas"> | number
    statusAktif?: BoolFilter<"Kelas"> | boolean
    createdAt?: DateTimeFilter<"Kelas"> | Date | string
    updatedAt?: DateTimeFilter<"Kelas"> | Date | string
    dosenUtamaId?: StringFilter<"Kelas"> | string
    dosenPendampingId?: StringNullableFilter<"Kelas"> | string | null
  }

  export type KelasUpsertWithWhereUniqueWithoutDosenPendampingInput = {
    where: KelasWhereUniqueInput
    update: XOR<KelasUpdateWithoutDosenPendampingInput, KelasUncheckedUpdateWithoutDosenPendampingInput>
    create: XOR<KelasCreateWithoutDosenPendampingInput, KelasUncheckedCreateWithoutDosenPendampingInput>
  }

  export type KelasUpdateWithWhereUniqueWithoutDosenPendampingInput = {
    where: KelasWhereUniqueInput
    data: XOR<KelasUpdateWithoutDosenPendampingInput, KelasUncheckedUpdateWithoutDosenPendampingInput>
  }

  export type KelasUpdateManyWithWhereWithoutDosenPendampingInput = {
    where: KelasScalarWhereInput
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyWithoutDosenPendampingInput>
  }

  export type MahasiswaKelasCreateWithoutMahasiswaInput = {
    id?: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutMahasiswaInput
  }

  export type MahasiswaKelasUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    kelasId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasCreateOrConnectWithoutMahasiswaInput = {
    where: MahasiswaKelasWhereUniqueInput
    create: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput>
  }

  export type MahasiswaKelasCreateManyMahasiswaInputEnvelope = {
    data: MahasiswaKelasCreateManyMahasiswaInput | MahasiswaKelasCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type PertemuanAbsensiCreateWithoutMahasiswaInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas: KelasCreateNestedOneWithoutPertemuanInput
  }

  export type PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    kelasId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiCreateOrConnectWithoutMahasiswaInput = {
    where: PertemuanAbsensiWhereUniqueInput
    create: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput>
  }

  export type PertemuanAbsensiCreateManyMahasiswaInputEnvelope = {
    data: PertemuanAbsensiCreateManyMahasiswaInput | PertemuanAbsensiCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type MahasiswaKelasUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: MahasiswaKelasWhereUniqueInput
    update: XOR<MahasiswaKelasUpdateWithoutMahasiswaInput, MahasiswaKelasUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<MahasiswaKelasCreateWithoutMahasiswaInput, MahasiswaKelasUncheckedCreateWithoutMahasiswaInput>
  }

  export type MahasiswaKelasUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: MahasiswaKelasWhereUniqueInput
    data: XOR<MahasiswaKelasUpdateWithoutMahasiswaInput, MahasiswaKelasUncheckedUpdateWithoutMahasiswaInput>
  }

  export type MahasiswaKelasUpdateManyWithWhereWithoutMahasiswaInput = {
    where: MahasiswaKelasScalarWhereInput
    data: XOR<MahasiswaKelasUpdateManyMutationInput, MahasiswaKelasUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type MahasiswaKelasScalarWhereInput = {
    AND?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
    OR?: MahasiswaKelasScalarWhereInput[]
    NOT?: MahasiswaKelasScalarWhereInput | MahasiswaKelasScalarWhereInput[]
    id?: StringFilter<"MahasiswaKelas"> | string
    mahasiswaId?: StringFilter<"MahasiswaKelas"> | string
    kelasId?: StringFilter<"MahasiswaKelas"> | string
    tanggalGabung?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    statusAktif?: BoolFilter<"MahasiswaKelas"> | boolean
    createdAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
    updatedAt?: DateTimeFilter<"MahasiswaKelas"> | Date | string
  }

  export type PertemuanAbsensiUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: PertemuanAbsensiWhereUniqueInput
    update: XOR<PertemuanAbsensiUpdateWithoutMahasiswaInput, PertemuanAbsensiUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<PertemuanAbsensiCreateWithoutMahasiswaInput, PertemuanAbsensiUncheckedCreateWithoutMahasiswaInput>
  }

  export type PertemuanAbsensiUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: PertemuanAbsensiWhereUniqueInput
    data: XOR<PertemuanAbsensiUpdateWithoutMahasiswaInput, PertemuanAbsensiUncheckedUpdateWithoutMahasiswaInput>
  }

  export type PertemuanAbsensiUpdateManyWithWhereWithoutMahasiswaInput = {
    where: PertemuanAbsensiScalarWhereInput
    data: XOR<PertemuanAbsensiUpdateManyMutationInput, PertemuanAbsensiUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type PertemuanAbsensiScalarWhereInput = {
    AND?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
    OR?: PertemuanAbsensiScalarWhereInput[]
    NOT?: PertemuanAbsensiScalarWhereInput | PertemuanAbsensiScalarWhereInput[]
    id?: StringFilter<"PertemuanAbsensi"> | string
    nomorPertemuan?: IntFilter<"PertemuanAbsensi"> | number
    tanggalPertemuan?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    topik?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    catatan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    mahasiswaId?: StringFilter<"PertemuanAbsensi"> | string
    statusKehadiran?: EnumStatusKehadiranFilter<"PertemuanAbsensi"> | $Enums.StatusKehadiran
    jamAbsen?: DateTimeNullableFilter<"PertemuanAbsensi"> | Date | string | null
    lokasi?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    keterangan?: StringNullableFilter<"PertemuanAbsensi"> | string | null
    kelasId?: StringFilter<"PertemuanAbsensi"> | string
    createdAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
    updatedAt?: DateTimeFilter<"PertemuanAbsensi"> | Date | string
  }

  export type DosenCreateWithoutKelasUtamaInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasPendamping?: KelasCreateNestedManyWithoutDosenPendampingInput
  }

  export type DosenUncheckedCreateWithoutKelasUtamaInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasPendamping?: KelasUncheckedCreateNestedManyWithoutDosenPendampingInput
  }

  export type DosenCreateOrConnectWithoutKelasUtamaInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutKelasUtamaInput, DosenUncheckedCreateWithoutKelasUtamaInput>
  }

  export type DosenCreateWithoutKelasPendampingInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasUtama?: KelasCreateNestedManyWithoutDosenUtamaInput
  }

  export type DosenUncheckedCreateWithoutKelasPendampingInput = {
    id?: string
    nip: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelasUtama?: KelasUncheckedCreateNestedManyWithoutDosenUtamaInput
  }

  export type DosenCreateOrConnectWithoutKelasPendampingInput = {
    where: DosenWhereUniqueInput
    create: XOR<DosenCreateWithoutKelasPendampingInput, DosenUncheckedCreateWithoutKelasPendampingInput>
  }

  export type MahasiswaKelasCreateWithoutKelasInput = {
    id?: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutKelasInput
  }

  export type MahasiswaKelasUncheckedCreateWithoutKelasInput = {
    id?: string
    mahasiswaId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasCreateOrConnectWithoutKelasInput = {
    where: MahasiswaKelasWhereUniqueInput
    create: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput>
  }

  export type MahasiswaKelasCreateManyKelasInputEnvelope = {
    data: MahasiswaKelasCreateManyKelasInput | MahasiswaKelasCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type PertemuanAbsensiCreateWithoutKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mahasiswa: MahasiswaCreateNestedOneWithoutPertemuanInput
  }

  export type PertemuanAbsensiUncheckedCreateWithoutKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    mahasiswaId: string
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiCreateOrConnectWithoutKelasInput = {
    where: PertemuanAbsensiWhereUniqueInput
    create: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput>
  }

  export type PertemuanAbsensiCreateManyKelasInputEnvelope = {
    data: PertemuanAbsensiCreateManyKelasInput | PertemuanAbsensiCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type DosenUpsertWithoutKelasUtamaInput = {
    update: XOR<DosenUpdateWithoutKelasUtamaInput, DosenUncheckedUpdateWithoutKelasUtamaInput>
    create: XOR<DosenCreateWithoutKelasUtamaInput, DosenUncheckedCreateWithoutKelasUtamaInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutKelasUtamaInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutKelasUtamaInput, DosenUncheckedUpdateWithoutKelasUtamaInput>
  }

  export type DosenUpdateWithoutKelasUtamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasPendamping?: KelasUpdateManyWithoutDosenPendampingNestedInput
  }

  export type DosenUncheckedUpdateWithoutKelasUtamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasPendamping?: KelasUncheckedUpdateManyWithoutDosenPendampingNestedInput
  }

  export type DosenUpsertWithoutKelasPendampingInput = {
    update: XOR<DosenUpdateWithoutKelasPendampingInput, DosenUncheckedUpdateWithoutKelasPendampingInput>
    create: XOR<DosenCreateWithoutKelasPendampingInput, DosenUncheckedCreateWithoutKelasPendampingInput>
    where?: DosenWhereInput
  }

  export type DosenUpdateToOneWithWhereWithoutKelasPendampingInput = {
    where?: DosenWhereInput
    data: XOR<DosenUpdateWithoutKelasPendampingInput, DosenUncheckedUpdateWithoutKelasPendampingInput>
  }

  export type DosenUpdateWithoutKelasPendampingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasUtama?: KelasUpdateManyWithoutDosenUtamaNestedInput
  }

  export type DosenUncheckedUpdateWithoutKelasPendampingInput = {
    id?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasUtama?: KelasUncheckedUpdateManyWithoutDosenUtamaNestedInput
  }

  export type MahasiswaKelasUpsertWithWhereUniqueWithoutKelasInput = {
    where: MahasiswaKelasWhereUniqueInput
    update: XOR<MahasiswaKelasUpdateWithoutKelasInput, MahasiswaKelasUncheckedUpdateWithoutKelasInput>
    create: XOR<MahasiswaKelasCreateWithoutKelasInput, MahasiswaKelasUncheckedCreateWithoutKelasInput>
  }

  export type MahasiswaKelasUpdateWithWhereUniqueWithoutKelasInput = {
    where: MahasiswaKelasWhereUniqueInput
    data: XOR<MahasiswaKelasUpdateWithoutKelasInput, MahasiswaKelasUncheckedUpdateWithoutKelasInput>
  }

  export type MahasiswaKelasUpdateManyWithWhereWithoutKelasInput = {
    where: MahasiswaKelasScalarWhereInput
    data: XOR<MahasiswaKelasUpdateManyMutationInput, MahasiswaKelasUncheckedUpdateManyWithoutKelasInput>
  }

  export type PertemuanAbsensiUpsertWithWhereUniqueWithoutKelasInput = {
    where: PertemuanAbsensiWhereUniqueInput
    update: XOR<PertemuanAbsensiUpdateWithoutKelasInput, PertemuanAbsensiUncheckedUpdateWithoutKelasInput>
    create: XOR<PertemuanAbsensiCreateWithoutKelasInput, PertemuanAbsensiUncheckedCreateWithoutKelasInput>
  }

  export type PertemuanAbsensiUpdateWithWhereUniqueWithoutKelasInput = {
    where: PertemuanAbsensiWhereUniqueInput
    data: XOR<PertemuanAbsensiUpdateWithoutKelasInput, PertemuanAbsensiUncheckedUpdateWithoutKelasInput>
  }

  export type PertemuanAbsensiUpdateManyWithWhereWithoutKelasInput = {
    where: PertemuanAbsensiScalarWhereInput
    data: XOR<PertemuanAbsensiUpdateManyMutationInput, PertemuanAbsensiUncheckedUpdateManyWithoutKelasInput>
  }

  export type MahasiswaCreateWithoutKelasInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutKelasInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutKelasInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutKelasInput, MahasiswaUncheckedCreateWithoutKelasInput>
  }

  export type KelasCreateWithoutMahasiswaInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtama: DosenCreateNestedOneWithoutKelasUtamaInput
    dosenPendamping?: DosenCreateNestedOneWithoutKelasPendampingInput
    pertemuan?: PertemuanAbsensiCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutMahasiswaInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
    dosenPendampingId?: string | null
    pertemuan?: PertemuanAbsensiUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutMahasiswaInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutMahasiswaInput, KelasUncheckedCreateWithoutMahasiswaInput>
  }

  export type MahasiswaUpsertWithoutKelasInput = {
    update: XOR<MahasiswaUpdateWithoutKelasInput, MahasiswaUncheckedUpdateWithoutKelasInput>
    create: XOR<MahasiswaCreateWithoutKelasInput, MahasiswaUncheckedCreateWithoutKelasInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutKelasInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutKelasInput, MahasiswaUncheckedUpdateWithoutKelasInput>
  }

  export type MahasiswaUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuan?: PertemuanAbsensiUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type KelasUpsertWithoutMahasiswaInput = {
    update: XOR<KelasUpdateWithoutMahasiswaInput, KelasUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<KelasCreateWithoutMahasiswaInput, KelasUncheckedCreateWithoutMahasiswaInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutMahasiswaInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutMahasiswaInput, KelasUncheckedUpdateWithoutMahasiswaInput>
  }

  export type KelasUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtama?: DosenUpdateOneRequiredWithoutKelasUtamaNestedInput
    dosenPendamping?: DosenUpdateOneWithoutKelasPendampingNestedInput
    pertemuan?: PertemuanAbsensiUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateWithoutPertemuanInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtama: DosenCreateNestedOneWithoutKelasUtamaInput
    dosenPendamping?: DosenCreateNestedOneWithoutKelasPendampingInput
    mahasiswa?: MahasiswaKelasCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutPertemuanInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
    dosenPendampingId?: string | null
    mahasiswa?: MahasiswaKelasUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutPertemuanInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutPertemuanInput, KelasUncheckedCreateWithoutPertemuanInput>
  }

  export type MahasiswaCreateWithoutPertemuanInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas?: MahasiswaKelasCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaUncheckedCreateWithoutPertemuanInput = {
    id?: string
    nim: string
    nama: string
    email: string
    password: string
    noHP?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kelas?: MahasiswaKelasUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type MahasiswaCreateOrConnectWithoutPertemuanInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutPertemuanInput, MahasiswaUncheckedCreateWithoutPertemuanInput>
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
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtama?: DosenUpdateOneRequiredWithoutKelasUtamaNestedInput
    dosenPendamping?: DosenUpdateOneWithoutKelasPendampingNestedInput
    mahasiswa?: MahasiswaKelasUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: MahasiswaKelasUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type MahasiswaUpsertWithoutPertemuanInput = {
    update: XOR<MahasiswaUpdateWithoutPertemuanInput, MahasiswaUncheckedUpdateWithoutPertemuanInput>
    create: XOR<MahasiswaCreateWithoutPertemuanInput, MahasiswaUncheckedCreateWithoutPertemuanInput>
    where?: MahasiswaWhereInput
  }

  export type MahasiswaUpdateToOneWithWhereWithoutPertemuanInput = {
    where?: MahasiswaWhereInput
    data: XOR<MahasiswaUpdateWithoutPertemuanInput, MahasiswaUncheckedUpdateWithoutPertemuanInput>
  }

  export type MahasiswaUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: MahasiswaKelasUpdateManyWithoutMahasiswaNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutPertemuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    noHP?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: MahasiswaKelasUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type KelasCreateManyDosenUtamaInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenPendampingId?: string | null
  }

  export type KelasCreateManyDosenPendampingInput = {
    id?: string
    kodeKelas: string
    namaKelas: string
    deskripsi?: string | null
    pinKelas: string
    hariPertemuan: string
    jumlahPertemuan: number
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dosenUtamaId: string
  }

  export type KelasUpdateWithoutDosenUtamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenPendamping?: DosenUpdateOneWithoutKelasPendampingNestedInput
    mahasiswa?: MahasiswaKelasUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutDosenUtamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswa?: MahasiswaKelasUncheckedUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateManyWithoutDosenUtamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenPendampingId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KelasUpdateWithoutDosenPendampingInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtama?: DosenUpdateOneRequiredWithoutKelasUtamaNestedInput
    mahasiswa?: MahasiswaKelasUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutDosenPendampingInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
    mahasiswa?: MahasiswaKelasUncheckedUpdateManyWithoutKelasNestedInput
    pertemuan?: PertemuanAbsensiUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateManyWithoutDosenPendampingInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeKelas?: StringFieldUpdateOperationsInput | string
    namaKelas?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    pinKelas?: StringFieldUpdateOperationsInput | string
    hariPertemuan?: StringFieldUpdateOperationsInput | string
    jumlahPertemuan?: IntFieldUpdateOperationsInput | number
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dosenUtamaId?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaKelasCreateManyMahasiswaInput = {
    id?: string
    kelasId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiCreateManyMahasiswaInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    kelasId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutMahasiswaNestedInput
  }

  export type MahasiswaKelasUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaKelasUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas?: KelasUpdateOneRequiredWithoutPertemuanNestedInput
  }

  export type PertemuanAbsensiUncheckedUpdateWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiUncheckedUpdateManyWithoutMahasiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    kelasId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaKelasCreateManyKelasInput = {
    id?: string
    mahasiswaId: string
    tanggalGabung?: Date | string
    statusAktif?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PertemuanAbsensiCreateManyKelasInput = {
    id?: string
    nomorPertemuan: number
    tanggalPertemuan: Date | string
    topik?: string | null
    catatan?: string | null
    mahasiswaId: string
    statusKehadiran?: $Enums.StatusKehadiran
    jamAbsen?: Date | string | null
    lokasi?: string | null
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MahasiswaKelasUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutKelasNestedInput
  }

  export type MahasiswaKelasUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaKelasUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    tanggalGabung?: DateTimeFieldUpdateOperationsInput | Date | string
    statusAktif?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mahasiswa?: MahasiswaUpdateOneRequiredWithoutPertemuanNestedInput
  }

  export type PertemuanAbsensiUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PertemuanAbsensiUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomorPertemuan?: IntFieldUpdateOperationsInput | number
    tanggalPertemuan?: DateTimeFieldUpdateOperationsInput | Date | string
    topik?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    mahasiswaId?: StringFieldUpdateOperationsInput | string
    statusKehadiran?: EnumStatusKehadiranFieldUpdateOperationsInput | $Enums.StatusKehadiran
    jamAbsen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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