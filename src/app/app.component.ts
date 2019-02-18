import { Component, OnInit} from '@angular/core';
import * as M  from  '../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    options = {
    fullWidth: true,
    indicators: true
  };

  ngOnInit(){
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, this.options);
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, this.options);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,this.options); 
  }


}
