import { pickEffects } from 'factions/metatagger'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
} from 'types/phases'

const Flavors = {
  /*  'Munificent Wanderers': {
    effects: pickEffects(BattleTraits, ['Infested With Wonders']),
  },

  'Befouling Host': {
    effects: pickEffects(BattleTraits, ['Festerbark Pox']),
  },

  'Droning Guard': {
    effects: pickEffects(BattleTraits, ['Cloying Stench']),
  },

  'Blessed Sons': {
    effects: pickEffects(BattleTraits, ["Nurgle's Embrace"]),
  },

  'Drowned Men': {
    effects: pickEffects(BattleTraits, ['Lords of Sea and Sky']),
  },

  Filthbringers: {
    effects: pickEffects(BattleTraits, ['Rot Covens']),
  }, */
  'Tallyband of Nurgle': {
    effects: [
      {
        name: `Plague Progenitor - Once Per Battle`,
        desc: `Declare: Pick an enemy unit on the battlefield to be the plague progenitor for the rest of the battle. You cannot pick a Manifestation or terrain feature.
        Effect: Roll 2D3. On a 6, or if the roll equals or exceeds the plague progenitor's Health characteristic, it has the Diseased keyword.
        In the first battle round, while the plague progenitor has the Diseased keyword, it cannot use or be picked to be the target of any abilities that could heal or return slain models to it.
        Each time the plague progenitor is picked to be the target of the 'Spread' effect of the 'Blessed by the Plaguefather' ability, inflict D3 mortal damage on each other enemy unit within its combat range, excluding Manifestations and terrain features, in addition to the effect of that ability.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Nurgles Menagerie': {
    effects: [
      {
        name: `Denizens of the Garden - Passive`,
        desc: `Effect: Companion weapons used by friendly Maggotkin of Nurgle units have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Plague Cyst': {
    effects: [
      {
        name: `Vectors of Contagion - Passive`,
        desc: `Effect: Add 5 to the control scores of friendly non-Hero Rotbringers units while they are wholly within 12" of any friendly Maggotkin of Nurgle Daemon units.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Affliction Cyst': {
    effects: [
      {
        name: `Filth-Laden Daemonic Blooms - Passive`,
        desc: `Effect: Each time you make a run roll for a friendly non-Monster Maggotkin of Nurgle Daemon unit, you can change that roll to a 4.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Cycle of Corruption (AoR)': {
    effects: [
      {
        name: `Revolution and Revulsion - Once Per Battle Round`,
        desc: `Declare: You must use this ability at the start of each battle round.
        Effect: If it is the first battle round, roll a dice to determine which Cycle ability is ripe for the rest of the battle round.
        1.'Unnatural Vitality'
        2.'Fecund Vigour'
        3.'Burgeoning Filth'
        4.'Plague of Misery'
        5.'Nauseous Revulsion'
        6.'Rampant Disease'
        7.'Corrupted Regrowth'
        If it is not the first battle round, the next Cycle ability in the sequence is ripe for the rest of the battle round. If the 'Corrupted Regrowth' ability was ripe last battle round, the 'Unnatural Vitality' ability is ripe this battle round.
        You can only use a Cycle ability if it is ripe. Only 1 Cycle ability is ripe each battle round.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Unnatural Vitality - Passive`,
        desc: `Effect: Friendly non-Monster Cycle of Corruption Heroes have Ward (4+).`,
        when: [DURING_GAME],
      },
      {
        name: `Fecund Vigour - Once Per Turn`,
        desc: `Effect: Heal (D3) each friendly Cycle of Corruption unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Burgeoning Filth - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are in combat with any friendly Cycle of Corruption units.`,
        when: [END_OF_TURN],
      },
      {
        name: `Plague of Misery - Passive`,
        desc: `Effect: If enemy units are within 12" of any Cycle of Corruption units, they cannot use abilities that heal or return slain models to a unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Nauseous Revulsion - Passive`,
        desc: `Effect: Subtract 1 from charge rolls for enemy units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Rampant Disease - Passive`,
        desc: `Effect: Melee weapons used by friendly non-Hero Cycle of Corruption units have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Corrupted Regrowth - Once Per Turn`,
        desc: `Effect: Heal (7) each friendly Feculent Gnarlmaw.
        If there are no friendly Feculent Gnarlmaws on the battlefield, you can set up a Feculent Gnarlmaw on the battlefield more than 9" from all enemy units and more than 3" from all objectives and other terrain features.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gardeners of Nurgle (AoR)': {
    effects: [
      {
        name: `The Garden Grows - Once Per Turn`,
        desc: `Effect: Set up a Feculent Gnarlmaw on the battlefield more than 3" from all enemy units, objectives and other terrain features.`,
        when: [HERO_PHASE],
      },
      {
        name: `Transplanting - Once Per Turn`,
        desc: `Declare: Pick a friendly Feculent Gnarlmaw to be the target.
        Effect: Remove the target from the battlefield and set it up again within 3" of a friendly Gardeners of Nurgle Hero and more than 3" from all enemy units, objectives and other terrain features.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Head Gardener - Once Per Battle`,
        desc: `Effect: The friendly Horticulous Slimux can use his 'Cultivating the Garden of Nurgle' ability this phase even if there are 1 or more friendly Feculent Gnarlmaws on the battlefield.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Putrescent Sap - Once Per Turn`,
        desc: `Declare: Pick each enemy unit within 3" of any friendly Feculent Gnarlmaws to be the targets.
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Foul Rama - Passive`,
        desc: `Effect: Add 2" to the Move characteristic of friendly Gardeners of Nurgle Beasts of Nurgle and Plague Drones units while they are wholly within 6" of any friendly Feculent Gnarlmaws.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sickly Spores - Passive`,
        desc: `Effect: While a friendly Gardeners of Nurgle Infantry unit is wholly within 12" of a friendly Feculent Gnarlmaw, ignore the first damage point that would be allocated to it in each phase.`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
