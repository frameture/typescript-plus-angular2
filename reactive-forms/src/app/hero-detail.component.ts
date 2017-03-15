import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Address, Hero, states } from './data-model';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  get secretLairs() {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  addLair(): void {
    this.secretLairs.push(this.formBuilder.group(new Address()));
  }

  ngOnChanges(): void {
    this.heroForm.reset({
      name: this.hero.name,
    });
    this.setAddresses(this.hero.addresses);
  }

  removeLair(index: number): void {
    this.secretLairs.removeAt(index);
  }

  private createForm(): void {
    this.heroForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      secretLairs: this.formBuilder.array([]),
      power: '',
      sidekick: ''
    });
  }

  private setAddresses(addresses: Address[]): void {
    const addressFGs = addresses
      .map(address => this.formBuilder.group(address));
    const formArray = this.formBuilder.array(addressFGs);
    this.heroForm.setControl('secretLairs', formArray);
  }
}
