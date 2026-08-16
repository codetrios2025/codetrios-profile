import { Helmet } from "react-helmet-async";
import SeoData from "./Seo.json";
import GeoKeywords  from './GeoKeywords.json';
export default function SEO({ page }) {
    const seo = SeoData[page];
    const geoKeywords = GeoKeywords.global.join(", ");
    if (!seo) return null;

    const siteName = "CodeTrios";

    const title = seo.title;

    const description = seo.description;

    const canonical = seo.canonical;

    const image =
        seo.image ||
        "https://www.codetrios.com/codetrios_logo.webp";

    return (
        <Helmet>

            {/* =========================
                BASIC SEO
            ========================== */}

            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />
            <meta
                name="keywords"
                content={`${seo?.keywords || ""}, ${geoKeywords}`}
              />
            <meta
                name="robots"
                content="index, follow, max-image-preview:large"
            />

            {/* =========================
                CANONICAL
            ========================== */}

            <link
                rel="canonical"
                href={canonical}
            />

            {/* =========================
                OPEN GRAPH
            ========================== */}

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:site_name"
                content={siteName}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:url"
                content={canonical}
            />

            <meta
                property="og:image"
                content={image}
            />

            {/* =========================
                TWITTER
            ========================== */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

        </Helmet>
    );
}