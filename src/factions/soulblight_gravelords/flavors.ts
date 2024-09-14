import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  "Legion of Shyish": {
    effects: [
      {
        name: `Horror Unending - Passive`,
        desc: `Effect: You can pick 1 additional target when using the Deathly Invocation ability.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Bacchanal of Blood': {
    effects: [
      {
        name: `Aristocracy - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Vampire units that are not in combat and add 1 to wound rolls for combat attacks made by friendly Vampire units that charged in the same turn.`,
        when: [DURING_GAME],
      },
    ],
  },

  "Deathstench Drove": {
    effects: [
      {
        name: `Dragged Down and Torn Apart - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Deadwalkers units in combat to be the targets. 
        Effect: For each target:  
        Make a pile-in move.  
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },

  'Deathmarch': {
    effects: [
      {
        name: `Tides of Bones and Blades - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of melee weapons used by friendly Deathrattle units that charged in the same turn for attacks that target a unit that has fewer models than the attacking unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
