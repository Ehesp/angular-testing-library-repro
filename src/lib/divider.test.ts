import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/angular';

import { DividerComponent } from './divider';

describe('<fui-divider>', () => {
  it.only('renders a divider with text', async () => {
    const { container } = await render(DividerComponent, {
      imports: [DividerComponent],
      inputs: {
        name: 'hello',
      },
    });

    screen.debug();

    const textContainer = container.querySelector('.fui-divider__text');
    expect(textContainer).toBeTruthy();
  });
});
