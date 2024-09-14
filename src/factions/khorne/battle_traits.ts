import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { KHORNE } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'

const BattleTraits = {
  [KHORNE]: {
    effects: [
      {
        name: `Spelleater Curse - Reaction: Opponent declared a Spell ability`,
        desc: `Declare: You can only use this ability if you have not used any Blood Tithe abilities this turn. Spend 2 blood tithe points. 
        Effect: That spell is unbound.`,
        when: [HERO_PHASE],
      },
      {
        name: `Slaughter Triumphant`,
        desc: `Declare: You can only use this ability if you have not used any Blood Tithe abilities this turn. Spend 8 blood tithe points. 
        Effect: Pick 1 of the following effects:  
        Add 1 to the Attacks characteristic of melee weapons used by friendly Blades of Khorne units for the rest of the battle.  
        Pick a friendly non-Unique Bloodthirster unit that has been destroyed. Set up an identical replacement unit on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Murderlust`,
        desc: `Declare: You can only use this ability if you have not used any Blood Tithe abilities this turn. Spend 1 blood tithe point and pick a friendly Blades of Khorne unit that is not in combat to be the target. 
        Effect: The target can move 3". It can move into combat.`,
        when: [MOVEMENT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_KHORNE, meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Brass Skull Meteor`,
        desc: `Declare: You can only use this ability if you have not used any Blood Tithe abilities this turn. Spend 4 blood tithe points and pick an enemy unit that is visible to a friendly Blades of Khorne Hero to be the target. 
        Effect: Roll 8 dice. For each 3+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_KHORNE, meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Heads Must Roll`,
        desc: `Declare: You can only use this ability if you have not used any Blood Tithe abilities this turn. Spend 6 blood tithe points. 
        Effect: For the rest of the turn, add 1 to the Rend characteristic of melee weapons used by friendly Blades of Khorne units.`,
        when: [COMBAT_PHASE],
        rule_sources: [rule_sources.BATTLETOME_KHORNE, meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE],
      },
      {
        name: `Skull Altar (Faction Terrain) - Words of Hate - Passive`,
        desc: `Effect: While this terrain feature has an Invoker:  
        Add 1 to chanting rolls for the Invoker.  
        The Invoker cannot use Move abilities.  
        Instead of measuring range or visibility to the Invoker, measure to this terrain feature instead.  
        All attacks that would target the Invoker target this terrain feature instead.  
        If this terrain feature is destroyed, before removing it from the battlefield, inflict D3 mortal damage on the Invoker. Then, set up the Invoker on the battlefield wholly within 3" of this terrain feature and not in combat. That unit is no longer an Invoker. If it is not possible to set up the Invoker, it is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Skull Altar (Faction Terrain) - Ascend the Altar`,
        desc: `Declare: If this terrain feature does not have an Invoker, pick a friendly Blades of Khorne Infantry Priest within 3" of it to be the target. 
        Effect: Place the target on this terrain feature. The target is now an Invoker (see Words of Hate).`,
        when: [HERO_PHASE],
      },
      {
        name: `Skull Altar (Faction Terrain) - Descend the Altar`,
        desc: `Effect: If this terrain feature has an Invoker, set up the Invoker on the battlefield wholly within 6" of this terrain feature and not in combat. That unit is no longer an Invoker.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Skull Altar (Faction Terrain) - Hatred of Sorcery - Reaction: A friendly unit within 18" of this terrain feature was picked to be the target of an enemy spell`,
        desc: `Effect: Roll a dice. On a 5+:  
        If this terrain feature has an Invoker, gain 1 blood tithe point.  
        Ignore the effect of that spell on that friendly unit. 
        This terrain feature can use this ability more than once per phase but you can only roll once for each friendly unit per spell cast.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Blood Tithe': {
    effects: [
      {
        name: `The Blood Tithe - Passive`,
        desc: `Effect: You start the battle with 0 blood tithe points. Earn 1 blood tithe point each time a unit (friendly or enemy) is destroyed.`,
        when: [DURING_GAME],
      },
    ],
  },
  
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
