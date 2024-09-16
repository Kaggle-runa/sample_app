'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation' // useRouterを追加
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export default function RaceDetail() {
    const { id } = useParams() // ここでパラメータを取得
    const router = useRouter() // useRouterを初期化
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<string[]>([])

    const horses = [
        { number: 1, name: 'ホワイトアッシュ', rate: '85.14%', flag: 1 },
        { number: 2, name: 'サンライズブレイク', rate: '85.14%', flag: 1 },
        { number: 3, name: 'ヤマニンシュラ', rate: '70.31%', flag: 0 },
        { number: 4, name: 'プライムクオリティ', rate: '85.14%', flag: 1 },
        { number: 5, name: 'ウォーターパラディ', rate: '69.92%', flag: 0 },
        { number: 6, name: 'ボールドハーテッド', rate: '71.37%', flag: 0 },
        { number: 7, name: 'スパイスマン', rate: '75.06%', flag: 0 },
        { number: 8, name: 'モレポブラーノ', rate: '84.07%', flag: 0 },
        { number: 9, name: 'ランワールドワン', rate: '84.07%', flag: 0 },
    ]
      

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-500 p-8">
      <Button
        onClick={() => router.back()} // 戻るボタンのイベントハンドラ
        className="mb-4 bg-green-700 hover:bg-green-800 text-white"
      >
        戻る
      </Button>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900">レース {id} の予想</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="bg-white">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">馬番</TableHead>
                <TableHead className="text-center">馬名</TableHead>
                <TableHead className="text-center">3着内率</TableHead>
                <TableHead className="text-center">購入フラグ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {horses.map((horse) => (
                <TableRow key={horse.number} className="hover:bg-green-100">
                  <TableCell className="text-center">{horse.number}</TableCell>
                  <TableCell className="text-center">{horse.name}</TableCell>
                  <TableCell className="text-center">{horse.rate}</TableCell>
                  <TableCell className="text-center">
                    {horse.flag ? (
                      <FaCheckCircle className="text-green-600 inline-block" />
                    ) : (
                      <FaTimesCircle className="text-red-600 inline-block" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-900">コメント</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCommentSubmit} className="mb-4 flex items-center">
            <Input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="コメントを入力"
              className="mr-2 flex-grow"
            />
            <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white">送信</Button>
          </form>
          <div className="space-y-2">
            {comments.map((c, index) => (
              <p key={index} className="bg-white p-2 rounded shadow">{c}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
