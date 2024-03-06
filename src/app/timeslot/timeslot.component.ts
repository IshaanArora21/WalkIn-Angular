import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeslot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeslot.component.html',
  styleUrl: './timeslot.component.scss'
})
export class TimeslotComponent {
  @Input() driveDetails: any;
  selectedFile: string='';
  applyDrive: any = {};

  constructor() { }

  ngOnInit(): void {
    this.applyDrive = {};
  }

  handleFileChange(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = file;
    this.applyDrive.updatedResume = file.name;
  }

  handleTimeSlotChange(event: any): void {
    const selectedTimeSlot = Number(event.target.value);
    this.applyDrive.timeSlot = selectedTimeSlot;
  }

  handleJobRoleChange(event: any): void {
    const selectedJobRole = Number(event.target.value);
    const isChecked = event.target.checked;

    let updatedJobRoles = this.applyDrive.jobRoles || [];

    if (isChecked) {
      if (!updatedJobRoles.includes(selectedJobRole)) {
        updatedJobRoles = [...updatedJobRoles, selectedJobRole];
      }
    } else {
      updatedJobRoles = updatedJobRoles.filter((role:any)=>role!=selectedJobRole);
    }

    this.applyDrive.jobRoles = updatedJobRoles;
  }
}