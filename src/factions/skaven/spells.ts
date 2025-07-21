import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Spells = {
  // Lore of Ruin
  /* Scorch: {
    effects: [
      {
        name: `Scorch`,
        desc: `Casting value of 5 and a range of 13". Pick 1 enemy unit within range and visible to the caster and roll a number of dice equal to the casting roll. For each 6, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Skitterleap: {
    effects: [
      {
        name: `Skitterleap`,
        desc: `Casting value of 6 and a range of 13". Pick 1 friendly SKAVEN HERO with a wounds characteristic of 13 or less within range and visible to the caster. Remove that HERO from the battlefield and set it up again on the battlefield more than 9" from all enemy units. That HERO cannot move in the following movement phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Death Frenzy': {
    effects: [
      {
        name: `Death Frenzy`,
        desc: `Casting value of 7 and a range of 13". Pick 1 friendly SKAVEN unit that is not a HERO within range and visible to the caster. Until your next hero phase, if any models in that unit are slain, those models can fight before they are removed from play.`,
        when: [HERO_PHASE],
      },
      {
        name: `Death Frenzy`,
        desc: `If active, if any models in that unit are slain, those models can fight before they are removed from play.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  // Lore of Warpvolt Galvanism
  'More-more-more Warp Power!': {
    effects: [
      {
        name: `More-more-more Warp Power!`,
        desc: `Casting value of 7 and a range of 13". Pick 1 friendly CLANS SKRYRE unit wholly within range and visible to the caster. Add 1 to hit rolls and wound rolls for attacks made by that unit until your next hero phase. However, that unit suffers D3 mortal wounds at the end of your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Chain Warp Lightning': {
    effects: [
      {
        name: `Chain Warp Lightning`,
        desc: `Casting value of 7 and a range of 13". If successfully cast, each unit within range suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Warp Lightning Shield': {
    effects: [
      {
        name: `Warp Lightning Shield`,
        desc: `Casting value of 6. If successfully cast, until your next hero phase, the first 3 wounds caused to the caster in each phase are negated. If a fourth wound is caused to the caster in the same phase, then the caster suffers 3 mortal wounds and this spell is unbound (the first wounds caused in that phase are still negated).`,
        when: [HERO_PHASE],
      },
    ],
  },

  // Unit spells
  'Warp Lightning': {
    effects: [
      {
        name: `Warp Lightning`,
        desc: `Casting value of 5 and a range of 13". Pick 1 enemy unit within range and visible to the caster. That unit suffers D3 mortal wounds. Alternatively, before making the casting roll, you can say that this unit will use its warp-power accumulator to augment the spell. If you do so, and the spell is successfully cast and not unbound, pick 1 enemy unit within range and visible to the caster. That unit suffers D6 mortal wounds. However, if the spell is not successfully cast or is unbound, this unit suffers D6 mortal wounds that cannot be negated.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Madness: {
    effects: [
      {
        name: `Madness`,
        desc: `Casting value of 8 and a range of 3". Pick 1 enemy HERO within range and visible to the caster and roll a number of dice equal to the combined value of the Attacks characteristics of all melee weapons with which that HERO is armed. For each 4+, you can pick 1 enemy unit within 3" of that HERO to suffer 1 mortal wound (you can pick different units to suffer the mortal wounds if you wish).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Dreaded Thirteenth Spell': {
    effects: [
      {
        name: `The Dreaded Thirteenth Spell`,
        desc: `Casting value of 8 and a range of 13". Pick 1 enemy unit within range and visible to the caster and roll 13 dice. For each 4+, that unit suffers 1 mortal wound. You can then summon 1 unit of Clanrats to the battlefield and add it to your army. The summoned unit can have up to 1 model for each mortal wound that was caused by this spell. The summoned unit must be set up wholly within range of the caster and more than 9" from all enemy units. The summoned unit cannot move in the following movement phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dreaded Warpgale': {
    effects: [
      {
        name: `Dreaded Warpgale`,
        desc: `Casting value of 8 and a range of 18". Pick 1 enemy unit within range and visible to the caster. That unit suffers D6 mortal wounds. In addition, run rolls and charge rolls for that unit are halved until your next hero phase, and if that unit can fly, it also cannot fly until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Wither: {
    effects: [
      {
        name: `Wither`,
        desc: `Casting value of 7 and a range of 13". Pick 1 enemy unit within range and visible to the caster and roll 2D6. If the roll is greater than that unit's Wounds characteristic, that unit suffers D3 mortal wounds and you can subtract 1 from hit rolls for attacks made with melee weapons by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Warp Lightning Storm': {
    effects: [
      {
        name: `Warp Lightning Storm`,
        desc: `Casting value of 7 and a range of 13". Pick up to D3 different enemy units within range and visible to the caster. Those units each suffer D3 mortal wounds. Alternatively, before making the casting roll, you can say that this unit will use its warp-power accumulator to augment the spell. If you do so, and the spell is successfully cast and not unbound, pick up to D3 different enemy units within range and visible to the caster. Those units each suffer D6 mortal wounds. However, if the spell is not successfully cast or is unbound, this unit suffers mortal wounds that cannot be negated.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dreaded Death Frenzy': {
    effects: [
      {
        name: `Dreaded Death Frenzy`,
        desc: `Casting value of 7 and a range of 13". Pick up to D3 friendly SKAVEN units wholly within range and visible to the caster. Until your next hero phase, if any models in that unit are slain, those models can fight before they are removed from play.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dreaded Plague': {
    effects: [
      {
        name: `Dreaded Plague`,
        desc: `Casting value of 7 and a range of 13". Pick 1 enemy unit within range and visible to the caster and roll a dice for each model in that unit. For each 4+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Cracks Call': {
    effects: [
      {
        name: `Cracks Call`,
        desc: `Casting value of 6 and a range of 13". Pick 1 enemy unit within range and visible to the caster and roll 2D6. If the roll is greater than that unit's Move characteristic, that unit suffers a number of mortal wounds equal to the difference between its Move characteristic and the roll (rounding up). This spell has no effect on units that can fly.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Lore of Ruin': {
    effects: [
      {
        name: `Wither: Casting value of 6`,
        desc: `Declare: Pick a friendly Skaven Wizard to cast this spell, pick a visible enemy unit within 13" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skitterleap: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Skaven Wizard to cast this spell, pick a visible friendly Skaven Hero wholly within 13" of them to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warpgale: Casting value of 6`,
        desc: `Declare: Pick a friendly Skaven Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-last for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Thanquols Mutated Menagerie (AoR)': {
    effects: [
      {
        name: `Untapped Mutation: Casting value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Mutated Menagerie Wizard to cast this spell, pick up to 3 visible friendly Mutated Menagerie units wholly within 13" of them that are affected by the More-More Mutation! ability to be the targets, then make a casting roll of 2D6. 
        Effect: For each damage point allocated to the target at the end of this turn by the More-More Mutation! ability, add 1 to the target's control score until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Warp Lightning Vortex: Casting value of 7`,
        desc: `Declare: If there is not a friendly Warp Lightning Vortex on the battlefield, pick a friendly Skaven Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up the first part of the Warp Lightning Vortex within 18" of the caster and visible to them, then set up the second and third parts exactly 7" from the first part and exactly 7" from each other so that they form a triangle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warp Lightning Vortex - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Warp Lightning Vortex - Warp Lightning Bolts`,
        desc: `Declare: If this Manifestation was not set up this turn, pick each enemy unit within 6" of this Manifestation to be the targets. 
        Effect: Roll a dice for each target. On a 4+, inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Warp Lightning Vortex - Warp Vortex - Passive`,
        desc: `Effect: Subtract 2 from run rolls and charge rolls for enemy units while they are within 6" of this Manifestation. In addition, if an enemy unit passes across this Manifestation and/or the round-cornered traingle formed by drawing a line around all of the bases of the Manifestation's parts, inflict D3 mortal damage on that enemy unit after the Move ability has been resolved.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'The Great-Grand Gnawhorde (AoR)': {
    effects: [
      {
        name: `Deafening Frenzy: Casting value of 8 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Gnawhorde Wizard to cast this spell, pick a visible friendly Gnawhorde Infantry unit wholly within 13" of them to be the targets, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn:
        The target has Strike-First.
        The target cannot use commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Vermintide: Casting value of 7`,
        desc: `Declare: If there is not a friendly Vermintide on the battlefield, pick a friendly Skaven Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Vermintide wholly within 13" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Vermintide - More-More Rats`,
        desc: `Effect: Heal (D6) this Manifestation.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
