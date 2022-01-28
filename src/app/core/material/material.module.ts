import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatSelectModule, MatFormFieldModule],
})
export class MaterialModule {}
