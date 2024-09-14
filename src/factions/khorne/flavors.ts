import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Flavors = {
  'Khornate Legion': {
    effects: [
      {
        name: `Butcher's of Nations - Once Per Turn - Reaction: You declared a Fight ability for a friendly Blades of Khorne Daemon unit`,
        desc: `Used By: The unit using that Fight ability. 
        Effect: Pick a friendly Bloodbound unit that has not used a Fight ability this turn and is within 12" of the unit using this ability to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

 /* Bloodlords: {
    effects: [
      {
        name: `The First to Draw Blood`,
        desc: `When you use the Decapitating Blow ability for a BLOODLORDS BLOODLETTER unit, mortal wounds are caused on an unmodified roll of 5+ instead of 6 if that unit made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  Goretide: {
    effects: [
      {
        name: `Tireless Conquerors`,
        desc: `Add 1 to wound rolls for attacks made with melee weapons by friendly GORETIDE BLOODBOUND units that target an enemy unit that is contesting an objective you do not control, or that target an enemy unit wholly within enemy territory.`,
        when: [HERO_PHASE],
      },
    ],
  }, */

  'Murder Host': {
    effects: [
      {
        name: `Strength through Slaughter - Passive`,
        desc: `Effect: If a friendly non-Monster Blades of Khorne Daemon uses a Fight ability, it has Ward (5+) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Brass Stampede': {
    effects: [
      {
        name: `Obliterating Charge - Passive`,
        desc: `Effect: If the unmodified charge roll for a friendly Blades of Khorne Cavalry unit is 8+, it has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Bloodbound Warhorde': {
    effects: [
      {
        name: `Tireless Conquerors - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly Bloodbound units that target an enemy unit that is contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
