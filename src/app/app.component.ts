import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
  }

  showDetails: boolean = false;
  new_added:any;
  printAdded(res) {
  this.new_added=res;
  this.showDetails = true;
  }
}
