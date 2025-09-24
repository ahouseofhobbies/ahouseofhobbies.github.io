import { tagAs } from 'factions/metatagger'
import { FLESH_EATER_COURTS } from 'meta/factions'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const BattleTraits = {
  [FLESH_EATER_COURTS]: {
    effects: [
      {
        name: `A Kingdom Deluded - Once Per Turn`,
        desc: `Declare: You must use this ability at the start of each turn. If it is the first turn of the battle, pick a Delusion from these battle traits or, unless otherwise specified, from the warscroll of a friendly unit on the battlefield. If it is not the first turn, make a delusion roll of D6.
        Effect: On a delusion roll of 1-2, you must pick a different Delusion to the one you picked last turn. On a 3-4, you must pick the same Delusion as the one you picked last turn, even if it is on the warscroll of a unit that has been destroyed. In such cases, the effect of that Delusion applies as if the unit had not been destroyed. On a 5-6, you must pick a Delusion like you did in the first turn. For the rest of the turn, you believe the Delusion you picked.`,
        when: [START_OF_TURN],
      },
      {
        name: `A Splendid Pageant (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion:
        Each time a friendly Flesh-Eater Courts unit wholly within 12" of a friendly Flesh-Eater Courts Hero uses a Run ability, if you roll a 1-3 when determining the distance that unit can move, you can use a value of 4 instead.
        While a friendly Flesh-Eater Courts Infantry Hero is within the combat range of a friendly Flesh-Eater Courts Infantry unit that has 5 or more models, that Hero is not visible to enemy units more than 6" away.`,
        when: [START_OF_TURN, MOVEMENT_PHASE, DURING_GAME],
      },
      {
        name: `A Glorious Banquet (Delusion) - Passive`,
        desc: `Effect: While you believe this Delusion, add 1 to hit rolls for combat attacks made by friendly Flesh-Eater Courts units that charged in the same turn while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes.`,
        when: [START_OF_TURN, COMBAT_PHASE],
      },
      {
        name: `Royal Blood - Once Per Turn`,
        desc: `Declare: Pick any number of friendly Abhorrants to be the targets.
        Effect: Heal (D3) each target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Muster Guard - Once Per Turn`,
        desc: `Declare: Pick any number of friendly Nobles to be the targets.
        Effect: For each target, pick 1 of the following:
        Return up to 3 slain models to a friendly Serfs unit wholly within 12" of it.
        Return 1 slain model to a friendly Knights unit wholly within 12" of it.
        The same unit cannot have models returned to it by this ability more than once per turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Feeding Frenzy - Once Per Battle`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Hero in combat to be the target.
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of melee weapons, including Companion weapons, used by friendly Flesh-Eater Courts units while they are wholly within 12" of the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Loyal Subjects - Once Per Turn`,
        desc: `Declare: Pick a friendly Abhorrant to use this ability, then pick a friendly Serfs or Knights unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Charnel Throne (Faction Terrain) - Steward of the Realm - Passive`,
        desc: `Effect: While this terrain feature has a Steward: 
        The Steward cannot use Move abilities. 
        Instead of measuring range or visibility to the Steward, measure to this terrain feature instead. 
        All attacks that would target the Steward target this terrain feature instead. 
        If this terrain feature is destroyed, before removing it from the battlefield, inflict D3 mortal damage on the Steward. Then, set up the Steward on the battlefield within 3" of this terrain feature and not in combat. That unit is no longer the Steward. If it is not possible to set up the Steward, it is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Charnel Throne (Faction Terrian) - Reigning Champion`,
        desc: `Declare: If this terrain feature does not have a Steward, pick a friendly Flesh-eater Courts Infantry Hero within 3" of it and not to in combat to be the target. 
        Effect: Place the target on this terrain feature. The target is now the Steward (see Steward of the Realm).`,
        when: [HERO_PHASE],
      },
      {
        name: `Charnel Throne (Faction Terrian) - Duty Calls`,
        desc: `Effect: If this terrain feature has a Steward that was not placed on it this turn, set up the Steward on the battlefield wholly within 6" of this terrain feature and not in combat. That unit is no longer the Steward.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Charnel Throne (Faction Terrian) - Ruler of All They Survey`,
        desc: `Declare: If this terrain feature has a Steward, pick a visible friendly non-Hero Flesh-Eater Courts unit to be the target.
        Effect: The target can move D3". If the target was set up this turn, it can move D6" instead. It cannot move into combat during that move.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
