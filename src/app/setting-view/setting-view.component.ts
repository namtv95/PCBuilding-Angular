import { Component, OnInit, Input } from '@angular/core';
import { HardWare } from 'src/model/hardware';

@Component({
  selector: 'app-setting-view',
  templateUrl: './setting-view.component.html',
  styleUrls: ['./setting-view.component.scss']
})
export class SettingViewComponent implements OnInit {

  @Input('hardwareList') hardwareList: Array<HardWare>;
  constructor() { }

  ngOnInit() {
  }
}
