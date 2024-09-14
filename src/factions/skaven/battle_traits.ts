import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { SKAVEN } from 'meta/factions'
import { COMBAT_PHASE, DURING_GAME, DURING_SETUP, END_OF_TURN, HERO_PHASE, MOVEMENT_PHASE, START_OF_ROUND } from 'types/phases'

const BattleTraits = {
  [SKAVEN]: {
    effects: [
      {
        name: `The Lurking Vermintide`,
        desc: `Declare: Pick a friendly Skaven unit that has not been deployed. 
        Effect: Set up that unit in reserve in the tunnels below. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Splinters of the Vermindoom - Once Per Battle Round`,
        desc: `Declare: You can use this ability if there are fewer than 3 friendly Gnawholes on the battlefield. 
        Effect: Set up a Gnawhole on the battlefield more than 9" from all enemy units, more than 1" from all friendly units and more than 3" from all objectives and other terrain features.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Too Quick to Hit-Hit - Passive`,
        desc: `Effect: No mortal damage is inflicted on friendly Skaven Infantry and Cavalry units by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gnawhole Ambush`,
        desc: `Declare: Pick a friendly Skaven unit that is in the tunnels below to use this ability. 
        Effect: Set up that unit wholly within 6" of a friendly Gnawhole and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Always Three Clawsteps Ahead - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick a friendly non-Monster Skaven unit that is not in combat and was not set up this turn to use this ability. 
        Effect: That unit can use the Normal Move ability as if it were your movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Gnawhole (Faction Terrain) - Volatile Ground - Passive`,
        desc: `Effect: Models can pass through this terrain feature but cannot be set up on or end moves on any part of this terrain feature. Each time an enemy unit ends a move that passed through or across this terrain feature, roll a D3. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [DURING_GAME],
      },
      {
        name: `Command Ability - Gnawhole (Faction Terrain) - The Endless Vermintide`,
        desc: `Declare: Pick a friendly non-Hero Skaven Infantry unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 6" of a friendly Gnawhole and more than 3" from all enemy units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Gnawhole (Faction Terrain) - Tunnels Through Reality`,
        desc: `Declare: Pick a friendly Skaven unit that is not in combat and is wholly within 6" of this terrain feature to be the target. 
        Effect: Remove the target from the battlefield and set it up again wholly within 6" of another friendly Gnawhole and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
