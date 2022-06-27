import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private services:ServicesService, private router:Router) { }
  update:boolean=false
  buttonValue:string='Add User'
  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      let id=this.route.snapshot.params['id']
      console.log(id)
      this.update=true
      let data=this.services.jsonData.filter(x => x.id == id);
      console.log(data)

      this.userForm.patchValue(data[0])
      this.buttonValue="Update"
    }
  }
  userForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    job_title:new FormControl(''),
    age:new FormControl(''),
    start_date:new FormControl(''),
    end_date:new FormControl('')
  })
  postUpdate(){
    if(this.route.snapshot.params['id']){
      let id =this.route.snapshot.params['id']-1
      console.log(id)
      this.services.jsonData[id]=this.userForm.value
      alert("Data is been Updated")
    } else{
      this.userForm.controls['id'].setValue(this.services.jsonData.length+1)
      this.services.jsonData.push(this.userForm.value)
      console.log(this.services.jsonData)
      alert("Data is been Added")
    } 
    this.router.navigate(['/'])
  }
}
