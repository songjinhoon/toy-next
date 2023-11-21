export const fetcher = async (resource: RequestInfo, init?: RequestInit) => {
  const response = await fetch(resource, init);

  if (!response.ok) {
    const errorResponse = await response.json();
    console.log(errorResponse.message ?? 'api request error...');
    return {
      message: errorResponse.message ?? 'api request error...',
    };
    // throw new Error(errorResponse.message ?? 'api request error...');
  } else {
    return response.json();
  }
};
