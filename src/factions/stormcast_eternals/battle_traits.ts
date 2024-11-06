import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { STORMCAST_ETERNALS } from 'meta/factions'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
  START_OF_ROUND,
  COMBAT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
} from 'types/phases'

/* const BlazeOfGloryEffect = {
  name: `Blaze of Glory`,
  desc: `If a friendly STORMCAST ETERNALS model is slain within 1" of an enemy unit, before removing that model from play, pick 1 enemy unit within 1" of that model and roll a number of dice equal to the Wounds characteristic of that slain model. Add 1 to the number of dice you roll if the slain model has the THUNDERSTRIKE keyword. For each 6+, the target suffers 1 mortal wound at the end of that phase.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true,
} */

/*const BattleTraits = {
  'Scions of the Storm': {
    effects: [
      {
        name: `Scions of the Storm`,
        desc: `During deployment, instead of setting up a SCIONS OF THE STORM STORMCAST ETERNALS unit on the battlefield, you can place it to one side and say that it is set up in the Celestial Realm as a reserve unit. You can set up 1 unit in the Celestial Realm for each SCIONS OF THE STORM STORMCAST ETERNALS unit you have set up on the battlefield. At the end of your movement phase, you can set up 1 or more of the reserve units in the Celestial Realm on the battlefield, more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `Scions of the Storm`,
        desc: `At the end of your movement phase, you can set up 1 or more of the reserve units in the Celestial Realm on the battlefield, more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    
    ],
  },
  Stormkeep: {
    effects: [
      {
        name: `Shield of Civilisation`,
        desc: `In the first and second battle rounds, if any friendly STORMKEEP REDEEMER units contest an objective that is partially or wholly within your territory, each model in that unit counts as 3 models for the purposes of contesting that objective. Starting from the third battle round, if any friendly STORMKEEP REDEEMER units contest an objective that is anywhere on the battlefield, each model in that unit counts as 3 models for the purposes of contesting that objective. In addition, if an enemy unit finishes a charge move within 1" of a friendly STORMKEEP REDEEMER unit that is within 6" of an objective you control, roll a dice. On a 3+, that unit suffers D3 mortal wounds.`,
        when: [DURING_GAME],
      },
      {
        name: `Shield of Civilisation`,
        desc: `If an enemy unit finishes a charge move within 1" of a friendly STORMKEEP REDEEMER unit that is within 6" of an objective you control, roll a dice. On a 3+, that unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Mortal Auxiliaries`,
        desc: `Add 1 to the Bravery characteristic of friendly STORMKEEP units wholly within 12" of any friendly STORMKEEP REDEEMER units.`,
        when: [BATTLESHOCK_PHASE],
      },

    ],
  },

  'Draconith Skywing': {
    effects: [
      {
        name: `Draconith Echelon`,
        desc: `Friendly KRONDYS, KARAZAI, and STORMDRAKE GUARD units that have 2 models have the Battleline battlefield role.`,
        when: [DURING_GAME],
      },
      {
        name: `Draconith Guardians`,
        desc: `If a friendly IONUS CRYPTBORN is within 3" of any friendly STORMDRAKE GUARD units, before you allocate a wound or mortal wound to that HERO, or instead of making a ward roll for a wound or mortal wound that would be allocated to that HERO, roll a dice. On a 4+, that wound or mortal wound is allocated to 1 of those friendly units instead of IONUS CRYPTBORN and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Exemplars of Fury`,
        desc: `At the start of the combat phase, if there are 2 or more other friendly DRACONITH SKYWING units within 6" of a friendly HERO, add 1 to the Attacks characteristic of melee weapons used by that HERO'S mount until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Stormdrake Champions`,
        desc: `For each DRACONITH SKY WING HERO you include in your army, you can include 1 STORMDRAKE GUARD unit that has 1 model. That STORMDRAKE GUARD unit cannot have the Battleline battlefield role.`,
        when: [DURING_GAME],
      },
      {
        name: `Heroic Action: Thunderous Roars`,
        desc: `Pick 1 friendly DRACONITH SKYWING HERO and roll a dice. On a 2+, until the end of that turn, enemy units within 3" of that HERO cannot receive the Inspiring Presence command.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */

  const BattleTraits = {
    [STORMCAST_ETERNALS]: {
      effects: [
        {
          name: `The Celestial Realm`,
          desc: `Declare: If there are more friendly Stormcast Eternals units on the battlefield than there are set up in reserve, pick a friendly Stormcast Eternals unit that has not been deployed. 
          Effect: Set up that unit in reserve in the Celestial Realm. It has now been deployed.`,
          when: [DURING_SETUP],
        },
        {
          name: `Scions of the Storm`,
          desc: `Declare: Pick a friendly Stormcast Eternals unit that is in the Celestial Realm. 
          Effect: Set up that unit anywhere on the battlefield more than 9" from all enemy units.`,
          when: [MOVEMENT_PHASE],
        },
        {
          name: `Command Ability - Heavens-Sent - Once Per Battle`,
          desc: `Declare: Pick a friendly non-Unique Stormcast Eternals Infantry or Cavalry unit that started the battle with 2 or more models and that has been destroyed to be the target. 
          Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) more than 9" from all enemy units.`,
          when: [MOVEMENT_PHASE],
        },
        {
          name: `Their Finest Hour - Once Per Turn`,
          desc: `Declare: Pick a friendly Stormcast Eternals unit that has not used this ability this battle to use this ability. 
          Effect: For the rest of the turn, add 1 to wound rolls for that units combat attacks and add 1 to save rolls for that unit.`,
          when: [HERO_PHASE],
        },
        {
          name: `Stormreach Portal (Faction Terrain) - Step into the Storm`,
          desc: `Declare: Pick a friendly non-Monster Stormcast Eternals unit that is not in combat and is wholly within 6" of this terrain feature to be the target.  
          Effect: Remove the target from the battlefield and set it up again on the batlefield more than 9" from all enemy units.`,
          when: [HERO_PHASE],
        },
      ],
    },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
