'use client'


import React from 'react'
import { BitcoinCircleIcon } from '@bitcoin-design/bitcoin-icons-react/filled'
import { Navbar } from "../navbar/Navbar"
import { Button } from '../ui/button'
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from '@/components/ui/input'
import Link from 'next/link';




export const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className='h-full w-full p-2 flex flex-col'>
      <div className="grid items-center justify-items-end h-full p-8 pb-1 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
      </div>
      <main className="flex flex-col justify-center text-center">
        <div className='flex flex-row items-center justify-center'>
          <BitcoinCircleIcon style={{ height: "150px", width: "150px", color: '#FFFFFF' }} />
        </div>
        <h2 className="text-2xl">A simple and powerful platform to explore Argentina by paying with Bitcoin.</h2>
        <div className='mt-10 mb-10 w-full flex flex-row items-center justify-center align-middle md:flex-col'>
          <Input className='max-w-96 mr-2' placeholder='What do you have in mind?' />
          <Button className='max-w-40 lg:mt-2' variant={'secondary'} >
            <Link href={'/dashboard'}>Discovery</Link>
          </Button>
        </div>
        <div className='flex items-center justify-center'>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </main>
      <footer className='text-center pt-20'>
        <h2>This platform is created with love by Carlit0s🍷</h2>
      </footer>
    </div>
  )
}