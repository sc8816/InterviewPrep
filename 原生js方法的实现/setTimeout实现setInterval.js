function setIntervals(fn, time) {
  let clear = false,
    timer = null;
  let interval = () => {
    if (clear) {
      clear = false;
      clearTimeout(timer);
      return;
    }
    fn();
    timer = setTimeout(interval, time);
  };

  timer = setTimeout(interval, time);

  return () => (clear = true);
}
