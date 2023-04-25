import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  id!: number;
  teacher!: Teacher;

  constructor(private route: ActivatedRoute, private router:Router,
    private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id)
    .subscribe(data =>{
      console.log(data)
      this.teacher = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['teachers']);
  }

}
