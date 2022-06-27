import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  public jsonData=[
    {
      id:"1",
      name:'Sagar',
      job_title:'Angular Developer',
      age:'27',
      start_date:'2020-01-13',
      end_date:'2022-07-20'
    },
    {
      id:"2",
      name:'Divya',
      job_title:'React Developer',
      age:'25',
      start_date:'2020-01-13',
      end_date:'2022-04-08'
    },
    {
      id:"3",
      name:'Sonu',
      job_title:'Andriod Developer',
      age:'28',
      start_date:'2020-01-13',
      end_date:''
    },
    {
      id:"4",
      name:'Dhruv',
      job_title:'Python Developer',
      age:'28',
      start_date:'2020-01-13',
      end_date:''
    }
  ]
}
