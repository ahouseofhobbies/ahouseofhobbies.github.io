import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
 /* Mindblade: {
    effects: [
      {
        name: `Mindblade`,
        desc: `Pick 1 of the bearer's melee weapons. At the end of the combat phase, if any wounds or mortal wounds caused by attacks made with that weapon were allocated to an enemy HERO in that phase and that HERO was not slain, that HERO cannot carry out heroic actions for the rest of the battle.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'Bones of the Abyss': {
    effects: [
      {
        name: `Bones of the Abyss`,
        desc: `SOULMASON only. Each time the bearer successfully casts a spell that is not unbound, add 1 to the Attacks characteristic of the bearer' Ossified Claws until the end of that turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Marrowpact: {
    effects: [
      {
        name: `Marrowpact`,
        desc: `Each time the bearer fights, after all of their attacks have been resolved, you can heal up to a number of wounds allocated to the bearer equal to the number of wounds and mortal wounds caused by those attacks that were allocated to enemy units.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
  'Helm of Tyranny': {
    effects: [
      {
        name: `Helm of Tyranny - Passive`,
        desc: `Effect: Subtract 2 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  "Marrowpact": {
    effects: [
      {
        name: `Marrowpact - Once Per Battle`,
        desc: `Effect: For the rest of the turn, if the unmodified hit roll for a combat attack that targets this unit is 1-2, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lode of Saturation': {
    effects: [
      {
        name: `Lode of Saturation - Passive`,
        desc: `Effect: This unit has Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
 /* 'Gothizzar Cartouche': {
    effects: [
      {
        name: `Gothizzar Cartouche`,
        desc: `OSSIFECTOR only. Add 1 to wound rolls for attacks made with melee weapons by friendly OSSIARCH BONEREAPERS units wholly within 9" of the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Luminscythe: {
    effects: [
      {
        name: `Luminscythe`,
        desc: `SOULREAPER only. Subtract 1 from hit rolls and wound rolls for attacks that target the bearer while they are within 3" of any enemy units.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
