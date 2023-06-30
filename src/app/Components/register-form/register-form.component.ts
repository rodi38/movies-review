import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
   selector: "app-register-form",
   templateUrl: "./register-form.component.html",
   styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent {
   private movieList:  any[] = [];
   movieForm = new FormGroup({
      movieName: new FormControl(""),
      actorsList: new FormControl(""),
   });

   onSubmit() {
      console.warn(this.movieForm.value);
      this.movieList.push(this.movieForm.value);
      // console.log(this.movieLi st);
   }
}
