import { keyPicker } from 'factions/metatagger'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, END_OF_COMBAT_PHASE, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'
import command_abilities from './command_abilities'
import { TItemDescriptions } from 'factions/factionTypes'

const IronjawzFlavors = {
 /* Ironsunz: {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ["Alright, Get 'Em!"])],
    },
    effects: [],
  },
  Bloodtoofs: {
    effects: [
      {
        name: `Hunt and Crush`,
        desc: `At the end of the combat phase, friendly BLOODTOOFS GORE-GRUNTAS units that fought in that phase and are within 3" of any enemy units can make a pile-in move. In addition, those that fought but are not within 3" of any enemy units can each make a normal move or attempt a charge.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Ironjawz Brawl': {
    effects: [
      {
        name: `Natural Disaster - Passive`,
        desc: `Effect: If you make an unmodified charge roll of 8+ for a friendly non-Hero Ironjawz unit, add 1 to the Attacks characteristic of that units melee weapons for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Grunta Stampede': {
    effects: [
      {
        name: `'Ere We Come! - Passive`,
        desc: `Effect: Add the number of enemy units that have been destroyed this battle to the Move characteristic of friendly Gore-Gruntas and Maw-Grunta units, to a maximum of +4.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Ironfist': {
    effects: [
      {
        name: `Smashin' and Bashin' - Passive`,
        desc: `Effect: The first time each turn that an enemy unit is destroyed by a Fight ability used by a friendly Ironjawz unit, add 1 to hit rolls for combat attacks made by the next friendly Ironjawz unit that is picked to use a Fight ability for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Weirdfist': {
    effects: [
      {
        name: `Spirit of Gork - Passive`,
        desc: `Effect: Friendly Ironjawz Infantry units have Ward (6+) while they are wholly within 12" of any friendly Ironjawz Wizards or Priests.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default IronjawzFlavors
