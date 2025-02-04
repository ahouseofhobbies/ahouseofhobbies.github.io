import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { CHARGE_PHASE, HERO_PHASE } from 'types/phases'

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
