import { Helmet } from "react-helmet-async";
import SeoDate from './Seo.json';

export default function SEO({ page }) {
  const seo = SeoDate[page];

  if (!seo) return null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </Helmet>
  );
}
