import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'

const KruleboyzArtifacts = {
  'Eye-Biter Ash': {
    effects: [
      {
        name: `Eye-Biter Ash - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Subtract 1 from hit rolls and wound rolls for attacks made by the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Mork's Eye Pebble": {
    effects: [
      {
        name: `Mork's Eye Pebble - Once Per Battle - Reaction: Opponent declared an Attack ability`,
        desc: `Effect: For the rest of the turn, friendly Kruleboyz units have Ward (5+) while they are wholly within 12" of this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Swamp Staff': {
    effects: [
      {
        name: `Swamp Staff - Passive`,
        desc: `Effect: If this unit is not a Wizard, it can use the Unbind ability as if it had Wizard (1). Otherwise, add 1 to this units power level.`,
        when: [HERO_PHASE],
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
  'Murkvast Menagerie (AoR)': {
    effects: [
      {
        name: `Skinwriggla Larvae (AoR) - Once Per Battle`,
        desc: `Declare: Pick an objective within 6" of this unit to be infested with bugs for the rest of the battle.
          Effect: While an enemy unit is contesting an objective that is infested with bugs:
          Subtract 3 from that unit's control score.
          Ignore positive modifiers to that unit's control score.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(KruleboyzArtifacts, 'artifact')
