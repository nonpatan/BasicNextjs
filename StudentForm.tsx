// components/StudentForm.tsx
'use client'

import { useState } from 'react'

interface FormData {
  name: string
  age: number
  grade: number
}

export default function StudentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: 0,
    grade: 0
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="ชื่อ"
      />
      <button type="submit">บันทึก</button>
    </form>
  )
}