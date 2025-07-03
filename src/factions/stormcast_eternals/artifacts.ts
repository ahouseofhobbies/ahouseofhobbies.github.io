import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_CHARGE_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  // Storm-forged Weapons
  'Null Pendant': {
    effects: [
      {
        name: `Null Pendant - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Subtract 5 from the targets control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Quicksilver Draught': {
    effects: [
      {
        name: `Quicksilver Draught - Once Per Battle`,
        desc: `Effect: This unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Mirrorshield: {
    effects: [
      {
        name: `Mirrorshield - Passive`,
        desc: `Effect: This unit cannot be targeted by shooting attacks unless the attacking model is within 9" of it.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Banner of Sigmar': {
    effects: [
      {
        name: `Banner of Sigmar - Once Per Battle`,
        desc: `Declare: Pick an objective within 18" of this unit to be the target. 
        Effect: Until the start of your next turn, your opponent cannot control the target objective while they have no units contesting it.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Sigil of Morrda': {
    effects: [
      {
        name: `Sigil of Morrda - Once Per Turn - Reaction: Opponent declared a command or a Rampage ability for a unit in combat with this unit`,
        desc: `Effect: Roll a dice. On a 3+, that command or Rampage ability has no effect, it still counts as having been used and any command points spent to use that ability are still lost.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Beacon of Azyr': {
    effects: [
      {
        name: `Beacon of Azyr - Once Per Battle`,
        desc: `Declare: Pick a visible friendly Stormcast Eternals Wizard or Priest wholly within 12" of this unit to be the target. 
        Effect: The next time this turn that the target uses a Prayer or Spell ability, instead of making a casting roll or chanting roll for them, you can use a value of 7 for the roll that cannot be modified. After that ability is resolved, if the target has any ritual points, reset their ritual points total to 0.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Draconith Skywing (AoR)': {
    effects: [
      {
        name: `Celestium Ensign (AoR) - Once Per Battle`,
        desc: `Effect: Heal (3) each friendly Draconith Skywing unit wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Heroes of the First-Forged (AoR)': {
    effects: [
      {
        name: `Shield of Skjordamar (AoR)`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. On a 4+, ward rolls cannot be made for the target for the rest of the battle.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ruination Brotherhood (AoR)': {
    effects: [
      {
        name: `Hallowed Scrolls (AoR) - Passive`,
        desc: `Effect: If this unit is Infantry, it has Ward (5+). Otherwise, it has Ward (6+).`,
        when: [DURING_GAME],
      },
    ],
  },
  /*  'Hammer of Might': {
    effects: [
      {
        name: `Hammer of Might`,
        desc: `Pick 1 of the bearer's melee weapons. If the unmodified wound roll for an attack made with that weapon is 6, double the Damage characteristic of that weapon for that attack.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Fang of Dracothion': {
    effects: [
      {
        name: `Fang of Dracothion`,
        desc: `Pick 1 of the bearer's melee weapons. If any wounds caused by attacks made with that weapon are allocated to an enemy model, that enemy model suffers 1 mortal wound at the end of each turn.`,
        when: [WOUND_ALLOCATION_PHASE, END_OF_TURN],
      },
    ],
  }, */

  // Heavens-wrought Armour
  /* 'Drakescale Armour': {
    effects: [
      {
        name: `Drakescale Armour`,
        desc: `You can reroll save rolls for attacks made with weapons that have a Damage characteristic of 2 or more that target the bearer.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  Mirrorshield: {
    effects: [
      {
        name: `Mirrorshield`,
        desc: `The bearer cannot be picked as the target of a shooting attack unless the attacking unit is within 9" of the bearer.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Amulet of Silvered Sigmarite': {
    effects: [
      {
        name: `Amulet of Silvered Sigmarite`,
        desc: `Your opponent cannot reroll hit rolls for attacks made with melee weapons that target the bearer.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  // Artefacts of the Tempest
  'Quicksilver Draught': {
    effects: [
      {
        name: `Quicksilver Draught`,
        desc: `Once per battle, at the end of the charge phase, you can say that the bearer will drink their quicksilver draught. If you do so, the bearer fights at the start of the following combat phase, but the bearer cannot fight again in that phase unless an ability or spell allows them to fight more than once.`,
        when: [END_OF_CHARGE_PHASE],
      },
    ],
  },
  Luckstone: {
    effects: [
      {
        name: `Luckstone`,
        desc: `Once per battle, before you make a hit or wound roll for an attack made by the bearer, a save roll for an attack that targets the bearer, a run roll or a charge roll made by the bearer, you can say that the bearer will draw upon the power of the luckstone. If you do so, instead of making the roll, you must choose the result of the roll. The result chosen for a D6 roll must be a whole number from 1 to 6, and the result chosen for a 2D6 roll must be a whole number between 2 to 12. The result cannot be rerolled, but any modifiers are applied to it as normal.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Obsidian Amulet': {
    effects: [
      {
        name: `Obsidian Amulet`,
        desc: `Once per battle, at the start of the hero phase, you can say the bearer will raise their obsidian amulet. If you do so, ignore the effects of spells or the abilities of endless spells on the bearer until your next hero phase.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Celestium Ensign': {
    effects: [
      {
        name: `Celestium Ensign`,
        desc: `Once per battle, at the start of any phase, the bearer can say that they will raise their Celestium Ensign. If they do so, you can heal up to D3 wounds allocated to each friendly DRACONITH unit wholly within 9" of the bearer.`,
        when: [START_OF_ANY_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
