import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface CertsMarkdownAttributes {
  achievement: string;
  completionYear: string;
  institution: string;
}

export interface CMSCerts {
  attributes: CertsMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const certsPath = path.join(basePath, 'edit-me', 'cms', 'certs');

export const getCerts = async (): Promise<CMSCerts[]> => {
  const dir = (await fs.readdir(certsPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(certsPath, filename));
      const { attributes, body } = parseFrontMatter<CertsMarkdownAttributes>(
        file.toString(),
      );

      invariant(
        attributes?.achievement,
        `${filename} missing "achievement" attribute.`,
      );
      invariant(
        attributes?.completionYear,
        `${filename} missing "completionYear" attribute.`,
      );
      invariant(
        attributes?.institution,
        `${filename} missing "institution" attribute.`,
      );

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
