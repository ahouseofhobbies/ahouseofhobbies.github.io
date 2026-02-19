import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { LUMINETH_REALMLORDS } from 'meta/factions'
import {
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  [LUMINETH_REALMLORDS]: {
    effects: [
      {
        name: `Depict Rune - Once Per Battle Round (Army), Start of Battle Round`,
        desc: `The Lumineth magically inscribe runes of power into the lands themselves to enhance their armies and heal the realms of Chaos corruption.
        Effect: Pick 1 of the following runes to depict on your battle scripture. The effect and conditional enhanced effects of that rune last for the rest of the battle round. Each rune remains on your battle scripture for the rest of the battle or until it is removed or replaced by another ability.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Depict Rune - Varinor, Rune of Strength`,
        desc: `Pick up to 2 friendly Lumineth Realm-lords units for each instance of this rune depicted on your battle scripture to be the targets. Add 1 to run rolls and charge rolls for each target. In addition, the following enhanced effects apply:
        - While Ydrellfi, Rune of the River is depicted on your battle scripture, add 1 to wound rolls for each target's combat attacks.
        - While Oreali, Rune of the Wind is depicted on your battle scripture, each target can use a Retreat ability in the same turn.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Depict Rune - Alathin, Rune of the Mountain`,
        desc: `Pick up to 2 friendly Lumineth Realm-lords units for each instance of this rune depicted on your battle scripture to be the targets. Each target has Ward (5+). In addition, the following enhanced effects apply:
        - While Varinor, Rune of Strength is depicted on your battle scripture, the targets' melee weapons have Crit (Auto-wound).
        - While Ydrellfi, Rune of the River is depicted on your battle scripture, subtract 1 from wound rolls for attacks made while they are in combat with any of the targets.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Depict Rune - Ydrellfi, Rune of the River`,
        desc: `Pick up to 2 friendly Lumineth Realm-lords units for each instance of this rune depicted on your battle scripture to be the targets. Subtract 2 from charge rolls for enemy units while they are within 12" of any of the targets. In addition, the following enhanced effects apply:
        - While Alathin, Rune of the Mountain is depicted on your battle scripture, ignore negative modifiers to hit rolls and wound rolls for attacks made by the targets.
        - If Oreali, Rune of the Wind is depicted on your battle scripture, each target can immediately move up to 3". They can pass through the combat ranges of enemy units and can end that move in combat.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Depict Rune - Oreali, Rune of the Wind`,
        desc: `Pick up to 2 friendly Lumineth Realm-lords units for each instance of this rune depicted on your battle scripture to be the targets. Subtract 1 from hit rolls for attacks made by enemy units while they are in combat with any of the targets. In addition, the following enhanced effects apply:
        - While Varinor, Rune of Strength is depicted on your battle scripture, add 4" to each target's Move characteristic.
        - While Alathin, Rune of the Mountain is depicted on your battle scripture, add 5 to each target's control score.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Depict Rune - Thalari, Rune of the Zenith`,
        desc: `Add 2 to casting rolls for friendly Lumineth Realm-lords units. In addition, if you have 4 or more unique runes depicted on your battle scripture, add 4" to the Move characteristic of friendly Lumineth Realm-lords units and friendly Lumineth Realm-lords units' attacks score critical hits on unmodified hit rolls of 5+.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Shrine Guardian - Passive`,
        desc: `Effect: While this terrain feature has a Shrine Guardian:
        This terrain feature has a Move characteristic of 6" and can use non-command non-Charge Move abilities as if it were a unit. It cannot end a Move ability within the combat range of an enemy unit.
        The Shrine Guardian cannot use Move abilities and remains on this terrain feature each time it moves.
        Instead of measuring range and visibility to the Shrine Guardian, measure to this terrain feature instead.
        All attacks that would target the Shrine Guardian target this terrain feature instead.
        If this terrain feature is destroyed, before removing it from the battlefield, inflict D3 mortal damage on the Shrine Guardian. Then, set up the Shrine Guardian on the battlefield wholly within 3" of this terrain feature and not in combat. That unit is no longer a Shrine Guardian. If it is not possible to set up the Shrine Guardian, it is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Enter the Shrine`,
        desc: `Declare: If this terrain feature does not have a Shrine Guardian, pick a friendly Lumineth Realm-lords Infantry Hero within 3" of it and not in combat to be the target.
        Effect: Place the target on this terrain feature. The target is now a Shrine Guardian (see Shrine Guardian).`,
        when: [HERO_PHASE],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Exit the Shrine`,
        desc: `Effect: If this terrain feature has a Shrine Guardian that was not placed on it this turn, set up the Shrine Guardian on the battlefield wholly within 6" of this terrain feature and not in combat. That unit is no longer a Shrine Guardian.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Cleansing Rituals - Once Per Turn - Reaction: You declared a Spell ability for a Lumineth Realm-lords unit wholly within 12" of this terrain feature`,
        desc: `Effect: While this terrain feature has a Shrine Guardian, you can re-roll the casting roll for that spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
