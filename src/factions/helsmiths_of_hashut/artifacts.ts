import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  'Crown of Woe': {
    effects: [
      {
        name: `Crown of Woe - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are within 9" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* 'Crone Blade': {
    effects: [
      {
        name: `Crone Blade`,
        desc: `Pick 1 of the bearer's melee weapons. If the unmodified hit roll for an attack made with that weapon is a 6, you can heal 1 wound allocated to the bearer after all of the bearer's attacks have been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Bloodbane Venom': {
    effects: [
      {
        name: `Bloodbane Venom`,
        desc: `Pick 1 of the bearer's melee weapons. After the bearer fights, if any wounds caused by attacks made with that weapon in that phase were allocated to an enemy model and that enemy model has not been slain, roll a dice. If the roll is equal to or greater than that model's Wounds characteristic, that model is slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Shadow Stone': {
    effects: [
      {
        name: `Shadow Stone`,
        desc: `Add 1 to casting rolls for the bearer when they attempt to cast a spell from the Lore of Shadows (pg 70).`,
        when: [HERO_PHASE],
      },
    ],
  }, */
  'Sevenfold Shadow': {
    effects: [
      {
        name: `Sevenfold Shadow  - Once Per Battle`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /*  'Crystal Heart': {
    effects: [
      {
        name: `Crystal Heart`,
        desc: `When the bearer attempts to cast a spell that summons an endless spell, the range of that spell is doubled.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blood Sigil': {
    effects: [
      {
        name: `Blood Sigil`,
        desc: `You can pick 1 extra prayer for the bearer from the Prayers of the Khainite Cult (pg 71).`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Rune of Khaine': {
    effects: [
      {
        name: `Rune of Khaine`,
        desc: `The first time the bearer is slain, the bearer can fight before they are removed from play.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Khainite Pendant': {
    effects: [
      {
        name: `Khainite Pendant - Once Per Battle`,
        desc: `Declare: Pick a friendly Daughters of Khaine Priest wholly within 12" of this unit. 
        Effect: Give that unit D6 ritual points.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Croneseers Pariahs (AoR)': {
    effects: [
      {
        name: `Blade of Prophetic Doom (AoR) - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 2+: 
        If the target is not damaged, inflict 1 mortal damage on it. 
        If the target is damaged, inflict an amount of mortal damage on it equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
