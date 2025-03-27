import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/adrielgarcias.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex  flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Adriel Garcia
        </span>

        <span className="truncate text-sm text-zinc-500">
          adrielgarcia@live.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
