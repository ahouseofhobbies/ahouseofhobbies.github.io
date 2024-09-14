import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
} from 'types/phases'
const CommandTraits = {
  // Arcanites
  'Cult Demagogue': {
    effects: [
      {
        name: `Cult Demagogue - Passive`,
        desc: `Effect: If each dice in a casting roll for this unit has the same value and the spell is not miscast, add 3 to the casting roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Illusionist': {
    effects: [
      {
        name: `Illusionist - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target friendly units while they are wholly within this units combat range.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Nexus of Fate': {
    effects: [
      {
        name: `Nexus of Fate`,
        desc: `Effect: Roll a dice. You must replace 1 of your destiny dice with that roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* Illusionist: {
    effects: [
      {
        name: `Illusionist`,
        desc: `Subtract 1 from hit rolls for attacks that target this general.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  // Daemons
  Daemonspark: {
    effects: [
      {
        name: `Daemonspark`,
        desc: `Once per battle, in your hero phase, you can unleash the Daemonspark. If you do so, you immediately gain 3 Fate Points.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Incorporeal Form': {
    effects: [
      {
        name: `Incorporeal Form`,
        desc: `Each time this general is affected by a spell or endless spell, you can roll a dice. On a 5+, ignore the effect of that spell or the effects of that endless spell on this general.`,
        when: [DURING_GAME],
      },
    ],
  },
  //Shared
  'Arch-sorcerer': {
    effects: [
      {
        name: `Arch-sorcerer`,
        desc: `WIZARDS only. This general knows 2 extra spells from their spell lore.`,
        when: [START_OF_SETUP],
      },
    ],
  },
  'Nexus of Fate': {
    effects: [
      {
        name: `Nexus of Fate`,
        desc: `At the start of your hero phase, if this general is on the battlefield, you can roll a dice. If you do so, you can replace one of your Destiny Dice with that roll.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
