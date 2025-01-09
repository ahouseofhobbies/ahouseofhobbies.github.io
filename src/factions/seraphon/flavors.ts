import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  'Eternal Starhost': {
    effects: [
      {
        name: `Celestial Translocation - Once Per Turn`,
        desc: `Declare: Pick a friendly Seraphon unit wholly within 12" of a friendly Seraphon Wizard to use this ability. 
        Effect: Roll a dice. On a 3+, remove that unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  'Shadowstrike Starhost': {
    effects: [
      {
        name: `NImble and Quick - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Skink Infantry or Skink Cavalry units that are not in combat to be the targets. 
        Effect: Each target can move D6". Each target cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },

  'Sunclaw Starhost': {
    effects: [
      {
        name: `Vengeance of Azyr - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Saurus or Kroxigor units that are in combat to be the targets. 
        Effect: For each target: 
        Make a pile-in move. 
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },

  'Thunderquake Starhost': {
    effects: [
      {
        name: `Scaley Monstrosties - Passive`,
        desc: `Effect: Add 2 to the Health characteristic of friendly Seraphon Monster units.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
