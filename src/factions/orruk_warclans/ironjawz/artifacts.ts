import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const IronjawzArtifacts = {
  'Armour of Gork': {
    effects: [
      {
        name: `Armour of Gork - Passive`,
        desc: `Effect: This unit has Ward (6+).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Trophy Skulls': {
    effects: [
      {
        name: `Trophy Skulls - Passive`,
        desc: `Effect: Add 10 to this units control score.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Amberbone Whetstone': {
    effects: [
      {
        name: `Amberbone Whetstone`,
        desc: `Effect: Pick 1 of this units weapons. Add 1 to the Rend characteristic of that weapon for the rest of the battle.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Da Sneaky Stab-stab (AoR) - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Krazoggs Grunta Stampede (AoR)': {
    effects: [
      {
        name: `Da Boom Skull (AoR) - Reaction: You declared a command for a friendly Grunta Stampede unit wholly within 18" of this unit`,
        desc: `Effect: Pick an enemy unit in combat with that friendly unit to be the target and roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Zoggroks Ironmongerz (AoR)': {
    effects: [
      {
        name: `Da Great Wollopa (AoR) - Passive`,
        desc: `Effect: If any damage points are allocated to an enemy unit by attacks made by this unit, that enemy unit is Krump'd until the start of your next turn.
          While a unit is Krump'd:
          Subtract 1 from save rolls for that unit
          Ignore positive modifiers to save rolls for that unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzArtifacts, 'artifact')
