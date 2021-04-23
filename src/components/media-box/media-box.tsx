import { Component, h, Prop } from '@stencil/core';
import { Document } from '@contentful/rich-text-types';
import { transformRichTextHeader } from '../../utils/transforms';

@Component({
  tag: 'media-box',
  styleUrl: 'media-box.css',
  shadow: true,
})

export class MediaBox {

  @Prop() sectionTitle: Document;
  @Prop() sectionDescription: string;
  @Prop() imageSource: string;
  @Prop() imageAltText: string;
  @Prop() imageOrientation: string;

  render() {
    let mediaDirectionClass;
    if (this.imageOrientation === 'right') {
      mediaDirectionClass = 'media-box-reverse'
    }

    return (
      <section class={`media-box-wrapper ${mediaDirectionClass}`}>
        <div class="media-box-element">
          <img class="media-box-image" src={this.imageSource} alt={this.imageAltText} />
        </div>
        <div class="media-box-element text-content">
          <div innerHTML={transformRichTextHeader(this.sectionTitle, 'media-box-element-title')}></div>
          <p class="media-box-element-desc">{this.sectionDescription}</p>
          <slot />
        </div>
      </section>
    );
  }
}
