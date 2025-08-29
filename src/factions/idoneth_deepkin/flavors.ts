import { keyPicker } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
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
        name: `Wisdom of the Deep - Passive`,
        desc: `Effect: Add 1 to casting rolls, Isharann ritual rolls and lurelight rolls for friendly Isharann units while they are within the combat ranges of any other friendly Isharann units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Soul-Raid Ambushers': {
    effects: [
      {
        name: `Fade Like Mist - Passive`,
        desc: `Effect: When using the 'Unpredictable Tide' ability, you can pick up to 2 eligible targets instead of 1.`,
        when: [HERO_PHASE],
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
  'The First Phalanx of Ionrach (AoR)': {
    effects: [
      {
        name: `The Last Living Cythai - Passive`,
        desc: `Effect: The friendly Volturnos has Strike-First.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Teachings of the Asydrazor - Once Per Turn`,
        desc: `Effect: You gain D3 asydrazor points.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Shield of Ulchiss`,
        desc: `Declare: You must spend 1 asydrazor point each time a friendly First Phalanx unit uses this ability. Pick a friendly unit in combat to use this ability.
          Effect: For the rest of the turn:
          That unit can use a Retreat ability and still use Shoot and/or Charge abilities later in the turn.
          No mortal damage is inflicted on that unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Spear of Asphoren`,
        desc: `Declare: You must spend 1 asydrazor point each time a friendly First Phalanx unit uses this ability. Pick a friendly unit that is not in combat to use this ability.
          Effect: Add 1 to charge rolls for that unit for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The Sword of Gwynnar`,
        desc: `Declare: You must spend 1 asydrazor point each time a friendly First Phalanx unit uses this ability. Pick a friendly unit that is in combat to use this ability.
          Effect: That unit has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Voidchill Darkness (Bond-Beast Trait) - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deep Connection (Bond-Beast Trait) - Passive`,
        desc: `Effect: Ignore the effect of the Companion weapon ability on this unit's weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Swift-Finned Skirmisher (Bond-Beast Trait) - Reaction: You declared the Redeploy command for this unit`,
        desc: `Effect: If you roll a 1-3 when determining the distance that this unit can move, you can use a value of 4 instead.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Wardens of the Chorrileum (AoR)': {
    effects: [
      {
        name: `The Ocean Conceals - Once Per Battle`,
        desc: `Declare: This ability must be used to deploy the friendly Chorrileum Eidolon instead of the Deploy Unit ability or the Deploy Regiment ability.
          Effect: Set up the friendly Chorrileum Eidolon in reserve awaiting a summons. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Spirits of the Chorrileum - Passive`,
        desc: `Effect: Each turn, you can gain up to 1 chorrileum spirit point. You gain 1 chorrileum spirit point the first time 1 of the following occurs in a turn:
          You make an unmodified casting roll of 8 or more for a friendly Isharann Wizard.
          An enemy unit is destroyed while it is within 12" of any friendly Isharann units.
          A friendly unit is destroyed while it is wholly within 12" of any friendly Isharann units or while it is contesting an objective you control.`,
        when: [DURING_GAME],
      },
      {
        name: `Call Forth the Tsunami - Once Per Battle`,
        desc: `Declare: You can only use this ability if you have 3 or more chorrileum spirit points. Pick a friendly unit awaiting a summons to be the target.
          Effect: Set up the target anywhere on the battlefield. Then, inflict D3 mortal damage on each enemy unit in combat with it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wrath of Mathlann - Once Per Turn`,
        desc: `Declare: Pick a friendly Chorrileum Eidolon unit that has not used any Rampage abilities this turn to use this ability.
          Effect: That unit can use 2 Fight abilities this phase. After the first is used, however, that unit has Strike-Last for the rest of the turn. The unit using this ability cannot use any other Rampage abilities for the rest of the turn..`,
        when: [COMBAT_PHASE],
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
