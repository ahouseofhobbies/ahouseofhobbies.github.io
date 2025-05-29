import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ANY_PHASE,
  START_OF_HERO_PHASE,
} from 'types/phases'

const Artifacts = {
  //GUTBUSTERS HERO only.
  'Gruesome Trophies': {
    effects: [
      {
        name: `Gruesome Trophies - Passive`,
        desc: `Effect: Add 1 to hit rolls for combat attacks that target Heroes or Monsters made by friendly Ogor Mawtribes units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Elixir of the Frostwyrm': {
    effects: [
      {
        name: `Elixir of the Frostwyrm - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. Inflict an amount of mortal damage on the target equal to the roll. Then, Heal (X) this unit, where X is an amount equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'The Fang of Ghur': {
    effects: [
      {
        name: `The Fang of Ghur - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Ward rolls cannot be made for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Gutslugger (Big Name)': {
    effects: [
      {
        name: `Gutslugger - Passive`,
        desc: `Effect: Add 1 to hit rolls for this units combat attacks if it did not charge in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mage-Swallower (Big Name)': {
    effects: [
      {
        name: `Mage-Swallower - Passive`,
        desc: `Effect: Subtract 1 from ward rolls for enemy units while they are within 6" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Megagobbler (Big Name)': {
    effects: [
      {
        name: `Megagobbler - Once Per Battle`,
        desc: `Effect: Pick 1 of the following keywords: 
        Infantry  
        Cavalry  
        Monster  
        War Machine  
        Beast 
        For the rest of the battle, each time any damage points are allocated to an enemy unit with that keyword by this units combat attacks and that enemy unit is destroyed in the same turn, add 1 to the Attacks characteristic of this units melee weapons. This effect is cumulative.`,
        when: [DURING_GAME],
      },
    ],
  },
  /*  'Flask of Stonehorn Blood': {
    effects: [
      {
        name: `Flask of Stonehorn Blood`,
        desc: `Once per battle, at the start of a phase, you can say that the bearer will drink this potion. The bearer has a ward of 3+ until the end of that phase.`,
        when: [START_OF_ANY_PHASE],
      },
    ],
  },

  //BEASTCLAW RAIDERS HERO only,
  'Elixir of Frostwyrm': {
    effects: [
      {
        name: `Elixir of Frostwyrm`,
        desc: `Once per battle, in your shooting phase, you can pick 1 enemy unit within 6" of the bearer and roll a dice. On a 2+, that unit suffers D6 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Frost-talon Shardbolts': {
    effects: [
      {
        name: `Frost-talon Shardbolts`,
        desc: `If the unmodified hit roll for an attack made with the bearer's Hunter's Crossbow is 6, that attack causes D3 mortal wounds to the target in addition to any damage it inflicts.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Carvalox Flank': {
    effects: [
      {
        name: `Carvalox Flank`,
        desc: `Friendly ICEFALL YHETEE units wholly within 12" of the bearer at the start of the movement phase can move an extra 2" when they make a normal move during that phase.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'The Seat of Alvagr': {
    effects: [
      {
        name: `The Seat of Alvagr`,
        desc: `Once per battle, in the charge phase, you can carry out a second monstrous rampage with the bearer. The second monstrous rampage cannot be monstrous rampage you have already carried out in that phase.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  // The Roving Maw
  'Flask of Congealed Maw-juices': {
    effects: [
      {
        name: `Flask of Congealed Maw-juices`,
        desc: `Once per battle, at the start of the hero phase, you can pick 1 Mawpit in your army that is within 9" of the bearer and that has been affected by a rule that says you cannot use the scenery rules on its warscroll (such as Smash To Rubble) and roll a dice. On a 2+, that Mawpit is no longer affected by that rule and you can use the scenery rules on its warscroll once more.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
