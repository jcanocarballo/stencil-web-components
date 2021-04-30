import { newSpecPage } from '@stencil/core/testing';
import { Admgold24kModal } from '../admgold24k-modal';

describe('admgold24k-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Admgold24kModal],
      html: `<admgold24k-modal></admgold24k-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <admgold24k-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admgold24k-modal>
    `);
  });
});
