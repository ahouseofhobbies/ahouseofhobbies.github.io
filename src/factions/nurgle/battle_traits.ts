import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { NURGLE } from 'meta/factions'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  TURN_ONE_START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const BattleTraits = {
  [NURGLE]: {
    effects: [
      {
        name: `Blessed by the Plaguefather - Once Per Turn`,
        desc: `Effect: Pick 1 of the following effects: 
        Infect: Pick an enemy unit that is in combat with a friendly Maggotkin of Nurgle unit to be the target. The target has the Diseased keyword. 
        Spread: Pick a Diseased enemy unit to be the target. Each other enemy unit within the targets combat range has the Diseased keyword. 
        Mutate: If all enemy units on the battlefield have the Diseased keyword, inflict 1 mortal damage on each of them.`,
        when: [END_OF_TURN],
      },
      {
        name: `Desperate Remedies - Passive`,
        desc: `Effect: If a Diseased enemy unit uses an ability that would heal or return slain models to it, instead of healing or returning slain models to it, that unit no longer has the Diseased keyword.`,
        when: [DURING_GAME],
      },
      {
        name: `Wracked with Disease - Once Per Turn`,
        desc: `Effect: Roll a D3 for each Diseased enemy unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [END_OF_TURN],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) -  Riddled with Disease - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 6" of this terrain feature to be the target. 
        Effect: Roll a dice. On a 4+, the target has the Diseased keyword.`,
        when: [END_OF_TURN],
      },
    ]
  }
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')