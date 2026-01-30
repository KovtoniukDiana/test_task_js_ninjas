import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSuperheroById, updateSuperhero, updateSuperheroImages, deleteSuperhero } from "../api/superheroes.api";
import EditingModal from "../components/editing_modal";


export default function SuperheroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState<any>(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    if (id) {
      getSuperheroById(id).then(data => {
        setHero(data);
      });
    }
  }, [id]);


  const handleUpdate = async (formData: FormData) => {
    try {
      const updatedHero = await updateSuperhero(id!, formData);
      setHero(updatedHero);
      setIsEditModalOpen(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteImage = async (imageToDelete: string) => {

    try {
      const updatedImages = hero.images.filter((img: string) => img !== imageToDelete);

      const updatedHero = await updateSuperheroImages(id!, updatedImages);

      setHero(updatedHero);

    } catch (error) {
      console.error("Помилка при видаленні:", error);
    }
  };

  const handleDeleteSuperhero = async () => {
    try {
      await deleteSuperhero(hero.id);
      navigate("/");

    } catch (error) {
      console.error("Помилка при видаленні героя:", error);
    }
  }


  if (!hero) return <div>Завантаження...</div>;

  return (
    <div className="min-h-screen w-[85%] py-12 px-4 sm:px-6 lg:px-8">

      <div className=" mb-8 flex justify-between">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
          Назад до списку
        </button>


        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center text-gray-600"
        >
          Редагувати інформацію/додати зображення
        </button>
        <EditingModal isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title="Редагувати героя"  
          hero={hero}
          onSubmit={handleUpdate}
        />
      </div>

      <div className="max-w-6xl mx-auto  rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row gap-0">
          
          {hero.images.length === 0 ?
            <div className="md:w-1/2 h-[500px] md:h-[700px] relative">
              <img src='/img/superhero-icon.png' alt='superhero-image' className="w-full h-full object-cover object-top"/>
            </div>
            :
            
            <div className="md:w-1/2 h-[500px] md:h-[700px] relative">
              <img 
                src={hero.images?.[0]} 
                alt={hero.nickname} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
            </div>
          }


          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Профіль героя</span>
            <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              {hero.nickname}
            </h1>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Справжнє ім'я</h3>
                <p className="text-xl text-gray-700">{hero.real_name}</p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Походження</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  {hero.origin_description}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Суперсили</h3>

                <p className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100">
                    {hero.superpowers}
                </p>
                
              </div>

              <div className="pt-8 mt-8 border-t border-gray-100">
                <p className="text-2xl font-serif text-gray-800 italic relative">
                  <span className="text-5xl text-blue-200 ">“</span>
                  <span>{hero.catch_phrase}</span>
                  <span className="text-5xl text-blue-200 ">”</span>
                </p>
              </div>
            </div>

            <button className="bg-red-400 rounded-xl p-2 w-fit self-end justify-self-end mt-20"
              onClick={() => handleDeleteSuperhero()}
            >
              Видалити героя
            </button>
          </div>

        </div>
      </div>

      
      <div className="flex gap-2 overflow-x-auto pt-14 pb-14 scrollbar-hide">
        {hero.images.map((img: string, index: number) => (
          <div 
            key={index}
            className='relative min-w-[350px] h-[350px] rounded-lg overflow-hidden border-2'
          >
            <img src={img} className="w-full h-full object-cover object-top" alt={`view ${index}`} />

            <button className="absolute top-[5%] right-[5%] h-fit w-fit cursor-pointer"
              onClick={() => handleDeleteImage(img)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}
