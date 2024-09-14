import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const IronjawzPrayers = {
  'Warbeats': {
    effects: [
      {
        name: `Get 'Em Beat: Chanting value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Ironjawz Priest to chant this prayer, pick a visible friendly Ironjawz unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, add 1 to charge rolls for the target. In addition, if the chanting roll was 8+, add 1 to the number of dice rolled when making charge rolls for the target, to a maximum of 3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fixin' Beat: Chanting value of 4`,
        desc: `Declare: Pick a friendly Ironjawz Priest to chant this prayer, pick a visible friendly Ironjawz unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Heal (D6) the target. If the chanting roll was 8+, Heal (D3+3) the target instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Killa Beat: Chanting value of 4`,
        desc: `Declare: Pick a friendly Ironjawz Priest to chant this prayer, pick a visible friendly Ironjawz unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 1 to the Damage characteristic of the targets melee weapons for the rest of the turn. If the chanting roll was 8+, you can pick up to 2 eligible units to be the targets instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzPrayers, 'prayer')
