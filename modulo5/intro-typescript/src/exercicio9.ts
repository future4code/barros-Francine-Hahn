type Student = {
    age: number,
    highSchool: string,
    time: number,
    course: string
}

function validateStudent ():boolean {
    const studentInfo: Student = {
        age: Number(process.argv[2]),
        highSchool: process.argv[3],
        time: Number(process.argv[4]),
        course: process.argv[5]
    }
    
    if (studentInfo.age >= 18 && studentInfo.highSchool) {
        return studentInfo.course==='integral' && studentInfo.time >= 40 || studentInfo.course==='noturno' && studentInfo.time >= 20
    } else {
        return false
    }
}

console.log(validateStudent())