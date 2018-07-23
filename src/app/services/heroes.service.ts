import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes: Heroe[] = [
        {
            id: 0,
            heroe: 'Spider Man',
            nombre: 'Peter Benjamin Parker',
            img: '../../assets/img/spiderman.jpg',
            aparicion: '1962',
            poder: 'Peter can cling to most surfaces, has superhuman strength (able to lift 10 tons optimally) and is roughly 15 times more agile than a regular human. The combination of his acrobatic leaps and web-slinging enables him to travel rapidly from place to place. His spider-sense provides an early warning detection system linked with his superhuman kinesthetics, enabling him the ability to evade most any injury, provided he doesn\'t cognitively override the autonomic reflexes. Note: his power enhancements through his transformation by the Queen and after battling Morlun - including his organic web glands and stingers - have been undone after Spider-Man\'s deal with Mephisto.'
        },
        {
            id: 1,
            heroe: 'Black Panter',
            nombre: 'T\'Challa',
            img: '../../assets/img/blackpanter.jpg',
            aparicion: '1966',
            poder: 'T\'Challa\'s senses and physical attributes have been enhanced to superhuman levels by the heart-shaped herb.'
        },
        {
            id: 2,
            heroe: 'Black Widow',
            nombre: 'Natalia "Natasha" Alianovna Romanova',
            img: '../../assets/img/blackwidow.jpg',
            aparicion: '1964',
            poder: 'Government treatments have slowed her aging, augmented her immune system and enhanced her physical durability.'
        },
        {
            id: 3,
            heroe: 'Iron Man',
            nombre: 'Anthony Edward "Tony" Stark',
            img: '../../assets/img/ironman.jpg',
            aparicion: '1963',
            poder: 'None; Tony\'s body had been enhanced by the modified techno-organic virus, Extremis, but it is currently inaccessible and inoperable.'
        },
        {
            id: 4,
            heroe: 'Captain America',
            nombre: 'Steven "Steve" Rogers',
            img: '../../assets/img/capitanamerica.jpg',
            aparicion: '1941',
            poder: 'Captain America represented the pinnacle of human physical perfection. He experienced a time when he was augmented to superhuman levels, but generally performed just below superhuman levels for most of his career. Captain America had a very high intelligence as well as agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed. The Super-Soldier formula that he had metabolized had enhanced all of his bodily functions to the peak of human efficiency. Most notably, his body eliminates the excessive build-up of fatigue-producing poisons in his muscles, granting him phenomenal endurance.'
        },
        {
            id: 5,
            heroe: 'Doctor Strange',
            nombre: 'Stephen Vincent Strange',
            img: '../../assets/img/drstrange.jpg',
            aparicion: '1963',
            poder: 'Doctor Strange is one of the most powerful sorcerers in existence. Like most sorcerers, he draws his power from three primary sources: the invocation of powerful mystic entities or objects, the manipulation of the universe\'s ambient magical energy, and his own psychic resources. Strange\'s magical repertoire includes energy projection and manipulation, matter transformation, animation of inanimate objects, teleportation, illusion-casting, mesmerism, thought projection, astral projection, dimensional travel, time travel and mental possession, to name a few. The full range of his abilities is unknown. Doctor Strange\'s powers are sometimes less effective against strictly science-based opponents, although he can overcome this limitation with effort.'
        },
        {
            id: 6,
            heroe: 'Hulk',
            nombre: 'Robert Bruce Banner',
            img: '../../assets/img/hulk.jpg',
            aparicion: '1962',
            poder: 'The Hulk possesses an incredible level of superhuman physical ability. His capacity for physical strength is potentially limitless due to the fact that the Hulk\'s strength increases proportionally with his level of great emotional stress, anger in particular. The Hulk can slam his hands together creating a shock wave, this shock wave can deafen people, send objects flying and extinguish fires. His thunderclap has been compared to hurricanes and sonic booms.'
        },
        {
            id: 7,
            heroe: 'Hawkeye',
            nombre: 'Clinton Francis "Clint" Barton',
            img: '../../assets/img/ojodehalcon.jpg',
            aparicion: '1965',
            poder: 'None. As Goliath, Barton used gases designed by Hank Pym to grow to great heights, with appropriate increases in strength and toughness. (He could also use them to shrink to minuscule size.)'
        },
        {
            id: 8,
            heroe: 'Thor',
            nombre: 'Thor Odinson',
            img: '../../assets/img/thor.jpg',
            aparicion: '1962',
            poder: 'As the son of Odin and Gaea, Thor\'s strength, endurance and resistance to injury are greater than the vast majority of his superhuman race. He is extremely long-lived (though not completely immune to aging), immune to conventional disease and highly resistant to injury. His flesh and bones are several times denser than a human\'s.'
        },
        {
            id: 9,
            heroe: 'Ant-Man',
            nombre: 'Scott Edward Harris Lang',
            img: '../../assets/img/ant-man.jpg',
            aparicion: '1979',
            poder: 'Has the ability to shrink to roughly the size of an ant, also can communicate telepathically with insects, and (as Ant-Man) can punch with as much force as a normal sized person'
        }
    ];

    constructor() {
        console.log('Servicio listo para usarse');
    }

    getHeroes() {
        return this.heroes;
    }

    getHeroe( idx: string) {
        return this.heroes[idx];
    }

    buscarHeroe( termino: string ): Heroe[] {
        let heroesArr: Heroe[] = [];
        termino = termino.toLocaleLowerCase();

        for ( let heroe of this.heroes ) {
            let nombre = heroe.heroe.toLocaleLowerCase();
            if ( nombre.indexOf( termino ) >= 0 ) {
                heroesArr.push( heroe );
            }
        }

        return heroesArr;
    }
}

export interface Heroe {
    id: number;
    heroe: String;
    nombre: String;
    img: String;
    aparicion: String;
    poder: String;
}
