import { MetadataRoute } from 'next'

const sitemapGenerator = (): MetadataRoute.Sitemap => [
  {
    url: `https://pet-shop-clara.vercel.app/`,
    lastModified: new Date()
  },
  {
    url: `https://pet-shop-clara.vercel.app/about`,
    lastModified: new Date()
  },
  {
    url: `https://pet-shop-clara.vercel.app/sectors`,
    lastModified: new Date()
  },
  {
    url: `https://pet-shop-clara.vercel.app/activities`,
    lastModified: new Date()
  },
  {
    url: `https://pet-shop-clara.vercel.app/team`,
    lastModified: new Date()
  },
  {
    url: `https://pet-shop-clara.vercel.app/contact`,
    lastModified: new Date()
  }
]

export default sitemapGenerator