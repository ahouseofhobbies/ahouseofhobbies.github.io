import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  HERO_PHASE,
  SAVES_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Prayers = {
  'Prayers of the Scorched Sect': {
    effects: [
      {
        name: `Black Flames of Hashut: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Priest to chant this prayer, pick a visible enemy unit within 12" of them to be the target, then make a chanting roll of D6.
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target. If the chanting roll was 8+, inflict 1 mortal damage on the target For each 4+ instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Furnace Blessing: Chant value of 4`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Priest to chant this prayer, pick a visible friendly Helsmiths of Hashut unit wholly within 12" of them to be the target, then make a chanting roll of D6.
        Effect: Add 1 to the Rend characteristic of the target's melee weapons for the rest of the turn. If the chanting roll was 8+, that unit's melee weapons also have Crit (Mortal) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Storm of Obsidian Shards: Chant value of 5`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6.
        Effect: Inflict D3 mortal damage on the target and subtract 3 from the target's control score for the rest of the turn. If the chanting roll was 10+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Taars Grand Forgehost (AoR)': {
    effects: [
      {
        name: `Grasp of Stone: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Grand Forgehost Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6.
        Effect: Subtract 1 from the Attacks characteristic of the target's melee weapons until the start of your next turn. If the chanting roll was 8+, the target also has Strike-last until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Lava Storm: Chant value of 5`,
        desc: `Declare: Pick a friendly Grand Forgehost Priest to chant this prayer. Pick an enemy unit to be the target, roll 6 dice. For each 6, pick an additional enemy unit to be a target. Then make a chanting roll of D6.
        Effect: If the chanting roll was 7+, pick an additional enemy unit to be a target. Inflict D3 mortal damage on each target.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
