import { Heart } from 'phosphor-react'

import image1 from '../assets/game-1.jpg'
import image2 from '../assets/game-2.jpg'
import image3 from '../assets/game-3.jpg'
import image4 from '../assets/game-4.jpg'
import image5 from '../assets/game-5.jpg'
import image6 from '../assets/game-6.jpg'
import image7 from '../assets/game-7.jpg'
import image8 from '../assets/game-8.jpg'

interface CardProps {
  imageName: string
  title: string
  date: string
  price: number
}

export function Card(props: CardProps) {
  const price = String(props.price).padEnd(5, ',00')

  let image

  switch (props.imageName) {
    case 'game-1':
      image = image1
      break
    case 'game-2':
      image = image2
      break
    case 'game-3':
      image = image3
      break
    case 'game-4':
      image = image4
      break
    case 'game-5':
      image = image5
      break
    case 'game-6':
      image = image6
      break
    case 'game-7':
      image = image7
      break
    case 'game-8':
      image = image8
      break
  }

  return (
    <div className="max-w-[230px] max-h-[276px] min-h-[276px] border-[1px] border-gray-200 rounded-[5px]">
      <img src={image} alt="Imagem de um jogo" className="scale-[1.01]" />

      <h1 className='mt-3 ml-4 text-base font-bold'>{props.title}</h1>
      <span className='text-gray-300 text-sm ml-4'>{props.date}</span>

      <div className="flex justify-between items-center mt-10 p-4">
        <strong>R$ {price}</strong>
        <button className="text-violet-500">
          <Heart />
        </button>
      </div>
    </div>
  )
}
