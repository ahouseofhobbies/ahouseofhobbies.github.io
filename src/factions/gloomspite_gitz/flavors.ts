import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
} from 'types/phases'

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
  'Sunbiter Pack': {
    effects: [
      {
        name: `Extra Snappy - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Gitmob units that charged this turn to be the targets. 
        Effect: Add 1 to the Rend characteristic of Companion weapons used by the targets for the rest of turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gittish Tide': {
    effects: [
      {
        name: `Grots Upon Grots - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Squig Moonclan unit that is contesting an objective to be the target. 
        Effect: Add 1 to the control score of the target unit for each model in that unit that is not contesting any objectives.`,
        when: [END_OF_TURN],
      },
    ],
  },

  'Da Kings Gitz (AoR)': {
    effects: [
      {
        name: `Da King's Guards - Passive`,
        desc: `Effect: While a friendly Troggoth unit is within the combat range of a friendly Hero:
        That Hero has Ward(4+).
        Each time you make a successful ward roll for that Hero, allocate 1 damage point to a friendly Troggoth unit within that Hero's combat range after the damage sequence for that Hero has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Da Loonking's Court - Once Per Battle`,
        desc: `Declare: Pick up to D3 friendly non-Unique King's Gitz Heroes that do not have an enhancement.
        Effect: Give each Hero 1 enhancement from the Da King's Gitz Army of Renown rules.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Moon and the Loon - Passive`,
        desc: `Effect: While a friendly unit is wholly within 9" of a friendly Skragrott, a friendly Malevolent Moon or a friendly Bad Moon Loonshrine:
        Add 5 to the control scores of friendly non-Squig Moonclan units.
        Instead of rolling the dice to determine the move characteristic of a frienldy Squig unit, you can use a value of 4.`,
        when: [MOVEMENT_PHASE, END_OF_TURN],
      },
    ],
  },
  'Droggz Gitmob (AoR)': {
    effects: [
      {
        name: `Dis Fight's Not Fer Me - Once Per Turn - Enemy Combat Phase`,
        desc: `Declare: Pick a friendly Droggz's Gitmob unit that is in combat with any enemy units that charged this turn and is not in combat with any enemy units that did not charge this turn to be the target.
        Effect: Roll a dice. On a 4+, the target can immediately use the Retreat ability as if it were your movement phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Get Around 'Em`,
        desc: `Declare: Pick a friendly Droggz's Gitmob unit that has not been deployed.
        Effect: Set up that unit in reserve Outflanking the Enemy. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Glowering Light - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a friendly Droggz's Gitmob unit tha thas charged this turn to be the target.
        Effect: Roll a dice. On a 3+, for the rest of the turn, the target cannot make a pile-in move when it is picked to use a Fight ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Surprise, Ya Gitz!`,
        desc: `Declare: Pick a friendly Droggz's Gitmob unit that is Outflanking the Enemy.
        Effect: Set up that unit on the battlefield wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Truggs Troggherd (AoR)': {
    effects: [
      {
        name: `Herd Healing - Passive`,
        desc: `Effect: Each time a friendly Troggoth unit uses a Fight ability, after that ability has been resolved, Heal (D3) that unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aura of Haywire Magic - Passive`,
        desc: `Effect: The effects of a friendly Truggs Malfunctioning Leystone ability affect friendly Truggs Troggherd units anywhere on the battlefield instead of only those wholly within 12" of that friendly Trugg.`,
        when: [HERO_PHASE],
      },
      {
        name: `Moon-Toughened Hide - Passive`,
        desc: `Effect: In battle rounds 2 and 3, subtract 1 from the Rend characteristic of melee weapons used for attacks that target friendly Truggs Troggherd units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Living Landmark - Once Per Battle`,
        desc: `Declare: Pick a friendly Truggs Troggherd unit that has not been deployed. 
        Effect: Set up that unit in reserve as a living landmark. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Broken Slumber`,
        desc: `Declare: Pick a friendly Truggs Troggherd unit that is a living landmark. 
        Effect: Set up that unit anywhere on the battlefield wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
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
