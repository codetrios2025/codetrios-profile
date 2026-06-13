import { Helmet } from "react-helmet-async";
import SeoDate from './Seo.json';
import GeoKeywords  from './GeoKeywords.json';
export default function SEO({ page }) {
  const seo = SeoDate[page];
  const geoKeywords = GeoKeywords.global.join(", ");
  if (!seo) return null;
  console.log(geoKeywords)
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="keywords"
         content={`${seo?.keywords || ""}, ${geoKeywords}`}
      />
    </Helmet>
  );
}
