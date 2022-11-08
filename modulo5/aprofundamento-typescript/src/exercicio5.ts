type Meetings = {
    name:string,
    age:number,
    meetingDate:string
}

const patients: Meetings[] = [
    { name: "João", age: 23, meetingDate: "01/10/2021" },
    { name: "Pedro", age: 31, meetingDate: "02/07/2021" },
    { name: "Paula", age: 26, meetingDate: "03/11/2021" },
    { name: "Márcia", age: 45, meetingDate: "04/05/2021" }
]  

const returnPatientsInOrder = (array: Meetings[]) => {
    return array.sort((a, b) => a.name > b.name ? 1 : -1)
}

console.log(returnPatientsInOrder(patients))