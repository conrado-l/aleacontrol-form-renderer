/**
 * Transforms a JSON to an object
 * @param json
 * @returns {ParsedPath | ParsedUrlQuery | * | UrlWithStringQuery | UrlWithParsedQuery | Url | number}
 */
export function JSONToObject (json) {
  return JSON.parse(JSON.stringify(json))
}
