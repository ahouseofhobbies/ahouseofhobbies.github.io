import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Spells = {
  // Lore of Shadows
 /* 'Steed of Shadows': {
    effects: [
      {
        name: `Steed of Shadows`,
        desc: `Casting value of 6. If successfully cast, until your next hero phase, the caster has a Move characteristic of 16" and can fly.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Pit of Shades': {
    effects: [
      {
        name: `Pit of Shades`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range and visible to the caster and roll 2D6. If the roll is higher than that unit's Move characteristic, that unit suffers a number of mortal wounds equal to the difference between its Move characteristic and the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mirror Dance': {
    effects: [
      {
        name: `Mirror Dance`,
        desc: `Casting value of 6 and a range of 18". Pick 2 friendly DAUGHTERS OF KHAINE HEROES that are wholly within range, visible to the caster and each more than 3" from all enemy units. Remove those HEROES from the battlefield. Then, set each model up again within 1" of the location that had been occupied by the other model before it was removed from the battlefield and more than 3" from all enemy units. If it is not possible to set up either of the picked HEROES on the battlefield, return both HEROES to their original positions.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_HELSMITHS_OF_HASHUT, rule_sources.ERRATA_JULY_2022],
      },
    ],
  },
  'The Withering': {
    effects: [
      {
        name: `The Withering`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Add 1 to wound rolls for attacks that target that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Mindrazor: {
    effects: [
      {
        name: `Mindrazor`,
        desc: `Casting value of 8 and a range of 18". Pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the caster. Improve the Rend characteristic of that unit's melee weapons by 1 until your next hero phase. In addition, until your next hero phase, add 1 to the Damage characteristic of that unit's melee weapons if it made a charge move in the same turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Shroud of Despair': {
    effects: [
      {
        name: `Shroud of Despair`,
        desc: `Casting value of 4 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Subtract 1 from that unit's Bravery characteristic until your next hero phase. If the casting roll was 8+, subtract D3 from that unit's Bravery characteristic instead of 1 until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Unit spells
  'Enfeebling Foe': {
    effects: [
      {
        name: `Enfeebling Foe`,
        desc: `Casting value of 5 and a range of 18". Pick 1 enemy unit within range and visible to the caster. Subtract 1 from wound rolls for attacks made with melee weapons by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Enfeebling Foe`,
        desc: `If active, subtract 1 from wound rolls for attacks made with melee weapons by that unit until your next hero phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Black Horror of Ulgu': {
    effects: [
      {
        name: `Black Horror of Ulgu`,
        desc: `Casting value of 7 and a range of 36". Pick 1 enemy unit within range and visible to the caster, then roll a dice. On a 1, that unit suffers 1 mortal wound. On a 2-3, it suffers D3 mortal wounds. On a 4+, it suffers D6 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Doomfire: {
    effects: [
      {
        name: `Doomfire`,
        desc: `Casting value of 6 and a range of 12". Pick 1 enemy unit within range and visible to the caster. If the caster's unit has fewer than 5 models, that enemy unit suffers D3 mortal wounds. If the caster's unit has 5-9 models, that enemy unit suffers D6 mortal wounds. If the caster's unit has 10 or more models, that enemy unit suffers 6 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Lore of Shadows': {
    effects: [
      {
        name: `Steed of Shadows: Casting value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visible friendly Helsmiths of Hashut unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target can use Charge abilities this turn even if it used a Run ability in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Doomfire: Casting value of 7`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: If the target unit has fewer than 10 models, inflict D3 mortal damage on the target. If the target unit has 10-19 models, inflict D6 mortal damage on the target. If the target unit has 20 or more models, inflict 6 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mindrazor: Casting value of 8`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visible friendly Helsmiths of Hashut unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn. In addition, if the target charged this turn, add 1 to the Damage characteristic of its melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  }
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
