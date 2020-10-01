import { Component } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  [x: string]: any;
  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;

  constructor(public userService: UsersService) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log(error);
      }
    );
  }
}
