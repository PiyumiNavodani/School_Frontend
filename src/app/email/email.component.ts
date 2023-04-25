import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit{
  email: Email = new Email();
  submitted = false;

  constructor(private emailService: EmailService, private router: Router){}

  ngOnInit() {
  }

  newEmail(): void{
    this.submitted = false;
    this.email = new Email();
  }

  save(){
    this.emailService
    .sendMail(this.email).subscribe(data => {
      console.log(data)
      this.email = new Email();
      this.gotoEmail();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  
  gotoEmail(){
    this.router.navigate(['/students']);
  }
}
