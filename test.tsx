const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));

let teacherName : string = "อานนท์";
let teacherAge : number = 48;
let teachingSubject : string[] = ['วิทยาการคำนวณ', 'คณิตศาสตร์'];
let isTeaching: boolean = true;
console.log('สวัดีครับ คุณ'+teacherName+"\n"+
'อายุ '+teacherAge+' ปี'+"\n"+
'สอนวิชา '+teachingSubject.join(', ')+"\n"+
'สถานะการสอน: '+ (isTeaching ? 'กำลังสอนอยู่' : 'ไม่ได้สอนตอนนี้'));