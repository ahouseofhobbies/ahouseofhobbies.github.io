import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
} from 'types/phases'
const CommandTraits = {
  // Arcanites
  'Silver Summoner': {
    effects: [
      {
        name: `Silver Summoner`,
        desc: `Declare: Pick a friendly non-Warflock Arcanite unit that has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) more than 9" from all enemy units and wholly within 12" of a friendly Argent Shard that is visible to this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Grand Illusionist': {
    effects: [
      {
        name: `Grand Illusionist`,
        desc: `Effect: If this unit was set up this turn, it can move D3". That move cannot pass through or end within the combat range of an enemy unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Devolving Aura': {
    effects: [
      {
        name: `Devolving Aura`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target.
        Effect: Roll a dice. Add 1 to the roll if any damage points were allocated to the target this phase. On a 3+, the target has a maximum control score of 1 until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Change-Cult Uprising (AoR)': {
    effects: [
      {
        name: `Call of Anarchy`,
        desc: `Declare: Pick a terrain feature within 18" of this unit, then pick a friendly non-Hero Change-Cult unit that is masked by illusion or that has been destroyed to be the target.
        Effect: If you picked a unit that is masked by illusion, set it up wholly within 3" of that terrain feature and more than 6" from all enemy units.
        If you picked a unit that has been destroyed, set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 3" of that terrain feature and more than 6" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Oracles of Fate (AoR)': {
    effects: [
      {
        name: `Nexus of Fate`,
        desc: `Effect: Roll a dice. If you have 9 unspent destiny dice, you must replace 1 of your destiny dice with that roll. Otherwise, place that dice to one side as a destiny dice.`,
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
