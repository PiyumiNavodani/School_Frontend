import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teacher!: Observable<Teacher[]>;

  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.teacher = this.teacherService.getTeacherList();
  }

  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      }, error => console.log(error)
    );
  }

  teacherDetails(id: number){
    this.router.navigate(['teacherDetails', id]);
  }

  updateTeacher(id: number){
    this.router.navigate(['teacherUpdate', id]);
  }

}
