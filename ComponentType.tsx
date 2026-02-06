// app/students/page.tsx
interface Student {
  id: number
  name: string
  grade: number
}

export default async function StudentsPage() {
  // ดึงข้อมูลจาก API
  const response = await fetch('https://api.example.com/students')
  const students: Student[] = await response.json()
  
  return (
    <div>
      <h1>รายชื่อนักเรียน</h1>
      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name} - เกรด: {student.grade}</p>
        </div>
      ))}
    </div>
  )
}