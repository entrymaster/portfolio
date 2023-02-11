import { sanityClient } from "../sanity";
import { groq } from 'next-sanity'
import { PageInfo } from "../typings";

const query = groq`
    *[_type == "pageInfo"][0]
`

export const fetchPageInfo = async () => {

    const pageInfo: PageInfo = await sanityClient.fetch(query)

    return pageInfo;
}