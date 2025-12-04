import { tagAs } from 'factions/metatagger'
import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const MountTraits = {
  'Greed Pistons': {
    effects: [
      {
        name: `Greed Pistons - Passive`,
        desc: `Effect: When making charge rolls for this unit, add 1 to the number of dice rolled, to a maximum of 3, then remove 1 dice of your choice and use the remaining dice as the charge roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Breath of Contempt': {
    effects: [
      {
        name: `Breath of Contempt`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Overdrive Switch': {
    effects: [
      {
        name: `Overdrive Switch - Once Per Turn - Reaction: You declared an Attack ability for this unit`,
        desc: `Effect: For the rest of the phase: 
        Add 1 to hit rolls for this units attacks, including those made with Companion weapons, that target an enemy unit within 9" of it. 
        Each time an unmodified hit roll for an attack made by this unit is 1, allocate 1 damage point to this unit after the Attack ability has been resolved (ward rolls cannot be made for those damage points).`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(MountTraits, 'mount_trait')
