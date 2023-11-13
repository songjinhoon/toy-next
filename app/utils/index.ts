export const fetcher = async (resource: RequestInfo, init?: RequestInit) => {
  const response = await fetch(resource, init);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message ?? 'api request error...');
  }

  return response.json();
};
