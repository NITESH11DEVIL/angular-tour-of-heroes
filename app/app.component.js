"use strict";
/*export class Hero {
  id :number;
  name : string;
}

const HEROES: Hero[] = [
  {id: 10, name:'Devil'},
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
  ];*/
constructor(private, heroService, HeroService);
{ }
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of heroes';
        /*   hero: Hero={
             id :1,
             name :'Windstorm'
         }; */
        this.heroes = HERO[];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map