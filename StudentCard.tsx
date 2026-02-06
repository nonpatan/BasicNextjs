// components/StudentCard.tsx
interface StudentCardProps {
  name: string
  photo: string
  grade: number
  onViewDetails?: () => void  // function ที่ optional
}

export default function StudentCard({ 
  name, 
  photo, 
  grade, 
  onViewDetails 
}: StudentCardProps) {
  return (
    <div className="border p-4">
      <img src={photo} alt={name} className="w-24 h-24 rounded-full" />
      <h3 className="font-bold">{name}</h3>
      <p>เกรดเฉลี่ย: {grade}</p>
      {onViewDetails && (
        <button onClick={onViewDetails}>ดูรายละเอียด</button>
      )}
    </div>
  )
}

// การใช้งาน:
// <StudentCard name="สมชาย" photo="/img.jpg" grade={3.5} />