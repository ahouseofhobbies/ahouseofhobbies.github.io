import { tagAs } from 'factions/metatagger'
import { SYLVANETH } from 'meta/factions'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  WARDS_PHASE,
} from 'types/phases'
import rule_sources from './rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const BattleTraits = {
  [SYLVANETH]: {
    effects: [
      {
        name: `Endless Growth - Once Per Turn`,
        desc: `Declare: Pick any number of friendly Sylvaneth units wholly within 6" of a friendly Awakened Wyldwood to be the targets. 
        Effect: Heal (D3) each target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Walk the Hidden Paths - Once Per Turn`,
        desc: `Declare: Pick a friendly Sylvaneth unit that is not in combat and is wholly within 6" of a friendly Awakened Wyldwood to use this ability. 
        Effect: Remove that unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units and wholly within 6" of a different friendly Awakened Wyldwood.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Strike and Fade - Once Per Turn`,
        desc: `Declare: Pick a friendly Sylvaneth unit that is in combat and is wholly within 6" of a friendly Awakened Wyldwood to use this ability. 
        Effect: Remove that unit from the battlefield and set it up again on the battlefield more than 9" from all enemy units and wholly within 6" of a different friendly Awakened Wyldwood.`,
        when: [END_OF_TURN],
        rule_sources: [
          rule_sources.BATTLETOME_SYLVANETH,
          rule_sources.ERRATA_OCTOBER_2022,
          rule_sources.ERRATA_JANUARY_2023,
        ],
      },
      {
        name: `Awakened Wyldwood (Faction Terrain) - Deploy Wyldwood`,
        desc: `Effect: Set up this terrain feature wholly within friendly territory, more than 3" from all objectives and other terrain features. This terrain feature has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Awakened Wyldwood (Faction Terrain) - Growing Woods - Passive`,
        desc: `Effect: Each time you set up an Awakened Wyldwood, you can place 1-3 scenery pieces (Terrain, 1.7). If you place more than 1 scenery piece, the tips at the end of each base must touch, forming a circle. For each additional scenery piece in this terrain feature that is placed after the first:
        Add 2 to the Health characteristic of this terrain feature.
        Increase the range of friendly abilities that require friendly models to be wholly within 6" of this feature by 3".`,
        when: [DURING_GAME],
      },
      {
        name: `Awakened Wyldwood (Faction Terrain) - Overgrown Wilderness - Passive`,
        desc: `Effect: Enemy units can be targeted by shooting attacks made by friendly Sylvaneth units even if they are behind or wholly on this terrain feature (this is an exception to Terrain, 1.2).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Awakened Wyldwood (Faction Terrain) - Vengeful Forest Spirits - Once Per Turn`,
        desc: `Declare: Pick each enemy unit within this terrain features combat range to be the targets. 
        Effect: Roll a dice for each target. On a 4+, inflict D3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  // Seasons of War
 /* 'The Burgeoning': {
    effects: [
      {
        name: `The Burgeoning`,
        desc: `Friendly SYLVANETH units that did not charge in the same turn and are wholly within 9" of an overgrown terrain feature or friendly Awakened Wyldwood have a ward of 6+.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  'The Reaping': {
    effects: [
      {
        name: `The Reaping`,
        desc: `Add 3 to the range within which you can pick friendly SYLVANETH units with the Places of Power and From the Woodland Depths battle traits.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Dwindling': {
    effects: [
      {
        name: `The Dwindling`,
        desc: `In the hero phase, you can reroll 1 casting roll, 1 unbinding roll and 1 dispelling roll, so long as the friendly WIZARD you pick is a SYLVANETH WIZARD that is wholly within 9" of an overgrown terrain feature or friendly Awakened Wyldwood.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Everdusk: {
    effects: [
      {
        name: `Everdusk`,
        desc: `Subtract 3" from the range within which you can pick friendly SYLVANETH units with the Places of Power and From the Woodland Depths battle traits. However, if the unmodified hit roll for an attack made with a melee weapon by a friendly SYLVANETH unit wholly within 6" of an overgrown terrain feature or friendly Awakened Wyldwood is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
    ],
  },

  'The Evergreen Hunt': {
    effects: [
      {
        name: `To Honour Kurnouth`,
        desc: `Friendly EVERGREEN HUNT units that do not have the HERO keyword have the Battleline battlefield role.`,
        when: [DURING_GAME],
      },
      {
        name: `Rhythm of the Chase`,
        desc: `After deployment, before the players have determined who will take the first turn, you can pick 1 enemy unit on the battlefield to be the quarry. If the quarry is destroyed, at the start of your next hero phase, you can pick 1 enemy unit on the battlefield to be the new quarry.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Harmonies of the Hunt`,
        desc: `At the start of each battle round, after the priority roll has been made, each player commanding an Evergreen Hunt army must determine their Hunting Harmony for that battle round, starting with the player taking the first turn. A Hunting Harmony is made up of a number of chords. You start with 0 chords and receive 1 chord for the following:

        - If a friendly BELTHANOS is on the battlefield.
        - For each friendly EVERGREEN HUNT unit wholly ewithin the same large quarter of the battlefield as the quarry.
        - For each quarry destroyed during the battle.
        
        Add up the number of chords you received and consult the Hunting Harmony Table to see which effects will apply to your army for that battle round. These effects are cumulative: if you have 6 chords, all of the effects in the table will apply. Hunting Harmony chords are lost at the end of each battle round.
        
        0: Discordant: No effect.
        1: Simple: Add 1 to run rolls and charge rolls for friendly units wholly within the same large quarter of the battlefield as the quarry.
        2: Tuneful: Add 1 to hit rolls and wound rolls for attacks made with melee weapons that target an enemy unit wholly within the same large quarter of the battlefield as the quarry.
        3-5: Melodic: Add 1 to the Attacks characteristic of melee weapons used by friendly units while they are within 3" of the quarry.
        6+: Mellifluous: While a friendly unit is wholly within the same large quarter of the battlefield as the quarry, it is eligible to fight in the combat phase if it is within 6" of the quarry instead of 3", and it can move an extra 3" when it piles in. `,
        when: [START_OF_ROUND],
      },
      {
        name: `Adundant Growth`,
        desc: `After territories are determined, before faction terrain features are set up, you can pick up to 3 terrain features on the battlefield that are wholly outside enemy territory. These terrain features are considered by you to be overgrown terrain features.

        At the start of your hero phase, you can heal 1 wound allocated to each friendly EVERGREEN HUNT unit that is wholly within 9" of an overgrown terrain feature.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Adundant Growth`,
        desc: `At the start of your hero phase, you can heal 1 wound allocated to each friendly EVERGREEN HUNT unit that is wholly within 9" of an overgrown terrain feature.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Heroic Action: A Prize Quarry is Sighted`,
        desc: `Pick 1 friendly EVERGREEN HUNT HERO and 1 enemy unit within 9" of that HERO. That enemy unit becomes the quarry instead of the enemy unit that was picked to be the quarry.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
