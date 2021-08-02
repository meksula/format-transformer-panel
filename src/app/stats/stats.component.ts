import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  statistics = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  fetchStats() {
    this.http.get(environment.apiUrl + '/api/v1/stats')
      .subscribe(resp => {
        this.statistics = JSON.stringify(resp);
      });
  }
}
