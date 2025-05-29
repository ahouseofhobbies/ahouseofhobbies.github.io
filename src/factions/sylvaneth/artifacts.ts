import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import {
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const Artifacts = {
  'Greenwood Gladius': {
    effects: [
      {
        name: `Greenwood Gladius`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Seed of Rebirth': {
    effects: [
      {
        name: `Seed of Rebirth - Passive`,
        desc: `Effect: If this unit would be destroyed, before removing it from play, roll a dice. On a 3+, this unit is not destroyed and any remaining damage points inflicted on it have no effect. Then, Heal (1) this unit. This unit cannot use this ability again for the rest of the battle.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Crown of Fell Bowers': {
    effects: [
      {
        name: `Crown of Fell Bowers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On 3+, add 1 to wound rolls for combat attacks made by friendly Sylvaneth units that target that enemy unit this phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Glamourweave: {
    effects: [
      {
        name: `Glamourweave - Passive`,
        desc: `Effect: Each phase, you can reroll 1 hit roll, 1 wound roll and 1 save roll for this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Acorn of the Ages': {
    effects: [
      {
        name: `Acorn of the Ages - Once Per Battle`,
        desc: `Effect: If there are fewer than 3 friendly Awakened Wyldwoods on the battlefield, set up an Awakened Wyldwood wholly within 12" of this unit, more than 3" from all objectives and more than 1" from all enemy units and other terrain features.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ranus Lamentiri': {
    effects: [
      {
        name: `Ranu's Lamentiri - Once Per Turn - Reaction: Opponent declared a Spell ability for a unit within 30" of this unit`,
        desc: `Effect: Make an unbinding roll of 2D6. If the roll exceeds the casting roll for the spell, the spell is unbound and its effect is not resolved. Then, inflict an amount of mortal damage on the caster equal to the difference between the casting roll and the unbinding roll, to a maximum of 6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /*  'Acorn of the Ages': {
    effects: [
      {
        name: `Acorn of the Ages`,
        desc: `Once per battle, if the bearer is on the battlefield, you can set up 1 AWAKENED WYLDWOOD wholly within 12" of the bearer and more than 3" from other models, endless spells, invocations, terrain features and objectives, and add it to your army.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  'The Vesperal Gem': {
    effects: [
      {
        name: `The Vesperal Gem`,
        desc: `Once in each of your hero phases, when the bearer attempts to cast a spell from the Lore of the Deepwood, instead of making a casting roll you can say they are using the Vesperal Gem. If you do so, that spell is automatically cast (do not roll 2D6) and cannot be unbound. After the effect of that spell has been resolved, roll a D6. On a 1, the bearer suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
  "Luneth's Lamp": {
    effects: [
      {
        name: `Luneth's Lamp`,
        desc: `The bearer can attempt to banish 1 invocation in the hero phase even if they are not a PRIEST. In addition, add 2 to dispelling rolls and banishment rolls for the bearer.`,
        when: [HERO_PHASE],
      },
    ],
  },
  // Evergreen Hunt
  'Heartwood Hunting Horn': {
    effects: [
      {
        name: `Heartwood Hunting Horn`,
        desc: `Once per battle, at the start of any battle round, the bearer can say that they will blow their Heartwood Hunting Horn. If they do so, you receive 1 additional Hunting Harmony chord for that battle round.`,
        when: [START_OF_ROUND],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
