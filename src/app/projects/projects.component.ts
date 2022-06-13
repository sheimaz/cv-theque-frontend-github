import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  addFormShow:boolean=false;

  
  headerTitle: string = "Projects Manager";
  filesNumber: string = 0 + " project";
  showPanel: boolean = false;
  btnText: string = "Upload Project"
  projects: any = [{status:'done', title:'DUKHAN Omnichannel',description:'It’s an omnichannel banking solution that provides a variety of product and services to meet all customers’ needs, with maintaining the respect of a solid controlling and the assuring quality. This solution is developed through the last techniques and bank innovative fields where the customers can get Sharia compliance services through web and mobile applications.'
  ,date:'24/05/2022',team:15},{status:'inprogress',title:'PROXYM CVtheque',description:'solution that provides a variety of product and services to meet all customers’ needs, with maintaining the respect of a solid controlling and the assuring quality. This solution is developed through the last techniques and bank innovative fields where the customers can',date:'24/05/2023',team:7},{status:'done',title:'Facebook clone',description:'where the customers can get Sharia compliance services through web and mobile applications',date:'24/05/2022',team:13}];//TO SHOW SAVED DATA ;
  searchValue = '';
  filteredProjects: any[] = [];
  

  constructor(private pjrService: ProjectsService) {
    this.filteredProjects = this.projects;
  }

  ngOnInit(): void {
    this.pjrService.getAllProject().subscribe((pjt) => {
      this.projects = pjt;
      this.filteredProjects = pjt;
      this.filesNumber = this.projects.length + " projects";
    })

  }

  // tslint:disable-next-line:typedef
  onSearchChange(searchValueInput: any) {
    console.log(searchValueInput);
    this.filteredProjects = this.projects;
    if (searchValueInput) {
      this.filteredProjects = this.filteredProjects.filter(
        el => {
          return el.title.toLowerCase().indexOf(searchValueInput.toLowerCase()) !== -1
        }
        );
      console.log(this.filteredProjects);
    } else {
      this.filteredProjects = this.projects;
    }
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    //this.showPanel = !this.showPanel;
    this.addFormShow = !this.addFormShow;

  }



  // tslint:disable-next-line:typedef
  delete(id: number) {
    if (confirm('Do you want to remove the project?')) {
      this.pjrService.deleteproject(id).subscribe(res => {
        // @ts-ignore
        if (res.success) {
          this.projects = this.projects.filter((t: any) => t.id !== id);
          this.filteredProjects = this.projects;
        }
      });
    }
  }
}