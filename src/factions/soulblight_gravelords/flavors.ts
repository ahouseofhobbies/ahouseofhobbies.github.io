import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

const Flavors = {
  'Legion of Shyish': {
    effects: [
      {
        name: `Horror Unending - Passive`,
        desc: `Effect: You can pick 1 additional target when using the Deathly Invocation ability.`,
        when: [HERO_PHASE],
      },
    ],
  },

  'Bacchanal of Blood': {
    effects: [
      {
        name: `Aristocracy of the Night - Passive`,
        desc: `Effect: Add 1 to casting rolls for friendly Vampire units that are not in combat and add 1 to wound rolls for combat attacks made by friendly Vampire units that charged in the same turn.`,
        when: [DURING_GAME],
      },
    ],
  },

  'Deathstench Drove': {
    effects: [
      {
        name: `Dragged Down and Torn Apart - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Deadwalkers units in combat to be the targets. 
        Effect: For each target: 
        Make a pile-in move. 
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },

  Deathmarch: {
    effects: [
      {
        name: `Tides of Bones and Blades - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of melee weapons used by friendly Deathrattle units that charged in the same turn for attacks that target a unit that has fewer models than the attacking unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Cryptmasters: {
    effects: [
      {
        name: `Unhallowed Site - Once Per Turn`,
        desc: `Declare: Pick a friendly Cursed Sepulchre to be the target. 
        Effect: The target has Ward (4+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },

  Skinshifters: {
    effects: [
      {
        name: `The Speed of Death - Once Per Turn`,
        desc: `Declare: Pick a friendly Infantry Vampire Hero to be the target. 
        Effect: The target can move up to 12" and has Fly when it does so. It cannot end that move in combat.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Knights of the Crimson Keep (AoR)': {
    effects: [
      {
        name: `The Crimson Keep`,
        desc: `Declare: Pick a friendly Crimson Keep unit that has not been deployed.
        Effect: Set up that unit in reserve in the Crimson Keep. It has now been deployed. You cannot set up more friendly units in the Crimson Keep than there are on the battlefield.`,
        when: [DURING_SETUP],
      },
      {
        name: `From a Quarter Unseen - Once Per Battle`,
        desc: `Declare: You cannot use this ability in the first battle round. Pick each friendly unit that is in the Crimson Keep to be the targets.
        Effect: Set up each target wholly within 9" of the battlefield edge and more than 9" from all enemy units. If you used this ability in the third or a subsequent battle round, do not spend any command points when using the Carve a Bloody Path command this turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Command Ability: Carve a Bloody Path`,
        desc: `Declare: Pick a friendly Blood Knights unit that is in combat to use this ability.
        Effect: That unit can use a Charge ability even though it is in combat and even if it has already used a Charge ability this turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Blood Rampage - Once Per Turn`,
        desc: `Declare: Pick a friendly Crimson Keep Monster that is in combat and has not used any Rampage abilities this turn to use this ability, then pick an enemy unit in combat with it to be the target.
        Effect: This unit can make a move of 2D6". It must end that move in combat with the target unit. Then roll a dice. If the roll exceeds the target units's Health characteristic, 1 model in the target unit is slain.
        After this ability has been resolved, this unit cannot use Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Barrow Legion (AoR)': {
    effects: [
      {
        name: `All to Dust - Passive`,
        desc: `Effect: In the third and subsequent battle rounds, while a friendly Cursed Sepulchre is on the battlefield, subtract 1 from save rolls from enemy units.`,
        when: [DURING_GAME],
      },
      {
        name: `Endless Legions of Bone - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Barrow Legion unit that has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of a friendly Barrow Legion Hero or wholly within 6" of a friendly Cursed Sepulchre. It must be set up more than 9" from all enemy units.
        IF it is your movement phase, you can set up the replacment unit more than 3" from all enemy units instead of more than 9", but if you set it up within 9" of any enemy units, it cannot use Charge abilities this turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gifts to the Petty Kingdoms - Once Per Battle`,
        desc: `Declare: Pick up to 2 friendly non-Unique Barrow Legion Heroes that do not have an artefact of power to be the targets (you can pick units in reserve).
        Effect: Give each target 1 artefact of power from the Barrow Legion Army of Renown rules.`,
        when: [DURING_SETUP],
      },
      {
        name: `Grave Sentinels - Passive`,
        desc: `Effect: The melee weapons used by friendly Barrow Legion units have Anti-Charge (+1 Rend) while they are wholly within 9" of a friendly Cursed Sepulchre.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Royal Crypt - Once Per Battle`,
        desc: `Declare: This ability must be used instead of the Deploy Faction Terrain Feature ability.
        Effect: Set up 3 Cursed Sepulchres wholly within friendly territory, each within 1/2" of any of the others and more than 3" from all objectives and other terrain features. After you have done so, they have been deployed and they are considered to be a signle Cursed Sepulchre terrain feature that has a Health characteristic of 24 instead of 8.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Scions of Nulahmia (AoR)': {
    effects: [
      {
        name: `Thaumic Realignment - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Exquisite Plot abilities this turn. Pick a friendly Wizard to be the target. 
        Effect: For the rest of the turn, add 1 to casting rolls for the target. In addition, at the end of this turn, if the target successfully cast any spells this turn, add 1 to its power level for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Recruitment Drive - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Exquisite Plot abilities this turn. Pick a friendly unit to be the hunter and an enemy unit with 5 or more models to be the target. 
        Effect: For the rest of the turn, add 1 to hit rolls for the hunters combat attacks that target that enemy unit. In addition, if the target is destroyed this turn by the hunter, add 1 to the Attacks characteristic of the hunters melee weapons for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Seek Worthy Blood - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Exquisite Plot abilities this turn. Pick a friendly unit to be the target. 
        Effect: For the rest of the turn, the targets weapons have Anti-Hero (+1 Rend). In addition, if the target destroys any enemy Heroes this turn, the targets weapons have Anti-Hero (+1 Rend) for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Queen's Prize - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Exquisite Plot abilities this turn. Pick a friendly unit to be the target. 
        Effect: For the rest of the turn, add 5 to the targets control score. In addition, at the end of this turn, after determining control of objectives, if the target is contesting an objective that you control and that was controlled by your opponent at the start of this turn, add 5 to the targets control score for the rest of the battle.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
