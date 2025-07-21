import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { IDONETH_DEEPKIN } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  TURN_ONE_START_OF_TURN,
} from 'types/phases'

const BattleTraits = {
  [IDONETH_DEEPKIN]: {
    effects: [
      {
        name: `Tides of the Sea (1): Concealing Tide - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you did not use it in the previous battle round and you have not used any other Tidal abilities this battle round.
        Effect: For the rest of the battle round, subtract 1 from hit rolls for attacks that target friendly Idoneth Deepkin units that did not use any Charge abilities in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tides of the Sea (2): Swift Tide - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you used the 'Concealing Tide' ability in the previous battle round and you have not used any other Tidal abilities this battle round.
        Effect: For the rest of the battle round, friendly Idoneth Deepkin units can use Run abilities and still use Shoot and/or Charge abilities later in the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tides of the Sea (3): Sea's Embrace - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you used the 'Swift Tide' ability in the previous battle round and you have not used any other Tidal abilities this battle round. 
        Effect: Friendly Idoneth Deepkin units have Strike-First for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tides of the Storm (1): Unpredictable Tide - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you did not use it in the previous battle round and you have not used any other Tidal abilities this battle round. Pick a friendly Idoneth Deepkin unit that is not in combat to be the target.
        Effect: Remove the target from the battlefield and set it up again wholly within 7" of a battlefield edge and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tides of the Storm (2): Inexorable Tide - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you used the 'Unpredictable Tide' ability in the previous battle round and you have not used any other Tidal abilities this battle round.
        Effect: Subtract 1 from the Rend characteristic of weapons used for attacks that target friendly Idoneth Deepkin units for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
      {
        name: `Tides of the Storm (3): Storm's Wrath - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if you used the 'Inexorable Tide' ability in the previous battle round and you have not used any other Tidal abilities this battle round.
        Effect: Friendly Idoneth Deepkin units' melee weapons have Crit (Mortal) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gloomtide Shipwreck (Faction Terrain) - Rise from the Depths`,
        desc: `Effect: Set up this faction terrain either as 1 terrain feature consisting of 2 scenery pieces (that must be set up within 3" of each other) or as 2 separate terrain features. Set up each terrain feature wholly within friendly territory and more than 3" from all objectives and other terrain features. After you have done so, it has been deployed. 
        If this faction terrain is set up as 1 terrain feature consisting of 2 scenery pieces, it has a Health characteristic of 14 instead of 7.`,
        when: [DURING_SETUP],
      },
      {
        name: `Gloomtide Shipwreck (Faction Terrain) - Guardians of the Deep - Passive`,
        desc: `Effect: Add 1 to save rolls for friendly Idoneth Deepkin Infantry and Cavalry units while they are wholly within 6" of this terrain feature.`,
        when: [DURING_GAME],
      },
      {
        name: `Gloomtide Shipwreck (Faction Terrain) - Phantasmal Ruin - Passive`,
        desc: `Effect: Models can pass through this terrain feature but cannot be set up on or end moves on any part of this terrain feature.
        Each time an enemy unit ends a move that passed through or across this terrain feature, roll a D3. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
