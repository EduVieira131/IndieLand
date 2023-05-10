import { Heart, Question } from 'phosphor-react'

import heroImage from './assets/hero-image.png'

import './Global.css'
import { Card } from './components/Card'

function App() {
  return (
    <>
      <div id="container" className="relative min-h-screen overflow-auto">
        <header
          id="header"
          className="flex justify-between w-full h-20 border-b-2 border-b-gray-200"
        >
          <div className="bg-violet-500 flex items-center justify-center w-48">
            <h1 className="text-gray-50 font-bold text-2xl">IndieLand</h1>
          </div>

          <nav className="flex items-center gap-10 pr-12 font-medium">
            <a href="#" className="flex items-center gap-2">
              <Heart size={24} />
              <span className="hidden lg:inline">Meus favoritos</span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <Question size={24} />
              <span className="hidden lg:inline">Assitência</span>
            </a>
          </nav>
        </header>

        <div
          id="hero"
          className="flex items-center justify-between gap-32 w-full p-6 lg:px-12 mt-8 mb-10 bg-violet-500"
        >
          <div className="bg-violet-900 p-2 lg:p-6 rounded-md text-slate-50">
            <h1 className="font-bold text-lg lg:text-4xl mb-1">
              Jogos Independentes
            </h1>
            <p className="max-w-lg font-normal text-xs lg:text-sm">
              IndieLand é uma loja online de jogos independentes, oferecendo uma
              ampla variedade de títulos criativos e únicos para jogadores que
              buscam experiências diferentes.
            </p>
          </div>

          <img
            src={heroImage}
            alt="Imagem de um homem em um cenário de jogo"
            className="hidden lg:flex"
          />
        </div>

        <aside
          id="sidebar"
          className="max-w-sm max-h-[400px] p-2 lg:p-6 bg-[#EFEFEF] rounded-md mx-auto mb-4"
        >
          <div className="flex flex-col gap-5 w-40 lg:w-56 p-4 lg:pb-12 bg-white">
            <strong>Promoções</strong>
            <a href="#">Conteúdo extra</a>
            <a href="#">Mains vendidos</a>
            <a href="#">Versão demo</a>
            <a href="#">Versão digital</a>
            <a href="#">Partida online</a>
            <a href="#">Gratuitos</a>
          </div>
        </aside>

        <main
          id="main"
          className="flex flex-col lg:grid lg:grid-cols-4 2xl:grid-cols-8 lg:grid-rows-2 2xl:grid-rows-1 lg:gap-x-5 2xl:gap-x-10 gap-4 lg:gap-y-10 2xl:items-center min-h mx-auto p-4 overflow-auto"
        >
          <Card
            title="Fabled Forest"
            date="01/02/2023"
            price={54}
            imageName="game-1"
          />
          <Card
            title="Echoes of Eternity"
            date="10/01/2023"
            price={12}
            imageName="game-2"
          />
          <Card
            title="Lost in the Labyrinth"
            date="23/08/2022"
            price={37}
            imageName="game-3"
          />
          <Card
            title="Starlight Symphony"
            date="15/10/2022"
            price={24}
            imageName="game-4"
          />
          <Card
            title="Mystic Metropolis"
            date="03/02/2023"
            price={89}
            imageName="game-5"
          />
          <Card
            title="Lumina's Journey"
            date="09/05/2023"
            price={19}
            imageName="game-6"
          />
          <Card
            title="Whimsical Wasteland"
            date="21/02/2023"
            price={19}
            imageName="game-7"
          />
          <Card
            title="Neon Nightscape"
            date="12/04/2023"
            price={25}
            imageName="game-8"
          />
        </main>

        <footer
          id="footer"
          className="w-full h-14 bg-violet-500 static bottom-0 left-0 mt-7"
        ></footer>
      </div>
    </>
  )
}

export default App
