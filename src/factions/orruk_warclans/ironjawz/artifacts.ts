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
} satisfies TItemDescriptions

export default tagAs(IronjawzArtifacts, 'artifact')
