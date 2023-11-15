import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div className="relative overflow-hidden min-h-screen max-h-screen lg:max-h-none h-full w-full">
        <Image className="blur-[3px] absolute md:relative shadow-image-shade w-full h-full object-cover" src='/WelcomeHero.jpg' alt="Blurred Food in bowls laying on the table" width={4350} height={2900} />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 text-center text-shadow-custom absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-auto text-white w-full px-8 md:px-16">
            <h1 className="font-bold text-2xl md:text-4xl text-shadow-lg">Welcome to <span className="text-primary">MacroMaster</span></h1>
            <p className="text-lg hidden sm:block md:text-xl text-neutral-300">Achieve your fitness goals effortlessly, ensuring a personalized and enjoyable path to a healthier lifestyle.</p>
            <p className='text-lg block sm:hidden'>Master your diet now!</p>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <Button className="lg:hidden">
                    <Link href="/signin">Get Started</Link>
                </Button>
                <Button variant={'secondary'}>
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Welcome