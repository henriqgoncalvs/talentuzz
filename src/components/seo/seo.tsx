import Head from 'next/head';

export type SeoP = {
  title: string;
};

export const Seo = ({ title }: SeoP) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
