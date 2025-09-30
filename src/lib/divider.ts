import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fui-divider">
      <div class="fui-divider__line"></div>
      @if (name()) {
        <div class="fui-divider__text">
          {{ name() }}
        </div>
        <div class="fui-divider__line"></div>
      }
    </div>
  `,
})
export class DividerComponent {
  name = input<string>();
}
