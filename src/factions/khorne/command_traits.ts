import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Magical Scorn': {
    effects: [
      {
        name: `Magical Scorn - Passive`,
        desc: `Effect: Subtract 1 from casting rolls for Wizards while they are within 12" of this unit.
        Subtract 1 from chanting rolls for enemy Priests while they are within 12" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* Firebrand: {
    effects: [
      {
        name: `Firebrand - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to banishment rolls for it instead.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Frenzied Taskmaster': {
    effects: [
      {
        name: `Frenzied Taskmaster`,
        desc: `Declare: Pick a friendly Blades of Khorne Infantry or Cavalry unit within this unit's combat range that is not in combat to be the target.
        Effect: The target can move D6" but cannot end that move in combat. If the target ends that move within this unit's combat range, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Skull Collector': {
    effects: [
      {
        name: `Skull Collector`,
        desc: `Effect: If any damage points were allocated to an enemy Hero by this unit's combat attacks this turn and that enemy Hero has been destroyed, add 1 to the Attacks characteristic of this unit's melee weapons for the rest of the battle.
        This unit can be affected by this ability multiple times and the effects are cumulative.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Gorechosen Champions (AoR)': {
    effects: [
      {
        name: `Crowned in Butchery (AoR) - Passive`,
        desc: `Effect: Add 20 to this unit's control score while it is in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Baleful Lords (AoR)': {
    effects: [
      {
        name: `Unrivalled Battlelust (AoR) - Once Per Battle`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of friendly Baleful Lords units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Unrelenting Hunter': {
    effects: [
      {
        name: `Unrelenting Hunter`,
        desc: `At the end of the combat phase, if this general fought in that phase and is within 3" of any enemy units, this general can make a pile-in move. Alternatively, at the end of the combat phase, if this general fought in that phase and is more than 3" from all enemy units, this general can make a normal move or attempt a charge.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Diabolical Purpose': {
    effects: [
      {
        name: `Diabolical Purpose`,
        desc: `Add 1 to the Damage characteristic of attacks made by this general that target an enemy HERO.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  'Barbarian Lord': {
    effects: [
      {
        name: `Barbarian Lord`,
        desc: `Add 1 to run rolls and charge rolls for this general and for friendly BLOODREAVERS, CLAWS OF KARANAK and FLESH HOUNDS units while they are wholly within 16" of this general.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Lord of the Gorechosen': {
    effects: [
      {
        name: `Lord of the Gorechosen`,
        desc: `Add 1 to the Attacks characteristic of melee weapons used by friendly GORECHOSEN units while they are wholly within 16" of this general.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'High-priest of Khorne': {
    effects: [
      {
        name: `High-priest of Khorne`,
        desc: `PRIEST only. In each of your hero phases, your general can chant 2 prayers that they know instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
