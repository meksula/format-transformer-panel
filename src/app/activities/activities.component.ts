import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  fetchActivities() {
    this.http.get(environment.apiUrl + '/api/v1/activity')
      .subscribe(resp => {
        this.activities = JSON.stringify(resp);
      });
  }
}
