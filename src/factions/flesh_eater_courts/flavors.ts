import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_COMBAT_PHASE,
} from 'types/phases'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Knightly Echelon': {
    effects: [
      {
        name: `Sound the Charge - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of melee weapons used by friendly Knights that charged in the same turn while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Lords of the Manor': {
    effects: [
      {
        name: `Raise the Banners - Passive`,
        desc: `Effect: Each time another ability returns at least 1 slain model to a friendly unit that is not in combat, after that ability has benn resolved, if that unit is a Serfs unit, you can return 1 additional slain model to it, and if it is a Knights unit, roll a dice. On a 4+, you can return 1 additional slain model to it.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Royal Hunt': {
    effects: [
      {
        name: `Like Snapping Hounds - Once Per Turn`,
        desc: `Declare: Pick each friendly Serfs unit in combat to be the targets.
        Effect: For each target:
        Make a pile-in move.
        Then, pick an enemy unit in combat with the target and roll a D3. On a 2+, inflict an amount of mortal damage on that enemy unit equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Royal Menagerie': {
    effects: [
      {
        name: `Indulge, My Pretties - Passive`,
        desc: `Effect: While a friendly non-Hero Flesh-Eater Courts Monster or Beast is wholly within 12" of any friendly Flesh-Eater Courts Heroes:
        That non-Hero unit can use a Rampage ability on its warscroll even if that ability has already been used by another friendly Monster in the same turn.
        If that non-Hero unit charged in the same turn and the unmodified charge roll was 9+, it has Strike-First for the rest of the turn.`,
        when: [DURING_GAME, COMBAT_PHASE],
      },
    ],
  },
  'Impassioned Serfs': {
    effects: [
      {
        name: `Command Ability: Overwhelming Hordes`,
        desc: `Declare: Pick a friendly Serfs unit that did not charge this turn and is in combat to use this ability, then pick an enemy unit in combat with that Serfs unit to be the target. 
        Effect: The target cannot make pile-in moves for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Questing Courtiers': {
    effects: [
      {
        name: `The Blessing of the Chalice - Passive`,
        desc: `Effect: Friendly Flesh-eater Courts Heroes have Ward (5+) if they have destroyed a unit this battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Knights of New Summercourt (AoR)': {
    effects: [
      {
        name: `The Summerking's Colours - Once Per Battle`,
        desc: `Declare: Pick a friendly New Summercourt unit that contains any standard bearers to be the target.
        Effect: For the rest of the battle:
        While the target unit contains any standard bearers, add 10 to the control scores of friendly New Summercourt units while they are wholly within 24" of the target.
        Once all of the standard bearers in the target unit have been slain, subtract 5 from the control scores of friendly New Summercourt units.`,
        when: [DURING_SETUP],
      },
      {
        name: `In Their Sire's Shadow - Once Per Battle`,
        desc: `Declare: If the friendly Ushoran is not in combat and has not used any Run or Retreat abilities this turn, pick that Ushoran and up to 2 friendly New Summercourt Knights units within his combat range that are not in combat and have not used any Run or Retreat abilities this turn to be the targets. Then, make a charge roll of 2D6.
        Effect: The targets can each move a distance up to the value of the charge roll. They can move through the combat ranges of enemy units and must end that move within 1/2" of a visible enemy unit. The friendly Ushoran must move before any other targets, and each target must end that move within that Ushoran's combat range. If the friendly Ushoran is unable to end that move within 11/2" of a visible enemy unit, none of the targets can move. If they move, the targets have charged.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The Knight's Vow - Once Per Turn`,
        desc: `Declare: Pick each friendly New Summercourt unit that did not charge this turn to be the targets.
        Effect: Start rolling dice, one at a time and one for each target, and stop when you roll a 6. The target you rolled a 6 for can use 2 Fight abilities this phase. After the first is used, however, the target has Strike-Last for the rest of the turn. If you rolled for each target and did not roll a 6, this ability has no effect.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Nightmarish Charge - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target friendly New Summercourt units that charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Red Errantry Hosts - Once Per Turn`,
        desc: `Declare: Pick a friendly Knights unit that has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within friendly territory, wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Equinox Feast (AoR)': {
    effects: [
      {
        name: `The Equinox Parade - Passive`,
        desc: `Effect: In the first battle round:
        Effect: Add 1 to run rolls for friendly Equinox Feast units for each other friendly Equinox Feast unit that has used a Run ability this phase.
        Add D6" to the distance friendly Equinox Feast units can move when they use a Retreat ability.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Eat Your Fill! - Passive`,
        desc: `Effect: In the fourth battle round, each time a friendly Equinox Feast unit uses a Fight ability, after that ability has been resolved:
        If that unit is damaged, Heal (D3) that unit.
        If that unit is not damaged, return up to 3 slain models to it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Make Merry 'Til The Morn - Passive`,
        desc: `Effect: In the fifth battle round, friendly Equinox Feast units have Ward (4+) while they are within 3" of 2 or more other visible friendly Equinox Feast units.`,
        when: [DURING_GAME],
      },
      {
        name: `A Display of Falconry - Once Per Turn`,
        desc: `Declare: You can only use this ability in the second battle round. Pick each enemy unit that used a Charge ability this phase to be the targets.
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The Ritual Dance - Passive`,
        desc: `Effect: In the third battle round, while a friendly Equinox Feast unit is in combat with an enemy unit that contains any champions, musicians or standard bearers, it can move 6" instead of 3" when it makes a pile-in move.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  /*  Morgaunt: {
    effects: [
      {
        name: `Morgaunt Kingdoms`,
        desc: `Give 1 noble deeds point to each friendly MORGAUNT FLESH-EATER COURTS HERO at the end of the turn if that HERO is contesting an objective.`,
        when: [END_OF_TURN],
      },
    ],
  },
  Hollowmourne: {
    effects: [
      {
        name: `Grisly Cavaliers`,
        desc: `Add 1 to the Damage characteristic of melee weapons used by friendly HOLLOWMOURNE KNIGHTS units that have made a charge move in the same turn. This ability has no effect on attacks made by mounts.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Blisterskin: {
    effects: [
      {
        name: `Pious Nobility`,
        desc: `Friendly ABHORRANTS gain the PRIEST keyword but they cannot cast spells and chant prayers in the same hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Gristlegore: {
    effects: [
      {
        name: `Savage Strike`,
        desc: `At the start of your combat phase, you can pick 1 friendly GRISTLEGORE MONSTER on the battlefield. The strike-first effect applies to that MONSTER until the end of the phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default Flavors
