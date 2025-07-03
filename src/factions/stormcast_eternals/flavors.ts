import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_TURN,
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
        desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly Warrior Chamber units while they are wholly within 12" of any friendly non-Hero non-Beast Stormcast Eternals units that do not have the Warrior Chamber keyword.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vanguard Wing': {
    effects: [
      {
        name: `Peerless Manoeuvres - Once Per Turn`,
        desc: `Declare: Pick a friendly Vanguard Chamber unit that did not use a Move ability this turn and is not in combat. 
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
  'Draconith Skywing (AoR)': {
    effects: [
      {
        name: `Shields of the Warden - Passive`,
        desc: `Effect: While any friendly Stormdrake Guard units are within a friendly Ionus Cryptborns combat range: 
        That friendly Ionus Cryptborn has Ward (4+). 
        Each time you make a successful ward roll for that friendly Ionus Cryptborn, allocate 1 damage point to a friendly Stormdrake Guard unit within its combat range after the damage sequence for that friendly Ionus Cryptborn has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Thunderous Roar - Once Per Turn`,
        desc: `Declare: Pick a friendly Draconith Skywing Monster that has not used any Rampage abilities this turn to use this ability. Then, pick up to 3 enemy units in combat with it to be the targets. 
        Effect: Roll a dice for each target. On a 3+, subtract 5 from that targets control score for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Exemplars of Fury - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of Companion weapons used by friendly Draconith Skywing Heroes while they are within 6" of 2 or more friendly Stormdrake Guard units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Aetheric Cyclone - Once Per Turn`,
        desc: `Declare: Pick a friendly Draconith Skywing Monster that has not used any Rampage abilities this turn to use this ability. Then, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Heroes of the First-Forged (AoR)': {
    effects: [
      {
        name: `Punch Through - Once Per Turn`,
        desc: `Declare: Pick a friendly Infantry unit in combat that has not charged this turn to use this ability.
        Effect: That unit can immediately use the Charge ability and can move through enemy models when it does so.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Scions of the Storm`,
        desc: `Declare: Pick a friendly Stormcast Eternals unit that is in the Celestial Realm.
        Effect: Set up that unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Summon the Storm - Once Per Turn`,
        desc: `Declare: If a friendly Bastian Carthalos is on the battlefield and was not set up this turn, you can pick a friendly Stormcast Eternals unit that is in the Celestial Realm.
        Effect: Set up that unit wholly within 6" of a friendly Bastian Carthalos and more than 3" from all enemy units. If the target is a unit of Annihilators or Annihilators with Meteoric Grandhammers, for the rest of the turn, the target counts as having used the Scion's of the Storm ability for the purposes of the Blazing Impact ability.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Celestial Realm`,
        desc: `Declare: If there are more friendly Stormcast Eternals units on the battlefield than there are set up in reserve, pick a friendly Stormcast Eternals unit that has not been deployed.
        Effect: Set up that unit in reserve in the Celestial Realm. It has now been deployed.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Ruination Brotherhood (AoR)': {
    effects: [
      {
        name: `Ancient Aura - Once Per Turn`,
        desc: `Declare: Pick a friendly Ruination Chamber unit. 
        Effect: That unit has Ward (5+) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Entropic Screech - Once Per Turn`,
        desc: `Declare: Pick a friendly Ruination Chamber Monster that has not used any Rampage abilities this turn to use this ability. Then, pick up to 3 enemy units in combat with it to be the targets.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. The unit using that ability cannot use any more Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Hallowed Presence - Passive`,
        desc: `Effect: While friendly Warrior Chamber units are wholly within 12" of any friendly Ruination Chamber units, those friendly Warrior Chamber units have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Temper the Flaw - Once Per Turn`,
        desc: `Declare: You must use this ability at the end of each turn. Each friendly non-Hero Ruination Chamber unit that used a Fight ability this turn is a target.
        Effect: For each target, pick 1 of the following effects:
        Guided: If the target is wholly within 12" of any friendly Ruination Chamber Heroes, return 1 slain model to it.
        Tormented: If the target is not wholly within 12" of any friendly Ruinations Chamber Heroes, it becomes tormented until the end of the next turn. While a unit is tormented, add 1 to the Attacks characteristic of its melee weapons but it cannot contest objectives or use commands.`,
        when: [END_OF_TURN],
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
