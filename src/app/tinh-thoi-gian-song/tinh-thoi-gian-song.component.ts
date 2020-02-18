import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';


@Component({
  selector: 'app-tinh-thoi-gian-song',
  templateUrl: './tinh-thoi-gian-song.component.html',
  styleUrls: ['./tinh-thoi-gian-song.component.css']
})
export class TinhThoiGianSongComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
