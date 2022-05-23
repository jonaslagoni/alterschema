import {
  JSONObject
} from './json'

// We don't care about super old spec versions that are non-existent nowadays
export type JSONSchemaSpec = '2020-12' | '2019-09' | 'draft-07' | 'draft-06' | 'draft-04'

// TODO: This is a mock implementation. Ideally, we look at the metaschema
export const usesVocabulary = (_value: JSONObject, _spec: JSONSchemaSpec, _vocabulary: string): boolean => {
  return true
}