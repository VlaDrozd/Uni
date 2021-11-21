import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { urls } from 'src/app/core/static/urls';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService, private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
