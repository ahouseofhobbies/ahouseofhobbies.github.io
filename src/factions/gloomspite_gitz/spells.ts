import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, HERO_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE } from 'types/phases'

const Spells = {
  'Lore of the Clammy Dank': {
    effects: [
      {
        name: `Sneaky Distraction: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Gloomspite Gitz Wizard to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for attacks made by enemy units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Hand of Gork: Casting value of 7`,
        desc: `Declare: Pick a friendly Gloomspite Gitz Wizard to cast this spell, pick a visible friendly unit wholly within 12" of them and not in combat to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again on the battlefield wholly within 24" of the caster and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spore Maws: Casting value of 7`,
        desc: `Declare: Pick a friendly Gloomspite Gitz Wizard to cast this spell, pick up to 3 visible enemy units within 12" of them to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'The Hand of Gork': {
    effects: [
      {
        name: `The Hand of Gork`,
        desc: `Casting value of 7 and a range of 24". Pick 1 friendly GLOOMSPITE GITZ unit more than 3" from all enemy units and that is wholly within range and visible to the caster. Remove that unit from the battlefield and set it up again anywhere on the battlefield more than 9" from all enemy units. It cannot move in the following movement phase.`,
        when: [HERO_PHASE, MOVEMENT_PHASE],
      },
    ],
  },
  'Squig Lure': {
    effects: [
      {
        name: `Squig Lure`,
        desc: `Casting value of 5 and a range of 18". Pick 1 friendly SQUIG unit wholly within range and visible to the caster. Until your next hero phase, you can reroll charge rolls for that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Scuttling Terrors': {
    effects: [
      {
        name: `Scuttling Terrors`,
        desc: `Casting value of 6 and a range of 18". Pick 1 friendly SPIDERFANG unit wholly within range and visible to the caster. That unit can make a normal move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Sneaky Distraction': {
    effects: [
      {
        name: `Sneaky Distraction`,
        desc: `Casting value of 7 and a range of 12". If successfully cast, until your next hero phase, subtract 1 from hit rolls for attacks made by enemy units while they are within range of the caster.`,
        when: [HERO_PHASE, COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  'Curse of da Spider God': {
    effects: [
      {
        name: `Curse of da Spider God`,
        desc: `Casting value of 7 and a range of 24". Pick 1 enemy unit within range and visible to the caster. Until the start of your next hero phase, hit rolls for attacks made by that unit always fail on an unmodified roll of 1 or 2 instead of only a 1, and save rolls for attacks that target that unit always fail on an unmodified roll of 1 or 2 instead of only a 1.`,
        when: [HERO_PHASE, COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },

  // Unit spells
  'Nikkit! Nikkit!': {
    effects: [
      {
        name: `Nikkit! Nikkit!`,
        desc: `Casting value of 8 and a range of 12". Pick 1 enemy model within range and visible to the caster. That model's unit suffers D3 mortal wounds. In addition, if that model bears an artefact of power and the unmodified casting roll was 10+, that model's artefact of power can no longer be used (if it was used to enhance a weapon, that weapon reverts to its normal form)`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Night Shroud': {
    effects: [
      {
        name: `Night Shroud`,
        desc: `Casting value of 5 and a range of 12". Pick 1 friendly Gloomspite Gitz unit wholly within range and visible to the caster. Until the start of your next hero phase, subtract 1 from hit rolls for attacks made with missile weapons that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Spore Maws': {
    effects: [
      {
        name: `Spore Maws`,
        desc: `Casting value of 7 and a range of 6". If successfully cast, each enemy unit within range suffers D6 mortal wounds (roll separately for each unit).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fangz of da Bad Moon': {
    effects: [
      {
        name: `Fangz of da Bad Moon`,
        desc: `Casting value of 3 and a range of 24". Pick 1 enemy unit within range and visible to the caster and roll a number of dice equal to the unmodified casting roll. For each 3+, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Face of Da Bad Moon': {
    effects: [
      {
        name: `Face of Da Bad Moon`,
        desc: `Casting value of 5 and a range of 9". Pick 1 enemy unit within range and visible to the caster. That unit must retreat. If it is impossible for the unit to retreat for any reason, it suffers D6 mortal wounds instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Venom of the Spider God': {
    effects: [
      {
        name: `Venom of the Spider God`,
        desc: `Casting value of 6 and a range of 18". Pick 1 friendly Spiderfang unit wholly within range and visible to the caster. Until the start of your next hero phase, add 1 to the number of mortal wounds caused by the 'Spider Venom' ability of that unit if the unmodified hit roll was 6. If the casting roll was 10 or more, pick up to D3 different friendly Spiderfang units instead of 1. Designer's Note: If a unit is affected by the Light of the Bad Moon, this spell does not affect unmodified hit rolls of 5; it only affects unmodified hit rolls of 6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Speed of the Spider God': {
    effects: [
      {
        name: `Speed of the Spider God`,
        desc: `Casting value of 4 and a range of 24". Pick 1 friendly Spiderfang unit wholly within range and visible to the caster. Until your next hero phase, that unit can run and still shoot and/or charge later in the turn. If the casting roll was 8 or more, pick up to D3 friendly Spiderfang units instead of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Jealous Hex': {
    effects: [
      {
        name: `Jealous Hex`,
        desc: `Casting value of 6 and a range of 18". Pick 1 enemy Hero within range and visible to the caster. Until the start of your next hero phase, ignore positive modifiers to hit rolls and wound rolls for attacks made by that Hero, and ignore positive modifiers to save rolls for attacks that target that Hero.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Hag Curse': {
    effects: [
      {
        name: `Hag Curse`,
        desc: `Casting value of 7 and a range of 12". Pick 1 enemy unit within range and visible to the caster. Until your next hero phase, subtract 1 from hit rolls for attacks made by that unit and subtract 1 from save rolls for attacks that target that unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Mesmerise: {
    effects: [
      {
        name: `Mesmerise`,
        desc: `Casting value of 6 and a range of 12". Only this unit's Boggleye knows this spell and can attempt to cast it. Pick 1 enemy unit within range and visible to the caster. Until the start of your next hero phase, that unit cannot issue or receive commands.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Fungoid Cloud': {
    effects: [
      {
        name: `Fungoid Cloud`,
        desc: `Casting value of 6 and a range of 12". Only this unit's Shroomancer knows this spell and can attempt to cast it. If successfully cast, until the start of your next hero phase, subtract 1 from hit rolls for attacks that target friendly Gloomspite Gitz units while they are wholly within range of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Spells, 'spell')