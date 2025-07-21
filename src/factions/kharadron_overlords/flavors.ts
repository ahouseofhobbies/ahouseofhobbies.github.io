import { TItemDescriptions } from 'factions/factionTypes'
import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_SETUP,
} from 'types/phases'

const Flavors = {
  'Pioneers and Scavengers': {
    effects: [
      {
        name: `Gritty Fortune-Hunters - Passive`,
        desc: `Effect: Friendly Vongrim Harpoon Crew and Vongrim Salvagers units have Ward (6+) while they are contesting an objective.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Rapid Redeployment Squadron': {
    effects: [
      {
        name: `Extra Rappel Anchors - Passive`,
        desc: `Effect: Friendly Grundstok Gunhaulers can transport up to 2 friendly Kharadron Overlords Infantry units instead of 1 and with a model count of up to 6 instead of 5 (see Battle Traits).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Veteran Ground Troops': {
    effects: [
      {
        name: `Entrenched Crews - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly Arkanaut Company units to be the targets.
        Effect: For the rest of the battle round, if the target has not been set up this battle round and while it has not moved this turn, subtract 1 from the Rend characteristic of attacks that target that unit.`,
        when: [START_OF_ROUND],
      },
    ],
  },
  'Endrineers Guild Expeditionary Force': {
    effects: [
      {
        name: `Special Procurement - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Unique Kharadron Overlords Hero that does not have an artefact of power. The target can be in reserve.
        Effect: Give that Hero 1 artefact of power from the 'Inventions of the Sky-ports'.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Grundstok Expeditionary Force (AoR)': {
    effects: [
      {
        name: `Transport Skyfarers - Reaction: You declared a non-Charge Move ability for a friendly Skyvessel`,
        desc: `Used By: The Skyvessel using that Move ability. 
        Effect: Pick a number of units up to that Skyvessels Transport Capacity (see its warscroll) that are wholly within 6" of it to be the targets. Units that have been transported this turn cannot be targets. 
        Remove the targets from the battlefield. After the Skyvessel ends its move, you must set up each target unit on the battlefield, wholly within 6" of that Skyvessel and not in combat. Those units have been transported. A unit cannot use Charge abilities if it was transported in the same turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gun Butt Low Blow - Passive`,
        desc: `Effect: While a friendly Expeditionary Force Infantry unit is contesting an objective that you control, its melee weapons have Crit (Mortal).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `No Safe Haven`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: Subtract 1 from the control score of that unit for each damage point allocated to it this turn by a shooting attack made by a friendly Expeditionary Force unit, to a maximum of 10 damage points.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grudgefire Rounds - Once Per Turn`,
        desc: `Declare: Pick a friendly Expeditionary Force Infantry unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the targets ranged weapons. Add 1 to the Attacks characteristic of that weapon for the rest of the phase.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Pioneer Outpost (AoR)': {
    effects: [
      {
        name: `Initial Investment - Once Per Turn`,
        desc: `Effect: Each friendly Auto-Endrin can move 2D6" but cannot finish that move in combat.`,
        when: [HERO_PHASE],
      },
      {
        name: `Settling Accounts - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Code abilities this turn and if a friendly Auto-Endrin was destroyed this turn by an enemy unit.
        Effect: For the rest of the battle, each time a friendly Auto-Endrin is removed from the battlefield, before removing it, inflict D3 mortal damage on each enemy unit within 3" of that Auto-Endrin.`,
        when: [END_OF_TURN],
      },
      {
        name: `Aggressive Acquisitions - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Code abilities this turn and if there is a friendly Pioneer unit in each large quarter of the battlefield. Each of those units must be more than 6" from all other large quarters of the battlefield and not in combat.
        Effect: For the rest of the battle, enemy units cannot be set up within your territory or within 9" of an objective that you control.`,
        when: [END_OF_TURN],
      },
      {
        name: `Secure Investments - Once Per Turn`,
        desc: `Declare: You can only use this ability if you have not used any Code abilities this turn and if any enemy units that were within 3" of your Zontari Endrin Dock this turn were destroyed this turn.
        Effect: For the rest of the battle, ignore the Rend characteristic of combat attacks that target friendly non-Infantry Pioneer units or friendly faction terrain features.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Magnates Crew (AoR)': {
    effects: [
      {
        name: `Loyalty to the Magnate - Passive`,
        desc: `Effect: While a friendly Brokk Grungsson is wholly within the combat range of another friendly Magnate's Crew Infantry unit, both those units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Pay Your Debts - Once Per Battle`,
        desc: `Declare: Pick an enemy unit on the battlefield or in reserve to be indebted.
        Effect: Add 1 to wound rolls for combat attacks made by friendly Magnate's Crew units that target the indebted unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bold Moves - Once Per Battle`,
        desc: `Declare: Pick any number of friendly Magnate's Crew Infantry units that are in combat to be the targets. Make an emergency launch roll of 3D6 for each target.
        Effect: Each target can move a distance up to the value of its emergency launch roll. It can move through the combat ranges of any enemy units but cannot end that move in combat with an enemy unit that it was not in combat with at the start of the phase.
        The target(s) cannot use Charge abilities for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Cutting-Edge Endrinpacks - Once Per Turn`,
        desc: `Declare: Pick up to D3 friendly Magnate's Crew Infantry units that are wholly within 9" of a friendly Magnate's Crew Skyvessel to be the targets.
        Effect: Double the targets' Move characteristic for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Invictunite-Lined Hull - Once Per Battle - Enemy Hero Phase`,
        desc: `Declare: Pick a friendly Magnate's Crew Skyvessel to be the target.
        Effect: Roll a D3. For the rest of the turn, subtract X from the Rend characteristic of attacks that target that Skyvessel, where X is equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Constant Barrage - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this phase by a friendly Magnate's Crew unit's attacks to be the target.
        Effect: Until the start of your next turn, each time the target ends a move within 10" of any friendly Magnate's Crew units, roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /* 'Barak-Thryng, City of the Ancestors (Skyport)': {
    effects: [
      {
        name: `Honour the Gods, Just in Case`,
        desc: `Allied DUARDIN PRIESTS know the prayer "Rune of Ancestral Guidance" in addition to any others they know.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Rune of Ancestral Guidance`,
        desc: `Answer value of 3 and a range of 16". If answered, pick 1 friendly ARKANAUT COMPANY or GRUNDSTOK THUNDERERS unit wholly within range. Until the start of your next hero phase, unmodified hit rolls of 6 for attacks made with missile weapons by that unit cause a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Barak-Nar, City of the First Sunrise (Skyport)': {
    effects: [
      {
        name: `Scholars and Commanders`,
        desc: `At the start of your hero phase, roll a dice for each friendly BARAK-NAR HERO on the battlefield (including any that are embarked). For each 4+, you receive 1 extra command point.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
