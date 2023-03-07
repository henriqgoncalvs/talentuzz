export function getQueryParams() {
  const params = new URLSearchParams(location.search);
  const entries = params.entries();

  const queryDict = {};

  for (const [key, value] of entries) {
    if ((queryDict as any)[key]) {
      (queryDict as any)[key] = [
        ...(queryDict as any)[key],
        value,
      ];
    } else {
      (queryDict as any)[key] = [value];
    }
  }

  return queryDict;
}
