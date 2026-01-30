const API_URL = 'http://localhost:5000/api/superheroes';

export const getSuperheroes = async (page: number = 1, limit: number = 5) => {
  const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`);

  if (!res.ok) throw new Error('Failed to fetch superheroes');
  return res.json();
};

export const getSuperheroById = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) throw new Error('Superhero not found');
  return res.json();
};

export const createSuperhero = async (data: any) => {
  const res = await fetch( API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error('Failed to create superhero');
  return res.json();
};


export const deleteSuperhero = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) throw new Error('Failed to delete superhero');

    if (res.status === 204) return true;
    return res.json();
}