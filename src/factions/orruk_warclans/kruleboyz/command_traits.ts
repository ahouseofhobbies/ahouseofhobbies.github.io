import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  TURN_ONE_START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

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

  Backstabba: {
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
  'Big Waaagh! (AoR) - A Proper Sneak': {
    effects: [
      {
        name: `A Proper Sneak (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
            Effect: For the rest of the battle round, friendly Big Waaagh! units have Ward(5+) while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Da Old One-Two': {
    effects: [
      {
        name: `Da Old One-Two (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
              Effect: For the rest of the battle round, friendly Big Waaagh! units' melee weapons have Crit(2 Hits) while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Get Krumpin!': {
    effects: [
      {
        name: `Get Krumpin'! (AoR) - Once Per Battle`,
        desc: `Declare: You can use this ability if this unit has the Power of the Waaagh! keyword and a friendly unit has not used a Brutal Kunnin' ability this turn.
              Effect: For the rest of the battle round, add 1 to wound rolls for combat attacks made by friendly Big Waaagh! units while they are wholly within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR) - Takin Names': {
    effects: [
      {
        name: `Takin' Names (AoR) - Passive`,
        desc: `Effect: If an enemy Hero is destroyed by this unit, this unit has the Power of the Waaagh! keyword for the rest of the battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Murkvast Menagerie (AoR)': {
    effects: [
      {
        name: `Grim Diet (AoR) - Passive`,
        desc: `Effect: This unit has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(KruleboyzCommandTraits, 'command_trait')
