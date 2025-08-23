import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, COMBAT_PHASE, HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Spells = {
  'Lore of Madness': {
    effects: [
      {
        name: `Deranged Transformation: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Wizard to cast this spell, pick a visible friendly Flesh-Eater Courts Infantry or Cavalry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn: 
        Add 2" to the targets Move characteristic. 
        Add 1 to wound rolls for the targets combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Miasma of Madness: Casting value of 7`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, for each unmodified hit roll of 1 for a combat attack made by the target, inflict 1 mortal damage on the target after the Fight ability has been resolved.`,
        when: [HERO_PHASE],
      },
      {
        name: `Charnel Feast: Casting value of 6`,
        desc: `Declare: Pick a friendly Flesh-Eater Courts Wizard to cast this spell and pick a visible enemy unit within 18" of them to be the target. You can also pick a friendly Serfs unit within 6" of the target to be the raised ranks. Then, make a casting roll of 2D6.
        Effect: Inflict D3 mortal damage on the target. For each damage point allocated to the target by this ability, you can return 1 slain model to the raised ranks.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Knights of New Summercourt (AoR)': {
    effects: [
      {
        name: `Deranged Transformation: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly New Summercourt Wizard to cast this spell, pick a visible friendly New Summercourt Infantry or Cavalry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn:
        Add 2" to the target's Move characteristic.
        Add 1 to wound rolls for the target's combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Miasma oF Madness: Casting value of 7`,
        desc: `Declare: Pick a friendly New Summercourt Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6.
        Effect: Until the start of your next turn, for each unmodified hit roll of 1 for a combat attack made by the target, inflict 1 mortal damage on the target after the Fight ability has been resolved.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Corpsemare Stampede: Casting value of 6`,
        desc: `Declare: If there is not a friendly Corpsemare Stampede on the battlefield, pick a friendly New Summercourt Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Corpsemare Stampede wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Corpsemare Stampede - Trampled Underfoot`,
        desc: `Declare: This Manifestation can use this ability even if it is in combat.
        Pick a point on a battlefield edge to be the target. Then, make a stampede roll of 2D6. Add 1D6 to the roll for each battle round that this Manifestation has been on the battlefield and has not been banished. For example, the stampede roll would be 2D6 in the turn in which it was summoned, 3D6 in your next turn, and so on.
        Effect: This Manifestation can move a distance up to the value of the stampede roll in a straight line directly towards the target. It can move through the combat ranges of enemy units. It cannot end that move in combat unless it ends that move within 1/2" of a visible enemy unit. If it does so, this Manifestation has charged.
        Roll a D3 for each enemy unit that this Manifestation passed across during that move. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.
        In addition, if this Manifestation charged this turn, add the value of the stampede roll to the Attacks characteristic of this Manifestation's Corpsemare Trample for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'The Equinox Feast (AoR)': {
    effects: [
      {
        name: `Solarite Flares: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Equinox Feast Wizard to cast this spell, pick a point on the battlefield that is visible to them, then pick each unit (friendly and enemy) within 3" of that point to be the targets. Then, make a casting roll of 2D6.
        Effect: Roll a dice for each target. On a 3+, subtract 1 from hit rolls for the target's attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Chalice of Ushoran: Casting value of 6`,
        desc: `Declare: If there is not a friendly Chalice of Ushoran on the battlefield, pick a friendly Equinox Feast Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Set up a Chalice of Ushoran wholly within 12" of the caster and visible to them.`,
        when: [HERO_PHASE],
      },
      {
        name: `Chalice of Ushoran - Draughts of Delusion`,
        desc: `Declare: Pick an enemy unit within 6" of this Manifestation to be the target.
        Effect: Roll a dice. On a 3+, your opponent must pick 1 of the following to apply for the rest of the turn:
        Drink Deep from the Chalice: Other than the Companion weapon ability, weapon abilities for attacks made by the target have no effect.
        Turn Aside and Suffer the Consequences: Combat attacks that target that enemy unit score critical hits on unmodified hit rolls of 5+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /* 'Deranged Transformation': {
    effects: [
      {
        name: `Deranged Transformation`,
        desc: `Casting value of 6 and a range of 24". Pick 1 friendly FLESH-EATER COURTS unit wholly within range and visible to the caster that has a Wounds characteristic of 7 or less. Until your next hero phase, add 2" to that unit's Move characteristic and add 1 to wound rolls for attacks made by that unit. If the casting roll was 10 or more, you can pick up to 3 different friendly units to be affected by the spell instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ferocious Hunger': {
    effects: [
      {
        name: `Ferocious Hunger`,
        desc: `Casting value of 6 and a range of 12". Pick 1 friendly ROYAL TERRORGHEIST wholly within range. You can reroll hit rolls for attacks made with that unit's Fanged Maw until your next hero phase.`,
        when: [HERO_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Crimson Victuals': {
    effects: [
      {
        name: `Crimson Victuals`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy unit within range of the caster, and a friendly FLESH-EATER COURTS unit that has a Wounds characteristic of 1 and is within 6" of that enemy unit. The enemy unit suffers D3 mortal wounds. Then, for each mortal wound that was caused to the enemy unit and not negated, you can return 1 slain model to the friendly unit. If the casting roll was 10 or more, the enemy unit suffers 2D3 mortal wounds instead of D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Monstrous Hunger': {
    effects: [
      {
        name: `Monstrous Hunger`,
        desc: `Casting value of 6 and a range of 18". If successfully cast, friendly FLESH-EATER COURTS MONSTERS wholly within range of the caster are filled with monstrous hunger until your next hero phase. A unit filled with monstrous hunger can run and still charge later in the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Glimpse of Delusion': {
    effects: [
      {
        name: `Glimpse of Delusion`,
        desc: `Casting value of 7 and a range of 18". Pick 1 enemy model within range and visible to the caster. Then, pick 1 melee weapon that enemy model is armed with and pick 1 other enemy unit within range of that weapon. That enemy model immediately makes combat attacks with that weapon targeting that other enemy unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Carrion Call': {
    effects: [
      {
        name: `Carrion Call`,
        desc: `Casting value of 6. If successfully cast, in the following movement phase, friendly FLESH-EATER COURTS units that are set up at the end of the movement phase can immediately move D6".`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Unnatural Speed': {
    effects: [
      {
        name: `Unnatural Speed`,
        desc: `Casting value of 6. If successfully cast, this unit can immediately attempt a charge and you can roll 3D6 for the charge roll. If the charge is successful, the strike-first effect applies to this unit in the following combat phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Winds of Shyish': {
    effects: [
      {
        name: `Winds of Shyish`,
        desc: `Casting value of 6 and a range of 9". Pick 1 friendly FLESH-EATER COURTS unit that can fly and is wholly within range and visible to the caster. Remove this unit and the unit you picked from the battlefield and set them up again more than 9" from all enemy units and wholly within 9" of each other. Neither unit can move in the following movement phase.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')
