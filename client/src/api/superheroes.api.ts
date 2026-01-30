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

export const createSuperhero = async (data: FormData) => {
  const res = await fetch( API_URL, {
    method: 'POST',
    body: data
  });

  if (!res.ok) throw new Error('Failed to create superhero');
  return res.json();
};

export const updateSuperhero = async (id: string, data: any) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH', 
    body: data
  });

  if (!res.ok) throw new Error('Failed to update superhero');
  return res.json();
};


export const updateSuperheroImages = async (id: string, images: string[]) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ images }),
  });

  if (!res.ok) throw new Error('Failed to update images');
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