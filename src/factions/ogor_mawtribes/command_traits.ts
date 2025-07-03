import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  BATTLESHOCK_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
  START_OF_SETUP,
} from 'types/phases'

const CommandTraits = {
  //Gutbuster Heros
  'Great Gutlord': {
    effects: [
      {
        name: `Great Gutlord - Passive`,
        desc: `Effect: Ignore negative modifiers to this units control score and to hit rolls and wound rolls for this units attacks.`,
        when: [DURING_GAME],
      },
    ],
  },
  /*  Gastromancer: {
    effects: [
      {
        name: `Gastromancer`,
        desc: 'This general knows all of the spells from the Lore of Gutmagic (pg 68) in addition to the other spells it knows. Butcher Only.',
        when: [DURING_GAME],
      },
    ],
  },
  DeadlyAim: {
    effects: [
      {
        name: `Deadly Aim`,
        desc: ' The To Hit characteristic of this units missile weapons is 2+. BLOODPELT HUNTER only.',
        when: [SHOOTING_PHASE],
      },
    ],
  }, */
  'Booming Roar': {
    effects: [
      {
        name: `Booming Roar - Passive`,
        desc: `Effect: Subtract 5 from the control scores of enemy Infantry units while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Touched by the Everwinter': {
    effects: [
      {
        name: `Touched by the Everwinter - Passive`,
        desc: `Effect: If this unit is not a Priest, it has Priest (1). If this unit is already a Priest, you can reroll chanting rolls of 1 for it instead. If this unit is a Wizard, it cannot use Spell abilities and Prayer abilities in the same phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'The Roving Maw (AoR)': {
    effects: [
      {
        name: `Prime Gutserver (AoR) - Once Per Battle Round`,
        desc: `Effect: If this unit is a Head Butcher, gain 1 tasty morsel.`,
        when: [START_OF_ROUND],
      },
    ],
  },

  //BEASTCLAW RAIDERS HERO only.
  /*'Voice of the Avalanche': {
    effects: [
      {
        name: `Voice of the Avalanche`,
        desc: `This general can issue commands to any friendly units on the battlefield instead of only those wholly within 18* of them. In addition, once per battle, this general can issue a command without a command point being spent.`,
        when: [DURING_GAME],
      },
    ],
  },
  Beastmaster: {
    effects: [
      {
        name: `Beastmaster`,
        desc: `Once per battle, when this general is picked to fight, you can say that they will dig in their heels. If you do so, until the end of that phase, use the top row on this general's damage table, regardless of how many wounds they have suffered. STONEHORN HERO OF THUNDERTUSK HERO only.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Touched by the Everwinter': {
    effects: [
      {
        name: `Touched by the Everwinter`,
        desc: `This general has the PRIEST keyword. If this general is already a PRIEST, they know all of the prayers from the Everwinter Prayers prayer scripture in addition to the other prayers they know.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Skal Packmaster': {
    effects: [
      {
        name: `Skal Packmaster`,
        desc: `When you use this general's Masters of Ambush ability, up to 3 FROST SABRES units can join this general in ambush instead of 1. ICEBROW HUNTER only.`,
        when: [DURING_SETUP],
      },
    ],
  },
  // The Roving Maw
  'Prime Gutserver': {
    effects: [
      {
        name: `Prime Gutserver`,
        desc: `This general knows all of the spells from the Lore of the Great Maw in addition to any other spells they know.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(CommandTraits, 'command_trait')
