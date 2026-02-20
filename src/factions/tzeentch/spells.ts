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
        name: `Infernal Gateway: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 18" of them that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
        Effect: Roll either 5 dice or a number of dice equal to the number of fate points you have. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wyrdflame Haze: Casting value of 6`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, friendly Disciples of Tzeentch units are not visible to enemy units more than 12" from them while those friendly units are wholly within 12" of a friendly Disciples of Tzeentch unit that was set up in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shield of Fate: Casting value of 7`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible friendly Disciples of Tzeentch unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn: 
        The target has ward (5+). 
        Subtract 1 from hit rolls for attacks that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Lore of Fate - Mortal/Arcanite Only
  'Lore of Change': {
    effects: [
      {
        name: `Bolt of Tzeentch: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. Subtract 1 from wound rolls for the target's attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fold Reality: Casting value of 6`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: You can pick a friendly non-Monster Disciples of Tzeentch unit wholly within 12" of the caster and set it up in reserve masked by illusion. Then, you can pick a friendly unit that is masked by illusion and set it up wholly within 12" of the caster and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Transformed to Spawn: Casting value of 6`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. If any models are slain by this ability, you can pick a friendly Chaos Spawn of Tzeentch unit that is masked by illusion and set it up on the battlefield in combat with the target and not in combat with any other enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Change-Cult Uprising (AoR)': {
    effects: [
      {
        name: `Eldritch Strength: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Change-Cult Wizard to cast this spell, pick a visible friendly Change-Cult unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Add 1 to wound rolls for the target's attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shifting Manifestations: Casting value of 6`,
        desc: `Declare: Pick a friendly Change-Cult Wizard to cast this spell, pick 1 of the friendly ManifestationS below that is not on the battlefield, then make a casting roll of 2D6.
        Burning Sigil of Tzeentch
        Daemonic Simulacrum
        Tome of Eyes
        Effect: If there is already a friendly Manifestation from the list above on the battlefield, it is immediately banished. Then, set up the Manifestation you picked within 1" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tome of Eyes - Compendium of Dark Knowledge`,
        desc: `Declare: Pick a visible friendly Diciples of Tzeentch Wizard within 3" of the Manifestation to be the target.
        Effect; The target can immediately use a Spell ability from the Lore of Change or the Lore of Fate.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning SIgil of Tzeentch - Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each hero phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding effect for the rest of the turn. 
        1 No effect. 
        2-3 Heal (D3) each friendly Diciples of Tzeentch target. Inflict D3 mortal damage on each enemy target. 
        4 Friendly Diciples of Tzeentch targets can use Charge abilities even if they used a Run ability in the same turn. Enemy targets cannot use Run abilities. 
        5 Add 1 to hit rolls for attacks made by friendly Disciples of Tzeentch targets. Subtract 1 from hit rolls for attacks made by enemy targets. 
        6 Add 1 to wound rolls for attacks made by friendly Disciples of Tzeentch targets. Subtract 1 from wound rolls for attacks made by enemy targets. `,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Simulacrum - Jaws of Fate - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of this unit's Snapping Jaws for each fate point you have.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Oracles of Fate (AoR)': {
    effects: [
      {
        name: `Fateweaver's Gift: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Oracles of Fate Wizard to cast this spell, then make a casting roll of 2D6.
        Effect: Pick 1 of the following effects:
        Change the Past: Pick an enemy unit within 12" of and visible to the caster, that is in combat and that has not been picked to be the target of this ability this turn to be the target. Roll either 4 dice or a number of dice equal to the number of unspent destiny dice you have. For each 4+, inflict 1 mortal damage on the target.
        Seize the Present: Until the start of your next turn, add 1 to run rolls and charge rolls for friendly Oracles of Fate units while they are wholly within 12" of the caster.
        Predict the Future: Roll a dice. You must replace 1 of your destiny dice with that roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shifting Manifestations: Casting value of 6`,
        desc: `Declare: Pick a friendly Oracles of Fate Wizard to cast this spell, pick 1 of the friendly ManifestationS below that is not on the battlefield, then make a casting roll of 2D6.
        Burning Sigil of Tzeentch
        Daemonic Simulacrum
        Tome of Eyes
        Effect: If there is already a friendly Manifestation from the list above on the battlefield, it is immediately banished. Then, set up the Manifestation you picked within 1" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tome of Eyes - Compendium of Dark Knowledge`,
        desc: `Declare: Pick a visible friendly Diciples of Tzeentch Wizard within 3" of the Manifestation to be the target.
        Effect; The target can immediately use a Spell ability from the Lore of Change or the Lore of Fate.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burning SIgil of Tzeentch - Radiant Transmogrification`,
        desc: `Declare: This Manifestation must use this ability in each hero phase. Pick each unit (friendly and enemy) within 9" of this Manifestation to be the targets. 
        Effect: Roll 2 dice, pick either result, then apply the corresponding effect for the rest of the turn. 
        1 No effect. 
        2-3 Heal (D3) each friendly Diciples of Tzeentch target. Inflict D3 mortal damage on each enemy target. 
        4 Friendly Diciples of Tzeentch targets can use Charge abilities even if they used a Run ability in the same turn. Enemy targets cannot use Run abilities. 
        5 Add 1 to hit rolls for attacks made by friendly Disciples of Tzeentch targets. Subtract 1 from hit rolls for attacks made by enemy targets. 
        6 Add 1 to wound rolls for attacks made by friendly Disciples of Tzeentch targets. Subtract 1 from wound rolls for attacks made by enemy targets. `,
        when: [HERO_PHASE],
      },
      {
        name: `Daemonic Simulacrum - Jaws of Fate - Passive`,
        desc: `Effect: Add 2 to the Attacks characteristic of this unit's Snapping Jaws for each fate point you have.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
