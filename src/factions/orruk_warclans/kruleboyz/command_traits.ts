import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, DURING_GAME, END_OF_TURN, TURN_ONE_START_OF_ROUND, WOUND_ALLOCATION_PHASE } from 'types/phases'

const KruleboyzCommandTraits = {
  'Slippery Skumbag': {
    effects: [
      {
        name: `Slippery Skumbag`,
        desc: `Effect: If this unit is in combat, roll a dice. On a 3+, it can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Backstabba': {
    effects: [
      {
        name: `Backstabba`,
        desc: `Declare: Pick an enemy Hero in combat with both this unit and another friendly Kruleboyz unit to be the target. 
        Effect: Inflict D3 mortal damage on the target. Add 1 to the mortal damage inflicted for each friendly Kruleboyz unit in combat with the target in addition to the first two Kruleboyz units.`,
        when: [END_OF_TURN],
      },
    ],
  },

  Egomaniak: {
    effects: [
      {
        name: `Egomaniak - Passive`,
        desc: `Effect: While this unit is within the combat range of a friendly non-Hero Kruleboyz Infantry unit:  
        This unit has Ward (4+).  
        Each time you make a successful ward roll for this unit, allocate 1 damage point to a friendly non-Hero Kruleboyz Infantry unit within this units combat range after the damage sequence for this unit has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(KruleboyzCommandTraits, 'command_trait')
