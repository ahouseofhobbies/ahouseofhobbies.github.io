import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_ROUND,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Artifacts = {
  'Charnel Vestments': {
    effects: [
      {
        name: `Charnel Vestments - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to chanting rolls for this unit. If this unit is a Wizard, it cannot use Spell abilities and Prayer abilities in the same phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Splintered Femur': {
    effects: [
      {
        name: `The Splintered Femur`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a D3. On a 2+, pick 1 of the following:
        Inflict an amount of mortal damage on the target equal to the roll.
        Subtract 1 from the target's power level, to a minimum of 0, until the start of your next turn.
        If the target is a Manifestation, it is banished.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Grisly Pennant': {
    effects: [
      {
        name: `The Grisly Pennant`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target.
        Effect: Roll a dice. If the roll is greater than the target's Control characteristic or is a 6, the following effects apply for the rest of the turn:
        Subtract 1 from hit rolls for the target's combat attacks.
        Add 1 to hit rolls for combat attacks made by friendly units that target that enemy unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Knights of New Summercourt (AoR)': {
    effects: [
      {
        name: `Feted Coronet (AoR) - Passive`,
        desc: `Effect: This unit has Ward (4+) until a friendly New Summercourt unit is destroyed.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Equinox Feast (AoR)': {
    effects: [
      {
        name: `Broken Sceptre of the Solstice (AoR) - Once Per Battle`,
        desc: `Declare: Pick a friendly Equinox Feast unit that has been destroyed to be the target. This unit can use this ability if it has been destroyed, but if it does, this unit must be the target.
        Effect: Set up a replacement unit identical to the target wholly within 6" of a friendly Equinox Feast unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /* 'The Grim Garland': {
    effects: [
      {
        name: `The Grim Garland`,
        desc: `Subtract 2 from the Bravery characteristic of enemy units while they are within 9" of the bearer.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  'Heart of the Gargant': {
    effects: [
      {
        name: `Heart of the Gargant`,
        desc: `Once per battle, at the start of the combat phase, the bearer can use this artefact. If they do so, add 1 to the Attacks characteristic of melee weapons used by the bearer and their mount in that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
/*  'Medal of Madness': {
    effects: [
      {
        name: `Medal of Madness`,
        desc: `Once per battle round, the bearer can issue a command without a command point being spent, and they are treated as if they were a general when they do so.`,
        when: [DURING_ROUND],
      },
    ],
  },
  'The Flayed Pennant': {
    effects: [
      {
        name: `The Flayed Pennant`,
        desc: `You can reroll charge rolls for friendly FLESH-EATER COURTS units while they are wholly within 12" of the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Charnel Vestments': {
    effects: [
      {
        name: `Charnel Vestments`,
        desc: `The bearer gains the PRIEST keyword.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(Artifacts, 'artifact')
