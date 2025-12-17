import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Spells = {
  'Lore of Infernal Power': {
    effects: [
      {
        name: `Hateful Fractures: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Halve the target's Move characteristic until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ashen Smog: Casting value of 7`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visbile terrain feature within 18" of them that has a friendly desolation token to be the target, then make a casting roll of 2D6.
        Effect: That terrain feature has the 'Obscuring' ability (Terrain, 1.2) until the start of your next turn. Then, roll a D3 for each enemy unit contesting the target terrain feature. On a 2+, inflict an amount of damage equal to the roll on that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Molten Metal: Casting value of 8`,
        desc: `Declare: Pick a friendly Helsmiths of Hashut Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: Roll a number of dice equal to the unmodified casting roll. Inflict 1 mortal damage on the target for each roll that equals or exceeds the target's Save characteristic.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Taars Grand Forgehost (AoR)': {
    effects: [
      {
        name: `Reinforce Daemonsteel: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Grand Forgehost Wizard to cast this spell, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, ignore the first damage point allocated to each friendly Helsmiths of Hashut unit in each phase while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shackling Curse: Casting value of 6`,
        desc: `Declare: Pick a friendly Grand Forgehost Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: For the rest of the turn, the target's attacks cannot score critical hits (treat them as regular hits instead).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ziggurat Stampede (AoR)': {
    effects: [
      {
        name: `Searing Detonation: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Ziggurat Stampede Wizard to cast this spell, pick each enemy unit in combat with them to be the targets, then make a casting roll of 2D6.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Flaming Weapons: Casting value of 7`,
        desc: `Declare: Pick a friendly Ziggurat Stampede Wizard to cast this spell, pick a visible friendly Ziggurat Stampede unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Add 1 to the Rend characteristic of the target's melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burn to Ash: Casting value of 8`,
        desc: `Declare: Pick a friendly Ziggurat Stampede Wizard to cast this spell, pick a terrain feature within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: If the target has a Health characteristic, inflict 2D3 mortal damage on it. Then, if the target was not destroyed or does not have a Health characteristic:
        The target gains the 'Obscuring' terrain ability for the rest of the battle (Terrain, 1.2).
        If the target is Faction Terrain, until the start of your next turn, abilities on that terrain features warscroll have no effect.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
