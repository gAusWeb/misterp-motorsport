// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/ban-types
const Throttle = (
  fn: { apply: (arg0: any, arg1: IArguments) => void },
  wait = 300
) => {
  let inThrottle: boolean,
    lastFn: string | number | NodeJS.Timeout | undefined,
    lastTime: number;
  return function (This: any) {
    const context = This,
      // eslint-disable-next-line prefer-rest-params
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export default Throttle;
