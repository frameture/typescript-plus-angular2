import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ]
})
export class SharedModule { }
