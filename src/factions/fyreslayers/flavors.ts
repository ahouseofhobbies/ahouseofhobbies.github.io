import { TItemDescriptions } from 'factions/factionTypes'
import {
  BATTLESHOCK_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  MOVEMENT_PHASE,
  START_OF_SETUP,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

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
  'Lofnir Drothkeepers (AoR)': {
    effects: [
      {
        name: `Skilled Drothwranglers - Reaction: You declared a non-Charge Move ability for a friendly Magmadroth`,
        desc: `Used By: The Magmadroth using that Move ability. 
        Effect: Pick a friendly Vulkyn Flameseekers unit and/or a friendly Drothkeepers Infantry Hero that are not in combat and are wholly within 6" of the Magmadroth to be the targets. Units that have hitched a lift this turn (see below) cannot be targets. 
        Remove the targets from the battlefield. After the Magmadroth ends its move, you must set up each target on the battlefield, wholly within 6" of the Magmadroth and not in combat. The targets have hitched a lift. Units that hitched a lift cannot use Charge abilities in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Daring Tamers - Passive`,
        desc: `Effect: Enemy Monsters have Strike-last while they are in combat with 2 or more friendly Drothkeepers Vulkyn Flameseekers units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ferocious Heat - Once Per Turn`,
        desc: `Declare: Pick a friendly Drothkeepers Monster that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, ward rolls cannot be made for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Rearing Strike - Once Per Turn`,
        desc: `Declare: Pick a friendly Drothkeepers Monster that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: Roll 2 dice. Add 2 to each roll if the target is a Monster. For each 5+, inflict D3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Searing Claws - Once Per Turn`,
        desc: `Declare: Pick a friendly Drothkeepers Monster that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, for the rest of the turn, add 1 to the Rend characteristic of Companion melee weapons used for attacks that target that enemy unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
