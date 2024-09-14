import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'
const Spells = {
  // Common
  'Lore of Fate': {
    effects: [
      {
        name: `Glimpse the Future: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set aside any destiny dice that have a value of 6, and roll all of your other destiny dice again. If you have no destiny dice, roll a dice and add it to your destiny dice.`,
        when: [HERO_PHASE],
      },
      {
        name: `Infernal Gateway: Casting value of 6`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Roll either 4 dice or a number of dice equal to the number of destiny dice you have left, whichever is greater. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shield of Fate: Casting value of 7`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible friendly unit wholly within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Ward (5+) until the start of your next turn. In addition, if you have 4 or more destiny dice left, subtract 1 from hit rolls for attacks that target that unit until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Lore of Fate - Mortal/Arcanite Only
  'Lore of Change': {
    effects: [
      {
        name: `Bolt of Tzeentch: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fold Reality: Casting value of 7`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible friendly Disciples of Tzeentch unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Transformed to Spawn: Casting value of 7`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. If any models are slain by this ability, pick a friendly Chaos Spawn of Tzeentch unit that is in reserve as a potential fate or that has been destroyed. If you picked a unit in reserve as a potential fate, set it up on the battlefield in combat with the target. 
        If you picked a unit that has been destroyed, set up an identical replacement unit on the battlefield in combat with the target.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
