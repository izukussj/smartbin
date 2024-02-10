import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jauge',
  templateUrl: './jauge.component.html',
  styleUrls: ['./jauge.component.css']
})
export class JaugeComponent implements OnInit {
  fillLevel: number = 0; // Exemple de pourcentage de remplissage
  gaugeType: string = 'semi';
  cap: string = 'round';
  thick: number = 20;
  label: string = 'Remplissage';
  color: string = 'green'; // Couleur par défaut
  bgColor: string = '#e5e5e5';
  appendText: string = '%';

  constructor() { }

  ngOnInit(): void {
    // Ici, vous devriez intégrer la logique pour recevoir le pourcentage de remplissage depuis Firebase
    // et mettre à jour fillLevel et color en conséquence
    this.updateGauge(0); // Mettez à jour cette valeur dynamiquement basée sur Firebase
  }

  updateGauge(value: number) {
    this.fillLevel = value;
    if(value < 50) {
      this.color = 'green';
    } else if(value >= 50 && value < 75) {
      this.color = 'orange';
    } else {
      this.color = 'red';
    }
  }
}
