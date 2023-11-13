import ThemeToggle from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 p-24">
      <ul className='flex items-center gap-24'>
        <li>
          <h1 className='text-2xl font-semibold'>MacroMaster App</h1>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      <h1>Testing Theme toggle</h1>
      <div className='flex gap-4'>
        <Button>Testing Theme</Button>
        <Button variant={'secondary'}>Testing Theme</Button>
      </div>
    </main>
  )
}
