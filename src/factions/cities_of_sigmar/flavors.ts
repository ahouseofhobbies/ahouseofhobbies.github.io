import { keyPicker } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import prayers from './prayers'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Dawnbringer Crusade': {
    effects: [
      {
        name: `Forward, Dawnders! - Passive`,
        desc: `Effect: Add 2" to the Move characteristic of friendly Cities of Sigmar units in the rst battle round.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Ironweld Guild Army': {
    effects: [
      {
        name: `Faith and Firepower - Passive`,
        desc: `Effect: Add 3" to the Range characteristic of ranged weapons used by friendly Cities of Sigmar units.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Fortress-City Defenders': {
    effects: [
      {
        name: `Bulwark Zone - Passive`,
        desc: `Effect: Friendly Cities of Sigmar units that have the Fortify Position ability start the rst battle round in a fortified position. 
        In addition, in the rst battle round, subtract 1 from wound rolls for attacks that target friendly Cities of Sigmar units while they are wholly within friendly territory.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Collegiate Arcane Expedition': {
    effects: [
      {
        name: `Eldritch Expertise - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Cities of Sigmar Wizards.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* Hallowheart: {
    effects: [
      {
        name: `Wild Magic`,
        desc: `When you attempt to cast a spell with a friendly HALLOWHEART WIZARD, you can say they will harness wild magic. If you do so, roll 3 dice instead of 2 for that casting roll. However, on an unmodified roll of 10+, the caster suffers D3 mortal wounds after any effects of the spell have been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Tempest's Eye": {
    effects: [
      {
        name: `Rapid Redeploy`,
        desc: `Friendly TEMPEST'S EYE and allied KHARADRON OVERLORDS SKYVESSEL units (including units embarked in them), can retreat and still shoot in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  Misthavn: {
    effects: [
      {
        name: `Shadowed Approach`,
        desc: `At the end of your hero phase, you can pick up to 3 different friendly MISTHVN units that are more than 12" from all enemy units. Each of those units can make a move of up to D6" (roll separately for each). If the unit has a mount/s (not including crew and/or companions), it can make a move of up to 2D6" instead of D6". Units can finish this move within 3" of enemy units.`,
        when: [END_OF_HERO_PHASE],
      },
    ],
  }, 
  "Settler's Gain": {
    effects: [
      {
        name: `Expert Instruction`,
        desc: `Add 1 to casting rolls for friendly SETTLER'S GAIN WIZARDS.`,
        when: [HERO_PHASE],
      },
      {
        name: `Expert Instruction`,
        desc: `At the start of each hero phase, you receive 1 additional command point if the model picked to be your general is within 3" of any friendly allied LUMINETH REALM-LORDS HEROES.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  Excelsis: {
    effects: [
      {
        name: `Fearsome Breeds`,
        desc: `Add 1 to the Wounds characteristic of friendly EXCELSIS MONSTERS. In addition, each time a friendly EXCELSIS FREEGUILD CAVALIERS unit fights, after all of its attacks have been resolved, pick 1 enemy unit within 3" of that FREEGUILD CAVALIERS unit and roll a dice for each model in that FREEGUILD CAVALIERS unit. For each roll of 4+, that enemy unit suffers 1 mortal wound.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Fearsome Breeds`,
        desc: `Each time a friendly EXCELSIS FREEGUILD CAVALIERS unit fights, after all of its attacks have been resolved, pick 1 enemy unit within 3" of that FREEGUILD CAVALIERS unit and roll a dice for each model in that FREEGUILD CAVALIERS unit. For each roll of 4+, that enemy unit suffers 1 mortal wound.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Vindicarum: {
    effects: [
      {
        name: `Unyielding Faith`,
        desc: `Friendly VINDICARUM units can receive the Rally command while they are within 3" of any enemy units. In addition, when a friendly VINDICARUM FLAGELLANTS unit receives the Rally command, you can return 1 slain model to that unit for each 5+ instead of each 6.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  Lethis: {
    mandatory: {
      prayers: [keyPicker(prayers, ["Morrda's Embrace"])],
    },
    effects: [
      {
        name: `The Raven Priests`,
        desc: `Friendly LETHIS HUMAN HEROES that are not WIZARDS become PRIESTS. In addition, friendly LETHIS HUMAN PRIESTS and friendly allied STORMCAST ETERNALS PRIESTS know the "Morrda's Embrace" prayer in addition to any others they know.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
