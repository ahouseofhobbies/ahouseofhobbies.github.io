import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Monstrously Tough': {
    effects: [
      {
        name: `Monstrously Tough - Passive`,
        desc: `Effect: This unit has a Health characteristic of 40 instead of 35.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Furious Temper': {
    effects: [
      {
        name: `Furious Temper - Once Per Battle`,
        desc: `Effect: For the rest of the turn: 
        Add 2 to the Attacks characteristic of this units melee weapons. 
        Subtract 1 from save rolls for this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Rabble Rouser': {
    effects: [
      {
        name: `Rabble Rouser - Passive`,
        desc: `Effect: Add 1 to charge rolls for friendly Sons of Behemat units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  Grabby: {
    effects: [
      {
        name: `Grabby - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units combat attacks that target an enemy unit contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Terrifying Hulk': {
    effects: [
      {
        name: `Terrifying Hulk - Once Per Turn - Reaction: Your opponent declared a Charge ability for a visible non-Monster enemy unit within 12" of this unit`,
        desc: `Effect: If this unit is not in combat, roll a dice. On a 3+, you can change one of the dice in that charge roll to a 1.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Mega-Grump': {
    effects: [
      {
        name: `Mega-Grump - Passive`,
        desc: `Effect: This unit has Ward (5+) while it has 25 or more damage points.`,
        when: [DURING_GAME],
      },
    ],
  },
  // Taker Tribe
  /* 'Extremely Intimidating (Taker Tribe)': {
    effects: [
      {
        name: `Extremely Intimidating (Taker Tribe)`,
        desc: `Enemy units within 6" of this general cannot receive the Inspiring Presence or Rally commands.`,
        when: [BATTLESHOCK_PHASE, START_OF_HERO_PHASE],
      },
    ],
  },
  'Very Acquisitive (Taker Tribe)': {
    effects: [
      {
        name: `Very Acquisitive (Taker Tribe)`,
        desc: `If you give an artefact of power to this general, you can pick 1 additional artefact of power and give it to them as well (this general can have 2 artefacts of power). Both artefacts of power must be different.`,
        when: [START_OF_SETUP],
      },
    ],
  },
  // Stomper Tribe
  'Inescapable Grip (Stomper Tribe)': {
    effects: [
      {
        name: `Inescapable Grip (Stomper Tribe)`,
        desc: `When you use this general's Hurled Body ability, you can reroll both dice rolls.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Eager for the Fight (Stomper Tribe)': {
    effects: [
      {
        name: `Eager for the Fight (Stomper Tribe)`,
        desc: `You can attempt a charge with this general if it is within 18" of an enemy unit instead of 12". In addition, roll 3D6 instead of 2D6 when making a charge roll for this general.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  // Smasher Tribe
  'Sees Green (Smasher Tribe)': {
    effects: [
      {
        name: `Sees Green (Smasher Tribe)`,
        desc: `Once per battle, at the start of a phase, you can say that this general is Gorkamorka made manifest. If you do so, this general has a ward of 4+ against mortal wounds until the end of that phase.`,
        when: [START_OF_ANY_PHASE],
      },
    ],
  },
  'Marrow-drinker (Smasher Tribe)': {
    effects: [
      {
        name: `Marrow-drinker (Smasher Tribe)`,
        desc: `Each time an enemy Monster is slain by this general, roll a number of dice equal to that Monster's Wounds chracteristic. For each 5+, you can heal 1 wound allocated to this general.`,
        when: [DURING_GAME],
      },
    ],
  },
  // Breaker Tribe
  'Extremely Bitter (Breaker Tribe)': {
    effects: [
      {
        name: `Extremely Bitter (Breaker Tribe)`,
        desc: `You can pick a second fierce loathing that applies only to your general.`,
        when: [START_OF_SETUP],
      },
    ],
  },
  'Sees Red (Breaker Tribe)': {
    effects: [
      {
        name: `Sees Red (Breaker Tribe)`,
        desc: `In the combat phase, if this general is within 3" of a defensible terrain feature or an enemy unit that is wholly on a terrain feature, use the top row on this general's damage table, regardless of how many wounds they have suffered.`,
        when: [DURING_GAME],
      },
    ],
  },

  // King Brodd's Stomp Army of Renown
  'High Expectations': {
    effects: [
      {
        name: `High Expectations`,
        desc: `Add 1 to the Attacks characteristic of Death Grip attacks made by friendly MEGA-GARGANTS while they are within 3" of any other friendly MEGA-GARGANTS.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Big Eater': {
    effects: [
      {
        name: `Big Eater`,
        desc: `In the combat phase, if any enemy models are slain by attacks made by a friendly MEGA-GARGANT wholly within 12" of this general, you can heal up to D3 wounds allocated to that MEGA-GARGANT after all of its attacks have been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Loud-mouthed Bully': {
    effects: [
      {
        name: `Loud-mouthed Bully`,
        desc: `Once per turn, in the combat phase, you can pick 1 friendly KING BRODD'S STOMP unit wholly within 12" of this general, If you do so, until the end of that phase, use the top row on that unit's damage table, regardless of how many wounds it has suffered.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
