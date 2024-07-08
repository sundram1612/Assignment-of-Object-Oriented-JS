class Student {
    constructor(name, email){
        this.name = name
        this.email = email
        this.courses = []
    }

    enroll(course){
        this.courses.push(course)
        console.log(`${this.name} has enrolled courses: ${this.courses.join(', ')}`);
    }

    showCourses(){
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission {
    constructor(){
        this.students = []
    }

    enrollStudents(student){
        this.students.push(student)
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(student, course){
        if(student instanceof Student && student.email && course){
            student.enroll(course)
        }
        else{
            console.log(`Invalid student or course information.`);
        }
    }

    showEnrolledStudents(){
        console.log('Enrolled Students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}

const admissionOffice = new Admission();

const student1 = new Student('Rahul', 'rahul@gmail.com')
const student2 = new Student('Raj', 'raj@gmail.com')

admissionOffice.enrollStudents(student1)
admissionOffice.enrollStudents(student2)

admissionOffice.assignCourse(student1, 'Full Stack Web Development')
admissionOffice.assignCourse(student2, 'Master in Data Science')

student1.showCourses()
student2.showCourses

admissionOffice.showEnrolledStudents()