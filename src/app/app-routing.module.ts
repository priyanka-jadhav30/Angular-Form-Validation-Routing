import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path : "departments",component : DepartmentsComponent  },
  { path : "employess", component : EmployeesComponent  },
  { path : "registration", component : RegistrationComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentsComponent, EmployeesComponent, RegistrationComponent ] ;
