import { TItemDescriptions } from 'factions/factionTypes'
import { BATTLESHOCK_PHASE, COMBAT_PHASE, DURING_GAME, END_OF_TURN, START_OF_SETUP, WOUND_ALLOCATION_PHASE } from 'types/phases'

const Flavors = {
  /*Vostarg: {
    effects: [
      {
        name: `Fearsome Surge`,
        desc: `Add 1 to hit rolls and wound rolls for attacks made with melee weapons by friendly VOSTARG VULKITE BERZERKERS units that made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Greyfyrd: {
    effects: [
      {
        name: `Spoils of Victory`,
        desc: `Add 1 to the Wounds characteristic of friendly GREYFYRD HEROES that do not have a mount.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Spoils of Victory`,
        desc: `You can pick 2 additional artefacts of power (pg 59) and give them to 2 GREYFYRD HEROES in your army that do not have a mount.`,
        when: [START_OF_SETUP],
      },
    ],
  },
  Hermdar: {
    effects: [
      {
        name: `Seize by Force`,
        desc: `If a friendly HERMDAR unit wholly within enemy territory or wholly within 12" of an objective fails a battleshock test, halve the number of models that flee (rounding up).`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  Lofnir: {
    effects: [
      {
        name: `Venerators of Vulcatrix`,
        desc: `Add 2 to the Wounds characteristic of friendly LOFNIR MAGMADROTH units.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Venerators of Vulcatrix`,
        desc: `Up to 3 LOFNIR MAGMADROTH units in your army can be given a different mount trait (pg 60) instead of only 1.`,
        when: [START_OF_SETUP],
      },
    ],
  }, */
  'Warrior Kinbad': {
    effects: [
      {
        name: `Berserk Kindred - Passive`,
        desc: `Effect: Add 1 to wound rolls for combat attacks made by friendly Fyreslayers Infantry units that charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Forge Brethren': {
    effects: [
      {
        name: `Bulwark of Molten Stone - Passive`,
        desc: `Effect: Add 1 to save rolls for friendly Fyreslayers Infantry units while they are wholly within friendly territory.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Scales of Vulcatrix': {
    effects: [
      {
        name: `Ancient Bloodlines - Passive`,
        desc: `Effect: Add 2 to the Health characteristic of friendly Magmadroth units.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Lords of the Lodge': {
    effects: [
      {
        name: `Martial Pride and Stubborn Will - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Fyreslayers Heroes. In addition, the control scores of Fyreslayers Heroes cannot be modied by enemy abilities.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
