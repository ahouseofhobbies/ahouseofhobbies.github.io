import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  COMBAT_PHASE,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_MOVEMENT_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const BattleTraits = {
  // Legion of the First Prince
  'Servants of the Dark Master': {
    effects: [
      {
        name: `First-Damned Prince`,
        desc: `Add 1 to hit rolls and wound rolls for attacks made by Be'lakor while he is within 18" of at least 1 friendly unit from each of the following warscrolls: Bloodletters, Horrors of Tzeentch, Plaguebearers, Daemonettes.`,
        when: [COMBAT_PHASE],
        rule_sources: [
          meta_rule_sources.BOOK_BROKEN_REALMS_BELAKOR,
          meta_rule_sources.ERRATA_BROKEN_REALMS_BELAKOR_JULY_2022,
        ],
      },
      {
        name: `The Cursed Skies`,
        desc: `Roll a D6 for each friendly unit of Bloodletters, Horrors of Tzeentch, Plaguebearers, Daemonettes, or Furies. On a 3+ you can return D3 slain models to the unit (only 1 for Horrors).`,
        when: [END_OF_BATTLESHOCK_PHASE],
      },
      {
        name: `Infernal Realmwalkers`,
        desc: `Roll a D6 each time a Legion of the First Prince unit suffers a wound or mortal wound. On a 6+ it is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Unyielding Legions`,
        desc: `Pick 1 friendly Legion of the First Prince Daemon hero that is on the battlefield and roll 3D6. On a 10+ you can summon either 10 Bloodletters, 10 Plaguebearers, 10 Daemonettes, or 5 Horrors of Tzeentch. The unit's god keyword must match a god keyword from the summoning hero. Be'lakor can summon any of the above or 6 Furies. The summoned unit must be setup within 12" of the hero and more than 9" from enemy units. If the unmodified summoning roll contained any doubles, the hero suffers 1 mortal wound. If the unmodified summoning roll was a triple, the hero suffers D3 mortal wounds instead.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
