import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  submitted = false;

  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {
  }

  newTeacher(): void {
    this.submitted = false;
    this.teacher = new Teacher();
  }

  save(){
    this.teacherService
    .createTeacher(this.teacher)
    .subscribe(data =>{
      console.log(data)
      this.teacher = new Teacher();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/teachers']);
  }

}
