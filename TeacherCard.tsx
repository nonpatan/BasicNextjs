//Teacher Card Component
interface TeacherCardProp{
    name : string
    subject : string
    photo : string
    email?: string
}

export default function TeacherCard({
    name,
    subject,
    photo,
    email
}:TeacherCardProp){
    return (
    <div className="border p-4">
      <img src={photo} alt={name} className="w-24 h-24 rounded-full" />
      <h3 className="font-bold">{name}</h3>
      <p>วิชาที่สอน: {subject}</p>
      {email && (
       <a href={`mailto:${email}`} className="text-blue-500">
          ติดต่อครู
        </a>
      )}
    </div>
  )
}