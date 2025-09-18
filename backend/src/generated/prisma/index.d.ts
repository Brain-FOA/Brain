
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Especialidade
 * 
 */
export type Especialidade = $Result.DefaultSelection<Prisma.$EspecialidadePayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidade`: Exposes CRUD operations for the **Especialidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidade.findMany()
    * ```
    */
  get especialidade(): Prisma.EspecialidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Usuario: 'Usuario',
    Especialidade: 'Especialidade',
    Feedback: 'Feedback',
    Endereco: 'Endereco',
    Professional: 'Professional'
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
      modelProps: "usuario" | "especialidade" | "feedback" | "endereco" | "professional"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Especialidade: {
        payload: Prisma.$EspecialidadePayload<ExtArgs>
        fields: Prisma.EspecialidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findFirst: {
            args: Prisma.EspecialidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findMany: {
            args: Prisma.EspecialidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          create: {
            args: Prisma.EspecialidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          createMany: {
            args: Prisma.EspecialidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspecialidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          update: {
            args: Prisma.EspecialidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          aggregate: {
            args: Prisma.EspecialidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidade>
          }
          groupBy: {
            args: Prisma.EspecialidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadeCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    especialidade?: EspecialidadeOmit
    feedback?: FeedbackOmit
    endereco?: EnderecoOmit
    professional?: ProfessionalOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    feedbacks: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | UsuarioCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type EspecialidadeCountOutputType
   */

  export type EspecialidadeCountOutputType = {
    profissional: number
  }

  export type EspecialidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | EspecialidadeCountOutputTypeCountProfissionalArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadeCountOutputType
     */
    select?: EspecialidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeCountProfissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
    acesso: string | null
    deletedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    foto: string | null
    acesso: string | null
    deletedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    foto: number
    acesso: number
    deletedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    acesso?: true
    deletedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    acesso?: true
    deletedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    foto?: true
    acesso?: true
    deletedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    foto: string | null
    acesso: string
    deletedAt: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    acesso?: boolean
    deletedAt?: boolean
    feedbacks?: boolean | Usuario$feedbacksArgs<ExtArgs>
    endereco?: boolean | Usuario$enderecoArgs<ExtArgs>
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    foto?: boolean
    acesso?: boolean
    deletedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "foto" | "acesso" | "deletedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | Usuario$feedbacksArgs<ExtArgs>
    endereco?: boolean | Usuario$enderecoArgs<ExtArgs>
    profissional?: boolean | Usuario$profissionalArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      endereco: Prisma.$EnderecoPayload<ExtArgs> | null
      profissional: Prisma.$ProfessionalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      foto: string | null
      acesso: string
      deletedAt: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedbacks<T extends Usuario$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endereco<T extends Usuario$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$enderecoArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profissional<T extends Usuario$profissionalArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$profissionalArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly foto: FieldRef<"Usuario", 'String'>
    readonly acesso: FieldRef<"Usuario", 'String'>
    readonly deletedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.feedbacks
   */
  export type Usuario$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Usuario.endereco
   */
  export type Usuario$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
  }

  /**
   * Usuario.profissional
   */
  export type Usuario$profissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Especialidade
   */

  export type AggregateEspecialidade = {
    _count: EspecialidadeCountAggregateOutputType | null
    _avg: EspecialidadeAvgAggregateOutputType | null
    _sum: EspecialidadeSumAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  export type EspecialidadeAvgAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadeSumAggregateOutputType = {
    id: number | null
  }

  export type EspecialidadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type EspecialidadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type EspecialidadeCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type EspecialidadeAvgAggregateInputType = {
    id?: true
  }

  export type EspecialidadeSumAggregateInputType = {
    id?: true
  }

  export type EspecialidadeMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EspecialidadeMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EspecialidadeCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type EspecialidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidade to aggregate.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidades
    **/
    _count?: true | EspecialidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type GetEspecialidadeAggregateType<T extends EspecialidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidade[P]>
      : GetScalarType<T[P], AggregateEspecialidade[P]>
  }




  export type EspecialidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithAggregationInput | EspecialidadeOrderByWithAggregationInput[]
    by: EspecialidadeScalarFieldEnum[] | EspecialidadeScalarFieldEnum
    having?: EspecialidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadeCountAggregateInputType | true
    _avg?: EspecialidadeAvgAggregateInputType
    _sum?: EspecialidadeSumAggregateInputType
    _min?: EspecialidadeMinAggregateInputType
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type EspecialidadeGroupByOutputType = {
    id: number
    nome: string
    _count: EspecialidadeCountAggregateOutputType | null
    _avg: EspecialidadeAvgAggregateOutputType | null
    _sum: EspecialidadeSumAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  type GetEspecialidadeGroupByPayload<T extends EspecialidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    profissional?: boolean | Especialidade$profissionalArgs<ExtArgs>
    _count?: boolean | EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidade"]>



  export type EspecialidadeSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type EspecialidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["especialidade"]>
  export type EspecialidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | Especialidade$profissionalArgs<ExtArgs>
    _count?: boolean | EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EspecialidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidade"
    objects: {
      profissional: Prisma.$ProfessionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["especialidade"]>
    composites: {}
  }

  type EspecialidadeGetPayload<S extends boolean | null | undefined | EspecialidadeDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadePayload, S>

  type EspecialidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadeCountAggregateInputType | true
    }

  export interface EspecialidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidade'], meta: { name: 'Especialidade' } }
    /**
     * Find zero or one Especialidade that matches the filter.
     * @param {EspecialidadeFindUniqueArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadeFindUniqueArgs>(args: SelectSubset<T, EspecialidadeFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadeFindFirstArgs>(args?: SelectSubset<T, EspecialidadeFindFirstArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidade.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadeFindManyArgs>(args?: SelectSubset<T, EspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidade.
     * @param {EspecialidadeCreateArgs} args - Arguments to create a Especialidade.
     * @example
     * // Create one Especialidade
     * const Especialidade = await prisma.especialidade.create({
     *   data: {
     *     // ... data to create a Especialidade
     *   }
     * })
     * 
     */
    create<T extends EspecialidadeCreateArgs>(args: SelectSubset<T, EspecialidadeCreateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidades.
     * @param {EspecialidadeCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadeCreateManyArgs>(args?: SelectSubset<T, EspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidade.
     * @param {EspecialidadeDeleteArgs} args - Arguments to delete one Especialidade.
     * @example
     * // Delete one Especialidade
     * const Especialidade = await prisma.especialidade.delete({
     *   where: {
     *     // ... filter to delete one Especialidade
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadeDeleteArgs>(args: SelectSubset<T, EspecialidadeDeleteArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidade.
     * @param {EspecialidadeUpdateArgs} args - Arguments to update one Especialidade.
     * @example
     * // Update one Especialidade
     * const especialidade = await prisma.especialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadeUpdateArgs>(args: SelectSubset<T, EspecialidadeUpdateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidades.
     * @param {EspecialidadeDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadeDeleteManyArgs>(args?: SelectSubset<T, EspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadeUpdateManyArgs>(args: SelectSubset<T, EspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidade.
     * @param {EspecialidadeUpsertArgs} args - Arguments to update or create a Especialidade.
     * @example
     * // Update or create a Especialidade
     * const especialidade = await prisma.especialidade.upsert({
     *   create: {
     *     // ... data to create a Especialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidade we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadeUpsertArgs>(args: SelectSubset<T, EspecialidadeUpsertArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidade.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadeCountArgs>(
      args?: Subset<T, EspecialidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadeAggregateArgs>(args: Subset<T, EspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadeAggregateType<T>>

    /**
     * Group by Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadeGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidade model
   */
  readonly fields: EspecialidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends Especialidade$profissionalArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$profissionalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidade model
   */
  interface EspecialidadeFieldRefs {
    readonly id: FieldRef<"Especialidade", 'Int'>
    readonly nome: FieldRef<"Especialidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidade findUnique
   */
  export type EspecialidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findUniqueOrThrow
   */
  export type EspecialidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findFirst
   */
  export type EspecialidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findFirstOrThrow
   */
  export type EspecialidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findMany
   */
  export type EspecialidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidades to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade create
   */
  export type EspecialidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidade.
     */
    data: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
  }

  /**
   * Especialidade createMany
   */
  export type EspecialidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidades.
     */
    data: EspecialidadeCreateManyInput | EspecialidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidade update
   */
  export type EspecialidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidade.
     */
    data: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
    /**
     * Choose, which Especialidade to update.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade updateMany
   */
  export type EspecialidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidades.
     */
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which Especialidades to update
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number
  }

  /**
   * Especialidade upsert
   */
  export type EspecialidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidade to update in case it exists.
     */
    where: EspecialidadeWhereUniqueInput
    /**
     * In case the Especialidade found by the `where` argument doesn't exist, create a new Especialidade with this data.
     */
    create: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
    /**
     * In case the Especialidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
  }

  /**
   * Especialidade delete
   */
  export type EspecialidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter which Especialidade to delete.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade deleteMany
   */
  export type EspecialidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidades to delete
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to delete.
     */
    limit?: number
  }

  /**
   * Especialidade.profissional
   */
  export type Especialidade$profissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    cursor?: ProfessionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Especialidade without action
   */
  export type EspecialidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    createdAt: number
    userId: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    createdAt?: true
    userId?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    createdAt?: true
    userId?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string
    createdAt: Date
    userId: number
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    createdAt?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>



  export type FeedbackSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "createdAt" | "userId", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly titulo: FieldRef<"Feedback", 'String'>
    readonly conteudo: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly userId: FieldRef<"Feedback", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    cep: string | null
    cidade: string | null
    bairro: string | null
    numero: string | null
    usuarioId: number | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    cidade: string | null
    bairro: string | null
    numero: string | null
    usuarioId: number | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    cep: number
    cidade: number
    bairro: number
    numero: number
    usuarioId: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    bairro?: true
    numero?: true
    usuarioId?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    bairro?: true
    numero?: true
    usuarioId?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    cep?: true
    cidade?: true
    bairro?: true
    numero?: true
    usuarioId?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    cep: string
    cidade: string
    bairro: string
    numero: string
    usuarioId: number
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    cidade?: boolean
    bairro?: boolean
    numero?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>



  export type EnderecoSelectScalar = {
    id?: boolean
    cep?: boolean
    cidade?: boolean
    bairro?: boolean
    numero?: boolean
    usuarioId?: boolean
  }

  export type EnderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "cidade" | "bairro" | "numero" | "usuarioId", ExtArgs["result"]["endereco"]>
  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      cidade: string
      bairro: string
      numero: string
      usuarioId: number
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
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
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endereco model
   */
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'Int'>
    readonly cep: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'String'>
    readonly usuarioId: FieldRef<"Endereco", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to update.
     */
    limit?: number
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
    /**
     * Limit how many Enderecos to delete.
     */
    limit?: number
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endereco
     */
    omit?: EnderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    id: number | null
    especialidadeId: number | null
    usuarioId: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    id: number | null
    especialidadeId: number | null
    usuarioId: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    id: number | null
    telefone: string | null
    crp: string | null
    descricao: string | null
    cpf: string | null
    aprovacao: boolean | null
    especialidadeId: number | null
    usuarioId: number | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    id: number | null
    telefone: string | null
    crp: string | null
    descricao: string | null
    cpf: string | null
    aprovacao: boolean | null
    especialidadeId: number | null
    usuarioId: number | null
  }

  export type ProfessionalCountAggregateOutputType = {
    id: number
    telefone: number
    crp: number
    descricao: number
    cpf: number
    aprovacao: number
    especialidadeId: number
    usuarioId: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    id?: true
    especialidadeId?: true
    usuarioId?: true
  }

  export type ProfessionalSumAggregateInputType = {
    id?: true
    especialidadeId?: true
    usuarioId?: true
  }

  export type ProfessionalMinAggregateInputType = {
    id?: true
    telefone?: true
    crp?: true
    descricao?: true
    cpf?: true
    aprovacao?: true
    especialidadeId?: true
    usuarioId?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    id?: true
    telefone?: true
    crp?: true
    descricao?: true
    cpf?: true
    aprovacao?: true
    especialidadeId?: true
    usuarioId?: true
  }

  export type ProfessionalCountAggregateInputType = {
    id?: true
    telefone?: true
    crp?: true
    descricao?: true
    cpf?: true
    aprovacao?: true
    especialidadeId?: true
    usuarioId?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    id: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao: boolean | null
    especialidadeId: number
    usuarioId: number
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telefone?: boolean
    crp?: boolean
    descricao?: boolean
    cpf?: boolean
    aprovacao?: boolean
    especialidadeId?: boolean
    usuarioId?: boolean
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>



  export type ProfessionalSelectScalar = {
    id?: boolean
    telefone?: boolean
    crp?: boolean
    descricao?: boolean
    cpf?: boolean
    aprovacao?: boolean
    especialidadeId?: boolean
    usuarioId?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telefone" | "crp" | "descricao" | "cpf" | "aprovacao" | "especialidadeId" | "usuarioId", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      especialidade: Prisma.$EspecialidadePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telefone: string
      crp: string
      descricao: string
      cpf: string
      aprovacao: boolean | null
      especialidadeId: number
      usuarioId: number
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalWithIdOnly = await prisma.professional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidade<T extends EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadeDefaultArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly id: FieldRef<"Professional", 'Int'>
    readonly telefone: FieldRef<"Professional", 'String'>
    readonly crp: FieldRef<"Professional", 'String'>
    readonly descricao: FieldRef<"Professional", 'String'>
    readonly cpf: FieldRef<"Professional", 'String'>
    readonly aprovacao: FieldRef<"Professional", 'Boolean'>
    readonly especialidadeId: FieldRef<"Professional", 'Int'>
    readonly usuarioId: FieldRef<"Professional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    foto: 'foto',
    acesso: 'acesso',
    deletedAt: 'deletedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EspecialidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type EspecialidadeScalarFieldEnum = (typeof EspecialidadeScalarFieldEnum)[keyof typeof EspecialidadeScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    cidade: 'cidade',
    bairro: 'bairro',
    numero: 'numero',
    usuarioId: 'usuarioId'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    id: 'id',
    telefone: 'telefone',
    crp: 'crp',
    descricao: 'descricao',
    cpf: 'cpf',
    aprovacao: 'aprovacao',
    especialidadeId: 'especialidadeId',
    usuarioId: 'usuarioId'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    foto: 'foto',
    acesso: 'acesso'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const EspecialidadeOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type EspecialidadeOrderByRelevanceFieldEnum = (typeof EspecialidadeOrderByRelevanceFieldEnum)[keyof typeof EspecialidadeOrderByRelevanceFieldEnum]


  export const FeedbackOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    conteudo: 'conteudo'
  };

  export type FeedbackOrderByRelevanceFieldEnum = (typeof FeedbackOrderByRelevanceFieldEnum)[keyof typeof FeedbackOrderByRelevanceFieldEnum]


  export const EnderecoOrderByRelevanceFieldEnum: {
    cep: 'cep',
    cidade: 'cidade',
    bairro: 'bairro',
    numero: 'numero'
  };

  export type EnderecoOrderByRelevanceFieldEnum = (typeof EnderecoOrderByRelevanceFieldEnum)[keyof typeof EnderecoOrderByRelevanceFieldEnum]


  export const ProfessionalOrderByRelevanceFieldEnum: {
    telefone: 'telefone',
    crp: 'crp',
    descricao: 'descricao',
    cpf: 'cpf'
  };

  export type ProfessionalOrderByRelevanceFieldEnum = (typeof ProfessionalOrderByRelevanceFieldEnum)[keyof typeof ProfessionalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    acesso?: StringFilter<"Usuario"> | string
    deletedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    feedbacks?: FeedbackListRelationFilter
    endereco?: XOR<EnderecoNullableScalarRelationFilter, EnderecoWhereInput> | null
    profissional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
    acesso?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    feedbacks?: FeedbackOrderByRelationAggregateInput
    endereco?: EnderecoOrderByWithRelationInput
    profissional?: ProfessionalOrderByWithRelationInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    acesso?: StringFilter<"Usuario"> | string
    deletedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    feedbacks?: FeedbackListRelationFilter
    endereco?: XOR<EnderecoNullableScalarRelationFilter, EnderecoWhereInput> | null
    profissional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrderInput | SortOrder
    acesso?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    foto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    acesso?: StringWithAggregatesFilter<"Usuario"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type EspecialidadeWhereInput = {
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    id?: IntFilter<"Especialidade"> | number
    nome?: StringFilter<"Especialidade"> | string
    profissional?: ProfessionalListRelationFilter
  }

  export type EspecialidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    profissional?: ProfessionalOrderByRelationAggregateInput
    _relevance?: EspecialidadeOrderByRelevanceInput
  }

  export type EspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    profissional?: ProfessionalListRelationFilter
  }, "id" | "nome">

  export type EspecialidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: EspecialidadeCountOrderByAggregateInput
    _avg?: EspecialidadeAvgOrderByAggregateInput
    _max?: EspecialidadeMaxOrderByAggregateInput
    _min?: EspecialidadeMinOrderByAggregateInput
    _sum?: EspecialidadeSumOrderByAggregateInput
  }

  export type EspecialidadeScalarWhereWithAggregatesInput = {
    AND?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    OR?: EspecialidadeScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Especialidade"> | number
    nome?: StringWithAggregatesFilter<"Especialidade"> | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    titulo?: StringFilter<"Feedback"> | string
    conteudo?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    userId?: IntFilter<"Feedback"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: FeedbackOrderByRelevanceInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    titulo?: StringFilter<"Feedback"> | string
    conteudo?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    userId?: IntFilter<"Feedback"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    titulo?: StringWithAggregatesFilter<"Feedback"> | string
    conteudo?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    userId?: IntWithAggregatesFilter<"Feedback"> | number
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: IntFilter<"Endereco"> | number
    cep?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    usuarioId?: IntFilter<"Endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: EnderecoOrderByRelevanceInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    cep?: StringFilter<"Endereco"> | string
    cidade?: StringFilter<"Endereco"> | string
    bairro?: StringFilter<"Endereco"> | string
    numero?: StringFilter<"Endereco"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endereco"> | number
    cep?: StringWithAggregatesFilter<"Endereco"> | string
    cidade?: StringWithAggregatesFilter<"Endereco"> | string
    bairro?: StringWithAggregatesFilter<"Endereco"> | string
    numero?: StringWithAggregatesFilter<"Endereco"> | string
    usuarioId?: IntWithAggregatesFilter<"Endereco"> | number
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    id?: IntFilter<"Professional"> | number
    telefone?: StringFilter<"Professional"> | string
    crp?: StringFilter<"Professional"> | string
    descricao?: StringFilter<"Professional"> | string
    cpf?: StringFilter<"Professional"> | string
    aprovacao?: BoolNullableFilter<"Professional"> | boolean | null
    especialidadeId?: IntFilter<"Professional"> | number
    usuarioId?: IntFilter<"Professional"> | number
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    telefone?: SortOrder
    crp?: SortOrder
    descricao?: SortOrder
    cpf?: SortOrder
    aprovacao?: SortOrderInput | SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
    especialidade?: EspecialidadeOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: ProfessionalOrderByRelevanceInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telefone?: string
    crp?: string
    cpf?: string
    usuarioId?: number
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    descricao?: StringFilter<"Professional"> | string
    aprovacao?: BoolNullableFilter<"Professional"> | boolean | null
    especialidadeId?: IntFilter<"Professional"> | number
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "telefone" | "crp" | "cpf" | "usuarioId">

  export type ProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    telefone?: SortOrder
    crp?: SortOrder
    descricao?: SortOrder
    cpf?: SortOrder
    aprovacao?: SortOrderInput | SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Professional"> | number
    telefone?: StringWithAggregatesFilter<"Professional"> | string
    crp?: StringWithAggregatesFilter<"Professional"> | string
    descricao?: StringWithAggregatesFilter<"Professional"> | string
    cpf?: StringWithAggregatesFilter<"Professional"> | string
    aprovacao?: BoolNullableWithAggregatesFilter<"Professional"> | boolean | null
    especialidadeId?: IntWithAggregatesFilter<"Professional"> | number
    usuarioId?: IntWithAggregatesFilter<"Professional"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUsuarioInput
    endereco?: EnderecoCreateNestedOneWithoutUsuarioInput
    profissional?: ProfessionalCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUsuarioInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutUsuarioInput
    profissional?: ProfessionalUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUsuarioNestedInput
    endereco?: EnderecoUpdateOneWithoutUsuarioNestedInput
    profissional?: ProfessionalUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutUsuarioNestedInput
    profissional?: ProfessionalUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EspecialidadeCreateInput = {
    nome: string
    profissional?: ProfessionalCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUncheckedCreateInput = {
    id?: number
    nome: string
    profissional?: ProfessionalUncheckedCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    profissional?: ProfessionalUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    profissional?: ProfessionalUncheckedUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeCreateManyInput = {
    id?: number
    nome: string
  }

  export type EspecialidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateInput = {
    titulo: string
    conteudo: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo: string
    createdAt?: Date | string
    userId: number
  }

  export type FeedbackUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackCreateManyInput = {
    id?: number
    titulo: string
    conteudo: string
    createdAt?: Date | string
    userId: number
  }

  export type FeedbackUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EnderecoCreateInput = {
    cep: string
    cidade: string
    bairro: string
    numero: string
    usuario: UsuarioCreateNestedOneWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    cep: string
    cidade: string
    bairro: string
    numero: string
    usuarioId: number
  }

  export type EnderecoUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EnderecoCreateManyInput = {
    id?: number
    cep: string
    cidade: string
    bairro: string
    numero: string
    usuarioId: number
  }

  export type EnderecoUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalCreateInput = {
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionalInput
    usuario: UsuarioCreateNestedOneWithoutProfissionalInput
  }

  export type ProfessionalUncheckedCreateInput = {
    id?: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    especialidadeId: number
    usuarioId: number
  }

  export type ProfessionalUpdateInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionalNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutProfissionalNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    especialidadeId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalCreateManyInput = {
    id?: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    especialidadeId: number
    usuarioId: number
  }

  export type ProfessionalUpdateManyMutationInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    especialidadeId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type EnderecoNullableScalarRelationFilter = {
    is?: EnderecoWhereInput | null
    isNot?: EnderecoWhereInput | null
  }

  export type ProfessionalNullableScalarRelationFilter = {
    is?: ProfessionalWhereInput | null
    isNot?: ProfessionalWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    acesso?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    acesso?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    foto?: SortOrder
    acesso?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProfessionalListRelationFilter = {
    every?: ProfessionalWhereInput
    some?: ProfessionalWhereInput
    none?: ProfessionalWhereInput
  }

  export type ProfessionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadeOrderByRelevanceInput = {
    fields: EspecialidadeOrderByRelevanceFieldEnum | EspecialidadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EspecialidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EspecialidadeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EspecialidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EspecialidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EspecialidadeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FeedbackOrderByRelevanceInput = {
    fields: FeedbackOrderByRelevanceFieldEnum | FeedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnderecoOrderByRelevanceInput = {
    fields: EnderecoOrderByRelevanceFieldEnum | EnderecoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    numero?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EspecialidadeScalarRelationFilter = {
    is?: EspecialidadeWhereInput
    isNot?: EspecialidadeWhereInput
  }

  export type ProfessionalOrderByRelevanceInput = {
    fields: ProfessionalOrderByRelevanceFieldEnum | ProfessionalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    crp?: SortOrder
    descricao?: SortOrder
    cpf?: SortOrder
    aprovacao?: SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    id?: SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    crp?: SortOrder
    descricao?: SortOrder
    cpf?: SortOrder
    aprovacao?: SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    crp?: SortOrder
    descricao?: SortOrder
    cpf?: SortOrder
    aprovacao?: SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    id?: SortOrder
    especialidadeId?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FeedbackCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EnderecoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput
    connect?: EnderecoWhereUniqueInput
  }

  export type ProfessionalCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUsuarioInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput
    connect?: EnderecoWhereUniqueInput
  }

  export type ProfessionalUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUsuarioInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FeedbackUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUsuarioInput | FeedbackUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUsuarioInput | FeedbackUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUsuarioInput | FeedbackUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type EnderecoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput
    upsert?: EnderecoUpsertWithoutUsuarioInput
    disconnect?: EnderecoWhereInput | boolean
    delete?: EnderecoWhereInput | boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutUsuarioInput, EnderecoUpdateWithoutUsuarioInput>, EnderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessionalUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessionalUpsertWithoutUsuarioInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUsuarioInput, ProfessionalUpdateWithoutUsuarioInput>, ProfessionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput> | FeedbackCreateWithoutUsuarioInput[] | FeedbackUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUsuarioInput | FeedbackCreateOrConnectWithoutUsuarioInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUsuarioInput | FeedbackUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FeedbackCreateManyUsuarioInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUsuarioInput | FeedbackUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUsuarioInput | FeedbackUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type EnderecoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutUsuarioInput
    upsert?: EnderecoUpsertWithoutUsuarioInput
    disconnect?: EnderecoWhereInput | boolean
    delete?: EnderecoWhereInput | boolean
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutUsuarioInput, EnderecoUpdateWithoutUsuarioInput>, EnderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessionalUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessionalUpsertWithoutUsuarioInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUsuarioInput, ProfessionalUpdateWithoutUsuarioInput>, ProfessionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessionalCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput> | ProfessionalCreateWithoutEspecialidadeInput[] | ProfessionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEspecialidadeInput | ProfessionalCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: ProfessionalCreateManyEspecialidadeInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput> | ProfessionalCreateWithoutEspecialidadeInput[] | ProfessionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEspecialidadeInput | ProfessionalCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: ProfessionalCreateManyEspecialidadeInputEnvelope
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
  }

  export type ProfessionalUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput> | ProfessionalCreateWithoutEspecialidadeInput[] | ProfessionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEspecialidadeInput | ProfessionalCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutEspecialidadeInput | ProfessionalUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: ProfessionalCreateManyEspecialidadeInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutEspecialidadeInput | ProfessionalUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutEspecialidadeInput | ProfessionalUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput> | ProfessionalCreateWithoutEspecialidadeInput[] | ProfessionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfessionalCreateOrConnectWithoutEspecialidadeInput | ProfessionalCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: ProfessionalUpsertWithWhereUniqueWithoutEspecialidadeInput | ProfessionalUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: ProfessionalCreateManyEspecialidadeInputEnvelope
    set?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    disconnect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    delete?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    connect?: ProfessionalWhereUniqueInput | ProfessionalWhereUniqueInput[]
    update?: ProfessionalUpdateWithWhereUniqueWithoutEspecialidadeInput | ProfessionalUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: ProfessionalUpdateManyWithWhereWithoutEspecialidadeInput | ProfessionalUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UsuarioCreateWithoutFeedbacksInput, UsuarioUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeedbacksInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UsuarioCreateWithoutFeedbacksInput, UsuarioUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFeedbacksInput
    upsert?: UsuarioUpsertWithoutFeedbacksInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFeedbacksInput, UsuarioUpdateWithoutFeedbacksInput>, UsuarioUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UsuarioCreateNestedOneWithoutEnderecoInput = {
    create?: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutEnderecoNestedInput = {
    create?: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEnderecoInput
    upsert?: UsuarioUpsertWithoutEnderecoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEnderecoInput, UsuarioUpdateWithoutEnderecoInput>, UsuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type EspecialidadeCreateNestedOneWithoutProfissionalInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput
    connect?: EspecialidadeWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutProfissionalInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput
    connect?: UsuarioWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EspecialidadeUpdateOneRequiredWithoutProfissionalNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionalInput
    upsert?: EspecialidadeUpsertWithoutProfissionalInput
    connect?: EspecialidadeWhereUniqueInput
    update?: XOR<XOR<EspecialidadeUpdateToOneWithWhereWithoutProfissionalInput, EspecialidadeUpdateWithoutProfissionalInput>, EspecialidadeUncheckedUpdateWithoutProfissionalInput>
  }

  export type UsuarioUpdateOneRequiredWithoutProfissionalNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfissionalInput
    upsert?: UsuarioUpsertWithoutProfissionalInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfissionalInput, UsuarioUpdateWithoutProfissionalInput>, UsuarioUncheckedUpdateWithoutProfissionalInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FeedbackCreateWithoutUsuarioInput = {
    titulo: string
    conteudo: string
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    conteudo: string
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput>
  }

  export type FeedbackCreateManyUsuarioInputEnvelope = {
    data: FeedbackCreateManyUsuarioInput | FeedbackCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoCreateWithoutUsuarioInput = {
    cep: string
    cidade: string
    bairro: string
    numero: string
  }

  export type EnderecoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cep: string
    cidade: string
    bairro: string
    numero: string
  }

  export type EnderecoCreateOrConnectWithoutUsuarioInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProfessionalCreateWithoutUsuarioInput = {
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionalInput
  }

  export type ProfessionalUncheckedCreateWithoutUsuarioInput = {
    id?: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    especialidadeId: number
  }

  export type ProfessionalCreateOrConnectWithoutUsuarioInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUsuarioInput, FeedbackUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FeedbackCreateWithoutUsuarioInput, FeedbackUncheckedCreateWithoutUsuarioInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUsuarioInput, FeedbackUncheckedUpdateWithoutUsuarioInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUsuarioInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    titulo?: StringFilter<"Feedback"> | string
    conteudo?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    userId?: IntFilter<"Feedback"> | number
  }

  export type EnderecoUpsertWithoutUsuarioInput = {
    update: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EnderecoCreateWithoutUsuarioInput, EnderecoUncheckedCreateWithoutUsuarioInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutUsuarioInput, EnderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type EnderecoUpdateWithoutUsuarioInput = {
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type EnderecoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionalUpsertWithoutUsuarioInput = {
    update: XOR<ProfessionalUpdateWithoutUsuarioInput, ProfessionalUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfessionalCreateWithoutUsuarioInput, ProfessionalUncheckedCreateWithoutUsuarioInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutUsuarioInput, ProfessionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessionalUpdateWithoutUsuarioInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    especialidadeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalCreateWithoutEspecialidadeInput = {
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    usuario: UsuarioCreateNestedOneWithoutProfissionalInput
  }

  export type ProfessionalUncheckedCreateWithoutEspecialidadeInput = {
    id?: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    usuarioId: number
  }

  export type ProfessionalCreateOrConnectWithoutEspecialidadeInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput>
  }

  export type ProfessionalCreateManyEspecialidadeInputEnvelope = {
    data: ProfessionalCreateManyEspecialidadeInput | ProfessionalCreateManyEspecialidadeInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: ProfessionalWhereUniqueInput
    update: XOR<ProfessionalUpdateWithoutEspecialidadeInput, ProfessionalUncheckedUpdateWithoutEspecialidadeInput>
    create: XOR<ProfessionalCreateWithoutEspecialidadeInput, ProfessionalUncheckedCreateWithoutEspecialidadeInput>
  }

  export type ProfessionalUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: ProfessionalWhereUniqueInput
    data: XOR<ProfessionalUpdateWithoutEspecialidadeInput, ProfessionalUncheckedUpdateWithoutEspecialidadeInput>
  }

  export type ProfessionalUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: ProfessionalScalarWhereInput
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyWithoutEspecialidadeInput>
  }

  export type ProfessionalScalarWhereInput = {
    AND?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    OR?: ProfessionalScalarWhereInput[]
    NOT?: ProfessionalScalarWhereInput | ProfessionalScalarWhereInput[]
    id?: IntFilter<"Professional"> | number
    telefone?: StringFilter<"Professional"> | string
    crp?: StringFilter<"Professional"> | string
    descricao?: StringFilter<"Professional"> | string
    cpf?: StringFilter<"Professional"> | string
    aprovacao?: BoolNullableFilter<"Professional"> | boolean | null
    especialidadeId?: IntFilter<"Professional"> | number
    usuarioId?: IntFilter<"Professional"> | number
  }

  export type UsuarioCreateWithoutFeedbacksInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    endereco?: EnderecoCreateNestedOneWithoutUsuarioInput
    profissional?: ProfessionalCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    endereco?: EnderecoUncheckedCreateNestedOneWithoutUsuarioInput
    profissional?: ProfessionalUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFeedbacksInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFeedbacksInput, UsuarioUncheckedCreateWithoutFeedbacksInput>
  }

  export type UsuarioUpsertWithoutFeedbacksInput = {
    update: XOR<UsuarioUpdateWithoutFeedbacksInput, UsuarioUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UsuarioCreateWithoutFeedbacksInput, UsuarioUncheckedCreateWithoutFeedbacksInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFeedbacksInput, UsuarioUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UsuarioUpdateWithoutFeedbacksInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: EnderecoUpdateOneWithoutUsuarioNestedInput
    profissional?: ProfessionalUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endereco?: EnderecoUncheckedUpdateOneWithoutUsuarioNestedInput
    profissional?: ProfessionalUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutEnderecoInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUsuarioInput
    profissional?: ProfessionalCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEnderecoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUsuarioInput
    profissional?: ProfessionalUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEnderecoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
  }

  export type UsuarioUpsertWithoutEnderecoInput = {
    update: XOR<UsuarioUpdateWithoutEnderecoInput, UsuarioUncheckedUpdateWithoutEnderecoInput>
    create: XOR<UsuarioCreateWithoutEnderecoInput, UsuarioUncheckedCreateWithoutEnderecoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEnderecoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEnderecoInput, UsuarioUncheckedUpdateWithoutEnderecoInput>
  }

  export type UsuarioUpdateWithoutEnderecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUsuarioNestedInput
    profissional?: ProfessionalUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput
    profissional?: ProfessionalUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type EspecialidadeCreateWithoutProfissionalInput = {
    nome: string
  }

  export type EspecialidadeUncheckedCreateWithoutProfissionalInput = {
    id?: number
    nome: string
  }

  export type EspecialidadeCreateOrConnectWithoutProfissionalInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
  }

  export type UsuarioCreateWithoutProfissionalInput = {
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackCreateNestedManyWithoutUsuarioInput
    endereco?: EnderecoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfissionalInput = {
    id?: number
    nome: string
    email: string
    senha: string
    foto?: string | null
    acesso: string
    deletedAt?: Date | string | null
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUsuarioInput
    endereco?: EnderecoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfissionalInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
  }

  export type EspecialidadeUpsertWithoutProfissionalInput = {
    update: XOR<EspecialidadeUpdateWithoutProfissionalInput, EspecialidadeUncheckedUpdateWithoutProfissionalInput>
    create: XOR<EspecialidadeCreateWithoutProfissionalInput, EspecialidadeUncheckedCreateWithoutProfissionalInput>
    where?: EspecialidadeWhereInput
  }

  export type EspecialidadeUpdateToOneWithWhereWithoutProfissionalInput = {
    where?: EspecialidadeWhereInput
    data: XOR<EspecialidadeUpdateWithoutProfissionalInput, EspecialidadeUncheckedUpdateWithoutProfissionalInput>
  }

  export type EspecialidadeUpdateWithoutProfissionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadeUncheckedUpdateWithoutProfissionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutProfissionalInput = {
    update: XOR<UsuarioUpdateWithoutProfissionalInput, UsuarioUncheckedUpdateWithoutProfissionalInput>
    create: XOR<UsuarioCreateWithoutProfissionalInput, UsuarioUncheckedCreateWithoutProfissionalInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfissionalInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfissionalInput, UsuarioUncheckedUpdateWithoutProfissionalInput>
  }

  export type UsuarioUpdateWithoutProfissionalInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUpdateManyWithoutUsuarioNestedInput
    endereco?: EnderecoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfissionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    acesso?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUsuarioNestedInput
    endereco?: EnderecoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type FeedbackCreateManyUsuarioInput = {
    id?: number
    titulo: string
    conteudo: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalCreateManyEspecialidadeInput = {
    id?: number
    telefone: string
    crp: string
    descricao: string
    cpf: string
    aprovacao?: boolean | null
    usuarioId: number
  }

  export type ProfessionalUpdateWithoutEspecialidadeInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuario?: UsuarioUpdateOneRequiredWithoutProfissionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutEspecialidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessionalUncheckedUpdateManyWithoutEspecialidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    crp?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    aprovacao?: NullableBoolFieldUpdateOperationsInput | boolean | null
    usuarioId?: IntFieldUpdateOperationsInput | number
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