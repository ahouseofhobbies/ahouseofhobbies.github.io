import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const CommandTraits = {
  'Cruel Taskmaster': {
    effects: [
      {
        name: `Cruel Taskmaster`,
        desc: `Declare: Pick a friendly non-Hero Flesh-Eater Courts unit wholly within 12" of this unit to be the target.
        Effect: For the rest of the turn, you can reroll charge rolls for the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Savage Beyond Reason': {
    effects: [
      {
        name: `Savage Beyond Reason - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this unit's melee weapons, including Companion weapons, if it did not use a Fight ability in the previous turn. Add 2 to the Attacks characteristic of those weapons instead while this unit has not used a Fight ability this battle.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Stronger in Madness': {
    effects: [
      {
        name: `Stronger in Madness - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to this unit each phase. In addition, other than the Companion weapon ability, weapon abilities for combat attacks that target this unit have no effect.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Knights of New Summercourt (AoR)': {
    effects: [
      {
        name: `Tip of the King's Lance (AoR)`,
        desc: `Effect: If this unit charged this turn, it can move 2D6". It can pass through models in enemy units, but it must end that move in combat.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Equinox Feast (AoR)': {
    effects: [
      {
        name: `Lord of Revelries (AoR) - Passive`,
        desc: `Effect: Ignore the first damage point that would be allocated to this unit in each phase.`,
        when: [DURING_GAME],
      },
    ],
  },
  /* 'Feverish Scholar': {
    effects: [
      {
        name: `Feverish Scholar`,
        desc: `Add 1 to casting rolls, dispelling rolls and unbinding rolls for this general. If this general has 6 noble deeds points, add 2 to casting rolls, dispelling rolls and unbinding rolls for this general instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Master of the Menagerie': {
    effects: [
      {
        name: `Master of the Menagerie`,
        desc: `When using the Summon Loyal Subjects battle trait, you can pick 1 friendly FLESH-EATER COURTS MONSTER that is not a HERO and that has been destroyed, instead of a unit of SERFS or KNIGHTS. Set up a replacement unit as described in the battle trait and allocate 6 wounds to that replacement MONSTER that cannot be negated. In addition, when that unit is set up, it can be set up wholly within 7" of the edge of the battlefield instead of 6".`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  'Stronger in Madness': {
    effects: [
      {
        name: `Stronger in Madness`,
        desc: `Add 2 to this general's Wounds characteristic.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Stronger in Madness`,
        desc: `While this general has 6 noble deeds points, they have a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  },

  'Savage Beyond Reason': {
    effects: [
      {
        name: `Savage Beyond Reason`,
        desc: `If the unmodified hit roll for an attack made with a melee weapon by this general is 6, that attack scores 2 hits on the target instead of 1. If this general has 6 noble deeds points, that attack scores 3 hits on the target instead of 2.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Cruel Taskmaster': {
    effects: [
      {
        name: `Cruel Taskmaster`,
        desc: `If this general uses the Muster Guard ability to return models to a unit, reduce the noble deeds cost of each returned model by 1, or if the cost was already 1, you can bring back 1 additional model instead.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(CommandTraits, 'command_trait')
