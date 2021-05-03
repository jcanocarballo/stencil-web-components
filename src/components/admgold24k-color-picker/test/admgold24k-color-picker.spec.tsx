import { newSpecPage } from '@stencil/core/testing';
import { Admgold24kColorPicker } from '../admgold24k-color-picker';

describe('admgold24k-color-picker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Admgold24kColorPicker],
      html: `<admgold24k-color-picker></admgold24k-color-picker>`,
    });
    expect(page.root).toEqualHtml(`
      <admgold24k-color-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admgold24k-color-picker>
    `);
  });
});
