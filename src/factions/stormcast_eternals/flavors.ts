import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_CHARGE_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Flavors = {
  'Sentinels of the Bleak Citadels': {
    effects: [
      {
        name: `Ancient Aura - Once Per Turn`,
        desc: `Declare: Pick a friendly Ruination Chamber unit. 
        Effect: That unit has Ward (5+) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Thunderhead Host': {
    effects: [
      {
        name: `Synchronised Strikes - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly Warrior Chamber units while they are wholly within 12" of any friendly non-Hero Stormcast Eternals units that do not have the Warrior Chamber keyword.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vanguard Wing': {
    effects: [
      {
        name: `Peerless Manoeuvres - Once Per Turn`,
        desc: `Declare: Pick a friendly Vanguard Chamber unit that is not in combat. 
        Effect: Roll a dice. On a 3+, remove that unit from the battlefield and set it up again anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Lightning Echelon': {
    effects: [
      {
        name: `Oncoming Storm - Once Per Turn`,
        desc: `Declare: Pick a friendly Extremis Chamber unit that charged this turn. 
        Effect: Roll a dice. On a 3+, that unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
 /* 'Knights Excelsior': {
    effects: [
      {
        name: `Annihilation`,
        desc: `Once per turn, at the start of the combat phase, you can pick 1 friendly KNIGHTS EXCELSIOR PALADIN unit on the battlefield. Until the end of that phase, when you pick that unit to fight, pick 1 enemy unit within 1" of that unit. If the number of models in that enemy unit is greater than the number of models in that PALADIN unit, add 1 to hit and wound rolls for attacks made by that PALADIN unit that target that enemy unit until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Celestial Warbringers': {
    effects: [
      {
        name: `Fearless Foresight`,
        desc: `Once per phase, you can reroll 1 hit roll or 1 wound roll for an attack made bv a friendly CELESTIAL WARBRINGERS unit or 1 save roll for an attack that targets a friendly CELESTIAL WARBRINGERS unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Tempest Lords': {
    effects: [
      {
        name: `The Host on High`,
        desc: `When you attempt a charge with a friendly TEMPEST LORDS unit that can fly, you can reroll 1 of the dice for that charge roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Astral Templars': {
    effects: [
      {
        name: `Beast Stalkers`,
        desc: `Friendly ASTRAL TEMPLARS units cannot be picked when your opponent carries out a monstrous rampage.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
