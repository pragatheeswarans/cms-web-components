import { Block, Document } from '@contentful/rich-text-types';
import {
  Next,
  NodeRenderer,
} from '@contentful/rich-text-html-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export function transformRichTextHeader(richTextNode: Document, classNames: string = '') {
  if (!richTextNode) return '';

  const headings: { [k: string]: NodeRenderer } = {};
  new Array(6).fill('').forEach((_item, index) => {
    const tag = `h${index + 1}`;
    headings[`heading-${index + 1}`] = (headerNode: Block, next: Next) => {
      let content = next(headerNode.content);
      content = content.replace(/\n/g, '<br/>');
      return `<${tag} class='${classNames}'>${content}</${tag}>`;
    }
  });

  const options = {
    renderNode: {
      ...headings
    }
  }
  return documentToHtmlString(richTextNode, options);
}
