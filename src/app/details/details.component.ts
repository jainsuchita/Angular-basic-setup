import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user$: Object;
  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe((params) => {
      return this.user$ = params.id;
    });
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe((data) => {
        console.log(this.user$);
        this.user$ = data
        console.log(this.user$);
      });
  }

}
