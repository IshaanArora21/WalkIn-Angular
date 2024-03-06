import { CommonModule } from '@angular/common';
import { Component,  OnInit } from '@angular/core';
import { WalkincardComponent } from '../walkincard/walkincard.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-drives',
  standalone: true,
  imports: [CommonModule,WalkincardComponent],
  templateUrl: './drives.component.html',
  styleUrl: './drives.component.scss'
})
export class DrivesComponent implements OnInit{
  drives: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDrives();
    }
  //   this.driveService.fetchData(query, { }).subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //         console.error('Error in fetchData:', error.message);
  //       });
  // }
  async fetchDrives(): Promise<void> {
    const query = `
      query {
        getAllWalkInDrives {
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

    this.http.post<any>('http://localhost:5000/graphql', { query }, {
      headers: {
        'x-api-key': 'dummy-api-key'
      }
    })
    .subscribe(response => {
      this.drives = response.data.getAllWalkInDrives;
      console.log(this.drives);
    }, error => {
      console.error('Error in fetchData:', error.message);
    });
  }
}
