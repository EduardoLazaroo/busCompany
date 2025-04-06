import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-city',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './select-city.component.html',
  styleUrl: './select-city.component.scss',
})
export class SelectCityComponent {
  cities = [
    {
      name: 'Paraguaçu Paulista',
      filhos: [{ filho: 'filhote de paraguaçu' }],
    },
  ];

  selectedCity = this.cities[0];

  onCityChange(event: any) {
    console.log('Selected city:', event.detail.value);
  }
}
