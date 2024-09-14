import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_GAME,
  START_OF_HERO_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Relentless Hunter': {
    effects: [
      {
        name: `Relentless Hunger - Passive`,
        desc: `Effect: If this unit is picked to be the target of the Murderlust ability, it can move 6" instead of 3".`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Firebrand: {
    effects: [
      {
        name: `Firebrand - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to banishment rolls for it instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Favoured of Khorne': {
    effects: [
      {
        name: `Favoured of Khorne - Passive`,
        desc: `Effect: You begin the battle with 1 blood tithe point.`,
        when: [DURING_SETUP],
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
