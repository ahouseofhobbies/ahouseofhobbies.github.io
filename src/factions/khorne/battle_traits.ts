import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { KHORNE } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'

const BattleTraits = {
  [KHORNE]: {
    effects: [
      {
        name: `Blood-Drenched - Reaction: You declared the Skulls for the Skull Throne ability`,
        desc: `Effect: After that ability has been resolved, if you unlocked a Blood Tithe ability this turn, pick a friendly Blades of Khorne unit to be the target. The following effects apply to the target for the rest of the battle: 
        Wild-eyed Brutality: Ignore positive modifiers to save rolls for the target. 
        Blood Haze: If the target is Bloodbound, its Blood-hungry weapons have Crit (Mortal). 
        Weapons of Murder: If the target is a non-Monster Daemon unit, add 1 to the Rend characteristic of its Bloodhungry weapons, including Blood-hungry Companion weapons. 
        Bloodlords Supreme: If the target is a Monster, add 1 to the Damage characteristic of its Blood-hungry weapons.`,
        when: [START_OF_TURN],
      },
      {
        name: `Blood for the Blood God - Passive`,
        desc: `Effect: Earn 1 blood tithe point each time a unit (friendly or enemy) is destroyed. Blood tithe points are spent to unlock Blood Tithe abilities. You can only use Blood Tithe abilities that are unlocked. Once a Blood Tithe ability is unlocked, you do not need to spend further blood tithe points to use it.`,
        when: [DURING_GAME],
      },
      {
        name: `Skulls for the Skull Throne - Once Per Turn`,
        desc: `Effect: Pick a Blood Tithe ability that you have not unlocked and spend the number of blood tithe points required to unlock that ability (shown in the top-right corner of the ability). That Blood Tithe ability is now unlocked for the rest of the battle.`,
        when: [START_OF_TURN],
      },
      {
        name: `Murderlust (0) - Once Per Turn - Reaction: You declared a Charge ability`,
        desc: `You do not need to unlock this ability to use it. It is already unlocked.
        Effect: Roll a dice. You can replace one of the dice in the charge roll with that value. If you do so, inflict D3 mortal damage on the unit using that Charge ability after that ability is resolved.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Divine Scorn (1) - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy Wizards or Priests within 6" of any friendly Blades of Khorne units to be the target(s).
        Effect: Roll a dice for each target. On a 3+, subtract 1 from the target's power level, to a minimum of 0, until the start of the next turn.`,
        when: [START_OF_TURN],
      },
      {
        name: `Punish the Pacifist (1) - Once Per Turn`,
        desc: `Declare: Each unit (friendly and enemy) and enemy Manifestation that is not in combat is a target.
        Effect: Roll a dice. On a 1-2, inflict 1 mortal damage on each target. On a 3+, inflict 1 mortal damage on each enemy target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Murder the Mystic (2) - Once Per Turn`,
        desc: `You can only unlock this ability if you have unlocked 'Divine Scorn'.
        Declare: Pick up to 4 enemy Manifestations to be the target(s).
        Effect: Make a banishment roll of 2D6 for each target. If the banishment roll equals or exceeds the banishment value listed on that Manifestation's warscroll, inflict D3 mortal damage on each enemy unit within 3" of it and then it is banished and removed from play.`,
        when: [HERO_PHASE],
      },
      {
        name: `Glorious Combat or Naught (2) - Passive`,
        desc: `You can only unlock this ability if you have unlocked 'Divine Scorn' or 'Punish the Pacifist'.
        Effect: Subtract 1 from hit rolls for shooting attacks that target friendly Blades of Khorne units.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Revel in Battle (3) - Passive`,
        desc: `You can only unlock this ability if you have unlocked 'Punish the Pacifist'.
        Effect: Other than the Companion weapon ability, weapon abilities for combat attacks made by enemy units that charged this turn and that target a friendly Blades of Khorne unit have no effect.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Slaughter Triumphant (4) - Passive`,
        desc: `You can only unlock this ability if you have unlocked 'Glorious Combat or Naught' or 'Murder the Mystic'.
        Effect: Add 1 to the Attacks characteristic of weapons used by friendly Blades of Khorne units that charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cleave Wide the Grin of Khorne (4) - Passive`,
        desc: `You can only unlock this ability if you have already unlocked 'Revel in Battle' or 'Glorious Combat or Naught'.
        Effect: Add 1 to hit rolls for combat attacks made by friendly Blades of Khorne units.`,
        when: [COMBAT_PHASE],
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
        desc: `Declare: If this terrain feature does not have an Invoker, pick a friendly Blades of Khorne Infantry Priest within 3" of it and not in combat to be the target. 
        Effect: Place the target on this terrain feature. The target is now an Invoker (see Words of Hate).`,
        when: [HERO_PHASE],
      },
      {
        name: `Skull Altar (Faction Terrain) - Descend the Altar`,
        desc: `Effect: If this terrain feature has an Invoker that was not placed on it this turn, set up the Invoker on the battlefield wholly within 6" of this terrain feature and not in combat. That unit is no longer an Invoker.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Skull Altar (Faction Terrain) - Hatred of Sorcery - Once Per Turn`,
        desc: `Declare: If this terrain feature has an Invoker, pick up to D3 enemy Endless Spells within 18" of this terrain feature to be the targets(s) and make a banishment roll of 2D6 for each target.
        Effect: Resolve the effect of the 'Banish Manifestation' ability for each target. If any Endless Spells are banished by this ability, you gain 1 blood tithe point.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*'The Blood Tithe': {
    effects: [
      {
        name: `The Blood Tithe - Passive`,
        desc: `Effect: You start the battle with 0 blood tithe points. Earn 1 blood tithe point each time a unit (friendly or enemy) is destroyed.`,
        when: [DURING_GAME],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
