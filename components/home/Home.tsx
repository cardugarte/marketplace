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




export const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
      <div className="grid items-center justify-items-end h-full p-8 pb-1 gap-16 sm:p-1 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
      </div>
      <main className="flex flex-col justify-center text-center">
        <div className='flex flex-row items-center justify-center'>
          <BitcoinCircleIcon style={{ height: "150px", width: "150px", color: '#FFFFFF' }} />
        </div>
        <h2 className="text-2xl">A simple and powerful platform to explore Argentina by paying with Bitcoin.</h2>
        <div className='mt-10 mb-10'>
          <Button variant={'secondary'} > Discovery your next adventure </Button>
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
    </>
  )
}