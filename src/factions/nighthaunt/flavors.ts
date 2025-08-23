import { pickEffects } from 'factions/metatagger'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'
import { DURING_GAME, DURING_SETUP, END_OF_TURN, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'

const Flavors = {
  'Quicksilver Gheists': {
    effects: [
      {
        name: `Vanish and Reappear - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt unit that is not in combat to use this ability. 
        Effect: Roll a dice. The unit using this ability can move a distance up to its Move characteristic added to the roll. It can pass through other models and the combat ranges of enemy units, and it can end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Shrieker Host': {
    effects: [
      {
        name: `Petrify - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick a friendly Nighthaunt Hero to be the target.
        Effect: For the rest of the turn, enemy units cannot use Retreat abilities while they are in combat with the target.`,
        when: [HERO_PHASE, MOVEMENT_PHASE],
      },
    ],
  },
  'Death Stalkers': {
    effects: [
      {
        name: `There is No Escape - Once Per Turn`,
        desc: `Declare: Pick a friendly Nighthaunt unit to be the target.
        Effect: For the rest of the turn:
        The target can use Charge and Shoot abilities even if it has used a Retreat ability in the same turn.
        The target can use the 'Retreat' ability without any mortal damage being inflicted on it.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Royal Procession': {
    effects: [
      {
        name: `Lethal Rancour - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick up to 2 friendly Nighthaunt units to be the targets.
        Effect: The targets' melee weapons have Anti-charge (+1 Rend) for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Hungry Nexus': {
    effects: [
      {
        name: `Greedy for Souls - Once Per Turn - End of Enemy Turn`,
        desc: `Declare: Pick a friendly Nexus of Grief to be the target. 
        Effect: For the rest of the turn, the target has a Move characteristic of 3". It can immediately move up to 3" and can move into combat but cannot end that move on a terrain feature or within 3" of an objective.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Deathrust Gheists': {
    effects: [
      {
        name: `Blades of Eternal Rust - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick an enemy unit that is in combat with any friendly Nighthaunt units to be the target. 
        Effect: Subtract 1 from save rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Clattering Procession (AoR)': {
    effects: [
      {
        name: `Ethereal - Passive`,
        desc: `Effect: Ignore negative modifiers to save rolls for friendly Nighthaunt units.`,
        when: [DURING_GAME],
      },
      {
        name: `The Speed of Death - Once Per Turn`,
        desc: `Declare: Pick a friendly Clattering Procession unit that used a Charge or Retreat ability this turn, is not in combat and is wholly within 9" of a battlefield edge to use this ability.
          Effect: Remove that unit from the battlefield and set it up again wholly within 9" of a battlefield edge and more than 3" from all enemy units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Spectral Swiftness - Once Per Turn`,
        desc: `Declare: Pick a friendly Clattering Procession unit that is in combat to use this ability.
          Effect: That unit can move a distance up to its Move characteristic. It can pass through other models and the combat ranges of enemy units, but it cannot end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Pitiless Reapers - Once Per Turn`,
        desc: `Declare: Pick a friendly Clattering Procession unit that passed across any enemy units this phase to use this ability, then pick 1 of those enemy units to be the target.
          Effect: Roll a dice for each model in the Clattering Procession unit that passed across the target. Add 1 to the roll if any friendly Clattering Procession Black Coaches passed across the target this phase. For each 6+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Eternal Nightmare (AoR)': {
    effects: [
      {
        name: `Ethereal - Passive`,
        desc: `Effect: Ignore negative modifiers to save rolls for friendly Nighthaunt units, excluding Nagash.`,
        when: [DURING_GAME],
      },
      {
        name: `Gather Power - Passive`,
        desc: `Effect: The following effects apply to the friendly Nagash during the first and second battle rounds, as shown:
          Battle Round 1:
          His Move characteristic is '-' and he cannot make pile-in moves.
          He has WARD (3+).
          He has a Control characteristic of 1.
          Alakanash and Zefet-nebtar each have an Attacks characteristic of 2 instead of 4.
          Battle Round 2:
          His Move characteristic is 6".
          He cannot end a move more than 6" from the ritual site.
          He has WARD (4+).
          He has a Control characteristic of 5.
          Alakanash and Zefet-nebtar each have an Attacks characteristic of 2 instead of 4.`,
        when: [DURING_GAME],
      },
      {
        name: `The Ritual Begins`,
        desc: `Declare: You must use this ability to set up the friendly Nagash. Pick a friendly Nexus of Grief wholly within friendly territory to be the ritual site.
          Effect: Set up the friendly Nagash within 1" of the ritual site and wholly within friendly territory. After you have done so, he has been deployed. That Nexus of Grief is the ritual site for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Unholy Vessel - Passive`,
        desc: `Effect: The ritual site has Ward (4+) and cannot use the 'Hungry Crypts' ability.`,
        when: [DURING_GAME],
      },
    ],
  },
  /* 'The Emerald Host': {
    effects: pickEffects(BattleTraits, ['The Emerald Host']),
  },

  'The Scarlet Doom': {
    effects: pickEffects(BattleTraits, ['The Scarlet Doom']),
  },

  'The Quicksilver Dead': {
    effects: pickEffects(BattleTraits, ['The Quicksilver Dead']),
  },

  'The Grieving Legion': {
    effects: pickEffects(BattleTraits, ['The Grieving Legion']),
  }, */
} satisfies TItemDescriptions

export default Flavors
