function greet(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

function showGrade(score: number): string{
    if (score >= 80) {
        return "A";
    }else if(score >= 70){
        return "B";
    }else if(score >= 60){
        return "C";
    }else if(score >= 50){
        return "D";
    }else{
        return "F";
    }
}