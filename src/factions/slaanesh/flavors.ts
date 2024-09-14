import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  "Depraved Carnival": {
    effects: [
      {
        name: `The Ecstatic Throngs - Passive`,
        desc: `Effect: Add 1 to hit rolls for friendly Sybarite Infantry units while they are damaged or if they had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  'Seeker Cavalcade': {
    effects: [
      {
        name: `NImble and Quick - Passive`,
        desc: `Effect: Friendly Hedonites of Slaanesh Cavalry units can use a Retreat ability and still use Charge abilities later in the turn. In addition, no mortal damage is inflicted on Hedonites of Slaanesh Cavalry units by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  "Epicurean Revellers": {
    effects: [
      {
        name: `Exquistite Palate - Passive`,
        desc: `Effect: Each time a friendly non-Hero Hedonites of Slaanesh Daemon uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Supreme Sybarites': {
    effects: [
      {
        name: `Godly Ambitions - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly non-Hero Hedonites of Slaanesh units while they are within the combat ranges of any friendly Hedonites of Slaanesh Heroes.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
