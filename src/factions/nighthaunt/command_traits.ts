import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  WARDS_PHASE,
} from 'types/phases'

// Store Command Traits here. You can add them to units, abilities, flavors, and subfactions later.
const CommandTraits = {
  'Ruler of the Spectral Hosts': {
    effects: [
      {
        name: `Ruler of the Spectral Hosts - Once Per Turn`,
        desc: `Declare: Pick up to 3 friendly non-Hero Nighthaunt units wholly within 12" of this unit to be the targets. 
        Effect: Roll a D3 for each target. On a 2+:
        If the target is damaged, Heal (X) the target, where X is an amount equal to the roll.
        If the target is not damaged, return a number of slain models to it with a combined Health characteristic of up to X, where X is an amount equal to the roll.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Deathly Possessor': {
    effects: [
      {
        name: `Deathly Possessor`,
        desc: `Declare: Pick an enemy Hero in combat with this unit to be the target, then pick another enemy unit within the target's combat range to be the victim.
        Effect: Roll a dice. On a 3+, pick 1 of the target's melee weapons. Immediately resolve combat attacks for the target with that weapon against the victim.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Shadowy Aura': {
    effects: [
      {
        name: `Shadowy Aura - Reaction: You declared the Redeploy command for a friendly Nighthaunt unit wholly within 12" of this unit`,
        desc: `Effect: For the rest of the turn, subtract 1 from hit rolls for attacks that target this unit.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Clattering Procession (AoR)': {
    effects: [
      {
        name: `Silent Overseer (AoR)`,
        desc: `Declare: Pick up to 3 friendly Clattering Procession units wholly within 12" of this unit to be the targets.
        Effect: For the rest of the turn, the targets can use Charge abilities even if they used a Retreat ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'The Eternal Nightmare (AoR)': {
    effects: [
      {
        name: `Damned Vessel (AoR) - Reaction: You declared a Spell ability for a friendly Nagash within 18" of this unit`,
        desc: `Effect: Measure the range and visibility of that Spell ability from this unit instead of that Nagash.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*  'Cloaked in Shadow': {
    effects: [
      {
        name: `Cloaked in Shadow`,
        desc: `This general cannot be picked as the target of a shooting or combat attack by more than 1 unit per phase.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
    ],
  },
  'Ruler of the Spirit Hosts': {
    effects: [
      {
        name: `Ruler of the Spirit Hosts`,
        desc: `Once per battle, at the end of your movement phase, you can pick 1 friendly NIGHTHAUNT SUMMONABLE unit that has been destroyed. After you pick a unit that has been destroyed, roll a dice. On a 4+, a new replacement unit with half of the models from the unit that was destroyed (rounding up) is added to your army. Set up that unit wholly within 12" of this general and more than 3" from all enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Always export using tagAs
export default tagAs(CommandTraits, 'command_trait')
