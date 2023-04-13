import { mapTask } from "app/mappers/mapTask"
import { map } from "lodash"
import useSWR, { Fetcher } from "swr"

const WP_REST_URL = "https://ege.nadam131.ru/wp-json/wp/v2"
const fetcher: Fetcher<any> = (...args) => fetch(args as any).then((res) => res.json())

export const useWPTerms = () => {
  const { data, ...props } = useSWR(`${WP_REST_URL}/taxonomies`, fetcher)
  return { terms: data, ...props }
}

export const useWPTaskType = (termSlug) => {
  const { data, ...props } = useSWR(`${WP_REST_URL}/exercise_type?slug=${termSlug}`, fetcher)
  return { type: data?.[0], ...props }
}

export const useWPTasks = (section, termSlug) => {
  const { data, ...props } = useSWR(
    `${WP_REST_URL}/${section}?filter[exercise_type]=${termSlug}&per_page=99`,
    fetcher
  )

  console.log("dsd")
  return { tasks: map(data, mapTask), ...props }
}
