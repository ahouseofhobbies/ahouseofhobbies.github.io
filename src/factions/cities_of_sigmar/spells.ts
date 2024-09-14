import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'

const Spells = {
  'Spells of the Collegiate Arcane': {
    effects: [
      {
        name: `Elemental Lightning: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Cities of Sigmar Wizard to cast this spell, pick a visible enemy unit within 18" of them that has not been picked to be the target of this ability this turn to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. Then, roll a dice for each other enemy unit within the targets combat range. On a 4+, inflict D3 mortal damage on that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Speed of the Twin-Tailed Comet: Casting value of 7`,
        desc: `Declare: Pick a friendly Cities of Sigmar Wizard to cast this spell, pick a visible friendly Cities of Sigmar unit wholly within 12" to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, add 1 to the number of dice rolled when making charge rolls for the target, to a maximum of 3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Cindercloud: Casting value of 7`,
        desc: `Declare: Pick a friendly Cities of Sigmar Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from the Attacks characteristic of the targets melee weapons.`,
        when: [HERO_PHASE],
      },
    ],
  }
 /* Wildform: {
    effects: [
      {
        name: `Wildform`,
        desc: `Casting value of 7 and a range of 12". Pick 1 friendly CITIES OF SIGMAR HUMAN unit that is wholly within range and visible to the caster. Until the start of your next hero phase, you can attempt a charge with that unit if it is within 18" of the enemy instead of 12". In addition, roll 3D6 instead of 2D6 for charge rolls made for that unit until the start of your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
 /* Fireball: {
    effects: [
      {
        name: `Fireball`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Roll 1 dice for each model in that unit. For each roll of 6, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mystifying Miasma': {
    effects: [
      {
        name: `Mystifying Miasma`,
        desc: `Casting value of 5 and a range of 24". Pick 1 enemy unit within range and visible to the caster. That unit cannot run until your next hero phase. In addition, subtract 2 from charge rolls for that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Pall of Doom': {
    effects: [
      {
        name: `Pall of Doom`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That enemy unit cannot issue or receive commands until the start of your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Pha's Protection": {
    effects: [
      {
        name: `Pha's Protection`,
        desc: `Casting value of 7 and a range of 18". Pick 1 friendly CITIES OF SIGMAR HUMAN unit wholly within range and visible to the caster. Until the start of your next hero phase, ignore modifiers (positive and negative) to save rolls for attacks that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Transmutation of Lead': {
    effects: [
      {
        name: `Transmutation of Lead`,
        desc: `Casting value of 7 and a range of 12". Pick 1 enemy within range and visible to the caster. Roll a number of dice equal to the number of models in that unit. For each roll that equals or exceeds that unit's Save characteristic, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Amber Spear': {
    effects: [
      {
        name: `Amber Spear`,
        desc: `Casting value of 7. Pick 1 point on the battlefield within 18" of the caster that is visible to them and draw a straight line between that point and the closest point on the caster's base. Roll a dice for each unit that has any models passed across by that line. On a 2+, that unit suffers D3 mortal wounds or 3 mortal wounds if it is a MONSTER.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Burning Gaze': {
    effects: [
      {
        name: `Burning Gaze`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. Double the number of mortal wounds caused if that unit has 10 or more models, or triple the number of mortal wounds caused if that unit has 20 or more models.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Word of Pain': {
    effects: [
      {
        name: `Word of Pain`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. In addition, subtract 1 from hit rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Bladestorm: {
    effects: [
      {
        name: `Bladestorm`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster and roll 9 dice. For each roll that is less than that unit's Save characteristic, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blazing Weapons': {
    effects: [
      {
        name: `Blazing Weapons`,
        desc: `Casting value of 7 and a range of 12". If successfully cast, until the start of your next hero phase, friendly CITIES OF SIGMAR HUMAN units have blazing weapons while they are wholly within 12" of this unit. While a unit has blazing weapons, each unmodified hit roll of 6 for an attack made by that unit with a melee weapon causes 1 mortal wound to the target in addition to any damage it inflicts.`,
        when: [HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_CITIES_OF_SIGMAR,
          meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
        ],
      },
    ],
  },
  'Rain of Jade': {
    effects: [
      {
        name: `Rain of Jade`,
        desc: `Casting value of 7 and a range of 12". Pick 1 friendly CITIES OF SIGMAR HUMAN model wholly within range and visible to the caster. Roll a dice for each wound currently allocated to that model. On a 5+, that wound is healed.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Umbral Hex': {
    effects: [
      {
        name: `Umbral Hex`,
        desc: `Casting value of 6 and a range of 12". Pick 1 enemy unit within range and visible to the caster. Until the start of your next hero phase, each time a battleshock roll is made for that unit, 2D6 must be rolled instead of 1 dice.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Tenebrael Blades': {
    effects: [
      {
        name: `Tenebrael Blades`,
        desc: `Casting value of 7 and a range of 9". Pick 1 friendly CITIES OF SIGMAR AELF unit wholly within range and visible to the caster. Until the start of your next hero phase, when making save rolls for attacks made with melee weapons by that CITIES OF SIGMAR AELF unit, the target's Save characteristic is '-'.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
