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
        name: `An Excess of Depravity`,
        desc: `Declare: Pick up to 3 friendly Hedonites of Slaanesh units to be the targets. 
        Effect: The targets have the Euphoric keyword for the rest of the battle round. 
        In addition, for each friendly unit you pick, give your opponent 1 temptation dice. Your opponent can use 1 temptation dice to replace 1 wound roll, 1 save roll, 1 ward roll or 1 run roll for a unit in their army with a 6, or they can use 2 temptation dice to replace 2 of the dice in a charge roll for a unit in their army with two 6s. 
        Each time your opponent uses a temptation dice, they must roll it. On a 1-2, inflict D3 mortal damage on the unit for which the roll was replaced immediately after the ability used by that unit has been resolved. 
        At the end of the battle round, any temptation dice that have not been used are lost.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Euphoric Killers - Passive`,
        desc: `Effect: While a friendly unit has the Euphoric keyword:  
        That units weapons have Crit (2 Hits).  
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