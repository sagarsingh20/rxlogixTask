import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private data:ServicesService, private router:Router) { }
  tableData:any=[]
  optionValue:any=[]
  ngOnInit(): void {
    this.tableData=this.data.jsonData
    let data:any=[]
    data=this.data.jsonData.map((item:any)=>{
      data.push(item.job_title)
      this.optionValue=data
    })
  }
  editUser(id:number){
    this.router.navigate(['/edit/'+id])
  }
  deleteUser(name:string){
    const index=this.tableData.indexOf(name)
    if(index >= -1 && this.tableData.length>1){
      this.tableData.splice(index,1)
    }
  }
  addUser(){
    this.router.navigate(['/add'])
  }
  dataChange:any=[]
  selectionChnage(event:any){
    let currentValue=event.target.value
    this.dataChange=this.tableData.filter((item:any)=>{
      if(item.job_title.toLowerCase()===currentValue.toLowerCase()){
        this.dataChange.push(item)
        this.tableData=this.dataChange
      } 
    })
  }
  ageCheck(event:any){
    let currentAge=event.value
    this.dataChange=this.tableData.filter((item:any)=>{
      if(item.age===currentAge){
        this.dataChange.push(item)
        this.tableData=this.dataChange
      } 
    })
  }
  searchName(event:any){
    let currentNameSearch=event.target.value
    this.dataChange=this.tableData.filter((item:any)=>{
      if(item.name.toLowerCase()===currentNameSearch.toLowerCase()){
        this.dataChange.push(item)
        this.tableData=this.dataChange
      } 
    })
  }
  clearValue(){
    this.tableData=this.data.jsonData
  }
}
