import { newSpecPage } from '@stencil/core/testing';
import { MediaBox } from '../media-box';

describe('media-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MediaBox],
      html: `<media-box></media-box>`,
    });
    expect(page.root).toEqualHtml(`
      <media-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </media-box>
    `);
  });
});
