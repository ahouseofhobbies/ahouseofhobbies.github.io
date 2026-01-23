import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'

const CommandTraits = {
  /* "Grandfather's Blessing": {
    effects: [
      {
        name: `Grandfather's Blessing`,
        desc: `Once per battle, at the start of the battle round after the Cycle of Corruption has advanced, if this general has not been slain, you can move the Cycle of Corruption 1 stage forwards. If more than 1 player could move the current stage of the Cycle of Corruption using this command trait, then none of them can.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  'Living Plague': {
    effects: [
      {
        name: `Living Plague`,
        desc: `At the start of your hero phase, roll a dice for each enemy unit within 7" of this general. On a 2+, give that unit 1 disease point and you receive 1 contagion point.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Bloated with Corruption': {
    effects: [
      {
        name: `Bloated with Corruption`,
        desc: `If an unmodified Disgustingly Resilient ward roll for this general is 6, you can pick 1 enemy unit within 3" of this general and give it 1 disease point.`,
        when: [SAVES_PHASE],
      },
    ],
  },
  'Infernal Conduit': {
    effects: [
      {
        name: `Infernal Conduit`,
        desc: `If this general is on the battlefield at the start of your hero phase, roll a dice. On a l, nothing happens. On a 2-5, you receive 1 contagion point. On a 6, you receive D3 contagion points.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'Avalanche of Rotten Flesh': {
    effects: [
      {
        name: `Avalanche of Rotten Flesh`,
        desc: `After this general makes a charge move, you can pick 1 enemy unit within 1" of them and roll a number of dice equal to the charge roll for that charge move. For each 6, that enemy unit suffers 1 mortal wound and give that enemy unit1 disease point.`,
        when: [CHARGE_PHASE],
      },
    ],
  }, */
  'Overpowering Stench': {
    effects: [
      {
        name: `Overpowering Stench`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: You and your opponent must roll off. If your roll is higher, pick 1 of the following effects to apply for the rest of the turn:
        Ignore positive modifiers to save rolls for the target.
        Subtract 1 from ward rolls for the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gift of Febrile Frenzy': {
    effects: [
      {
        name: `Gift of Febrile Frenzy`,
        desc: `Declare: Pick a visible friendly non-Hero Maggotkin of Nurgle unit that is wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 3+, add 1 to the Attacks characteristic of the target's melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Grandfathers Blessing': {
    effects: [
      {
        name: `Grandfathers Blessing`,
        desc: `Effect: If this unit is in combat with a Diseased enemy unit, Heal (D3) this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Living Plague': {
    effects: [
      {
        name: `Living Plague - Once Per Battle`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: The target has the Diseased keyword.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Unctuous Preacher': {
    effects: [
      {
        name: `Unctuous Preacher - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, add 1 to chanting rolls for this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Corpulent Avalanche': {
    effects: [
      {
        name: `Corpulent Avalanche`,
        desc: `Declare: If this unit charged this turn, pick a visible enemy unit within 1" of it to be the target. 
        Effect: Roll a number of dice equal to this units Move characteristic. For each 3+, inflict 1 mortal damage on the target. If any damage points were allocated to the target by this ability, this unit can move 2D3". It can move through the combat ranges of enemy units but must end that move in combat with the units it was already in combat with at the start of the move.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Cycle of Corruption (AoR)': {
    effects: [
      {
        name: `Utterly Disgusting (AoR) - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'The Gardeners of Nurgle (AoR)': {
    effects: [
      {
        name: `Foetid Orchardist (AoR) - Passive`,
        desc: `Effect: Add 1 to hit rolls for this unit's combat attacks while it is wholly within 7" of any friendly Feculent Gnarlmaws.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*  'Pestilent Breath': {
    effects: [
      {
        name: `Pestilent Breath`,
        desc: `At the start of your shooting phase, pick 1 enemy unit within 7" of your general. Roll 1 dice for each model in that unit that is within 7" of this general. For each 5+, that unit suffers 1 mortal wound.`,
        when: [START_OF_SHOOTING_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
