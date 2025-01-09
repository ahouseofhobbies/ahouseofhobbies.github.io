import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE } from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Spells = {
  'Lore of Madness': {
    effects: [
      {
        name: `Deranged Transformation: Casting value of 6 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Wizard to cast this spell, pick a visible friendly Flesh-eater Courts Infantry or Cavalry unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn: Add 2" to the targets Move characteristic. Add 1 to wound rolls for the targets combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Miasma of Madness: Casting value of 5`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Roll 7 dice and apply the corresponding effect: 
        Ravaged Mind: If 2 or more dice have the same value, inflict 1 mortal damage on the target. 
        Gory Visions: If 3 or more dice have the same value, in addition to the effect of Ravaged Mind, subtract 1 from hit rolls for the targets attacks until the start of your next turn. 
        Drooling Stupor: If 4 or more dice have the same value, in addition to the effects of Ravaged Mind and Gory Visions, subtract 1 from wound rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Charnel Feast: Casting value of 6`,
        desc: `Declare: Pick a friendly Flesh-eater Courts Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Inflict D3 mortal damage on the target. Then, you can pick a friendly Flesh-eater Courts Infantry unit within 6" of the target. For each damage point allocated to the target by this ability, you can return 1 slain model to that friendly unit.`,
        when: [HERO_PHASE],
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
