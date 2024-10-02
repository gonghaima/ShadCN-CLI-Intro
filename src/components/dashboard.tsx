'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, LayoutDashboard, MessageSquare, BarChart } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const sampleData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
]

export function DashboardComponent() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      // In a real application, you would send the message to your AI backend here
      // and then add the AI's response to the messages
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: 'This is a placeholder response. In a real application, this would be the AI\'s reply.' }])
      setInput('')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Vertical Navigation Panel */}
      {/* <nav className="bg-white w-64 min-h-screen flex flex-col shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">AI Dashboard</h2>
        </div>
        <ul className="flex-grow">
          <li>
            <a href="#" className="flex items-center space-x-2 bg-gray-200 text-gray-900 px-4 py-3 hover:bg-gray-300">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-600 px-4 py-3 hover:bg-gray-200">
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-600 px-4 py-3 hover:bg-gray-200">
              <BarChart className="h-5 w-5" />
              <span>Analytics</span>
            </a>
          </li>
        </ul>
      </nav> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Monthly Sales Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={sampleData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>AI Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex flex-col">
                  <div className="flex-grow overflow-y-auto mb-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`mb-2 p-2 rounded-lg ${
                          message.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                        } max-w-[80%]`}
                      >
                        {message.content}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-grow mr-2"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}