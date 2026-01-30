import React, {useState} from 'react'
import AddingModal from './adding_modal'
import { Button, Link } from '@heroui/react'

export default function AddingPanel() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-[85%] flex justify-around bg-pink-200 items-center rounded-md p-4'>
      <p className='text-lg'>Для створення ногово супергероя натискайте сюди:</p>
      
      <Button as={Link} href='#' variant='flat' color='secondary'
       onPress={() => setIsModalOpen(true)}>
        Створити
      </Button>

      <AddingModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} />
    </div>
  )
}
