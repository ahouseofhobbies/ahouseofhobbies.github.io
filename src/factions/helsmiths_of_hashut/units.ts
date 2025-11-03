import { keyPicker, tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DEPLOYMENT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_ANY_TURN,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_TURN,
} from 'types/phases'
import Prayers from './prayers'
import Spells from './spells'
import { TItemDescriptions } from 'factions/factionTypes'

// Shared Effects
const DaemonicResilienceEffect = {
  name: `Daemonic Resilience - Passive`,
  desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:
  1: This unit has Ward (6+).
  2: This unit has Ward (5+).
  3: This unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
  when: [DURING_GAME],
  shared: true,
}

const CrushTheUnworthyEffect = {
  name: `Crush the Unworthy - Passive`,
  desc: `Effect: Add 1 to charge rolls for this unit for each daemonic power point it has.`,
  when: [CHARGE_PHASE],
  shared: true,
}

const ManglersOfMetalEffect = {
  name: `Manglers of Metal - Passive`,
  desc: `Effect: Add 1 to the Rend characteristic of this unit's ranged weapons for each daemonic power point this unit has.`,
  when: [SHOOTING_PHASE],
  shared: true,
}

const SacredGongsEffect = {
  name: `Sacred Gongs - Passive`,
  desc: `Effect: This unit's Gong Carriers are tokens. There is 1 Gong Carrier for every Musician in this unit. If this unit uses the 'Rally' command, you can remove a Gong Carrier to make an additional rally roll of D6.`,
  when: [HERO_PHASE],
  shared: true,
}

const DisciplinedMarchEffect = {
  name: `Disciplined March - Passive`,
  desc: `Effect: When making run rolls for this unit, if you roll a 1-3, you can use a value of 4 instead.`,
  when: [MOVEMENT_PHASE],
  shared: true,
}

const DaemonicStrengthEffect = {
  name: `Daemonic Strength - Passive`,
  desc: `Effect: For each daemonic power point this unit has:
   Add 1" to its Move characteristic.
   Add 1 to the Attacks characteristic of its weapons.`,
  when: [DURING_GAME],
  shared: true,
}

