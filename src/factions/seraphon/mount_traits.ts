import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_CHARGE_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const MountTraits = {
  'Titan of the Land': {
    effects: [
      {
        name: `Titan of the Land - Passive`,
        desc: `Effect: This unit counts as a terrain piece for the purpose of picking targets for the Realmshaper Engines Power Unleashed ability. Do not inflict any mortal damage on this unit as part of that ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ancient Defender': {
    effects: [
      {
        name: `Ancient Defender - Passive`,
        desc: `Effect: Add 1 to hit rolls for attacks made by this units Companion weapons.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Armour Cruncher': {
    effects: [
      {
        name: `Armour Cruncher`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll equals or exceeds the targets Save characteristic, subtract 1 from save rolls for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(MountTraits, 'mount_trait')
