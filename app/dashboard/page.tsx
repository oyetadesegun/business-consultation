"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Phone, CheckCircle, TrendingUp, DollarSign, Users, Star } from "lucide-react"
import { mockClientIssues, mockSocialMediaEvaluations } from "@/lib/mock-data"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 bg-white">
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MB</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">MyBiz.Com</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/get-help">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Help</Button>
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-64 border-r border-gray-200 bg-white lg:block">
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    activeTab === "overview"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("my-issues")}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    activeTab === "my-issues"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  My Issues
                </button>
                <button
                  onClick={() => setActiveTab("social-media")}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                    activeTab === "social-media"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <Star className="h-4 w-4" />
                  Social Media Audits
                </button>
                <Link
                  href="/forum"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-colors hover:text-blue-600 hover:bg-blue-50"
                >
                  <Users className="h-4 w-4" />
                  Community Forum
                </Link>
              </nav>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-auto p-4 md:p-6 bg-gray-50">
          <div className="mx-auto max-w-6xl space-y-6">
            {activeTab === "overview" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Issues Submitted</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">+1 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Resolved Issues</CardTitle>
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">67% resolution rate</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Social Media Audits</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                      <p className="text-xs text-muted-foreground">Completed this month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Referral Earnings</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$125</div>
                      <p className="text-xs text-muted-foreground">From 5 referrals</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Social media audit completed</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="h-4 w-4 text-blue-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Customer experience call scheduled</p>
                          <p className="text-xs text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MessageSquare className="h-4 w-4 text-orange-500" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">New business issue submitted</p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/get-help">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit New Issue</Button>
                      </Link>
                      <Link href="/forum">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                          Browse Community
                        </Button>
                      </Link>
                      <Link href="/referral">
                        <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                          Refer a Friend
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {activeTab === "my-issues" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">My Business Issues</h1>
                  <Link href="/get-help">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit New Issue</Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {mockClientIssues.map((issue) => (
                    <Card key={issue.id} className="border-gray-200">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{issue.category}</CardTitle>
                            <CardDescription>Submitted {issue.submittedDate}</CardDescription>
                          </div>
                          <Badge
                            variant={
                              issue.status === "resolved"
                                ? "default"
                                : issue.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              issue.status === "resolved"
                                ? "bg-green-100 text-green-800"
                                : issue.status === "in-progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-orange-100 text-orange-800"
                            }
                          >
                            {issue.status.replace("-", " ")}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{issue.description}</p>
                        {issue.response && (
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Expert Response:</h4>
                            <p className="text-blue-800 text-sm">{issue.response}</p>
                            {issue.responseDate && (
                              <p className="text-xs text-blue-600 mt-2">Responded on {issue.responseDate}</p>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {activeTab === "social-media" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">Social Media Audits</h1>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request New Audit</Button>
                </div>

                <div className="space-y-4">
                  {mockSocialMediaEvaluations.map((evaluation) => (
                    <Card key={evaluation.id} className="border-gray-200">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{evaluation.platform} Audit</CardTitle>
                            <CardDescription>Completed {evaluation.completedDate}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800">Score: {evaluation.score}/10</Badge>
                            <Badge variant="outline">${evaluation.billingAmount}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Findings:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              {evaluation.findings.map((finding, index) => (
                                <li key={index} className="text-sm">
                                  {finding}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                              {evaluation.recommendations.map((rec, index) => (
                                <li key={index} className="text-sm">
                                  {rec}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                              <strong>Evaluator:</strong> {evaluation.evaluator} •<strong> Status:</strong>{" "}
                              {evaluation.status}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
