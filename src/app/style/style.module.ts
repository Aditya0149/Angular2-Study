import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleComponent } from './style.component';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    StyleComponent
  ],
  declarations: [StyleComponent]
})
export class StyleModule { }
