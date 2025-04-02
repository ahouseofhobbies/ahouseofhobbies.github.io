import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { SLAANESH } from 'meta/factions'
import {
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  END_OF_ROUND,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  [SLAANESH]: {
    effects: [
      {
        name: `An Excess of Depravity - Once Per Battle Round`,
        desc: `Declare: Pick up to 3 friendly Hedonites of Slaanesh units to be the targets. 
        Effect: The targets have the Euphoric keyword for the rest of the battle round. 
        In addition, for each friendly unit you pick, give your opponent 1 temptation dice. During this battle round, instead of making a wound roll, save roll, ward roll or run roll, your opponent can use 1 temptation dice to replace the roll they would have made with a 6, or they can use 2 temptation dice to replace 2 of the dice in a charge roll with two 6's (other dice could then be rolled normally). Rolls that have been replaced count as unmodified rolls and cannot be re-rolled. You cannot use temptation dice to replace a re-roll. 
        Each time your opponent uses a temptation dice, they must roll it. On a 1-2, your opponent's roll is replaced by that value instead of a 6 and you must allocate D3 damage points to the unit for which the roll was replaced immediately after the ability used by that unit has been resolved (ward rolls cannot be made for those damage points). 
        At the end of the battle round, any temptation dice that have not been used are lost.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Euphoric Killers - Passive`,
        desc: `Effect: While a friendly unit has the Euphoric keyword: 
        That units weapons, including Companion weapons, have Crit (2 Hits). 
        That unit can use a Run ability and still use Shoot and/or Charge abilities later in the turn.`,
        when: [DURING_GAME],
      },
      {
        name: `Fane of Slaanesh (Faction Terrain) - Damned Conduit`,
        desc: `Declare: Pick a friendly Hedonites of Slaanesh unit wholly within 12" of this terrain feature to be the target. 
        Effect: Allocate D3 damage points to the target (ward rolls cannot be made for those damage points). Then, pick 1 of the following effects to apply until the start of your next turn: 
        Add 1 to wound rolls for the targets combat attacks. 
        Add 1 to run rolls and charge rolls for the target. 
        Add 1 to casting rolls and unbinding rolls for the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