const Units = {
  'Urak Taar': {
    mandatory: {
      spells: [keyPicker(Spells, ['The Curse of Stone'])],
    },
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Ghorrakos's Horns and Hooves is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Peerless Among Daemonsmiths - Passive`,
        desc: `Effect: Apply the effect below that corresponds with the number of daemonic power points (DPP) this unit has:

        DPP Effect:
        1: This unit has Ward (6+). Add 1 to casting rolls for this unit. In addition, this unit has Ward (6+).
        2: This unit has Ward (5+). This unit has Ward (5+).
        3: Add 1 to casting rolls for this unit. In addition, this unit has Ward (4+) against damage inflicted by Spells, Prayers and abilities used by Manifestations. Otherwise, it has Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Pitiless Trampling - Rampage - Once Per Turn (Army), Any Charge Phase`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target.
        Effect: Roll 2D6. This unit can move a distance up to the value of the roll. During that move, this unit can pass through models in the target unit but must end that move in combat.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Master of Daemonic Power - Enemy Hero Phase`,
        desc: `Effect: Remove up to 3 daemonic power points in total from any combination of friendly units wholly within 18" of this unit. Then, allocate them to a different friendly non-Hobgrot Helsmiths of Hashut unit wholly within 18" of this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Immolating Presence - Rampage - Once Per Turn (Army), End of Any Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. If the roll exceeds the target's Health characteristic, 1 model in the target unit is slain.`,
        when: [END_OF_ANY_TURN],
      },
      {
        name: `Unholy Stampede - Passive`,
        desc: `Effect: While a friendly Helsmiths of Hashut Cavalry unit is wholly within 12" of this unit:
         That unit can use a Retreat ability and still use Charge abilities later in the turn.
         No mortal damage is inflicted on that unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  Daemonsmith: {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Horns and Hooves is 4.`,
        when: [COMBAT_PHASE],
      },
      DaemonicResilienceEffect,
      {
        name: `Unholy Stampede - Passive`,
        desc: `Effect: While a friendly Helsmiths of Hashut Cavalry unit is wholly within 12" of this unit:
         That unit can use a Retreat ability and still use Charge abilities later in the turn.
         No mortal damage is inflicted on that unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Immolating Presence - Rampage - Once Per Turn (Army), End of Any Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a dice. If the roll exceeds the target's Health characteristic, 1 model in the target unit is slain.`,
        when: [END_OF_ANY_TURN],
      },
    ],
  },
  'War Despot': {
    effects: [
      {
        name: `Black-Hearted Conqueror - Passive`,
        desc: `Effect: Add 3 to the control scores of friendly Helsmiths of Hashut Infantry units while they are wholly within 6" of this unit. Add 6 to the range of this ability for each daemonic power point this unit has.`,
        when: [END_OF_TURN],
      },
      {
        name: `Fight, You Scum! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Helsmiths of Hashut Infantry unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to the Attacks characteristic of its melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Ashen Elder': {
    mandatory: {
      prayers: [keyPicker(Prayers, ['Extract Power'])],
    },
    effects: [
      {
        name: `Extract Power - End of Your Turn`,
        desc: `Effect: If this unit is contesting an objective, a Place of Power, or a terrain feature and that objective, Place of Power or terrain feature has a friendly desolation token, give this unit 1 ritual point.`,
        when: [END_OF_TURN],
      },
      {
        name: `Stoked Fanaticism - Passive`,
        desc: `Effect: Ignore the first damage point allocated to each friendly non-Hobgrot Helsmiths of Hashut unit each phase while it is wholly within 6" of this unit. Add 6" to the range of this ability for each daemonic power point this unit has.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Infernal Razers with Blunderbusses': {
    effects: [
      {
        name: `Hateful Hail - Once Per Turn (Army), Your Shooting Phase`,
        desc: `Effect: If this unit used a Shoot ability this turn and all of its attacks targeted the same enemy unit, that enemy unit is the target.
        Effect: Roll a dice and add the number of enemy models in the target unit if it is beside D6 or beyond. If the result is 6+, the target has Strike-last for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      ManglersOfMetalEffect,
    ],
  },
  'Infernal Razers with Flamehurlers': {
    effects: [
      {
        name: `Scorched Remains - Once Per Turn (Army), Your Shooting Phase`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same Infantry unit, that enemy unit is the target.
        Effect: Roll a dice. On a 3+, subtract an amount equal to the roll from the target's control score until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      ManglersOfMetalEffect,
    ],
  },
  'Hobgrot Vandalz': {
    effects: [
      {
        name: `Disposable Lackeys - Deployment Phase`,
        desc: `Effect: This unit can immediately use the 'Normal Move' ability as if it were your movement phase.`,
        when: [DEPLOYMENT_PHASE],
      },
    ],
  },
  'Infernal Cohort with Hashutite Blades': {
    effects: [SacredGongsEffect, DisciplinedMarchEffect, DaemonicResilienceEffect],
  },
  'Infernal Cohort with Hashutite Spears': {
    effects: [
      SacredGongsEffect,
      {
        name: `Conquered Lands - Your Hero Phase`,
        desc: `Declare: If this unit is contesting an objective you control, pick a friendly non-Hobgrot Helsmiths of Hashut unit wholly within 12" of this unit to be the target.
        Effect: Roll a dice. On a 3+, give the target 1 daemonic power point.

        Designer's Note: You cannot make more than one roll for each objective in each turn regardless of how many friendly units with this ability are contesting if.`,
        when: [HERO_PHASE],
      },
      DaemonicResilienceEffect,
    ],
  },
  'Bull Centaurs': {
    effects: [
      {
        name: `Bull-Charge - Any Charge Phase`,
        desc: `Declare: If this unit charged this turn, pick a visible enemy unit within 1" of it to be the target.
        Effect: Roll a dice for each model in this unit. Add the number of daemonic power points this unit has to each roll. For each 6+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
      CrushTheUnworthyEffect,
    ],
  },
  'Anointed Sentinels': {
    effects: [
      {
        name: `Zealous Counter-Attack - Reaction: You declared the 'Counter-charge' command for this unit`,
        desc: `Effect: This unit has Strike-first for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
      CrushTheUnworthyEffect,
    ],
  },
  'Deathshrieker Rocket Battery': {
    effects: [
      {
        name: `Bungering Flames - Once Per Turn (Army), Your Shooting Phase`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this unit's Hashu-Zharr Rockets is 5 if the target is a Monster or a War Machine.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Watch Them Burn - Reaction: You declared a Shoot ability for this unit`,
        desc: `Effect: If all of its attacks targeted the same enemy unit, roll a number of dice equal to the number of daemonic power points this unit has. For each 5+, inflict 1 mortal damage on the target after this unit's shooting attacks have been resolved. For each 3+, inflict 1 mortal damage on the enemy unit being rolled for.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Tormentor Bombard': {
    effects: [
      {
        name: `Ruinous Bombardment - Once Per Turn (Army), Your Shooting Phase`,
        desc: `Declare: If this unit used a Shoot ability this turn and all of its attacks targeted the same enemy unit, that enemy unit is the target.
        Then, you can pick a number of enemy units within 6" of the target equal to the number of daemonic power points this unit has to be additional targets.
        Effect: Roll a dice for each target. On a 3+, that unit cannot use commands until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Calculated Trajectory - Passive`,
        desc: `Effect: Add 1 to hit rolls for this unit's shooting attacks that target an enemy unit with 5 or more models that is more than 12" from this unit.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Dominator Engine with Bane Maces': {
    effects: [
      {
        name: `Engines of Domination - Once Per Turn (Army), Any Combat Phase`,
        desc: `Effect: If this unit is in combat with any enemy Heroes, it can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the phase and can only be picked to use a second Fight ability if it is still in combat with any enemy Heroes.`,
        when: [COMBAT_PHASE],
      },
      DaemonicStrengthEffect,
    ],
  },
  'Dominator Engine with Immolation Cannons': {
    effects: [
      {
        name: `All Must Burn - Passive`,
        desc: `Effect: When picking targets for this unit's shooting attacks, if you pick more than 1 unit to be the target of those attacks, add 2 to the Attacks characteristic of this unit's Immolation Cannons for each target picked. However, those additional attacks must be split evenly between the targets picked.`,
        when: [SHOOTING_PHASE],
      },
      DaemonicStrengthEffect,
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
