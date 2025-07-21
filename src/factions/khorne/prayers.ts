import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE } from 'types/phases'

const Prayers = {
  'Blood Blessings of Khorne': {
    effects: [
      {
        name: `Uncontrollable Rage: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Blades of Khorne Priest to chant this prayer, pick a visible friendly unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, the effects of the 'Blood-drenched' ability (see 'Battle Traits') apply to the target. In addition, if the chanting roll was 8+, ignore the effect of 'Wild-eyed Brutality' on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Final Act of Violence: Chant value of 4`,
        desc: `Declare: Pick a friendly Blades of Khorne PRIEST to chant this prayer, pick a visible friendly Blades of Khorne unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, each time a model in the target unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. If the chanting roll was 8+, roll 2 dice instead. For each 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [HERO_PHASE],
      },
      {
        name: `Blood Boil: Chant value of 4`,
        desc: `Declare: Pick a friendly Blades of Khorne Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target. In addition, if the chanting roll was 8+, subtract 1 from wound rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gifts of the Blood God': {
    effects: [
      {
        name: `Goreflesh: Chant value of 3 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Blades of Khorne Priest to chant this prayer, pick a visible friendly Blades of Khorne unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, ignore the first damage point allocated to the target in each phase. If the chanting roll was 8+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Runes of Loathing: Chant value of 3`,
        desc: `Declare: Pick a friendly Blades of Khorne Priest to chant this prayer, pick a friendly Blades of Khorne unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, the target has Ward (3+) against damage inflicted by Spell abilities, Prayer abilities and abilities used by Manifestations (including Fight abilities). If the chanting roll was 8+, you can pick another eligible unit to be a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gift of Apoplexy: Chant value of 3`,
        desc: `Declare: Pick a friendly Blades of Khorne Priest to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, each time the target uses an ability that is not a Move, Charge or Fight ability, after that ability is resolved, inflict D3 mortal damage on the target. If the chanting roll was 8+, inflict 3 mortal damage instead of D3.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gorechosen Champions (AoR)': {
    effects: [
      {
        name: `Skin of Brass: Chant value of 4 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Gorechosen Champions Priest to chant this prayer, pick a visible friendly unit wholly within 12" of them to be the target, then make a chanting roll of D6. 
        Effect: Until the start of your next turn, subtract 1 from the Rend characteristic of weapons used for attacks that target that friendly unit. If the chanting roll was 8+, you can pick another eligible unit to a second target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Cowed and Broken: Chant value of 4`,
        desc: `Declare: Pick a friendly Gorechosen Champions Priest to chant this prayer, pick a visible enemy unit within 12" of them that is in combat with a friendly unit to be the target, then make a chanting roll of D6. 
        Effect: Roll 8 dice. If the chanting roll was 8+, add 1 to each roll. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Eruption of Apoplexy: Chant value of 4`,
        desc: `Declare: Pick a friendly Gorechosen Champions Priest to chant this prayer, pick a visible enemy unit within 12" of them that is in combat with a friendly unit to be the target, then make a chanting roll of D6. 
        Effect: Inflict D6 mortal damage on the target. If the target is destroyed, before removing the last model in that unit from play, inflict D3 mortal damage on every unit (friendly and enemy) within 6" of that model, or D6 mortal damage instead if the chanting roll was 8+.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Wrath-Axe: Chant value of 4`,
        desc: `Declare: If there is not a friendly Wrath-axe on the battlefield, pick a friendly Blades of Khorne Priest to chant this prayer, then make a chanting roll of D6. 
        Effect: Set up a Wrath-axe wholly within 12" of the chanter, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Wrath-Axe - Hatred's Edge`,
        desc: `Declare: If this Manifestation charged this turn, pick an enemy unit with a starting size greater than 1 that is in combat with this Manifestation to be the target. 
        Effect: Roll 2D6. On an 8+, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*'Blood Sacrifice': {
    effects: [
      {
        name: `Blood Sacrifice`,
        desc: `Answer value of 4 and a range of 8". If answered, pick 1 friendly BLADES OF KHORNE unit wholly within range and visible to the chanter. That unit suffers D3 mortal wounds and you receive 1 Blood Tithe point.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Killer Instinct': {
    effects: [
      {
        name: `Killer Instinct`,
        desc: `Answer value of 3 and a range of 16". If answered, pick 1 friendly BLADES OF KHORNE unit wholly within range, visible to the chanter and more than 3" from all enemy units. That unit can make a normal move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Witchbane Curse': {
    effects: [
      {
        name: `Witchbane Curse`,
        desc: `Answer value of 4. If answered, pick 1 enemy WIZARD unit visible to the chanter. Until the start of your next hero phase, subtract 1 from casting rolls made for that unit. In addition, until the start of your next hero phase, each time that unit attempts to cast a spell and that spell is not successfully cast, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Unholy Flames': {
    effects: [
      {
        name: `Unholy Flames`,
        desc: `Answer value of 4 and a range of 16". If answered, pick 1 friendly BLADES OF KHORNE unit wholly within range and visible to the chanter. Until the start of your next hero phase, improve the Rend characteristic of that unit's melee weapons by 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blood Boil': {
    effects: [
      {
        name: `Blood Boil`,
        desc: `Answer value of 4 and a range of 16". If answered, pick 1 enemy unit within range and visible to the chanter. That enemy unit suffers D6 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Bloodbind: {
    effects: [
      {
        name: `Bloodbind`,
        desc: `Answer value of 3 and a range of 16". If answered, pick 1 enemy unit within range, visible to the chanter and more than 3" from all friendly units. Your opponent must make a move of up to 8" with that unit. All of the models in that unit must finish that move as close as possible to the chanter and can finish that move within 3" of units in your army.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Wound the Realm': {
    effects: [
      {
        name: `Wound the Realm`,
        desc: `Answer value of 4 and a range of 16". If answered, pick 1 point on the battlefield within range and visible to the chanter and draw a straight line between that point and the closest part on the chanter's base. Roll a dice for each enemy unit passed across by that line. On a 2+, that unit suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Bloodmark: {
    effects: [
      {
        name: `Bloodmark`,
        desc: `Answer value of 3 and a range of 16". If answered, pick 1 enemy unit within range and visible to the chanter. Until the start of your next hero phase, add 1 to wound rolls for attacks made by friendly BLADES OF KHORNE DAEMON units that target that enemy unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Bloodhex: {
    effects: [
      {
        name: `Bloodhex`,
        desc: `Answer value of 4 and a range of 16". If answered, pick 1 enemy unit within range and visible to the chanter. Until the start of your next hero phase, subtract 1 from the Attacks characteristic of that unit's melee weapons (to a minimum of 1).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blood Call': {
    effects: [
      {
        name: `Blood Call`,
        desc: `Answer value of 3 and a range of 16". Add 1 to the chanting roll if the chanter is within 3" of any enemy units. If answered, pick 1 friendly BLOODLETTER HOST or 1 friendly BLOODCRUSHERS unit wholly within range and visible to the chanter. If the unit is a BLOODLETTER HOST, you can return D6 slain models to that unit. If it is a BLOODCRUSHERS unit, you can return 1 slain model to that unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Prayers, 'prayer')
