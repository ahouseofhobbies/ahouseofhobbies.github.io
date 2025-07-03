import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const IronjawzPrayers = {
  Warbeats: {
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
        name: `Killa Beat: Chanting value of 5`,
        desc: `Declare: Pick a friendly Ironjawz Priest to chant this prayer, pick a visible friendly Ironjawz unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 1 to the Damage characteristic of the targets melee weapons for the rest of the turn. If the chanting roll was 10+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Unstoppable Waaagh!-beats: Chanting value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Big Waaagh! Priest to chant this prayer, pick a visible friendly non-Hero Big Waaagh! Infantry unit that is in combat and wholly within 12" of them to be the target, then make a chanting roll of D6.
          Effect: The target can use 2 Fight abilities this turn. After the first, however, the target has Fight-Last for the rest of the turn. If the chanting roll was 10+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Zoggrokz Ironmongerz (AoR)': {
    effects: [
      {
        name: `Get 'Em, Gork!: Chanting value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Zoggrok's Ironmongerz Priest to chant this prayer, then make a chanting roll of D6.
          Effect: If the chanting roll was 5-9, pick a visible terrain feature wholly within 12" of the chanter. If the chanting roll was 10+, pick a visible terrain feature wholly within 18" of the chanter instead. That terrain feature is trampled by Gork for the rest of the battle.
          Roll a D3 each time an enemy unit starts or ends a move within 6" of a terrain feature that is trampled by Gork. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzPrayers, 'prayer')
