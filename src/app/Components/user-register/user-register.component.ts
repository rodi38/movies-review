import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  constructor(private userData: UserService) {}
  userForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    image: new FormControl(""),
 });

  ngOnInit(): void {


  }

  getUserFormData(data: any) {
    console.warn(data);
    this.userData.createUser(data).subscribe(
      (res) =>{
      console.warn(res);
    },
    error => console.log(error)
    )

    window.alert("Usuário cadastrado com sucesso!")
  }
}
