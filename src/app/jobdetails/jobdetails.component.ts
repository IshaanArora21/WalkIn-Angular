import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobdetails',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.scss']
})
export class JobDetailsComponent implements OnChanges,DoCheck{
  @Input() jobDetails: any;
  showJobDesc: boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("do change")
  }
  ngDoCheck(): void {
    console.log("do check");
  }
  toggleJobDesc() {
    this.showJobDesc = !this.showJobDesc;
  }
}