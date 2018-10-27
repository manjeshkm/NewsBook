import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Country } from './country';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  country: Array<Country> = [{
    name: 'Argentina',
    code: 'ar',
    flag: 'https://www.countryflags.io/ar/flat/64.png'
  }, {
    name: 'Australia',
    code: 'au',
    flag: 'https://www.countryflags.io/au/flat/64.png'
  }, {
    name: 'Austria',
    code: 'at',
    flag: 'https://www.countryflags.io/at/flat/64.png'
  }, {
    name: 'Belgium',
    code: 'be',
    flag: 'https://www.countryflags.io/be/flat/64.png'
  }, {
    name: 'Brazil',
    code: 'br',
    flag: 'https://www.countryflags.io/br/flat/64.png'
  }, {
    name: 'Bulgaria',
    code: 'bg',
    flag: 'https://www.countryflags.io/bg/flat/64.png'
  }, {
    name: 'Canada',
    code: 'ca',
    flag: 'https://www.countryflags.io/ca/flat/64.png'
  }, {
    name: 'China',
    code: 'cn',
    flag: 'https://www.countryflags.io/cn/flat/64.png'
  }, {
    name: 'Colombia',
    code: 'co',
    flag: 'https://www.countryflags.io/co/flat/64.png'
  }, {
    name: 'Cuba',
    code: 'cu',
    flag: 'https://www.countryflags.io/cu/flat/64.png'
  }, {
    name: 'Czech Republic',
    code: 'cz',
    flag: 'https://www.countryflags.io/cz/flat/64.png'
  }, {
    name: 'Egypt',
    code: 'eg',
    flag: 'https://www.countryflags.io/eg/flat/64.png'
  }, {
    name: 'France',
    code: 'fr',
    flag: 'https://www.countryflags.io/fr/flat/64.png'
  }, {
    name: 'Germany',
    code: 'de',
    flag: 'https://www.countryflags.io/de/flat/64.png'
  }, {
    name: 'Greece',
    code: 'gr',
    flag: 'https://www.countryflags.io/gr/flat/64.png'
  }, {
    name: 'Hong Kong',
    code: 'hk',
    flag: 'https://www.countryflags.io/hk/flat/64.png'
  }, {
    name: 'Hungary',
    code: 'hu',
    flag: 'https://www.countryflags.io/hu/flat/64.png'
  }, {
    name: 'INDIA',
    code: 'in',
    flag: 'https://www.countryflags.io/in/flat/64.png'
  }, {
    name: 'Indoneasia',
    code: 'id',
    flag: 'https://www.countryflags.io/id/flat/64.png'
  }, {
    name: 'Ireland',
    code: 'ie',
    flag: 'https://www.countryflags.io/ie/flat/64.png'
  }, {
    name: 'Israel',
    code: 'il',
    flag: 'https://www.countryflags.io/il/flat/64.png'
  }, {
    name: 'Italy',
    code: 'it',
    flag: 'https://www.countryflags.io/it/flat/64.png'
  }, {
    name: 'Japan',
    code: 'jp',
    flag: 'https://www.countryflags.io/jp/flat/64.png'
  }, {
    name: 'Latvia',
    code: 'lv',
    flag: 'https://www.countryflags.io/lv/flat/64.png'
  }, {
    name: 'Lithuania',
    code: 'lt',
    flag: 'https://www.countryflags.io/lt/flat/64.png'
  }, {
    name: 'Malaysia',
    code: 'my',
    flag: 'https://www.countryflags.io/my/flat/64.png'
  }, {
    name: 'Mexico',
    code: 'mx',
    flag: 'https://www.countryflags.io/mx/flat/64.png'
  }, {
    name: 'Morocco',
    code: 'ma',
    flag: 'https://www.countryflags.io/ma/flat/64.png'
  }, {
    name: 'Netherlands',
    code: 'nl',
    flag: 'https://www.countryflags.io/nl/flat/64.png'
  }, {
    name: 'New Zealand',
    code: 'nz',
    flag: 'https://www.countryflags.io/nz/flat/64.png'
  }, {
    name: 'Nigeria',
    code: 'ng',
    flag: 'https://www.countryflags.io/ng/flat/64.png'
  }, {
    name: 'Norway',
    code: 'no',
    flag: 'https://www.countryflags.io/no/flat/64.png'
  }, {
    name: 'Philippines',
    code: 'ph',
    flag: 'https://www.countryflags.io/ph/flat/64.png'
  }, {
    name: 'Poland',
    code: 'pl',
    flag: 'https://www.countryflags.io/pl/flat/64.png'
  }, {
    name: 'Portugal',
    code: 'pt',
    flag: 'https://www.countryflags.io/pt/flat/64.png'
  }, {
    name: 'Romania',
    code: 'ro',
    flag: 'https://www.countryflags.io/ro/flat/64.png'
  }, {
    name: 'Russia',
    code: 'ru',
    flag: 'https://www.countryflags.io/ru/flat/64.png'
  }, {
    name: 'Saudi Arabia',
    code: 'sa',
    flag: 'https://www.countryflags.io/sa/flat/64.png'
  }, {
    name: 'Serbia',
    code: 'rs',
    flag: 'https://www.countryflags.io/rs/flat/64.png'
  }, {
    name: 'Singapore',
    code: 'sg',
    flag: 'https://www.countryflags.io/sg/flat/64.png'
  }, {
    name: 'Slovakia',
    code: 'sk',
    flag: 'https://www.countryflags.io/sk/flat/64.png'
  }, {
    name: 'Slovenia',
    code: 'si',
    flag: 'https://www.countryflags.io/si/flat/64.png'
  }, {
    name: 'South Africa',
    code: 'za',
    flag: 'https://www.countryflags.io/za/flat/64.png'
  }, {
    name: 'South Korea',
    code: 'kr',
    flag: 'https://www.countryflags.io/kr/flat/64.png'
  }, {
    name: 'Sweden',
    code: 'se',
    flag: 'https://www.countryflags.io/se/flat/64.png'
  }, {
    name: 'Switzerland',
    code: 'ch',
    flag: 'https://www.countryflags.io/ch/flat/64.png'
  }, {
    name: 'Taiwan',
    code: 'tw',
    flag: 'https://www.countryflags.io/tw/flat/64.png'
  }, {
    name: 'Thailand',
    code: 'th',
    flag: 'https://www.countryflags.io/th/flat/64.png'
  }, {
    name: 'Turkey',
    code: 'tr',
    flag: 'https://www.countryflags.io/tr/flat/64.png'
  }, {
    name: 'UAE',
    code: 'ae',
    flag: 'https://www.countryflags.io/ae/flat/64.png'
  }, {
    name: 'Ukraine',
    code: 'ua',
    flag: 'https://www.countryflags.io/ua/flat/64.png'
  }, {
    name: 'United Kingdom',
    code: 'gb',
    flag: 'https://www.countryflags.io/gb/flat/64.png'
  }, {
    name: 'United States',
    code: 'us',
    flag: 'https://www.countryflags.io/us/flat/64.png'
  }, {
    name: 'Venuzuela',
    code: 've',
    flag: 'https://www.countryflags.io/ve/flat/64.png'
  }];
  countryCode: String = this.http.getCountryFromLocalStorage();
  flag = 'https://www.countryflags.io/' + this.countryCode + '/flat/64.png';
  subscribtionStatus: String = '';
  statusColor: String = 'red';
  constructor(private modalService: NgbModal, private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  saveCountry(c: Country) {
    console.log('Country:' + c);
    localStorage.setItem('country', c.code);
    location.reload();
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  open(content) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
    }, (reason) => {
      this.statusClear();
    });
  }

  subscribe(email: String) {
    console.log('email:' + email);
    this.http.newSubscribe(email).subscribe(res => {
      this.subscribtionStatus = res;
      console.log('Subscription respnc:' + res);
    }, (err: Error) => {
      console.log('error in subscribtion: ' + err.message);
    }, () => {
      if (this.subscribtionStatus === 'Saved') {
        this.subscribtionStatus = 'please click on the activation link sent to the provided mail id to conform your subscribtion';
        this.statusColor = 'green';
      } else {
        this.statusColor = 'red';
      }
    });
  }

  statusClear() {
    this.subscribtionStatus = '';
  }
}
