import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, DURING_GAME, HERO_PHASE, MOVEMENT_PHASE } from 'types/phases'

const KruleboyzSpells = {
  // Lore of the Swamp
  'Lore of the Swamp': {
    effects: [
      {
        name: `Da Black Pit: Casting value of 5 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Kruleboyz Wizard to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Choking Mist: Casting value of 7`,
        desc: `Declare: Pick a friendly Kruleboyz Wizard to cast this spell, pick a visible enemy unit wholly within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: Subtract 1 from the Attacks characteristic of the targets weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mork's Kunnin': Casting value of 6`,
        desc: `Declare: Pick a friendly Kruleboyz Wizard to cast this spell, pick a visible friendly Kruleboyz unit wholly within 12" of them, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, add 1 to save rolls for attacks that target that friendly unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Two Headz As One: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Big Waaagh! Wizard to cast this spell, pick a visible friendly Big Waaagh! Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
            Effect: If the target is an Ironjawz unit, until the start of your next turn, add 3 to the target's control score while it is wholly within 12" of any friendly Kruleboyz units.
            If the target is a Kruleboyz unit, until the start of your next turn, add 2" to the terget's Move characteristic while it is wholly within 12" of any friendly Ironjawz units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Foot of Gork: Casting value of 7`,
        desc: `Declare: If there is not a friendly Foot of Gork on the battlefield, pick a friendly Big Waaagh! Wizard to cast this spell, then make a casting roll of 2D6. 
            Effect: Set up a Foot of Gork wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Foot of Gork - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Foot of Gork - Wandering Destruction - Once Per Turn`,
        desc: `Declare: Pick a part of this Manifestation to be the target.
            Effect: Remove the target from the battlefield and set it up again on the battlefield wholly within 9" of the other part of this Manifestation.
            Then, roll a D3 for each enemy unit within 3" of the target. On a 2+:
            Inflict an amount of mortal damage on that unit equal to the roll.
            That unit has the Stomped keyword until the start of your next turn.
            Subtract 1 from the number of dice rolled when making charge rolls for Stomped units, to a minimum of 1.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Murkvast Menagerie (AoR)': {
    effects: [
      {
        name: `Morkish Mist: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick a friendly Murkvast Menagerie Wizard to cast this spell, pick a visible friendly Murkvast Menagerie Infantry unit wholly within 12" of them to be the target, then make a casting roll of 2D6.
            Effect: Until the start of your next turn, the target has Ward (5+).`,
        when: [HERO_PHASE],
      },
      {
        name: `Summon Foot of Gork: Casting value of 7`,
        desc: `Declare: If there is not a friendly Foot of Gork on the battlefield, pick a friendly Murkvast Menagerie Wizard to cast this spell, then make a casting roll of 2D6. 
            Effect: Set up a Foot of Gork wholly within 12" of the caster, visible to them and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Foot of Gork - Multiple Parts - Passive`,
        desc: `Effect: When a number of damage points equal to this Manifestations Health characteristic are allocated to it, this Manifestation is destroyed and all its parts are removed from play.`,
        when: [DURING_GAME],
      },
      {
        name: `Foot of Gork - Wandering Destruction - Once Per Turn`,
        desc: `Declare: Pick a part of this Manifestation to be the target.
            Effect: Remove the target from the battlefield and set it up again on the battlefield wholly within 9" of the other part of this Manifestation.
            Then, roll a D3 for each enemy unit within 3" of the target. On a 2+:
            Inflict an amount of mortal damage on that unit equal to the roll.
            That unit has the Stomped keyword until the start of your next turn.
            Subtract 1 from the number of dice rolled when making charge rolls for Stomped units, to a minimum of 1.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /* 'Da Black Pit': {
    effects: [
      {
        name: `Da Black Pit`,
        desc: `Casting value of 7 and range of 12". Pick 1 enemy unit within range and visible to the caster. Roll a dice for each model in that unit. For each 6, and for each other roll that is equal to or greater than that unit's Save characteristic, that unit suffers 1 mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Choking Mist': {
    effects: [
      {
        name: `Choking Mist`,
        desc: `Casting value of 7 and range of 24". Pick a point on the battlefield within range and visible to the caster. All units within 6" of that point are affected by choking mist until the start of your next hero phase. While a unit is affected by choking mist, subtract 1 from the Attacks characteristic of melee weapons used by it (to a minimum of 1), and it cannot run.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Sneaky Miasma': {
    effects: [
      {
        name: `Sneaky Miasma`,
        desc: `Casting value of 6 and range of 18". Pick 1 friendly KRULEBOYZ MONSTER within range and visible to the caster. That MONSTER can make a normal move.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Nasty Hex': {
    effects: [
      {
        name: `Nasty Hex`,
        desc: `Casting value of 7 and range of 12". Pick 1 enemy unit within range and visible to the caster. Until the end of your turn, ward rolls cannot be made for models in that unit.`,
        when: [HERO_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(KruleboyzSpells, 'spell')
