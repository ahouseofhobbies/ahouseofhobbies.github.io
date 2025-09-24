import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_ROUND,
  END_OF_SETUP,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  WARDS_PHASE,
} from 'types/phases'

const CommandTraits = {
  'Lash of the Sire': {
    effects: [
      {
        name: `Lash of the Sire - Once Per Turn`,
        desc: `Declare: Pick another friendly Soulblight Gravelords unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, if the target is not in combat, it can move D6" but cannot move into combat during any part of that move. If the target is in combat, it can make a pile-in move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Unbending Will': {
    effects: [
      {
        name: `Unbending Will - Once Per Turn`,
        desc: `Declare: Pick a friendly Deathrattle or Deadwalkers unit that has 2 or more models and is wholly within 12" of this unit to be the target. 
        Effect: Add D6 to the targets control score for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Unhinged Rampager': {
    effects: [
      {
        name: `Unhinged Rampager - Passive`,
        desc: `Effect: You can reroll charge rolls for this unit in your charge phase.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Frightening Vitality': {
    effects: [
      {
        name: `Frightening Vitality - Passive`,
        desc: `Effect: Each time an ability would heal exactly 1 or 2 of this unit's damage points, heal 3 damage points instead.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Immortal Ego': {
    effects: [
      {
        name: `Immortal Ego - Passive`,
        desc: `Effect: Each phase, you can reroll 1 hit roll, 1 wound roll and 1 save roll for this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'A Wastrel and a Vagabond': {
    effects: [
      {
        name: `A Wastrel and a Vagabond - Passive`,
        desc: `Effect: While a friendly Deadwalker Zombies or Deathrattle Skeletons unit is wholly within 12" of this unit: 
        Add 2 to run rolls for that unit. 
        Add 3" to the distance that unit can move when it piles in.`,
        when: [MOVEMENT_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Knights of the Crimson Keep (AoR)': {
    effects: [
      {
        name: `Immortal Dedication (AoR)`,
        desc: `Effect: This unit receives D3 martial prowess tokens. Each martial proewess token can be spent to do 1 of the following:
        Reroll a hit roll for this unit.
        Reroll a wound roll for this unit.
        Reroll a save roll for this unit.
        At the start of the next turn, remove all this unit's martial prowess tokens.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Barrow Legion (AoR) - Lord of the Arcane Aegis': {
    effects: [
      {
        name: `Lord of the Arcane Aegis (AoR)`,
        desc: `Effect: Pick 1 of the following keywords:
        Infantry
        Cavalry
        Monster
        Beast
        For the rest of the battle, each time an attack targets this unit, if the attacking unit has the keyword you picked, an unmodified save roll of 4+, for that attack is always successful.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Barrow Legion (AoR) - Restless Tyrant': {
    effects: [
      {
        name: `Restless Tyrant (AoR)`,
        desc: `Declare; Pick a friendly Barrow Legion unit wholly within 12" of this unit to be the target.
        Effect: Add 2" to the target's Move characteristic for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Barrow Legion (AoR) - Spirit-Eater': {
    effects: [
      {
        name: `Spirit-Eater (AoR)`,
        desc: `Effect: If any models were slain by your general this turn, Heal (D6) your general.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Scions of Nulahmia (AoR)': {
    effects: [
      {
        name: `Keeper of the Royal Menagerie (AoR)`,
        desc: `Declare: Pick a friendly Dire Wolves or Fell Bats unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Above Suspicion': {
    effects: [
      {
        name: `Above Suspicion`,
        desc: `During deployment, instead of setting up this general on the battlefield, you can place them to one side and say that they are set up in ambush as a reserve unit. If you do so, at the end of your movement phase, you can set up this general on the battlefield more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `Above Suspicion`,
        desc: `If you set this general up in ambush, at the end of your movement phase, you can set up this general on the battlefield more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },
  'Unbending Will': {
    effects: [
      {
        name: `Unbending Will`,
        desc: `Models in friendly LEGION OF NIGHT SUMMONABLE units count as 2 models instead of 1 for the purposes of contesting objectives while they are wholly within 12" of this general.`,
        when: [END_OF_ROUND],
      },
    ],
  },
  'The Bait': {
    effects: [
      {
        name: `The Bait`,
        desc: `While this general is on the battlefield, add 1 to save rolls and ward rolls for attacks that target friendly LEGION OF NIGHT SUMMONABLE units in the first battle round.`,
        when: [WARDS_PHASE, SAVES_PHASE],
      },
    ],
  },

  'Driven by Deathstench': {
    effects: [
      {
        name: `Driven by Deathstench`,
        desc: `You can reroll charge rolls for friendly VYRKOS units wholly within 9" of this general.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  "Hunter's Snare": {
    effects: [
      {
        name: `Hunter's Snare`,
        desc: `For the purposes of contesting objectives, this general counts as a number of models equal to their Wounds characteristic.`,
        when: [END_OF_ROUND],
      },
    ],
  },
  'Spoor Trackers': {
    effects: [
      {
        name: `Spoor Trackers`,
        desc: `At the start of your hero phase, friendly VYRKOS DEADWALKERS units wholly within 9" of this general can make a normal move of up to 3".`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },

  'Swift and Deadly': {
    effects: [
      {
        name: `Swift and Deadly`,
        desc: `You can reroll charge rolls for friendly KASTELAI units while they are wholly within 12" of this general.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Undead Bladelord': {
    effects: [
      {
        name: `Undead Bladelord`,
        desc: `Once per turn, if this general is on the battlefield when a friendly KASTELAI VAMPIRE unit gains an ability with the Might of the Crimson Keep battle trait that this general has not already gained, this general gains the same ability.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },
  'The Shifting Keep': {
    effects: [
      {
        name: `The Shifting Keep`,
        desc: `During deployment, if this general is on the battlefield, instead of setting up a KASTELAI BLOOD KNIGHTS unit on the battlefield, you can place it to one side and say that it is set up in the Crimson Keep as a reserve unit. You can set up 1 unit in the Crimson Keep for each unit you have set up on the battlefield. At the end of your movement phase, you can set up 1 or more of the reserve units in the Crimson Keep on the battlefield, wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Shifting Keep`,
        desc: `At the end of your movement phase, you can set up 1 or more of the reserve units in the Crimson Keep on the battlefield, wholly within 6" of the battlefield edge and more than 9" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  },

  'Monstrous Might': {
    effects: [
      {
        name: `Monstrous Might`,
        desc: `Subtract 1 from wound rolls for attacks made with melee weapons that target friendly AVENGORII MONSTERS wholly within 12" of this general.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Torment-driven Throes': {
    effects: [
      {
        name: `Torment-driven Throes`,
        desc: `At the start of the combat phase, you can roll a dice for each enemy unit within 3" of this general. On a 5+, that unit suffers 1 mortal wound and the strike-last effect applies to that unit until the end of that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
  'Unhinged Rampager': {
    effects: [
      {
        name: `Unhinged Rampager`,
        desc: `You can reroll charge rolls for this general.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Unhinged Rampager`,
        desc: `At the end of the shooting phase, if any wounds or mortal wounds were allocated to this general in that phase, and this general is more than 9" from all enemy units, this general can move up to D6".`,
        when: [END_OF_SHOOTING_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
