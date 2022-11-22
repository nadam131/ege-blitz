import useSWR, { Fetcher } from "swr"

const WP_REST_URL = "https://ege.nadam131.ru/wp-json/wp/v2"
const fetcher: Fetcher<any> = (...args) => fetch(args as any).then((res) => res.json())

export const useWPTerms = () => {
  const { data, ...props } = useSWR(`${WP_REST_URL}/taxonomies`, fetcher)
  return { terms: data, ...props }
}

export const useWPTerm = (termSlug) => {
  const { data, ...props } = useSWR(`${WP_REST_URL}/${termSlug}`, fetcher)
  return { term: data, ...props }
}
