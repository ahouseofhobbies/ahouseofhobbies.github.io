import { keyPicker } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
} from 'types/phases'
import command_abilities from './command_abilities'
import { TItemDescriptions } from 'factions/factionTypes'

const IronjawzFlavors = {
  /* Ironsunz: {
    mandatory: {
      command_abilities: [keyPicker(command_abilities, ["Alright, Get 'Em!"])],
    },
    effects: [],
  },
  Bloodtoofs: {
    effects: [
      {
        name: `Hunt and Crush`,
        desc: `At the end of the combat phase, friendly BLOODTOOFS GORE-GRUNTAS units that fought in that phase and are within 3" of any enemy units can make a pile-in move. In addition, those that fought but are not within 3" of any enemy units can each make a normal move or attempt a charge.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  }, */
  'Ironjawz Brawl': {
    effects: [
      {
        name: `Natural Disaster - Passive`,
        desc: `Effect: If you make an unmodified charge roll of 8+ for a friendly non-Hero Ironjawz unit, add 1 to the Attacks characteristic of that units melee weapons for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Grunta Stampede': {
    effects: [
      {
        name: `'Ere We Come! - Passive`,
        desc: `Effect: Add the number of enemy units that have been destroyed this battle to the Move characteristic of friendly Gore-Gruntas and Maw-Grunta units, to a maximum of +4.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Ironfist: {
    effects: [
      {
        name: `Smashin' and Bashin' - Passive`,
        desc: `Effect: The first time each turn that an enemy unit is destroyed by a Fight ability used by a friendly Ironjawz unit, add 1 to hit rolls for combat attacks made by the next friendly Ironjawz unit that is picked to use a Fight ability for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Weirdfist: {
    effects: [
      {
        name: `Spirit of Gork - Passive`,
        desc: `Effect: Friendly Ironjawz Infantry units have Ward (6+) while they are wholly within 12" of any friendly Ironjawz Wizards or Priests.`,
        when: [DURING_GAME],
      },
    ],
  },
  Brutefist: {
    effects: [
      {
        name: `Mightiest Destroyers - Once Per Battle`,
        desc: `Effect: If there are any friendly Megabosses on the battlefield, for the rest of the turn, you can pick another eligible unit to be a second target when using the Mighty Destroyers ability. 
        If there are no friendly Megabosses on the battlefield, roll a dice. On a 3+, for the rest of the turn, you can pick another eligible unit to be a second target when using the Mighty Destroyers ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Bigsnikkaz: {
    effects: [
      {
        name: `Duff Up Da Big Thing - Once Per Turn`,
        desc: `Declare: Pick a friendly Ironjawz unit to be the target. 
        Effect: For the rest of the turn, add 1 to wound rolls for the targets combat attacks that target an enemy unit that has a Health characteristic greater than its own.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Declare: Pick up to 1 friendly non-Unique Big Waaagh! Ironjawz Hero and up to 1 friendly non-Unique Big Waaagh! Kruleboyz Hero that do not have a heroic trait to be the targets.
        Effect: Give each target 1 heroic trait from the Big Waaagh! heroic traits.`,
        when: [DURING_SETUP],
      },
      {
        name: `Possessed By the Power of the Waaagh! - Passive`,
        desc: `Effect: While a friendly unit has the Power of the Waaagh! keyword:
        If that unit has the Ironjawz keyword, add 1 to run rolls and charge rolls for that unit.
        If that unit has the Kruleboyz keyword, that unit's attacks score critical hits on unmodified hit rolls of 5+.`,
        when: [DURING_GAME],
      },
      {
        name: `Rally the Warclans - Once Per Turn`,
        desc: `Declare: If your general is on the battlefield, pick a friendly Big Waaagh! unit that started the battle with 3 or more models and has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of your general and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Declare: Pick up to 1 friendly Big Waaagh! Ironjawz unit and up to 1 friendly Big Waaagh! Kruleboyz unit to be the targets.
        Effect: The targets have the Power of the Waaagh! keyword for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Krazoggs Grunta Stampede (AoR)': {
    effects: [
      {
        name: `Grunta Waaagh! - Once Per Battle`,
        desc: `Declare: Pick a friendly Grunta Stampede Hero to be the target. 
        Effect: For the rest of the turn, the following effects apply to friendly Grunta Stampede units while they are wholly within 18" of the target: 
        You can reroll charge rolls for those units. 
        Add 1 to the Attacks characteristic of those units Maw-gruntas Trotters. 
        Roll a D6 instead of a D3 when determining the amount of mortal damage inflicted by the Gore-grunta Charge ability of those units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Monstrous Momentum - Passive`,
        desc: `Effect: Add the current battle round number to the Move characteristic of friendly Grunta Stampede units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Eatin' on Da Hoof - Once Per Turn`,
        desc: `Declare: Pick a friendly Grunta Stampede Monster that has not used a Rampage ability this turn to use this ability, then pick a visible enemy unit in combat with it to be the target. 
        Effect: Roll a dice and add the momentum score of the unit using this ability to the roll. If the result exceeds the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Incessant Drive - End of the First Battle Round`,
        desc: `Effect: Add 1 to the momentum scores of friendly Maw-grunta units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Wall of Hogflesh - Once Per Battle`,
        desc: `Declare: Pick a friendly Grunta Stampede Hero to be the target. 
        Effect: For the rest of the battle, subtract 1 from hit rolls for shooting attacks that target that Hero while it is wholly within 6" of a friendly non-Hero Grunta Stampede unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Fast and Furious - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Hero Grunta Stampede unit to be the target. 
        Effect: The target can immediately use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Zoggroks Ironmongerz (AoR)': {
    effects: [
      {
        name: `Into Da Breach! - Once Per Turn`,
        desc: `Declare: Pick a friendly Zoggrok's Ironmongerz unit that is more than 9" from any enemy units and had any damage points allocated to it this turn.
          Effect: That unit can move D6". It cannot pass through the combat ranges of enemy units. It cannot end that move in combat.`,
        when: [END_OF_TURN],
      },
      {
        name: `Ironclad Scrums - Passive`,
        desc: `Effect: Friendly Zoggrok's Ironmongerz Ardboyz units with 3 or more models have Ward (5+) while they are wholly within 12" of a different friendly Zoggrok's Ironmongerz Ardboyz unit with 3 or more models.`,
        when: [DURING_GAME],
      },
      {
        name: `Legendary Vandals - Passive`,
        desc: `Effect: Melee weapons used by frieendly Zoggrok's Ironmongerz units have Anti-Faction Terrain (+1 Rend) and Anti-War Machine (+1 Rend).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Effect: While a friendly Zoggrok Anvilsmasha is within the combat range of a friendly Ardboyz unit:
          That Zoggrok Anvilsmasha has Ward (4+).
          Each time you make a successful ward roll for that Zoggrok Anvilsmasha, allocate 1 damage point to a friendly Ardboyz unit within its combat range after the damage sequence has been resovled.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default IronjawzFlavors
