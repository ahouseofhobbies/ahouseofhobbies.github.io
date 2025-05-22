import { keyPicker } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
} from 'types/phases'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  /* Ionrach: {
    effects: [
      {
        name: `Legacy of Glory`,
        desc: `You can carry out this heroic action with a friendly IONRACH AKHELIAN HERO instead of any other heroic action you can carry out with that HERO. If you do so, pick 1 friendly IONRACH AKHELIAN unit wholly within 12" of that HERO. Until the end of that turn, you can choose for that unit to be affected by either the Flood Tide or Ebb Tide ability from the Tides of Death table in addition to any other abilities from the Tides of Death table they are affected by.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */

  'Namarti Corps': {
    effects: [
      {
        name: `Surge Forward - Passive`,
        desc: `Effect: You can reroll run rolls and charge rolls for friendly Namarti units while they are wholly within 12" of a friendly Akhelian unit.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
    ],
  },
  'Akhelian Beastmasters': {
    effects: [
      {
        name: `Ferocious Predators - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made with Companion weapons by friendly Akhelian units.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Isharann Council': {
    effects: [
      {
        name: `Wisdome of the Deep - Passive`,
        desc: `Effect: Add 1 to casting rolls, Isharann ritual rolls and lurelight rolls for friendly Isharann units while they are within the combat ranges of any other friendly Isharann units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Deep-Sea Stalkers': {
    effects: [
      {
        name: `Outflank the Enemy - Passive`,
        desc: `Effect: While a friendly Idoneth Deepkin unit is wholly within 9" of a battlefield edge: 
        Subtract 1 from hit rolls for attacks that target that unit if it has not charged this turn. 
        Add 2" to the Move characteristic of that unit.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Ethersea Predators': {
    effects: [
      {
        name: `Command Ability: Blood in the Water`,
        desc: `Declare: If any friendly or enemy units were destroyed this turn, pick a friendly Akhelian Allopex unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit identical to the target wholly within 9" of a battlefield edge and more than 9" from all enemy units.`,
        when: [END_OF_TURN],
      },
    ],
  },
  /* Fuethan: {
    effects: [
      {
        name: `Bloodthirsty Shiver`,
        desc: `You can include Bloodthirsty Shivers in your army (pg 96). If the unmodified hit roll for an attack made by a unit in a Bloodthirsty Shiver is a 6, that attack automatically wounds (do not make a wound roll).`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
        rule_sources: [
          meta_rule_sources.BATTLESCROLL_ANDTOR_SEPTEMBER_2023,
          meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
        ],
      },
    ],
  }, */

  'Soul-Raid Ambushers': {
    effects: [
      {
        name: `Fade Like Mist - Once Per Turn`,
        desc: `Declare: Pick a friendly Idoneth Deepkin Infantry or Cavalry unit wholly within 3" of a terrain feature. 
        Effect: Remove that unit from the battlefield and set it up in reserve travelling the ethersea (see the Raiders from the Deep ability).`,
        when: [END_OF_TURN],
      },
    ],
  },

  /* Nautilar: {
    mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Crushing Assault'])],
    },
    effects: [],
  },

  Briomdar: {
    effects: [
      {
        name: `Supreme Soulscryers`,
        desc: `During deployment, if you set up a friendly BRIOMDAR SOULSCRYER using the Finder Of Ways ability, up to 3 friendly BRIOMDAR IDONETH DEEPKIN units can join that SOULSCRYER instead of up to 2. In addition, when you set up any units that can join that SOULSCRYER, you can set up those units wholly within 12" of that SOULSCRYER and more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
