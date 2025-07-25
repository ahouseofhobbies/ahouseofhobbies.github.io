import { keyPicker } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Lords of the Clan': {
    effects: [
      {
        name: `Healing Song - Passive`,
        desc: `Effect: When using the Endless Growth ability, friendly Sylvaneth Monsters can Heal (3) instead of Heal (D3).`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Forest Folk': {
    effects: [
      {
        name: `Lacerating Strike - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of melee weapons used by friendly Sylvaneth non-Kurnothi Infantry units that charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Outcasts: {
    effects: [
      {
        name: `The Terror in the Eaves - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are in combat with friendly Sylvaneth units.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Free Spirits': {
    effects: [
      {
        name: `Fleet and Swift - Once Per Turn`,
        desc: `Declare: Pick a friendly Sylvaneth Cavalry unit to use this ability. 
        Effect: This unit can use Charge abilities even if it used a Run ability this turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Wargrove of the Burgeoning': {
    effects: [
      {
        name: `Stirring Life - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Sylvaneth unit within 3" of a terrain feature to be the target. 
        Effect: If the target has a Health characteristic of 1, return up to 3 slain models to the target. If the target has a Health characteristic of 2 or more, roll a dice, then pick 1 of the following: 
        Heal (X) the target, where X is equal to the roll. 
        Return a number of slain models to the target with a combined Health characteristic that is equal to or less than the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Wargrove of Everdusk': {
    effects: [
      {
        name: `Duskwalk - Passive`,
        desc: `Effect: Friendly Sylvaneth Heroes can use the Walk the Hidden Paths ability even if it has been used by another friendly unit in the same phase.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Evergreen Hunt (AoR)': {
    effects: [
      {
        name: `Rhythm of the Chase - Once Per Battle Round`,
        desc: `Declare: If there is no quarry on the battlefield, pick an enemy unit on the battlefield to be the target. 
        Effect: The target is the quarry for the rest of the battle.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Opening Horn Blast - Once Per Battle Round`,
        desc: `Declare: You must use this ability at the start of the battle round. 
        Effect: Your chords are reset to 0. Then, you gain 1 chord: 
        If a friendly Belthanos is on the battlefield. 
        For each friendly Evergreen Hunt unit that is wholly within the same large quarter of the battlefield as the quarry. 
        For each quarry destroyed so far during the battle.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Song of the Hunt - Passive`,
        desc: `Effect: The following cumulative effects apply to friendly Evergreen Hunt units depending on the number of chords you have: 
        1 chord - Simple: Add 1 to run rolls and charge rolls for friendly units wholly within the same quarter of the battlefield as the quarry. 
        2 chords - Tuneful: Add 1 to hit rolls and wound rolls for friendly units combat attacks that target an enemy unit wholly within the same quarter of the battlefield as the quarry. 
        3-5 chords - Melodic: Add 1 to the Attacks characteristic of melee weapons used by friendly units while they are in combat with the quarry. 
        6+ chords - Mellifluous: While a friendly unit is in combat with the quarry, the quarry has Strike-last.`,
        when: [DURING_GAME],
      },
      {
        name: `Command Ability: A Prize Quarry is Sighted - Once Per Battle`,
        desc: `Declare: Pick an enemy unit within 9" of a friendly Evergreen Hunt unit to be the target. 
        Effect: The target becomes the quarry for the rest of the battle. If there was already a quarry on the battlefield when you declared this ability, that unit is no longer the quarry.`,
        when: [HERO_PHASE],
      },
      {
        name: `Abundant Growth - Once Per Turn`,
        desc: `Declare: Pick each friendly Evergreen Hunt unit that is wholly within 3" of a terrain feature to be the targets. 
        Effect: Heal (1) each target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Merciful Strike - Once Per Turn`,
        desc: `Declare: Pick a friendly Evergreen Hunt Monster that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice and add the number of damage points the target has. If the result exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  // Glades
  /* Oakenbrow: {
    effects: [
      {
        name: `Our Roots Run Deep`,
        desc: `When determining which row to use on the damage table of a friendly OAKENBROW TREELORD, TREELORD ANCIENT or SPIRIT OF DURTHU, it is treated as having suffered half the number of wounds that are actually allocated to it (rounding up).`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
    ],
  },
  Gnarlroot: {
    effects: [
      {
        name: `Keepers of the Arcane`,
        desc: `Once per turn, when you make a casting roll or unbinding roll for a friendly GNARLROOT WIZARD that is wholly within 9" of an overgrown terrain feature or friendly Awakened Wyldwood, you can roll 3D6 instead of 2D6. If you do so, remove 1 dice of your choice from the roll, and then use the remaining dice to determine that casting roll or unbinding roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Heartwood: {
    effects: [
      {
        name: `Masters of the Hunt`,
        desc: `After deployment but before the first battle round begins, you can pick up to 3 different enemy units on the battlefield to be the quarry of the hunt. If you do so, add 1 to hit rolls for attacks made by friendly HEARTWOOD units that target those units.`,
        when: [DURING_SETUP, COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  }, */
  /* Ironbark: {
    /*mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Stand Firm'])],
    }, 
    effects: [],
  },
  Winterleaf: {
    effects: [
      {
        name: `Winters Bite`,
        desc: `Enemy units within 3" of a friendly WINTERLEAF unit cannot retreat. In addition, if you pick Everdusk from the Seasons of War battle trait, enemy units within 3" of a friendly WINTERLEAF unit cannot be removed from the battlefield through an effect that would allow them to be set up again later in the battle.`,
        when: [DURING_GAME, MOVEMENT_PHASE],
      },
    ],
  },
  Dreadwood: {
    effects: [
      {
        name: `Malicious Tormentors`,
        desc: `Once per battle, you can use Walk the Hidden Paths twice in the same turn, but if you do so, at least one of the units you pick must be a friendly DEADWOOD SPITE-REVENANTS unit. In addition, once per battle, you can use Strike and Fade twice in the same turn, but if you do so, at least one of the units you pick must be a friendly DREADWOOD SPITE-REVENANTS unit.`,
        when: [END_OF_MOVEMENT_PHASE, COMBAT_PHASE],
      },
    ],
  },
  Harvestboon: {
    effects: [
      {
        name: `Vibrant Surge`,
        desc: `After deployment but before the first battle round begins, you can move each friendly HARVESTBOON SPITERIDER LANCERS and REVENANT SEEKERS unit up to 12". If both players can move units before the first battle round begins, they must roll off and the winner chooses who moves their units first.`,
        when: [END_OF_SETUP],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default Flavors
