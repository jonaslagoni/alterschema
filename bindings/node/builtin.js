const DRAFT4_TO_DRAFT4 = require('../../rules/jsonschema-draft4-to-draft4.json')
const DRAFT4_TO_DRAFT6 = require('../../rules/jsonschema-draft4-to-draft6.json')
const DRAFT6_TO_DRAFT7 = require('../../rules/jsonschema-draft6-to-draft7.json')
const DRAFT6_TO_DRAFT6 = require('../../rules/jsonschema-draft6-to-draft6.json')
const DRAFT7_TO_V2019_09 = require('../../rules/jsonschema-draft7-to-2019-09.json')
const DRAFT7_TO_DRAFT7 = require('../../rules/jsonschema-draft7-to-draft7.json')
const V2019_09_TO_V2020_12 = require('../../rules/jsonschema-2019-09-to-2020-12.json')
const V2019_09_TO_V2019_09 = require('../../rules/jsonschema-2019-09-to-2019-09.json')
const V2020_12_TO_V2020_12 = require('../../rules/jsonschema-2020-12-to-2020-12.json')

// TODO: Find a way to specify transitiveness in a less verbose manner
module.exports = {
  jsonschema: {
    draft4: {
      draft6: [DRAFT4_TO_DRAFT4, DRAFT4_TO_DRAFT6, DRAFT6_TO_DRAFT6],
      draft7: [DRAFT4_TO_DRAFT4, DRAFT4_TO_DRAFT6, DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7],
      '2019-09': [DRAFT4_TO_DRAFT4, DRAFT4_TO_DRAFT6, DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09],
      '2020-12': [DRAFT4_TO_DRAFT4, DRAFT4_TO_DRAFT6, DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09, V2019_09_TO_V2020_12, V2020_12_TO_V2020_12]
    },
    draft6: {
      draft7: [DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7],
      '2019-09': [DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09],
      '2020-12': [DRAFT6_TO_DRAFT6, DRAFT6_TO_DRAFT7, DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09, V2019_09_TO_V2020_12, V2020_12_TO_V2020_12]
    },
    draft7: {
      '2019-09': [DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09],
      '2020-12': [DRAFT7_TO_DRAFT7, DRAFT7_TO_V2019_09, V2019_09_TO_V2019_09, V2019_09_TO_V2020_12, V2020_12_TO_V2020_12]
    },
    '2019-09': {
      '2020-12': [V2019_09_TO_V2019_09, V2019_09_TO_V2020_12, V2020_12_TO_V2020_12]
    }
  }
}