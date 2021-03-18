import { Component,EventEmitter,Input, Output} from '@angular/core';
import { PROJECTS } from "../mock-todo-projects";
import {FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-to-do-projects',
  templateUrl: './to-do-projects.component.html',
  styleUrls: ['./to-do-projects.component.css']
})

export class ToDoProjectsComponent {
  
  projects =PROJECTS;

  prForm:boolean=false;
  
  @Input() newProject : string="";

  addProject() {
    if (this.newProject) {
      console.log(this.projects.find(it=>it.pr===this.newProject));

      if(!this.projects.find(it=>it.pr===this.newProject)){
        PROJECTS.push({
          pr:this.newProject,
          data:[],
          isComplete:false
        });
        this.prForm=false;
        this.clear();

      }
      else{
        alert("This name exists! Please, enter another project name.");

      }
    }
     else{
      alert("Please, fill in the field required information.");
    }
  }
  createProject(){
    this.prForm=true;
  }
  cancel(){
    this.prForm=false;
  }
  @Output() onChanged = new EventEmitter <any> ();
  onCh(e:any){
    this.onChanged.emit(e);
  }
  deleteProject(index: number){

    PROJECTS.splice(index, 1);
  
  }

  clear() {
    this.newProject ="";
  }
  
}
