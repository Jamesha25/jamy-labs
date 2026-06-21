import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jamy Labs - Custom Software Development Company',
    short_name: 'Jamy Labs',
    description: 'Building scalable software solutions that help businesses grow faster. Specializing in web, mobile, SaaS, AI, and enterprise software development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/jamy-labs-logo.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      }
    ],
  }
}