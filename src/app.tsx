import { ArrowRight, Calendar, MapPin } from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('/bg.png')] bg-center bg-no-repeat">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="h-16 bg-zinc-900 rounded-xl flex items-center px-4 shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder:text-zinc-400 flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="date"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder:text-zinc-400"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium inline-flex items-center gap-2 hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br />
          com nossos{' '}
          <a href="#" className="underline text-zinc-300">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="underline text-zinc-300">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
