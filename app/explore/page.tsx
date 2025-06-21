"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Search } from "lucide-react"
import QuestionCard from "@/components/question-card"
import { mockQuestions } from "@/lib/mock-data"

export default function ExplorePage() {
  const [questions, setQuestions] = useState(mockQuestions)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || question.category.toLowerCase() === categoryFilter.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white px-4 lg:px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-[#7E69AB]"
          >
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
          <span className="ml-2 text-xl font-bold text-[#2D3748]">AdviceHive</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/dashboard/ask">
            <Button className="bg-[#7E69AB] hover:bg-[#6A5A91] text-white transition-colors">
              <PlusCircle className="mr-2 h-4 w-4" />
              Ask Question
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6 bg-[#F7F5FF]">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-[#2D3748]">Explore Questions</h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#4A5568]" />
              <Input
                placeholder="Search questions..."
                className="pl-8 border-[#E2E8F0] focus:border-[#7E69AB] focus:ring-[#7E69AB]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px] border-[#E2E8F0] focus:border-[#7E69AB] focus:ring-[#7E69AB]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="strategy">Strategy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question) => <QuestionCard key={question.id} question={question} />)
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
                <h3 className="text-lg font-medium text-[#2D3748]">No questions found</h3>
                <p className="text-sm text-[#4A5568] mt-1">Try adjusting your search or filters</p>
                <Button className="mt-4 bg-[#7E69AB] hover:bg-[#6A5A91] text-white transition-colors" asChild>
                  <Link href="/dashboard/ask">Ask a new question</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
