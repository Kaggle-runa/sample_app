'use client'

import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { FaHorseHead } from 'react-icons/fa'

export function MainPageComponent() {
  const races = [
    { id: 1, date: '2023-07-01', name: '東京11R' },
    { id: 2, date: '2023-07-02', name: '中山12R' },
    { id: 3, date: '2023-07-03', name: '阪神10R' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-8">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">ルナチーの競馬占い</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {races.map((race) => (
          <Link href={`/race/${race.id}`} key={race.id}>
            <Card className="hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 flex items-center">
                <FaHorseHead className="text-blue-600 text-3xl mr-4" />
                <div>
                  <h2 className="text-2xl font-semibold text-blue-800">{race.date}</h2>
                  <p className="text-blue-700">{race.name}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}