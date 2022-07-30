import { Component } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import {HttpClient} from "@angular/common/http";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(){
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/1").toPromise().then(result =>{
      console.log(result)
      this.pokemon = result;
    } )
  }

  navToDetailsPage(pokemon){
    let navigationExtra: NavigationExtras = {
      state: {
        pokemon: this.pokemon
      }
    }
    this.router.navigateByUrl('/details', navigationExtra)
  }

}
