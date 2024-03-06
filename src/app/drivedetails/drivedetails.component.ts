import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WalkincardComponent } from '../walkincard/walkincard.component';
import { JobDetailsComponent } from '../jobdetails/jobdetails.component';
import { TimeslotComponent } from '../timeslot/timeslot.component';
import { PrerequisitesComponent } from '../prerequisites/prerequisites.component';
@Component({
  selector: 'app-drivedetails',
  standalone: true,
  imports: [CommonModule,JobDetailsComponent,WalkincardComponent,TimeslotComponent,PrerequisitesComponent],
  templateUrl: './drivedetails.component.html',
  styleUrl: './drivedetails.component.scss'
})
export class DrivedetailsComponent implements OnInit{
  guid: string='';
  driveDetails: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { 
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['guid'];
      this.fetchData(id);
    });
  }
 
  fetchData(guid:string): void {
    const query = `
    query getWalkInDriveByGUID($guid: String!) {
      getWalkInDriveByGUID(guid: $guid) {
        time_Slots {
          slot_timings
          id
        }
        start_date
        process
        minimum_system_requirements
        location
        job_Roles {
          id
          job_description
          job_requirements
          job_title
          package
        }
        instructions_for_exam
        id
        guid
        general_instructions
        expiry
        end_date
        dt_modified
        dt_created
        drive_title
      }
    }
    `;

    this.http.post<any>('http://localhost:5000/graphql', { query, variables: { guid: guid } }, {
      headers: {
        'x-api-key': 'dummy-api-key'
      }
    })
    .subscribe(response => {
      this.driveDetails = response.data.getWalkInDriveByGUID;
      console.log(this.driveDetails.job_Roles)
    }, error => {
      console.error('Error in fetchData:', error.message);
    });
  }
}
