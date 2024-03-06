import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobDetailsComponent } from './jobdetails/jobdetails.component';
import { WalkincardComponent } from './walkincard/walkincard.component';
import {  HttpClientModule } from '@angular/common/http';
import { DrivesComponent } from './drives/drives.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JobDetailsComponent,WalkincardComponent,DrivesComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'walkin';
}
