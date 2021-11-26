import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.router.navigate(['/sign_in']);
  }

  public register(): void {
    this.router.navigateByUrl('sign_up');
  }

  public write(): void {
    this.router.navigate(['writer']);
  }

}
