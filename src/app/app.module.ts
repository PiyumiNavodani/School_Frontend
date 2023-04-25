import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    CreateTeacherComponent,
    TeacherListComponent,
    UpdateTeacherComponent,
    TeacherDetailsComponent,
    HomeComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
