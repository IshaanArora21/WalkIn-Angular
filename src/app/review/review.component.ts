import { Component, OnInit,Input } from '@angular/core';
import { formatDate } from '@angular/common'; // Import Angular's formatDate function if needed
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  reviewData: any = {};
  @Input() applyDrive:any
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const variables = {
      hallticket: {
        user_id: 1,
        job_role_id: this.applyDrive.jobRoles[0],
        walk_in_drive_id: 2,
        timeslot_id: this.applyDrive.timeSlot
      }
    };

      this.http.post<any>('http://localhost:5000/graphql', {
        query: `
          query GetHallTicket($hallticket: HallTicketInput!) {
            getHallTicket(hallticket: $hallticket) {
              job_title
              slot_timings
              user_id
              walk_in_drive_id
              company_name
              address_line_1
              area
              pincode
              things_to_remember
              phone
              city
              start_date
            }
          }
        `,
        variables: variables
      }, {
        headers: {
          'x-api-key': 'dummy-api-key'
        }
      }).subscribe(response => {
        this.reviewData = response.data.getHallTicket;
        console.log(this.reviewData);
      }, error => {
        console.error('Error in fetchData:', error.message);
      });
    }
}
