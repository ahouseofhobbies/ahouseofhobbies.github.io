import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SHOOTING_PHASE,
  TURN_ONE_START_OF_ROUND,
} from 'types/phases'

const CommandTraits = {
  //Vanari
  'Masterful Tactician': {
    effects: [
      {
        name: `Masterful Tactician - Reaction: You declared the Redeploy command for a friendly Lumineth Realmlords unit wholly within 12" of this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Perfect Strike': {
    effects: [
      {
        name: `Perfect Strike - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Inflict D3+3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Paragon of Hysh': {
    effects: [
      {
        name: `Paragon of Hysh - Once Per Battle - Reaction: You declared the Charge ability or a Spell ability for this unit`,
        desc: `Effect: You can reroll the charge roll or casting roll for that ability.`,
        when: [HERO_PHASE, CHARGE_PHASE],
      },
    ],
  },
  //Scinari
  /* Spellmaster: {
    effects: [
      {
        name: `Spellmaster`,
        desc: `Once per battle, this general can use the Magical Boost aetherquartz reserve ability without using an aetherquartz reserve to do so.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Loremaster: {
    effects: [
      {
        name: `Loremaster`,
        desc: `The general knows 1 extra spell from the Lore of Hysh.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fast Learner': {
    effects: [
      {
        name: `Fast Learner`,
        desc: `This general can attempt to unbind 1 extra spell in the enemy hero phase. In addition, the second time that this general attempts to unbind a spell in the same enemy hero phase, you can reroll the unbinding roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  //Windmage
  'Grand Windrider': {
    effects: [
      {
        name: `Grand Windrider`,
        desc: `Replace this general's Windleap ability with: "If a friendly Windchargers unit starts a move wholly within 24" of this general, when it makes that move, that unit has a Move characteristic of 16" and can fly.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Swift: {
    effects: [
      {
        name: `Swift`,
        desc: `Add 3" to this general's Move characteristic.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Gravity-defying Champion': {
    effects: [
      {
        name: `Gravity-defying Champion`,
        desc: `Once per battle, you can reroll 1 run roll, 1 charge roll, and 1 casting roll for this general.`,
        when: [HERO_PHASE, CHARGE_PHASE, MOVEMENT_PHASE],
      },
    ],
  },
  //Stonemage
  'Tectonically Attuned': {
    effects: [
      {
        name: `Tectonically Attuned`,
        desc: `At the start of your shooting phase, you can pick 1 friendly Spirit of the Mountain within 3" of this general. Add 1 to the Attacks characteristic of that unit's Geomantic Blast until the end of that phase.`,
        when: [START_OF_SHOOTING_PHASE],
      },
    ],
  },
  Enduring: {
    effects: [
      {
        name: `Enduring`,
        desc: `Add 3 to the general's wound characteristic.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Unyielding Toughness': {
    effects: [
      {
        name: `Unyielding Toughness`,
        desc: `At the start of your hero phase, you can pick 1 friendly Stoneguard unit wholly within 6" of this general. Add 1 to the Wounds characteristic of that unit until your next hero phase. Designer's Note: This can result in a model that is affected by this ability being slain if the wounds allocated to that model equal or exceed its Wounds characteristic once the effect of this ability ends.`,
        when: [START_OF_HERO_PHASE, DURING_GAME],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(CommandTraits, 'command_trait')
