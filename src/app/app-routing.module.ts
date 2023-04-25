import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'addstudent', component: CreateStudentComponent },
  { path: 'studentUpdate/:id', component: UpdateStudentComponent },
  { path: 'studentDetails/:id', component: StudentDetailsComponent},

    { path: 'teachers', component: TeacherListComponent },
    { path: 'addteacher', component: CreateTeacherComponent},
    { path: 'teacherUpdate/:id', component: UpdateTeacherComponent},
    { path: 'teacherDetails/:id', component: TeacherDetailsComponent},

    { path: 'email', component: EmailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
