import React, { useState } from 'react'

const InputMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('')

  const handleMessageState = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the submission of the message (e.g., send it to a server, update the state, etc.)
    console.log('Message submitted:', message)
    const newMessage = {
      sentAt: Date.now(),
      content: message,
    }
    // Call the addMessage function to add the new message to the MOCK_MESSAGES array
    addMessage(newMessage)
    // Clear the input field after submitting the message
    setMessage('')
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-4 border-t border-gray-300"
      >
        <input
          className="flex-1 p-2 mr-2 border border-grey-300 rounded"
          type="text"
          placeholder="Write a message"
          value={message}
          onChange={handleMessageState}
        />
        <button className="bg-light flex border rounded p-1.5" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}
export default InputMessage
// flex-1 p-2 mr-2 border border-gray-300 rounded
