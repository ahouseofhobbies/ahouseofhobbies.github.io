import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  END_OF_BATTLESHOCK_PHASE,
  END_OF_TURN,
  MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  TURN_ONE_START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  // Invaders Host
  'Threnody Voicebox': {
    effects: [
      {
        name: `Threnody Voicebox - Once Per Battle`,
        desc: `Effect: For the rest of the turn, subtract 1 from the Attacks characteristic of melee weapons used by enemy units while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Icon of Infinite Excess': {
    effects: [
      {
        name: `Icon of Infinite Excess - Once Per Battle`,
        desc: `Declare: Pick a non-Hero Hedonites of Slaanesh unit wholly within 12" of this unit to be the target. 
        Effect: Add 1 to the Attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Pendant of Slaanesh': {
    effects: [
      {
        name: `Pendant of Slaanesh`,
        desc: `Effect: If any damage points were allocated to this unit this turn, Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  // Pretenders Host
 /* 'The Crown of Dark Secrets': {
    effects: [
      {
        name: `The Crown of Dark Secrets`,
        desc: `At the start of your first hero phase, pick 1 enemy unit on the battlefield. For the rest of the battle, while that unit is within 6" of the bearer, the Attacks characteristic of that unit's melee weapons is 1.`,
        when: [TURN_ONE_START_OF_HERO_PHASE],
      },
    ],
  },
  'Sceptre of Domination': {
    effects: [
      {
        name: `Sceptre of Domination`,
        desc: `At the start of the combat phase, roll a dice for each enemy unit within 3" of the bearer. On a 5+, the strike-last effect applies to that unit until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  Breathtaker: {
    effects: [
      {
        name: `Breathtaker`,
        desc: `Pick 1 of the bearer's melee weapons. If an enemy model is slain by an attack made with that weapon, all effects that would be triggered when that model is slain are ignored.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  // Godseekers Host
  'Cameo of the Dark Prince': {
    effects: [
      {
        name: `Cameo of the Dark Prince`,
        desc: `Once per battle, at the start of your hero phase, you can say that the bearer will gaze upon the cameo. If you do so, until the end of that turn, the bearer can issue commands to friendly HEDONITES OF SLAANESH units without any command points being spent.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Girdle of the Realm-racer': {
    effects: [
      {
        name: `Girdle of the Realm-racer`,
        desc: `The bearer can fly.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Girdle of the Realm-racer`,
        desc: `The bearer is eligible to fight in the combat phase if they are within 6" of any enemy units instead of 3", and they can move an extra 3" when they pile in.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Threnody Voicebox': {
    effects: [
      {
        name: `Threnody Voicebox`,
        desc: `Once per battle, at the start of the combat phase, you can say that the bearer will play their melody. If you do so, until the end of that phase, subtract 1 from the Attacks characteristic of melee weapons used by enemy units within 6" of the bearer (to a minimum of 1).`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
