import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) { }
  id = this.route.snapshot.paramMap.get('id');
  ngOnInit() {
    if (this.id) {
      console.log('subscriber id:' + this.id);
      this.http.setSubscriberStatus(this.id)
        .subscribe(resp => {
          if (resp !== 'ACTIVATED') {
            this.router.navigateByUrl('/home');
          }
          console.log('res: ' + resp);
        }, (err: Error) => {
          console.log('Error: ' + err.message);
          this.router.navigateByUrl('/home');
        });
    } else {
      this.router.navigateByUrl('/home');
    }

  }

}
