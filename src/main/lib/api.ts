export async function exec<T>(method: string, path: string): Promise<T> {
   // FIXME switch to API v2.5.0 and `POST /broadcast-raw-transaction`
  const prefix = "https://api.semux.info/v2.4.0";
  const r = await fetch(prefix + path, { method });
  try {
    const { success, message, result } = await r.json();
    return success ? result : Promise.reject(new Error(message));
  } catch (e) {
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  }
}
