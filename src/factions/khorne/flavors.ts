import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Flavors = {
  'Khornate Legion': {
    effects: [
      {
        name: `Butcher's of Nations - Once Per Turn - Reaction: You declared a Fight ability for a friendly Blades of Khorne Daemon unit`,
        desc: `Used By: The unit using that Fight ability. 
        Effect: Pick a friendly Bloodbound unit that has not used a Fight ability this turn and is within 12" of the unit using this ability to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  /* Bloodlords: {
    effects: [
      {
        name: `The First to Draw Blood`,
        desc: `When you use the Decapitating Blow ability for a BLOODLORDS BLOODLETTER unit, mortal wounds are caused on an unmodified roll of 5+ instead of 6 if that unit made a charge move in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

  Goretide: {
    effects: [
      {
        name: `Tireless Conquerors`,
        desc: `Add 1 to wound rolls for attacks made with melee weapons by friendly GORETIDE BLOODBOUND units that target an enemy unit that is contesting an objective you do not control, or that target an enemy unit wholly within enemy territory.`,
        when: [HERO_PHASE],
      },
    ],
  }, */

  'Murder Host': {
    effects: [
      {
        name: `Eager Killers`,
        desc: `Effect: Each friendly Blades of Khorne Daemon unit that has used a Fight ability this turn and is not in combat can move D6". It cannot end that move in combat.`,
        when: [END_OF_TURN],
      },
    ],
  },

  'Brass Stampede': {
    effects: [
      {
        name: `Drawn to Carnage - Passive`,
        desc: `Effect: Add X to charge rolls for friendly Blades of Khorne units, where X is the number of friendly Blades of Khorne Cavalry or Monster units that have already charged this phase and that are wholly within 12" of the unit being rolled for.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'Bloodbound Warhorde': {
    effects: [
      {
        name: `Tireless Conquerors - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks made by friendly Bloodbound units that target an enemy unit that is contesting an objective you do not control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Tournament of Skulls': {
    effects: [
      {
        name: `Bloody Competitiors - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Hero Bloodbound unit and a friendly non-Hero Blades of Khorne Daemon unit to be the targets. 
        Effect: Until the start of your next turn, while the targets are wholly within 12" of each other, add 1 to wound rolls for the targets combat attacks.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Goretide': {
    effects: [
      {
        name: `Tide of Savagery - Once Per Turn`,
        desc: `Declare: Pick a friendly Bloodbound Hero and up to 2 other friendly Bloodbound units that are wholly within 12" of that Hero to be the targets. 
        Effect: Add 2" to the targets Move characteristic for the rest of the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Gorechosen Champions (AoR)': {
    effects: [
      {
        name: `Murder-Won Trophies - Once Per Battle`,
        desc: `Declare: Pick a friendly Gorechosen Champions Hero to be the target.
          Effect: Give the target 1 artefact of power from the 'Gorechosen Champions' Army of Renown rules.`,
        when: [DURING_SETUP],
      },
      {
        name: `Brutal Lashmaster - Passive`,
        desc: `Effect: Each time a friendly Bloodstoker uses the 'Whipped to Fury' ability, another friendly Gorechosen Champions Hero within its combat range can be picked to be the target of that ability instead of a non-Hero Bloodbound unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Legendary Slayers - Passive`,
        desc: `Effect: Blood-hungry weapons used by friendly Gorechosen Champions units have Crit (Mortal).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Red God's Eye - Passive`,
        desc: `Effect: Friendly Gorechosen Champions units have Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Hate-Fuelled Killers - Passive`,
        desc: `Effect: The first time each friendly Gorechosen Champions unit would be destroyed, before removing it from play, roll a dice. On a 5+, that unit is not destroyed and any remaining damage points inflicted on it have no effect. Then, Heal (1) that unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'The Baleful Lords (AoR)': {
    effects: [
      {
        name: `Born of Butchery - Once Per Turn`,
        desc: `Declare: Pick a friendly Baleful Lords unit that has been destroyed to be the target.
          Effect: Roll a number of dice equal to the current battle round number plus the number of units (friendly and enemy) that have been destroyed this battle. If the roll contains 8 or more results of 3+, set up a replacement unit identical to the target on the battlefield, more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Bellow of Hatred - Once Per Turn`,
        desc: `Declare: Pick a friendly Baleful Lords unit that has not used a Rampage ability this turn to be the target.
          Effect: For the rest of the turn, enemy units cannot use commands while they are in combat with the target. The target cannot use Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mage-Eaters - Reaction: Opponent declared a Spell ability`,
        desc: `Used By: A friendly Baleful Lords unit targeted by that SPELL ability.
          Effect: Make a magic-eater roll of D6. On a 3+, that spell is unbound. If the spell was unbound and the magic-eater roll was 5+, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `First in his Sight - Once Per Turn - End of Enemy Turn`,
        desc: `Effect: Heal (D3) each friendly Baleful Lords Hero that is in combat.`,
        when: [END_OF_TURN],
      },
      {
        name: `Drawn by Blood - Once Per Turn`,
        desc: `Declare: Pick a friendly Baleful Lords unit that has not used a Rampage ability this turn to use this ability.
          Effect: That unit can move D6". It can end that move in combat but only with units it was in combat with at the start of the phase.
          If that unit destroyed any enemy units this turn, then instead:
          That unit can move 2D6". It can end that move in combat with any units that had any damage points allocated to them this turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `The Price of Mercy - Once Per Turn`,
        desc: `Declare: You must use this ability. Pick each friendly Baleful Lords unit that did not charge or use a Fight ability this turn to be the target.
          Effect: Roll a D3 for each target. On a 2+, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Sunder the Sorcerous - Once Per Turn`,
        desc: `Declare: Pick each enemy Manifestation within 3" of a friendly Baleful Lords unit to be a target.
          Effect: Roll 2D6 for each target. If the roll equals or exceeds the banishment value of the target:
          That target is banished and removed from play.
          Inflict D3 mortal damage on the enemy unit that summoned the target.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
