export const fetchTags = async (url: string): Promise<any> => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Błąd ${resp.status}.`);
    }
    return resp.json();
  } catch (error) {
    throw error;
  }
};
