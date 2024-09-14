import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'

const Spells = {
  'Lore of the Deeps': {
    effects: [
      {
        name: `Steed of Tides: Casting value of 6 (UNLIMITED) `,
        desc: `Declare: Pick a friendly Idoneth Deepkin Wizard to cast this spell, pick a visible friendly Idoneth Deepkin unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Arcane Corrasion: Casting value of 6`,
        desc: `Declare: Pick a friendly Idoneth Deepkin Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Subtract 1 from the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Pressure of the Deep: Casting value of 7`,
        desc: `Declare: Pick a friendly Idoneth Deepkin Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Counter-current': {
    effects: [
      {
        name: `Counter-current`,
        desc: `Casting value of 6 and range of 18". If cast, pick 1 enemy unit within range and visible to the caster. Until your next hero phase, halve run rolls and charge rolls for that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Pressure of the Deep': {
    effects: [
      {
        name: `Pressure of the Deep`,
        desc: `Casting value of 7 and range of 12". If cast, pick 1 enemy model within range that is visible to the caster and roll a dice. If the dice roll is greater than that model's Wounds characteristic, it is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Arcane Corrasion': {
    effects: [
      {
        name: `Arcane Corrasion`,
        desc: `Casting value of 6 and range of 12". If cast, pick 1 enemy unit within range and visible to the caster. Worsen the Rend characteristic of that unit's melee weapons by 1 until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },

  // Unit spells
  'Cloying Seas Mists': {
    effects: [
      {
        name: `Cloying Seas Mists`,
        desc: `Casting value of 6 and range of 12". If cast, pick 1 friendly IDONETH DEEPKIN unit, or 1 enemy unit, within range and visible to the caster. If you picked a friendly IDONETH DEEPKIN unit, heal up to D3 wounds allocated to that unit. If you picked an enemy unit, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Tsunami of Terror': {
    effects: [
      {
        name: `Tsunami of Terror`,
        desc: `Casting value of 7 and range of 18". If cast, pick up to 3 enemy units within range and visible to the caster. Subtract 1 from save rolls for attacks made with melee weapons that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_IDONETH_DEEPKIN,
          meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
        ],
      },
    ],
  },
  Riptide: {
    effects: [
      {
        name: `Riptide`,
        desc: `Casting value of 7 and range of 18". If cast, pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. In addition, subtract 1 from hit rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
