import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() changeTab: EventEmitter<any> = new EventEmitter();

  departementList: string[] = ['DIGIX', 'BEST', 'CAO', 'ADMINISTRATION', 'FINLAB', 'FSI','MARKETING_SALES','PMO','PROXYMFRANCE','PROXYM_U','QA','RH','SI_Integration','SUPPORT_CLIENT','TGO','VALOMNIA '];
  title = new FormControl('', [Validators.required]);
  business = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  type = new FormControl('web', [Validators.required]);
  secteur = new FormControl('', [Validators.required]);
  range = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required)
  });

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
   
  }

  getErrorMessage() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.business.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.description.hasError('required')) {
      return 'You must enter a value';
    }
    return
  }
  submitForm(){
    const project = {
      type:this.type.value,
      title:this.title.value,
      description:this.description.value,
      business:this.business.value,
      dateStart:this.range.value.start,
      dateEnd:this.range.value.end,
      secteur:this.secteur.value
    }
    this.projectsService.setProject(project)
    this.changeTab.emit();
    
    
  }

}
