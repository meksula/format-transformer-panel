import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  input = '';
  output = '';

  formatFrom = 'JSON';
  formatTo = 'JSON';

  options: string[] = ["JSON", "YAML", "XML"];

  constructor(private http: HttpClient) {}

  convert() {
    const encodedInput = btoa(this.input);
    console.log(this.input);
    console.log(encodedInput);
    console.log('Converting from: ' + this.formatFrom + ', to: ' + this.formatTo);
    const requestBody = {
      from: this.formatFrom,
      to: this.formatTo,
      encodedData: encodedInput
    }
    const json = JSON.stringify(requestBody);
    const corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
     this.http.post(environment.apiUrl + '/api/v1/transformation', json, {headers: corsHeaders})
              .subscribe(resp => {
                let body = JSON.parse(JSON.stringify(resp));
                this.output = atob(body.encodedData);
               });

            // this.http.post('http://localhost:7000/api/v1/transformation', json, {headers: corsHeaders})
            //  .subscribe(resp => {
              // let body = JSON.parse(JSON.stringify(resp));
              // this.output = atob(body.encodedData);
            //  });
  }
}
