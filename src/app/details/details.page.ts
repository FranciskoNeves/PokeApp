import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  pokemon;

  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.pokemon = this.router.getCurrentNavigation().extras.state.pokemon
        console.log(this.pokemon)
      }
    })
  }

  ngOnInit() {
  }

}
