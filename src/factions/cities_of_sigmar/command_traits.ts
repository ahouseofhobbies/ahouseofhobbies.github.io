import { keyPicker, tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'
import prayers from './prayers'

const CommandTraits = {
  'Master of Balistics': {
    effects: [
      {
        name: `Master of Balistics'`,
        desc: `Effect: If a friendly Cities of Sigmar unit uses the All-out Attack command in the shooting phase while it is within this units combat range, add 1 to wound rolls for that units shooting attacks in that phase. This effect is in addition to the effect of All-out Attack.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Grizzled Veteran': {
    effects: [
      {
        name: `Grizzled Veteran`,
        desc: `Effect: If the unmodied wound roll for an attack that targets this unit is a 1-3, the attack fails and the attack sequence ends.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Fiery Temper': {
    effects: [
      {
        name: `Fiery Temper`,
        desc: `Effect: If this unit charged this turn, you can reroll charge rolls for friendly Cities of Sigmar units while they are wholly within 18" of this unit.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Draw Steel!': {
    effects: [
      {
        name: `Draw Steel!`,
        desc: `Declare: If this unit charged this turn, pick a friendly Cities of Sigmar Human unit that charged this turn and is wholly within 12" of this unit to be the target. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Astute Tactician': {
    effects: [
      {
        name: `Astute Tactician`,
        desc: `Declare: Pick a friendly Cities of Sigmar unit wholly within 12" of this unit to be the target. 
        Effect: For the rest of the turn, add 1 to charge rolls for the target and add 2 to run rolls for the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Cosmopolitan Leader': {
    effects: [
      {
        name: `Cosmopolitan Leader`,
        desc: `Declare: Pick a friendly Cities of Sigmar Infantry or Cavalry unit wholly within 12" of this unit to be the target. If this unit is Human, pick up to 3 eligible units to be the targets instead. 
        Effect: Roll a dice. On a 3+, until the start of your next turn: 
        If the target is Human, add 1 to wound rolls for the targets combat attacks. 
        If the target is Duardin, add 1 to charge rolls for the target. 
        If the target is Aelf, add 3 to the targets control score.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*'Fiery Temper': {
    effects: [
      {
        name: `Fiery Temper`,
        desc: `You can reroll charge rolls for this general. In addition, if this general made a charge move in the same turn, you can reroll charge rolls for friendly CITIES OF SIGMAR HUMAN units while they are wholly within 18" of this general.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Of Mighty Lineage': {
    effects: [
      {
        name: `Of Mighty Lineage`,
        desc: `At the start of the combat phase, you can say that this general will issue a challenge. If you do so, pick 1 enemy HERO within 3" of this general. Until the end of that phase, the strike-first effect applies to this general, but all of the attacks they make in that phase must target that enemy HERO.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Insurmountable Resilience': {
    effects: [
      {
        name: `Insurmountable Resilience`,
        desc: `At the end of each combat phase, roll a dice for each wound currently allocated to this general. On a 3+, that wound is healed.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Master of Ancient Lore': {
    effects: [
      {
        name: `Master of Ancient Lore`,
        desc: `This general becomes a PRIEST. If this general is already a DUARDIN PRIEST, they know 1 additional prayer from the Rune Lore prayer scripture.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Unparalleled Duellist': {
    effects: [
      {
        name: `Unparalleled Duellist`,
        desc: `For each hit roll for an attack made with a melee weapon that targets this general that does not score a hit, the attacking unit suffers 1 mortal wound after all of its attacks have been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Draconic Blood-pact': {
    effects: [
      {
        name: `Draconic Blood-pact`,
        desc: `HERO mounted on Black Dragon only. At the start of the combat phase, you can say that this general will draw power from their draconic blood-pact. If you do so, this general suffers 1 mortal wound that cannot be negated. However, until the end of that phase, add 1 to the Attacks characteristic of the weapons this general's mount is armed with.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Divine Champion': {
    mandatory: {
      prayers: [keyPicker(prayers, ['Hammer of Sigmar'])],
    },
    effects: [
      {
        name: `Divine Champion`,
        desc: `This general becomes a PRIEST if they are not already a PRIEST. In addition, they know the Hammer of Sigmar prayer in addition to any other prayers they know:`,
        when: [HERO_PHASE],
      },
    ], 
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
