import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { IDONETH_DEEPKIN } from 'meta/factions'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, DURING_SETUP, MOVEMENT_PHASE, SHOOTING_PHASE, TURN_ONE_START_OF_TURN } from 'types/phases'

const BattleTraits = {
  [IDONETH_DEEPKIN]: {
    effects: [
      {
        name: `Ethersea Voyagers`,
        desc: `Declare: Pick a friendly regiment led by an Idoneth Deepkin Hero. No units in that regiment can have already been deployed. 
        Effect: Set up those units in reserve travelling the ethersea. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Tides of Death - Passive`,
        desc: `Effect: A different effect applies to friendly Idoneth Deepkin units each battle round, as shown below. For the fifth battle round onwards, repeat the sequence, starting with Low Tide.`,
        when: [DURING_GAME],
      },
      {
        name: `Tides of Death - Battle Round 1`,
        desc: `Low Tide: For the rest of the battle round, subtract 1 from hit rolls for shooting attacks that target this unit and subtract 1 from hit rolls for combat attacks that target this unit if it did not use any Charge abilities this turn.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Tides of Death - Battle Round 2`,
        desc: `Flood Tide: For the rest of the battle round, this unit can use a Run ability and still use Shoot and/or Charge abilities later in the turn.`,
        when: [SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Tides of Death - Battle Round 3`,
        desc: `High Tide: For the rest of the battle round, this unit has Strike-first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Tides of Death - Battle Round 4`,
        desc: `Ebb Tide: For the rest of the battle round, this unit can use a Retreat ability and still use Shoot and/or Charge abilities later in the turn. In addition, for the rest of the battle round, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Raiders from the Deep`,
        desc: `Declare: Pick a friendly Idoneth Deepkin unit that is travelling the ethersea to use this ability. 
        Effect: Set up that unit on the battlefield wholly within 9" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
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
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
