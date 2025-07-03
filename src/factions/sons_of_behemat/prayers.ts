import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Prayers = {
  'King Brodds Stomp (AoR)': {
    effects: [
      {
        name: `High Expectations: Chant value of 4`,
        desc: `DDeclare: Pick a friendly Brodds Stomp Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, add 1 to the Attacks characteristic of melee weapons used by friendly Brodds Stomp units while they are wholly within 12" of the chanter. If the chanting roll was 9+, add 2 to the Attacks characteristic instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
