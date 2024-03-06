import { Routes } from '@angular/router';
import { DrivedetailsComponent } from './drivedetails/drivedetails.component';
import { DrivesComponent } from './drives/drives.component';
import { ReviewComponent } from './review/review.component';
export const routes: Routes = [
  { path: 'walkindrives/:guid', component: DrivedetailsComponent },  
  { path: 'walkindrives/review', component: ReviewComponent },  
  { path: '', component: DrivesComponent },  
  ];
