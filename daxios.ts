type SnakeToKebabCase<T extends string> = T extends `${infer A}_${infer B}`
  ? `${A}-${SnakeToKebabCase<B>}`
  : T;

type KebabToSnakeCase<T extends string> = T extends `${infer A}-${infer B}`
  ? `${A}_${KebabToSnakeCase<B>}`
  : T;

type UrlToMethodName<
  GetPostDelete extends string,
  Pretty extends string
> = Pretty extends `${infer Prefix}/${infer S}`
  ? [Prefix, `${GetPostDelete}_${KebabToSnakeCase<S>}`]
  : never;

type MethodNameToUrl<GetPostDelete extends string, App> = {
  [Prefix in keyof App]: Prefix extends string
    ? {
        [M in keyof App[Prefix]]: M extends `${GetPostDelete}_${infer MethodSnakeCase}`
          ? App[Prefix][M] extends () => any
            ? `${Prefix}/${SnakeToKebabCase<MethodSnakeCase>}`
            : never
          : never;
      }[keyof App[Prefix]]
    : never;
}[keyof App];

type MagicReturnType<
  App,
  GetPostDelete extends string,
  PrettyUrl extends string
> = UrlToMethodName<GetPostDelete, PrettyUrl>[0] extends keyof App
  ? UrlToMethodName<
      GetPostDelete,
      PrettyUrl
    >[1] extends keyof App[UrlToMethodName<GetPostDelete, PrettyUrl>[0]]
    ? App[UrlToMethodName<GetPostDelete, PrettyUrl>[0]][UrlToMethodName<
        GetPostDelete,
        PrettyUrl
      >[1]] extends () => infer ReturnType
      ? ReturnType
      : never
    : never
  : never;

export type Daxios<App> = {
  get<Url extends MethodNameToUrl<'GET', App>>(
    url: Url
  ): MagicReturnType<App, 'GET', Url>;

  post<Url extends MethodNameToUrl<'POST', App>>(
    url: Url
  ): MagicReturnType<App, 'POST', Url>;

  delete<Url extends MethodNameToUrl<'DELETE', App>>(
    url: Url
  ): MagicReturnType<App, 'DELETE', Url>;
};
