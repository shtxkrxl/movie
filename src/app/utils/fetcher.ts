export const fetcher = async (url: string) => {
  return await fetch(url, {
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  }).then(res => res.json());
};
