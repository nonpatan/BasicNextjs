// ดึงข้อมูลนักเรียน
interface Student {
  name: string
  photo: string
  grade: number
}

async function getStudents(): Promise<Student[]> {
  const res = await fetch('https://api.example.com/students')
  const data: Student[] = await res.json()
  return data
}

// ดึงข้อมูลนักเรียนคนเดียว
async function getStudent(id: number): Promise<Student> {
  const res = await fetch(`https://api.example.com/students/${id}`)
  const data: Student = await res.json()
  return data
}