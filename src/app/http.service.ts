import 'rxjs/RX';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/';
  getNews() {
    // tslint:disable-next-line:prefer-const
    let country: String = this.getCountryFromLocalStorage();
    return this.http.get(this.url + 'headlines/' + country);
  }
  getNewsByCategory(category: String) {
    // tslint:disable-next-line:prefer-const
    let country: String = this.getCountryFromLocalStorage();
    return this.http.get(this.url + 'newsByCategory?country=' + country + '&category='
      + category);
  }

  setCountry(country: string) {
    localStorage.setItem('country', country);
  }

  getCountryFromLocalStorage(): String {
    let country: String;
    country = localStorage.getItem('country');
    console.log('country:' + country);
    if (country == null) {
     localStorage.setItem('country', 'in');
     country = 'in';
    }
    return country;
  }

  getNewsByQuery(query: String) {
    // tslint:disable-next-line:prefer-const
    let country = this.getCountryFromLocalStorage();
    return this.http.get(this.url + 'queryNews?country=' + country + '&query='
    + query);
  }

  newSubscribe(email: String) {
   return this.http.post(this.url + 'subscribe', email, {responseType: 'text'});
  }

  setSubscriberStatus(id: String) {
    return this.http.post(this.url + 'verify', id, {responseType: 'text'});
  }

}
