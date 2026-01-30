import React, {useState, useEffect} from 'react'
import { getSuperheroes } from '../api/superheroes.api'
import PaginationHeroui from "../components/pagination";
import { useNavigate } from "react-router-dom";

export default function SuperheroesList() {

    const [heroes, setHeroes] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const navigate = useNavigate();
    const limit = 5;
    const totalPages = Math.ceil(totalItems / limit);


    useEffect(() => {
        getSuperheroes(page, limit).then(res => {

            setHeroes(res.items);
            setTotalItems(res.total);
        });
    }, [page]);


  return (
    <div className='flex flex-col items-center justify-start w-[85%]'>
        <div className='grid grid-cols-3 gap-9 w-full pt-8 pb-8'>
            {heroes.map((hero: any) => (
                <div key={hero.id}
                className='group cursor-pointer bg-white border-2 border-gray-100 rounded-lg flex flex-col gap-6 p-4 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[500px]'
                onClick={() => navigate(`/${hero.id}`)}
                >

                    <div className='h-[400px]'>
                        <img src={hero.images[0]} alt={hero.nickname} className="h-full w-full object-cover object-top" />
                    </div>
                    <p className='text-lg'>{hero.nickname}</p>
                </div>
            ))}
        </div>

        <footer className="mt-auto pb-10 pt-4">
            <PaginationHeroui total={totalPages} page={page} onChange={(p) => setPage(p)} />
        </footer>
        </div>
  )
}
