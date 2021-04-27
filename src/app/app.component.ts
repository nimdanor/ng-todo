import { Component, ViewEncapsulation, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [`app.component.scss`],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  ngOnInit() {}
}
