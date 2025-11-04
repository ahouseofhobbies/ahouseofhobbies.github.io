import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { HELSMITHS_OF_HASHUT } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_TURN,
} from 'types/phases'

const BattleTraits = {
  // Helsmiths of Hashut Allegiance
  [HELSMITHS_OF_HASHUT]: {
    effects: [
      {
        name: `Harness Daemonic Power - Once per Turn`,
        desc: `Effect: Effect: You must use this ability at the start of each of your turns. Remove all daemonic power points from each friendly unit. Then, gain 1 daemonic power point for each friendly desolation token on the battlefield.
        Then, allocate your daemonic power points to friendly non-Hobgrot Helsmiths of Hashut units. Each unit can have a maximum of 3 daemonic power points. Then, all unallocated daemonic power points are lost.`,
        when: [START_OF_TURN],
      },
      {
        name: `Command Ability: Reserves of Daemonic Power - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hobgrot Helsmiths of Hashut unit that has no daemonic power points to be the target.
        Effect: If the total number of daemonic power points that friendly units have is 3 or fewer, give 2 daemonic power points to the target.
        If the total number of daemonic power points that friendly units have is more than 3, give 1 daemonic power point to the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Leave the Land in Ruin - Once Per Turn`,
        desc: `Declare: Pick a terrain feature or objective that does not have a friendly desolation token and is contested by a friendly Helsmiths of Hashut unit that is not in combat to be the target.
        Effect: Give the target a desolation token.`,
        when: [START_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
