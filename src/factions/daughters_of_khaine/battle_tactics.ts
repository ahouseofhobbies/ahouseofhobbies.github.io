import { tagAs } from 'factions/metatagger'
import { START_OF_HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const BattleTactics = {
 /* 'Manifestations of Khaine': {
    effects: [
      {
        name: `Clash of Arms`,
        desc: `You complete this tactic if 3 or more friendly units make a charge move this turn.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_DAUGHTERS_OF_KHAINE,
          rule_sources.ERRATA_DECEMBER_2022,
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
        ],
      },
    ],
  },
  */
} satisfies TItemDescriptions

export default tagAs(BattleTactics, 'battle_tactic')
