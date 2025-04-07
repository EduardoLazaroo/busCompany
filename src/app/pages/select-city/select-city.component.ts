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
  selectedCity: any = null;
  selectedCompany: any = null;
  steps = ['stepOne', 'stepTwo', 'stepThree', 'stepFour'];
  stepIndex = 0;

  cities = [
    {
      name: 'Paraguaçu Paulista',
      empresa: [{ nome: 'Ccd Transporte Coletivo', src: 'assets/img/bus/ccd.png' }],
    },
    {
      name: 'Assis',
      empresa: [{ nome: 'ViaAssis', src: 'assets/img/bus/viaassis.png' }],
    },
  ];

  get currentStep() {
    return this.steps[this.stepIndex];
  }

  nextStep() {
    if (this.stepIndex < this.steps.length - 1) this.stepIndex++;
  }

  prevStep() {
    if (this.stepIndex > 0) this.stepIndex--;
  }

  selectCompany(company: any) {
    this.selectedCompany = company;
  }

  onCityChange(city: any) {
    console.log('Cidade selecionada:', city);
  }
}
