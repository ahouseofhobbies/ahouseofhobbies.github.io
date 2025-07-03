import { tagAs } from 'factions/metatagger'
import { HERO_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const Prayers = {
  'Prayers of the Stormhosts': {
    effects: [
      {
        name: `Healing Storm: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Stormcast Eternals Priest to chant this prayer, pick a visible friendly Stormcast Eternals unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Heal (D3) the target. If the chanting roll was 8+, Heal (D3) each visible friendly Stormcast Eternals unit wholly within 12" of the chanter instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bless Weapons: Chant value of 6`,
        desc: `Declare: Pick a friendly Stormcast Eternals Priest to chant this prayer, pick a visible friendly Stormcast Eternals Infantry unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons until the start of your next turn. If the chanting roll was 12+, this ability aects all visible friendly Stormcast Eternals units wholly within 12" of the chanter.`,
        when: [HERO_PHASE],
      },
      {
        name: `Translocation: Chant value of 4`,
        desc: `Declare: Pick a friendly Stormcast Eternals Priest to chant this prayer, pick a visible friendly Stormcast Eternals unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield more than 9" from all enemy units. In addition, if the chanting roll was 8+, subtract 1 from hit rolls for attacks that target that unit for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Draconith Skywing (AoR)': {
    effects: [
      {
        name: `Sigmar's Grace: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Draconith Skywing Priest to chant this prayer, pick a friendly Draconith Skywing unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Heal (D3) the target. If the chanting roll was 8+, Heal (2D3) the target instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Sanctification: Chant value of 4`,
        desc: `Declare: Pick a friendly Draconith Skywing Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, subtract 1 from casting rolls for enemy Wizards while they are within 30" of the chanter. If the chanting roll was 12+, subtract 1 from casting rolls for enemy Wizards for the rest of the battle and friendly Priests cannot use this ability again for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Heroes of the First-Forged (AoR)': {
    effects: [
      {
        name: `Speed of the Righteous: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly First-Forged Priest to chant this prayer, pick a friendly Stormcast Eternals unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 2" to the Move characteristic of the target for the rest of the turn. If the chanting roll was 6+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ruination Brotherhood (AoR)': {
    effects: [
      {
        name: `Morrda's Embrace: Chant value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Ruination Brotherhood Priest to chant this prayer, pick a visbile enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Roll a dice. If the dice exceeds the target's Health characteristic, 1 model in the target unit is slain. If the chanting roll was 10+, roll 2D6 instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Murderous Flock: Chant value of 4`,
        desc: `Declare: Pick a friendly Ruination Brotherhood Priest to chant this prayer, pick a visbile enemy unit within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Roll a dice for each modle in the target unit. For each 5+, inflict 1 mortal damage on the target unit. If the chanting roll was 10+, inflict 1 mortal damage on the target unit for each 4+ instead.`,
        when: [HERO_PHASE],
      },
      {
        name: `Raven's Flight: Chant value of 4`,
        desc: `Declare: Pick a friendly Ruination Brotherhood Priest to chant this prayer, pick a visbile friendly unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Add 2" to the target's Move characteristic for the rest of the turn. If the chanting roll was 8+, in addition, for the rest of the turn, the target can use Charge abilities even if they have used a Run ability in the same turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*   Translocation: {
    effects: [
      {
        name: `Translocation`,
        desc: `Answer value of 3 and range of 9" if the chanter is a KNIGHT or 12" if the chanter is a LORD, If answered, pick 1 friendly STORMCAST ETERNALS unit wholly within range and visible to the chanter. You can remove that unit from the battlefield and set it up again anywhere on the battlefield more than 9" from all enemy units. That unit cannot move in the following movement phase.`,
        when: [HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_STORMCAST_ETERNALS, rule_sources.ERRATA_OCTOBER_2021],
      },
    ],
  },
  'Bless Weapons': {
    effects: [
      {
        name: `Bless Weapons`,
        desc: `Answer value of 3 and range of 12" if the chanter is a KNIGHT or 18" if the chanter is a LORD. If answered, pick 1 friendly STORMCAST ETERNALS unit wholly within range and visible to the chanter. Until your next hero phase, if the unmodified hit roll for an attack made by that unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [HERO_PHASE],
      },
    ],
  },

  // Unit prayers
  'Lightning Storm': {
    effects: [
      {
        name: `Lightning Storm`,
        desc: `Answer value of 4 and range of 12". If answered, pick 1 enemy unit within range and visible to the chanter. That unit suffers D3 mortal wounds. In addition, subtract 1 from hit rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Healing Storm': {
    effects: [
      {
        name: `Healing Storm`,
        desc: `Answer value of 4 and range of 12". If answered, pick 1 friendly Stormcast Eternals unit wholly within range and visible to the chanter. Heal up to D3 wounds allocated to that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Sanction: {
    effects: [
      {
        name: `Sanction`,
        desc: `Answer value of 4 and range of 12". If answered, pick 1 enemy unit within range and visible to the chanter. That unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lightning Tempest': {
    effects: [
      {
        name: `Lightning Tempest`,
        desc: `Answer value of 3 and a range of 18". If answered, pick 1 enemy unit within range. That unit is struck by lightning and suffers D3 mortal wounds. Then, roll a dice. On a 1-2, the tempest clears and the sequence ends. On a 3+, pick 1 other enemy unit within 3" of the last unit that was struck by lightning. "Ihat unit is struck by lightning and suffers D3 mortal wounds. Keep rolling dice in this way until the tempest clears or there are no other enemy units within 3" of the last unit to be struck by lightning. A unit cannot be affected by this prayer more than once per hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  // Draconith skywing
  "Sigmar's Grace": {
    effects: [
      {
        name: `Sigmar's Grace`,
        desc: `Answer value of 3 and a range of 12". If answered, pick 1 friendly unit wholly within range and visible to the chanter. You can heal up to 3 wounds allocated to that unit.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  Sanctification: {
    effects: [
      {
        name: `Sanctification`,
        desc: `Answer value of 4. If answered, until the start of your next hero phase, subtract 1 from casting rolls for enemy WIZARDS and subtract 1 from chanting rolls for enemy PRIESTS.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
  Sovereignty: {
    effects: [
      {
        name: `Sovereignty`,
        desc: `Answer value of 4 and a range of 12". If answered, pick 1 enemy unit within range. Until the start of your next hero phase, that unit counts as a maximum of 5 models for the purposes of contesting objectives.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
