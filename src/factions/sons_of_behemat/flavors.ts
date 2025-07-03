import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_SETUP,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  'Taker Tribe': {
    effects: [
      {
        name: `More Stuff For Me Collection - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Sons of Behemat Hero that does not have an artefact of power. 
        Effect: Give that Hero 1 artefact of power from Titanic Trophies.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Boss Tribe': {
    effects: [
      {
        name: `Big Mouth - Once Per Turn - Reaction: You declared a Fight ability for a friendly Mega-Gargant`,
        desc: `Used By: The Mega-Gargant using that Fight ability. 
        Effect: Pick a friendly Gargant unit that has not used a Fight ability this turn and is wholly within 12" of this unit to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Stomper Tribe': {
    effects: [
      {
        name: `Revel in War - Passive`,
        desc: `Effect: You can pick 2 friendly Mega-Gargants or Gargant units that have not used a Rampage ability this turn to use the Jump Up and Down ability instead of 1.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Breaker Tribe': {
    effects: [
      {
        name: `Besiieging Bulk - Passive`,
        desc: `Effect: Friendly Mega-Gargants have Ward (6+) while they are within the combat ranges of any other friendly Mega-Gargants.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Manskittle Mob': {
    effects: [
      {
        name: `Strike! Hur! Hur! - Once Per Turn`,
        desc: `Declare: Pick up to 2 friendly Mega-Gargant units within 3" of any terrain features and pick any friendly Gargant units within 3" of any terrain features to be the targets. 
        Effect: Double the Attacks characteristic of each targets ranged weapons for the rest of the turn. If the target has no ranged weapons, pick an enemy unit within 12" of the target instead and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Big Toes': {
    effects: [
      {
        name: `Lofty Louts - Once Per Battle`,
        desc: `Declare: Pick a friendly Mancrusher Gargant unit to be the target. 
        Effect: For the rest of the battle, add 1 to hit rolls for combat attacks made by friendly Gargant units while they are wholly within 12" of the target and not wholly within 12" of any friendly Mega-Gargant units.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'King Brodds Stomp (AoR)': {
    effects: [
      {
        name: `Timberrrr! - Passive`,
        desc: `Effect: Each time a friendly Mega-Gargant or Gargant model is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
      {
        name: `The World Titan's Prophet - Passive`,
        desc: `Effect: While any other friendly Brodds Stomp units are within a friendly King Brodds combat range: 
        That friendly King Brodd has Ward (5+). 
        Each time you make a successful ward roll for that friendly King Brodd, allocate 1 damage point to another friendly Brodds Stomp unit within its combat range after the damage sequence for that friendly King Brodd has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Smash it All to Bits - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability, then pick a terrain feature within its combat range. Then, pick a visible enemy unit within 18" of that Mega-Gargant to be the target. 
        Effect: Roll a D3 for each friendly and enemy unit on the terrain feature that was picked. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. After rolling for all those units, roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Wrath of Brodd - Once Per Battle`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability. 
        Effect: If the unit using this ability charged this turn, roll a dice. On a 3+, that unit can move 3D6" but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Crafty Creepers - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability. Then, pick an enemy Hero that has an artefact of power and is in combat with that Mega-Gargant to be the target. 
        Effect: Roll a dice. On a 3+, the target no longer has that artefact of power.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Double Stomp - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability. 
        Effect: Roll a D6. On a 3+, for the rest of the turn, add the result to the Attacks characteristic of the Almighty Stomp or Almightier Stomp of the unit using this ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Watch This! - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: If the target is a Hero, Beast, Monster or War Machine, roll 6 dice. Otherwise, roll a dice for each model in the target unit. For each roll that is equal to or greater than the targets Save characteristic, inflict 1 mortal damage on the target. 
        The Mega-Gargant using this Rampage has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
