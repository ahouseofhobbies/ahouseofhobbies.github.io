import { TItemDescriptions } from 'factions/factionTypes'
import { COMBAT_PHASE, DURING_SETUP, END_OF_TURN, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'

const Flavors = {
  Squigalanche: {
    effects: [
      {
        name: `Bouncing Fury - Passive`,
        desc: `Effect: Each time a friendly Squig unit charges, add 1 to the Attacks characteristic of its Fang-filled Gobs, Massive Fang-filled Gobs or Huge Fang-filled Gobs for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  Troggherd: {
    effects: [
      {
        name: `Herd Healing - Passive`,
        desc: `Effect: Each time a friendly Troggoth unit uses a Fight ability, after that ability has been resolved, Heal (D3) that unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gloomspite Horde': {
    effects: [
      {
        name: `Spreading Loonacy - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly non-Squig Moonclan or Spiderfang units in combat to be the targets. 
        Effect: For each target: 
        Make a pile-in move with the target. 
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Gitmob Pack': {
    effects: [
      {
        name: `Git and Run`,
        desc: `Declare: Pick a friendly Gitmob unit that is in combat to use this ability. Thin, you can pick an enemy unit in combat with that Gitmob unit to be the target. The same enemy unit cannot be picked to be the target of this ability more than once per phase.
        Effect: If you picked a target, roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Then, the unit using this ability can move a distance up to its Move characteristic. It can move through the combat ranges of enemy units but cannot end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  /*  Grimscuttle: {
    effects: [
      {
        name: `Through the Cracks they Creep`,
        desc: `During deployment, if any friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROKS have been set up in ambush as reserve units using the Ambush From Beyond ability, instead of setting up another friendly GRIMSCUTTLE SPIDERFANG unit, you can place that unit to one side and say that it will join a friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK in ambush as a reserve unit. Up to 2 units can join each friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK as a reserve unit. When a friendly GRIMSCUTTLE SKITTERSTRAND ARACHNAROK is set up on the battlefield for the first time, set up all units that joined it wholly within 12" of it and more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
    ],
  },

  "Da King's Gitz": {
    effects: [
      {
        name: `Lairs of the Loonking's Ladz`,
        desc: `If you command a KING'S GITZ army, you can reroll the dice roll when using the Bad Moon Loonshrine's Moonclan Lairs ability.`,
        when: [END_OF_TURN],
      },
    ],
  },

  Badsnatchers: {
    effects: [
      {
        name: `Harbingers of the Everdank`,
        desc: `Each time a casting roll is made for a friendly BADSNATCHERS MOONCLAN WIZARD, if that WIZARD is wholly within 9" of any other friendly BADSNATCHERS MOONCLAN WIZARDS, you can reroll 1 of the dice in that casting roll.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
