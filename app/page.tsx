'use client'

import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { FaHorseHead } from 'react-icons/fa'

export default function MainPage() {
  const races = [
    { id: 1, date: '2024-09-14', name: '中京1R' },
    { id: 2, date: '2024-09-14', name: '中山2R' },
    { id: 3, date: '2024-09-14', name: '中京2R' },
    { id: 4, date: '2024-09-14', name: '中山3R' },
    { id: 5, date: '2024-09-14', name: '中京3R' },
    { id: 6, date: '2024-09-14', name: '中京4R' },
    { id: 7, date: '2024-09-14', name: '中山4R' },
    { id: 8, date: '2024-09-14', name: '中京5R' },
    ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-8">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">るなちーの競馬占い</h1>
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
