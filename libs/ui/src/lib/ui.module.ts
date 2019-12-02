import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxButtonComponent } from './nx-button/nx-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NxButtonComponent],
  exports: [NxButtonComponent]
})
export class UiModule {}
