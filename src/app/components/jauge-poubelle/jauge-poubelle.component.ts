import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jauge-poubelle',
  templateUrl: './jauge-poubelle.component.html',
  styleUrls: ['./jauge-poubelle.component.css']
})
export class JaugePoubelleComponent implements OnInit {
  @Input() pourcentageRemplissage: number = 0; // Vous pouvez passer cette valeur depuis le composant parent

  get hauteurJauge(): number {
    return this.pourcentageRemplissage;
  }

  get couleurJauge(): string {
    if (this.pourcentageRemplissage < 50) {
      return 'vert';
    } else if (this.pourcentageRemplissage >= 50 && this.pourcentageRemplissage < 75) {
      return 'orange';
    } else {
      return 'rouge';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
