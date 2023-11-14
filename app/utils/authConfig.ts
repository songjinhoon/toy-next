export const setId = (id: string) => {
  localStorage.setItem('id', id);
};

export const getId = () => {
  return localStorage.getItem('id') || null;
};
