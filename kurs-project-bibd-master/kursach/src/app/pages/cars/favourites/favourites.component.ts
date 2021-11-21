import { urls } from 'src/app/core/static/urls';
import { HttpService } from 'src/app/core/services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  public list: any = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.httpService.sendGet(urls.GET_FAVOURITES_LIST).subscribe((res: any) => {
      this.list = res.list;
      console.log(this.list);

    })
  }

}
