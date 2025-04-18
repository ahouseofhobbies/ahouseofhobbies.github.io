import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  HERO_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const Artifacts = {
 /* Gorecleaver: {
    effects: [
      {
        name: `Gorecleaver`,
        desc: `Pick 1 of the bearer's melee weapons. Improve the Rend characteristic of that weapon by 1. In addition, if the unmodified hit roll for an attack made with that weapon is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'The Crimson Plate': {
    effects: [
      {
        name: `The Crimson Plate`,
        desc: `The bearer has a ward of 5+.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'Blood Rune': {
    effects: [
      {
        name: `Blood Rune`,
        desc: `At the end of the combat phase, if any wounds caused by an attack made by the bearer were allocated to a HERO or MONSTER and not negated, you receive 1 Blood Tithe point.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Banner of Blood': {
    effects: [
      {
        name: `Banner of Blood`,
        desc: `BLOODSECRATOR only. You can reroll charge rolls for friendly BLADES OF KHORNE units wholly within 16" of the bearer.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  "Ar'gath, the King of Blades": {
    effects: [
      {
        name: `Ar'gath, the King of Blades`,
        desc: `Ward rolls cannot be made for enemy units while they are within 3" of the bearer.`,
        when: [WARDS_PHASE],
      },
    ],
  }, */  
  "Ar'gath, the King of Blades": {
    effects: [
      {
        name: `Ar'gath, the King of Blades`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target. 
        Effect: Ward rolls cannot be made for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Collar of Contempt': {
    effects: [
      {
        name: `Collar of Contempt - Passive`,
        desc: `Effect: This unit can use Unbind abilities as if it had Wizard (1). Each time this unit unbinds a spell, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Halo of Blood': {
    effects: [
      {
        name: `Halo of Blood - Passive`,
        desc: `Effect: Ignore negative modifiers to this units control score and to hit rolls and wound rolls for this units attacks.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
