import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  imports:[CommonModule],
  standalone:true,
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent {
  @Input() driveDetails: any;
  showPrerequisites: boolean = true;

  togglePrerequisites() {
    this.showPrerequisites = !this.showPrerequisites;
  }

  constructor() { }
}
