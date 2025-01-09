import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { LUMINETH_REALMLORDS } from 'meta/factions'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const BattleTraits = {
  [LUMINETH_REALMLORDS]: {
    effects: [
      {
        name: `Lightning Reactions - Passive`,
        desc: `Effect: When players are alternating picking units to use a Fight ability, when it is your turn to pick a unit, you can pick 2 units instead of 1. Resolve the second Fight ability immediately after the first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shining Company`,
        desc: `Effect: You can only use this ability if you have not used any Facet of War abilities this battle round. 
        For the rest of the battle round, subtract 1 from hit rolls for attacks that target friendly Vanari units that have not charged this turn and that have not been picked as the target of the "Power of Hysh" ability this battle round.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Move Like the Wind`,
        desc: `Declare: You can only use this ability if you have not used any Facet of War abilities this battle round. Pick up to 3 friendly Hurakan units that are not in combat to be the targets. 
        Effect: Each target can move 2D6". It cannot move into combat during any part of that move, and it cannot use Shoot abilities for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Power of Hysh`,
        desc: `Declare: You can only use this ability if you have not used any Facet of War abilities this battle round. Pick a friendly Vanari unit to be the target. 
        Effect: The targets attacks score critical hits on unmodified hit rolls of 5+ for the rest of the battle round.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Deep Thinkers`,
        desc: `Effect: You can only use this ability if you have not used any Facet of War abilities this battle round. 
        Add 1 to casting rolls for friendly Scinari units for the rest of the battle round.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Enduring As Rock`,
        desc: `Effect: You can only use this ability if you have not used any Facet of War abilities this battle round. 
        Subtract 1 from the Rend characteristic of weapons used for attacks that target friendly Alarith units for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Shrine Guardian - Passive`,
        desc: `Effect: While this terrain feature has a Shrine Guardian: 
        This terrain feature has a Move characteristic of 6" and can use Move abilities as if it were a unit. 
        The Shrine Guardian cannot use Move abilities and remains on this terrain feature each time it moves. 
        Instead of measuring range or visibility to the Shrine Guardian, measure to this terrain feature instead. 
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
        when: [HERO_PHASE],
      },
      {
        name: `Shrine Luminor (Faction Terrain) - Cleansing Rituals - Once Per Turn - Reaction: You declared a Spell ability for a unit wholly within 12" of this terrain feature`,
        desc: `Effect: While this terrain feature has a Shrine Guardian, you can reroll the casting roll for that spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
