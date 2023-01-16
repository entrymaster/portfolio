import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: 'ykcqh3mc',
    apiVersion: '2023-01-15',
    useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source)