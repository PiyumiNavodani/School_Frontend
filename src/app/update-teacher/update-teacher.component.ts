import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  id!: number;
  teacher!: Teacher;

  constructor(private route: ActivatedRoute, private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id)
    .subscribe(data => {
      console.log(data)
      this.teacher = data;
    }, error => console.log(error));
  }

  updateTeacher(){
    this.teacherService.updateTeacher(this.id, this.teacher)
    .subscribe(data => {
      console.log(data);
      this.teacher = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateTeacher();
  }

  gotoList(){
    this.router.navigate(['/teacher']);
  }

}
