//eslint-disable-next-line
export const importAll = (ctx: __WebpackModuleApi.RequireContext): { [x: string]: any; }[] => {
  return ctx
    .keys()
    .map(path => {
      return { path, module: ctx(path) };
    });
};