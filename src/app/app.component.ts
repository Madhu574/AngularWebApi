import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit{

  

  title = 'admin-panel-layout';

  sideBarOpen = true;




  sideBarToggler() {

    this.sideBarOpen = !this.sideBarOpen;

  }

  ngOnInit()

  {

    // this.refreshDetails();

  }

}