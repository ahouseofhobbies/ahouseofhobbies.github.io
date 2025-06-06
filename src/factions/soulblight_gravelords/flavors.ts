import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
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
  'Legion of Shyish': {
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
        name: `Aristocracy of the Night - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Vampire units that are not in combat and add 1 to wound rolls for combat attacks made by friendly Vampire units that charged in the same turn.`,
        when: [DURING_GAME],
      },
    ],
  },

  'Deathstench Drove': {
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

  Deathmarch: {
    effects: [
      {
        name: `Tides of Bones and Blades - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of melee weapons used by friendly Deathrattle units that charged in the same turn for attacks that target a unit that has fewer models than the attacking unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Cryptmasters: {
    effects: [
      {
        name: `Unhallowed Site - Once Per Turn`,
        desc: `Declare: Pick a friendly Cursed Sepulchre to be the target. 
        Effect: The target has Ward (4+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },

  Skinshifters: {
    effects: [
      {
        name: `The Speed of Death - Once Per Turn`,
        desc: `Declare: Pick a friendly Infantry Vampire Hero to be the target. 
        Effect: The target can move up to 12" and has Fly when it does so. It cannot end that move in combat.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Knights of the Crimson Keep (AoR)(HIDE SBGL Allegiance Abilities)': {
    effects: [
      {
        name: `The Crimson Keep (AoR)`,
        desc: `Declare: Pick a friendly Crimson Keep unit that has not been deployed.
        Effect: Set up that unit in reserve in the Crimson Keep. It has now been deployed. You cannot set up more friendly units in the Crimson Keep than there are on the battlefield.`,
        when: [DURING_SETUP],
      },
      {
        name: `From a Quarter Unseen (AoR) - Once Per Battle`,
        desc: `Declare: You cannot use this ability in the first battle round. Pick each friendly unit that is in the Crimson Keep to be the targets.
        Effect: Set up each target wholly within 9" of the battlefield edge and more than 9" from all enemy units. If you used this ability in the third or a subsequent battle round, do not spend any command points when using the Carve a Bloody Path command this turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Command Ability: Carve a Bloody Path (AoR)`,
        desc: `Declare: Pick a friendly Blood Knights unit that is in combat to use this ability.
        Effect: That unit can use a Charge ability even though it is in combat and even if it has already used a Charge ability this turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Blood Rampage (AoR) - Once Per Turn`,
        desc: `Declare: Pick a friendly Crimson Keep Monster that is in combat and has not used any Rampage abilities this turn to use this ability, then pick an enemy unit in combat with it to be the target.
        Effect: This unit can make a move of 2D6". It must end that move in combat with the target unit. Then roll a dice. If the roll exceeds the target units's Health characteristic, 1 model in the target unit is slain.
        After this ability has been resolved, this unit cannot use Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
