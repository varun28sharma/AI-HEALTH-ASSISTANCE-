import { useState } from 'react'

export default function EmailShareAlert({ onClose, onSubmit }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(email)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-white">Share Activity</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full bg-slate-700 p-2 rounded-lg mb-4 text-white"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
