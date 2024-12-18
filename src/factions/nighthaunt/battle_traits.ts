import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { NIGHTHAUNT } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_BATTLESHOCK_PHASE,
  START_OF_ROUND,
  WARDS_PHASE,
} from 'types/phases'

const BattleTraits = {
  [NIGHTHAUNT]: {
    effects: [
      {
        name: `Ethereal - Passive`,
        desc: `Effect: Ignore all modiers to save rolls (positive and negative) for friendly Nighthaunt units, excluding Nagash.`,
        when: [DURING_GAME],
      },
      {
        name: `Command Ability: Discorporate`,
        desc: `Declare: Pick a friendly Nighthaunt unit to use this ability. 
        Effect: That unit has Ward (5+) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Shriek - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt unit that has not used an Aura of Dread ability this turn and that charged this turn to use this ability, then pick an enemy unit within 1" of it to be the target. The number of models in the friendly Nighthaunt unit must be greater than the number of models in the target unit. 
        Effect: Subtract 1 from hit rolls for the targets attacks for the rest of the turn`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Stun - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt War Machine or Cavalry unit that has not used an Aura of Dread ability this turn and that charged this turn to use this ability, then pick an enemy unit within 1" of it to be the target. 
        Effect: Subtract 1 from save rolls for the target for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Petrify - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt Hero that has not used an Aura of Dread ability this turn and that charged this turn to use this ability, then pick an enemy unit within 1" of it to be the target. 
        Effect: The target has Strike-last for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Wave of Terror - Once Per Turn`,
        desc: `Effect: Friendly Nighthaunt units that are in combat can use Charge abilities this phase. However, if a unit that is in combat uses a Charge ability and the charge roll is 3 or less, that unit does not count as having charged that turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  // The Emerald Host
/*  'The Emerald Host': {
    effects: [
      {
        name: `The Emerald Curse`,
        desc: `After armies have been set up but before the first battle round begins, you can pick up to D3+1 different enemy units on the battlefield. At the end of each battle round, roll a dice for each unit you picked that is on the battlefield. On a 2+, that unit suffers D3 mortal wounds. If that unit is a MONSTER, it suffers D3+1 mortal wounds instead of D3.`,
        when: [END_OF_SETUP],
      },
      {
        name: `The Emerald Curse`,
        desc: `At the end of each battle round, roll a dice for each unit you picked that is on the battlefield. On a 2+, that unit suffers D3 mortal wounds. If that unit is a MONSTER, it suffers D3+1 mortal wounds instead of D3.`,
        when: [START_OF_ROUND],
      },
    ],
  },
   The Scarlet Doom
  'The Scarlet Doom': {
    effects: [
      {
        name: `Vortex of Frenzied Violence`,
        desc: `After a friendly SCARLET DOOM BLADEGHEIST REVENANTS unit makes a charge move, you can pick 1 enemy unit within 1" of that unit. If you do so, roll a number of dice equal to the number of models from the charging unit. For each 5+, the target suffers 1 mortal wound.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  The Quicksilver Dead
  'The Quicksilver Dead': {
    effects: [
      {
        name: `Artisans of Harrowing Death`,
        desc: `Ward rolls cannot be made for wounds caused by attacks made with melee weapons by friendly QUICKSILVER DEAD DREADSCYTHE HARRIDANS units.`,
        when: [WARDS_PHASE],
      },
    ],
  },
   The Grieving Legion
  'The Grieving Legion': {
    effects: [
      {
        name: `Dragged into Grave`,
        desc: `Enemy units cannot retreat while they are within 3" of any friendly GRIEVING LEGION units with 10 or more models.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(BattleTraits, 'battle_trait')
