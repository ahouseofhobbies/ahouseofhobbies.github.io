import { TRuleSources } from 'meta/rule_sources'

const rule_sources = {
  BATTLETOME_NIGHTHAUNT: {
    name: 'Battletome: Nighthaunt',
    type: 'battletome',
  },
  ERRATA_JULY_2022: {
    name: 'Errata (July 2022)',
    type: 'errata',
    url: 'https://www.warhammer-community.com/wp-content/uploads/2019/07/K4iAr34vBjsg1BaI.pdf',
  },
  ERRATA_OCTOBER_2022: {
    name: 'Errata (October 2022)',
    type: 'errata',
    url: 'https://www.warhammer-community.com/wp-content/uploads/2019/07/p2QjqiUdVWzSKpbn.pdf',
  },
} satisfies TRuleSources

export default rule_sources
