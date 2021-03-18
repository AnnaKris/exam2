import { Component,Input,EventEmitter,Output} from '@angular/core';
import { PROJECTS } from "../mock-todo-projects";
import {FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {
  

  prevProject:string="";
  project:any;
  taskForm:boolean=false;

  @Input() openTask:any;
  @Input() prjName:string='';
  @Input() newTitle : string="";
  @Input() newDate : any;
  @Input() newDescription : string="";
  @Input() newTags : string="";
  @Input() newPriority : string="";
  

  hideAllTasks(){
    this.taskForm=false;
  }

  showAllTasks()
  {
    this.project=PROJECTS.find(it=>it.pr===this.prjName);
    this.prevProject=this.prjName;
    console.log(this.prjName);
    this.taskForm=true;
    
  }

  addTask(){

    if (this.newTitle&& this.newDate && this.newDescription && this.newTags && this.newPriority) 
    {
      this.project=PROJECTS.find(it=>it.pr===this.prjName);
      this.project["data"].push({
        title:this.newTitle,
        date:new Date(this.newDate),
        description:this.newDescription,
        tags:this.newTags,
        priority:this.newPriority,
        isComplete:false
      });
      this.clear();
      this.showAllTasks()
      
    }
     else{
      alert("Please, fill in the field required information.");
    }
  }
  deleteTask(index: number){

      this.project=PROJECTS.find(it=>it.pr===this.prjName);

      this.project["data"].splice(index, 1);
      
    
  }

  editTask(index: number){
    this.project=PROJECTS.find(it=>it.pr===this.prjName);
      console.log(this.project["data"][index]);
      this.newTitle =this.project["data"][index]["title"];
      this. newDate = this.project["data"][index]["date"];
      this.newDescription = this.project["data"][index]["description"];
      this.newTags = this.project["data"][index]["tags"];
      this.newPriority = this.project["data"][index]["priority"];
      this.taskForm=false;
      this.deleteTask(index);
  }
  clear() {
    this.newTitle ="";
    this. newDate = "";
    this.newDescription = "";
    this.newTags = "";
    this.newPriority = "";
  }

  

}
