import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-walkincard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './walkincard.component.html',
  styleUrl: './walkincard.component.scss'
})
export class WalkincardComponent {
  @Input() driveDetails: any;
  @Input() drive: boolean = true;
  @Input() applyDrive: any; 
  @Input() userDetails: any;
 

  constructor(private http: HttpClient, private router: Router) { }

 

  async handleApply(): Promise<void> {
   
    const insertQuery = `
    mutation ApplyDrive($walk_in_drive_id: Int!, $timeslot_id: Int!, $updated_resume: String!, $job_role_id: [Int!]!, $user_id: Int!) {
      applyDrive(applicantInput: {
        walk_in_drive_id: $walk_in_drive_id,
        timeslot_id: $timeslot_id,
        user_id: $user_id,
        updated_resume: $updated_resume,
        job_role_id: $job_role_id
      })
    }
  `;

  const variables = {
    walk_in_drive_id: this.driveDetails.id,
    timeslot_id: this.applyDrive.timeSlot,
    updated_resume: "abc.pdf",
    job_role_id: this.applyDrive.jobRoles,
    user_id: 1
  };
  console.log(variables)

  // this.http.post<any>('http://localhost:5000/graphql', { query: insertQuery, variables }, {
  //     headers: {
  //       'x-api-key': 'dummy-api-key'
  //     }
  //   }).subscribe(response => {
  //     console.log(response)
  //     this.router.navigate(['/walkindrives']);
  //   }, error => {
  //     console.error('Error in handleApply:', error.message);
  //   });
}
handleClick(): void {
  console.log(this.driveDetails.guid);
  this.router.navigate(['/walkindrives', this.driveDetails.guid]);
}
}
