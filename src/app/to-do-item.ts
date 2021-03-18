import { Data } from "@angular/router";

export class ToDoItem {
    title: string='';
    date:Data=new Date();
    description:string='';
    tags:string='';
    priority:number=0;
    isComplete: boolean=false;
  }