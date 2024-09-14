import { TItemDescriptions } from 'factions/factionTypes'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_SETUP, HERO_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE, WOUND_ALLOCATION_PHASE } from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'

const Flavors = {
  'Mortis Council': {
    effects: [
      {
        name: `Necrotic Symphony - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Ossiarch Bonereapers Infantry Wizards.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mortek Ballistari': {
    effects: [
      {
        name: `Crawling Barrage`,
        desc: `Declare: Pick up to 3 friendly Mortek Crawler units that are wholly within friendly territory and that have not used a Move ability this turn to be the targets. 
        Effect: Add 1 to hit rolls for each targets shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Kavalos Lance': {
    effects: [
      {
        name: `Swift as Death - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Ossiarch Bonereapers Cavalry units to be the targets. 
        Effect: Each target can move 6" but cannot end that move in combat.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Mortek Phalanx': {
    effects: [
      {
        name: `Send in the Reserve - Once Per Turn`,
        desc: `Declare: Pick a friendly Mortek Guard unit that has been destroyed to be the target. 
        Effect: Roll a dice. On a 5+, set up a replacement unit with half the number of models from the target unit (rounding up) on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
 /* 'Null Myriad': {
    effects: [
      {
        name: `Eldritch Nulls`,
        desc: `You can roll a dice each time a friendly Null Myriad unit is affected by a spell cast by an enemy unit or the abilities of an endless spell summoned by an enemy unit. On a 4+, ignore the effect of that spell or the effects of that endless spell's abilities on that unit.`,
        when: [HERO_PHASE],
        rule_sources: [
          rule_sources.BATTLETOME_OSSIARCH_BONEREAPERS,
          meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
        ],
      },
    ],
  },
  Crematorians: {
    effects: [
      {
        name: `Immolation`,
        desc: `Each time a friendly CREMATORIANS model is slain, before removing that model from play, you can pick 1 enemy unit within 3" of it and roll a number of dice equal to the Wounds characteristic of that model. For each 5+, that enemy unit suffers 1 mortal wound.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
