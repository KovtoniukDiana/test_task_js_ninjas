import React, {useState} from 'react'
import AddingModal from './adding_modal'
import { Button, Link } from '@heroui/react'

export default function AddingPanel() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-[85%] mt-6 flex justify-between items-center bg-gradient-to-r from-pink-100 to-purple-100 border border-gray-100 rounded-2xl p-6 shadow-sm'>
      <p className='text-lg'>СТВОРЮЙТЕ НОВИХ ПЕРСОНАЖІВ <br/> ТА КЕРУЙТЕ БАЗОЮ</p>
      
      <Button as={Link} href='#' variant='flat' color='secondary'
       onPress={() => setIsModalOpen(true)}>
        Створити
      </Button>

      <AddingModal title='Створити нового супергероя' isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} />
    </div>
  )
}
