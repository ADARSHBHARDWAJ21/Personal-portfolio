export default function sitemap() {
  const baseUrl = 'https://adarshbhardwaj.dev'
  const lastModified = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Dynamic project pages
  const projectSlugs = [
    'ai-career-toolkit',
    'ensa-khouribga-website',
    'real-time-voting-system'
  ]

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages]
}

