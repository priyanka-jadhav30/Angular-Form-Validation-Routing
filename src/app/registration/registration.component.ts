import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationData = new User('Kajal','kajal@12','kajal011@gmail.com','default','');
  public countryOptions =['India','Australia', 'Canada', 'USA', 'Germany', 'Switzarland'];
  public hasError = true;
  validateOptions(country){
    if(country === "default")
    {
      this.hasError=true;
    }
    else
    {
      this.hasError=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
