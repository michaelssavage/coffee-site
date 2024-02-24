interface Result<T> {
  data: T;
  status: number;
}

type Get = <T>(url: string) => Promise<T>;

type Post = <T>(
  url: string,
  payload: unknown,
  customOptions?: RequestInit
) => Promise<Result<T>>;

export const get: Get = async (url) => {
  const res = await fetch(url);
  const { statusText } = res;
  if (!res.ok) {
    throw new Error(statusText);
  }
  try {
    return await res.json();
  } catch (e) {
    return {};
  }
};

export const post: Post = async (url, payload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  const { status, statusText } = res;
  if (!res.ok) {
    throw new Error(statusText);
  }
  try {
    const data = await res.json();
    return { data, status };
  } catch (e) {
    return { data: [], status };
  }
};
