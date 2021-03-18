import { ToDoProject } from "./to-do-project";

export const PROJECTS: ToDoProject[] = [
  {
    pr: "Angular project",
    data: [
        {
            title:"Create project", 
            date:new Date('2021-01-02'),
            description:"Start project with Angular CLI. Use ng new ProjectName",
            tags:'#start #project',
            priority:1, 
            isComplete: false
        },
        {
            title:"Add components", 
            date:new Date('2021-01-02'),
            description:" Use ng new ProjectName and ng g c component name",
            tags:'#components #project',
            priority:2, 
            isComplete: false
        },
        {
            title:"Routs", 
            date:new Date('2021-01-02'),
            description:" Link component to AppComponent",
            tags:'#router #project',
            priority:3, 
            isComplete: false
        },

        {
            title:"Test project", 
            date:new Date('2021-01-02'),
            description:"You Should check project in case of bugs",
            tags:'#router #project',
            priority:3, 
            isComplete: false
        }
        

    ],
    isComplete: false
  },
  {
    pr: "Angular2 project",
    data: [
        {
            title:"Create project2", 
            date:new Date('2021-01-02'),
            description:"Start project with Angular CLI. Use ng new ProjectName",
            tags:'#start #project',
            priority:1, 
            isComplete: false
        },
        {
            title:"Add components2", 
            date:new Date('2021-01-02'),
            description:" Use ng new ProjectName and ng g c component name",
            tags:'#components #project',
            priority:2, 
            isComplete: false
        },
        {
            title:"Routs", 
            date:new Date('2021-01-02'),
            description:" Link component to AppComponent",
            tags:'#router #project',
            priority:3, 
            isComplete: false
        },

        {
            title:"Test project", 
            date:new Date('2021-01-02'),
            description:"You Should check project in case of bugs",
            tags:'#router #project',
            priority:3, 
            isComplete: false
        }
        

    ],
    isComplete: false
  }

];
