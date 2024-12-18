import { tagAs } from 'factions/metatagger'
import { FLESH_EATER_COURTS } from 'meta/factions'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const BattleTraits = {
  [FLESH_EATER_COURTS]: {
    effects: [
      {
        name: `Muster Guard`,
        desc: `Declare: Pick a friendly Courtier Hero that has 1 or more noble deeds points to use this ability, then pick a friendly unit wholly within 12" of it to be the target. 
        Effect: Spend any of that Heros noble deeds points. If the target is a Serfs unit, for each noble deeds point spent, return 1 slain model to it. If the target is a Knights unit, for every 2 noble deeds points spent, return 1 slain model to it.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Address Loyal Subtects - Once Per Turn`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Hero to use this ability. 
        Effect: Roll a dice for each other friendly Flesh-eater Courts unit wholly within 12" of that Hero. For each 5+, give 1 noble deeds point to that Hero.`,
        when: [HERO_PHASE],
      },
      {
        name: `Feeding Frenzy - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of melee weapons, including Companion weapons, used by friendly Flesh-eater Courts units while they are wholly within 12" of any friendly Heroes that have 6 noble deeds points.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Noble Deeds - Passive`,
        desc: `Effect: Each friendly Flesh-eater Courts Hero starts the battle with 0 noble deeds points and can have a maximum of 6 noble deeds points at once. 
        Each time a friendly Flesh-eater Courts Hero uses a Fight ability, after that ability has been resolved, give that Hero a number of noble deeds points equal to the number of damage points inflicted by that ability. Do not count attacks made with Companion weapons. 
        Each time a friendly Flesh-eater Courts Priest Hero uses a Prayer ability and the prayer is answered, after that ability has been resolved, give that Hero 1 noble deeds point. 
        Each time a friendly Flesh-eater Courts Wizard Hero uses a Spell ability and the spell is successfully cast, after that ability has been resolved, give that Hero 1 noble deeds point.`,
        when: [DURING_GAME],
      },
      {
        name: `Summon Loyal Subjects`,
        desc: `Declare: Pick a friendly Abhorrant Hero that has 6 noble deeds points to use this ability, then pick a friendly Serfs or Knights unit that has been destroyed to be the target. 
        Effect: Spend all of that Heros noble deeds points. Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Royal Blood - Once Per Turn`,
        desc: `Declare: Pick any number of friendly Abhorrants to be the targets. 
        Effect: Heal (D3) each target.`,
        when: [HERO_PHASE],
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
        desc: `Effect: Give D3 noble deeds points to this terrain features Steward.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
