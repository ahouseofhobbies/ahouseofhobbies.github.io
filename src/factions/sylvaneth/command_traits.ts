import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE, MOVEMENT_PHASE, SAVES_PHASE, START_OF_HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const CommandTraits = {
 /* 'Gnarled Warrior': {
    effects: [
      {
        name: `Gnarled Warrior`,
        desc: `Ignore modifiers (positive and negative) to save rolls for attacks that target this general.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Lord of Spites': {
    effects: [
      {
        name: `Lord of Spites`,
        desc: `In the combat phase, subtract 1 from the Attacks characteristic of melee weapons used by enemy units (to a minimum of 1) that finish a pile-in move within 3" of this general until the end of that phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  Warsinger: {
    effects: [
      {
        name: `Warsinger`,
        desc: `Declare: Pick a friendly Sylvaneth unit wholly within 12" of this unit to be the target. 
        Effect: Add 2" to the Move characteristic of the target for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
 /* 'Nurtured by Magic': {
    effects: [
      {
        name: `Nurtured by Magic`,
        desc: `Once per turn, if this general successfully casts a spell that is not unbound, pick 1 friendly SYLVANETH unit wholly within 18" of this general. If you do so, heal up to D3 wounds allocated to that unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  Spellsinger: {
    effects: [
      {
        name: `Spellsinger - Passive`,
        desc: `Effect: While this unit is within the combat range of an Awakened Wyldwood: 
        If this unit is a Wizard, add 1 to casting rolls for this unit. 
        If this unit is not a Wizard, it has Wizard (1) instead.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_SYLVANETH, rule_sources.ERRATA_OCTOBER_2022],
      },
    ],
  },
  'Radiant Spirit': {
    effects: [
      {
        name: `Radiant Spirit - Reaction: Opponent declared a Spell or Prayer ability`,
        desc: `Used By: This unit if it is wholly within 12" of a friendly Sylvaneth unit picked to be the target of that spell or prayer. 
        Effect: Roll a dice. On a 3+, ignore the effect of that spell or prayer on that unit. This unit can use this ability more than once per phase but only once per Spell or Prayer ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Evergreen Hunt
/*  'Sapwood Leader': {
    effects: [
      {
        name: `Sapwood Leader`,
        desc: `When you use the Abundant Growth battle trait to heal this general, you can heal up to D3 wounds allocated to this general instead of 1.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
