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
  MOVEMENT_PHASE,
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
        Infect: Pick an enemy unit within 7" of any friendly Maggotkin of Nurgle units to be the target. You cannot pick a Manifestation or terrain feature. If the target is in combat with any friendly Maggotkin of Nurgle units, it has the Diseased keyword. If the target is not in combat with any friendly Maggotkin of Nurgle units, roll a dice. On a 4+, the target has the Diseased keyword.
        Spread: Pick a Diseased enemy unit to be the target. Each other enemy unit within the target's combat range, excluding Manifestations and terrain features, has the Diseased keyword.
        Mutate: If all enemy units on the battlefield, excluding Manifestations and terrain features, have the Diseased keyword, inflict 1 mortal damage on each of them.`,
        when: [END_OF_TURN],
      },
      {
        name: `Desperate Remedies - Passive`,
        desc: `Effect: If an ability would heal or return slain models to a Diseased enemy unit, that ability does not heal or return any slain models to it. Instead, it no longer has the Diseased keyword.`,
        when: [DURING_GAME],
      },
      {
        name: `Burst Pustules - Passive`,
        desc: `Effect: Each time a Diseased enemy unit is destroyed, before the last model in the unit is removed from play, roll a dice. On a 3+, pick another enemy unit within 9" of that model to be the target. You cannot pick a Manifestation or terrain feature. The target has the Diseased keyword.`,
        when: [DURING_GAME],
      },
      {
        name: `Wracked with Disease - Once Per Turn`,
        desc: `Declare: Pick each Diseased enemy unit to be the targets.
        Effect: Inflict D3 mortal damage on each target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Blighted Regrowth`,
        desc: `Declare: You can use this ability if there are no friendly Feculent Gnarlmaws on the battlefield.
        Effect: Set up a Feculent Gnarlmaw on the battlefield wholly within 12" of an objective you control and more than 3" from all enemy units, objectives and other terrain features.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ceaseless Infectors - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that was in combat with a friendly Rotbringers unit that was destroyed this turn to be the target. You cannot pick a Manifestation or terrain feature.
        Effect: Roll a dice. On a 3+, the target has the Diseased keyword.`,
        when: [END_OF_TURN],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) -  Riddled with Disease - Passive`,
        desc: `Effect: Each time a friendly Maggotkin of Nurgle Daemon unit wholly within 12" of this terrain feature uses the 'Rally' command, you can make 1 additional rally roll of D6. If that unit is a non-Hero unit, you can make 3 additional rally rolls of D6 instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) -  Rot-Blossom - Passive`,
        desc: `Effect: Friendly Rotbringers units have Ward (5+) while they are wholly within 12" of this terrain feature.`,
        when: [DURING_GAME],
      },
      {
        name: `Feculent Gnarlmaw (Faction Terrain) - Tendrils of Corruption`,
        desc: `Effect: For the rest of the phase, this terrain feature has a Move characteristic of 3" and can immediately move 3". It cannot move through or end that move within the combat ranges of enemy units and it cannot end that move on an objective or another terrain feature.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
