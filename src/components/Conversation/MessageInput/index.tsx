import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

interface MessageInputProps {
  onSendMessage: (message: string) => void
}

export default function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-4 bg-white border-t">
      <Input
        type="text"
        placeholder="Écrivez votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" size="icon" disabled={!message.trim()}>
        <Send className="h-4 w-4" />
        <span className="sr-only">Envoyer</span>
      </Button>
    </form>
  )
}