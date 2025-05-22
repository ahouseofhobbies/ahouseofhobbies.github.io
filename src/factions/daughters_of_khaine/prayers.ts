import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  HERO_PHASE,
  SAVES_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Prayers = {
  /* 'Catechism of Murder': {
    effects: [
      {
        name: `Catechism of Murder`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Until your next hero phase, if the unmodified hit roll for an attack made with a melee weapon by that unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound roll and save roll for each hit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Catechism of Murder`,
        desc: `If active, if the unmodified hit roll for an attack made with a melee weapon by that unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound roll and save roll for each hit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Blessing of Khaine': {
    effects: [
      {
        name: `Blessing of Khaine`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Until your next hero phase, you can reroll Fanatical Faith rolls (pg 66) for that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Blessing of Khaine`,
        desc: `If active, you can reroll Fanatical Faith rolls (pg 66) for that unit.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  "Martyr's Sacrifice": {
    effects: [
      {
        name: `Martyr's Sacrifice`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Until your next hero phase, each time a model from that unit is slain by an attack made with a melee weapon, before the slain model is removed from play, pick 1 enemy unit within 3" of the slain model and roll a dice. On a 5+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
      {
        name: `Martyr's Sacrifice`,
        desc: `If active, each time a model from that unit is slain by an attack made with a melee weapon, before the slain model is removed from play, pick 1 enemy unit within 3" of the slain model and roll a dice. On a 5+, that unit suffers 1 mortal wound.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Crimson Rejuvenation': {
    effects: [
      {
        name: `Crimson Rejuvenation`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Heal up to D3 wounds allocated to that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Covenant of the Iron Heart': {
    effects: [
      {
        name: `Covenant of the Iron Heart`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Until your next hero phase, do not take battleshock tests for that unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Covenant of the Iron Heart`,
        desc: `If active, do not take battleshock tests for that unit.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  'Sacrament of Blood': {
    effects: [
      {
        name: `Sacrament of Blood`,
        desc: `Answer value of 3 and a range of 14". If this prayer is answered, pick 1 friendly DAUGHTERS OF KHAINE unit wholly within range and visible to the chanter. Until your next hero phase, add 1 to the number of the current battle round when determining the abilities gained by that unit from the Blood Rites battle trait (pg 66). This ability and other similar abilities are cumulative.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Unit prayers
  'Touch of Death': {
    effects: [
      {
        name: `Touch of Death`,
        desc: `Answer value of 3 and a range of 3". If answered, pick 1 enemy unit within range and visible to the chanter. That enemy unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Murder of Crows': {
    effects: [
      {
        name: `Murder of Crows`,
        desc: `Answer value of 4 and a range of 18". If answered, pick 1 enemy unit within range and visible to the chanter. That unit suffers D3 mortal wounds. Then, roll a dice. If the roll is equal to or higher than the Wounds characteristic of that enemy unit, subtract 1 from hit rolls for attacks made by that unit for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Dance of Doom': {
    effects: [
      {
        name: `Dance of Doom`,
        desc: `Answer value of 3. If answered, the strike-first effect applies to this unit in the following combat phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dance of Doom`,
        desc: `If active, the strike-first effect applies to this unit in the following combat phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Prayers of the Khainite Cult': {
    effects: [
      {
        name: `Sacrament of Blood: Chant value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a visible friendly Daughters of Khaine unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, add 1 to the current battle round number when determining which effects of the Blood Rites ability apply to the target. If the chanting roll was 10+, until the start of your next turn, treat the current battle round number as 5 when determining which effects of the Blood Rites ability apply to the target instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Martyr's Sacrifice: Chant value of 4`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a visible friendly Daughters of Khaine unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, each time a model in the target unit is slain by a combat attack, before removing the model from play, pick an enemy unit in combat with the target and roll a dice. If the chanting roll was 8+, roll 2 dice instead of 1. For each 5+, inflict 1 mortal damage on that enemy unit after the Fight ability has been resolved.`,
        when: [HERO_PHASE],
      },
      {
        name: `Covenant of the Iron Heart: Chant value of 4`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a visible friendly Daughters of Khaine unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Ignore negative modifiers to the targets control score until the start of your next turn. In addition, if the chanting roll was 8+, add 5 to the targets control score until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Bloodshadow Rites': {
    effects: [
      {
        name: `Shadowstep: Chant value of 3 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a visible friendly Daughters of Khaine Aelf Infantry unit wholly within 12" of them and that has not been picked to be the target of this prayer this turn to be the target, then make a chanting roll of D6. 
        Effect: The target can move up to 6". It can move through the combat ranges of enemy units but cannot end that move in combat. If the chanting roll was 8+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scathscale: Chant value of 3`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a friendly Daughters of Khaine Aelf Infantry unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, subtract 1 from wound rolls for combat attacks that target that friendly unit. If the chanting roll was 8+, until the start of your next turn, subtract 1 from wound rolls for combat attacks that target friendly Daughters of Khaine Aelf Infantry units while they are wholly within 12" of the target of this ability instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Exultation of Murder: Chant value of 4`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest to chant this prayer, pick a friendly Daughters of Khaine Aelf Infantry unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, add 1 to wound rolls for the targets combat attacks. In addition, if the chanting roll was 9+, until the start of your next turn, add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
